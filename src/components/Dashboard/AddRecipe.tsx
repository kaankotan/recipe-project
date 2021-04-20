import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import {Form, Button, Card, Alert, Dropdown} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import firebase from 'firebase';
import { ingredients, Food  } from "../../utils/FoodFactory";
import Ingredient from "./Ingredient";
// @ts-ignore
import {Link, useHistory} from 'react-router-dom'
import {RecipeType, CustomRecipeState, CustomRecipeType} from '../../types';
import {current} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux'

export default function Login() {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>
  const methodRef = useRef() as MutableRefObject<HTMLInputElement>
  const ingredientsListRef = useRef() as MutableRefObject<HTMLButtonElement>

  const recipeIngredientsRedux = useSelector<any, Food[]> (state => state.recipeReducer.customRecipes)
  const reduxDispatch = useDispatch()

  function addRecipeToRedux(food: Food) {
    reduxDispatch({type: 'ADD_RECIPE', payload: food})
  }

  const {currentUser} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()
    setLoading(true)
    const customRecipesRef = firebase.database().ref(`CustomRecipes/${currentUser.uid}/Recipes`)
    const customRecipe: CustomRecipeType = {
      name: nameRef.current.value,
      ingredients: recipeIngredientsRedux,
      method: methodRef.current.value
    }
    try {
      await customRecipesRef.push(customRecipe)
      history.push("/")
    } catch {
      setError('Failed to submit')
    }
    setLoading(false)
  }

  return (
    <div style={{maxWidth: "1200px"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">Enter New Recipe</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required/>
            </Form.Group>
            <Dropdown className="my-2">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100" ref={ingredientsListRef}>
                Add Ingredient
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                {ingredients.map((ingredient) => {
                  return (<Dropdown.Item onClick={function(){addRecipeToRedux(ingredient)}} key={ingredient.name}>{ingredient.name}</Dropdown.Item>)
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Group id="method">
              <Form.Label>Method</Form.Label>
              <Form.Control type="method" ref={methodRef} required/>
            </Form.Group>
            {recipeIngredientsRedux && recipeIngredientsRedux.map((recipeIngredient, index) => {
              return (<Ingredient someIndex={index} ingredient={recipeIngredient} key={`${recipeIngredient.name}_${index}`} />)
            })}
            <Button disabled={loading} className="w-100" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
