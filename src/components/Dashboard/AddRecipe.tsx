import React, {FormEvent, MutableRefObject, useRef, useState, useEffect} from 'react'
import {Form, Button, Card, Alert, Dropdown} from 'react-bootstrap'
import {useAuthenticationContext} from '../../contexts/AuthenticationContext'
import firebase from 'firebase';
import { ingredients, Food  } from "../../utils/FoodFactory";
import Ingredient from "./Ingredient";
import {RecipeType, CustomIngredientState, CustomRecipeType} from '../../types';
import {current} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux'
import IngredientDropdown from "./IngredientDropdown";
// @ts-ignore
import {Link, useHistory} from 'react-router-dom'

export default function Login() {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>
  const methodRef = useRef() as MutableRefObject<HTMLInputElement>
  const reduxDispatch = useDispatch()
  const recipeIngredientsRedux = useSelector<any, Food[]> (state => state.recipeReducer.customIngredients)
  const {currentUser} = useAuthenticationContext()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    reduxDispatch({type: "RESET_INGREDIENTS"})
  }, [])

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
      reduxDispatch({type: "RESET_INGREDIENTS"})
      history.push("/")
    } catch(e) {
      setError(e)
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
            <IngredientDropdown />
            <Form.Group id="method">
              <Form.Label>Method</Form.Label>
              <Form.Control type="method" ref={methodRef} required/>
            </Form.Group>
            {recipeIngredientsRedux && recipeIngredientsRedux.map((recipeIngredient, index) => {
              return (<Ingredient someIndex={index} ingredient={recipeIngredient} key={`${recipeIngredient.name}_${index}`} />)
            })}
            <Button disabled={loading} className="w-100 shadow btn btn-success" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
