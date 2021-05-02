import React, {FormEvent, useEffect, useState} from 'react';
import IngredientDropdown from "./IngredientDropdown";
import {useDispatch, useSelector} from "react-redux";
import Ingredient from "./Ingredient";
import {Food, ingredients} from "../../utils/FoodFactory";
import {Alert, Button, Card} from "react-bootstrap";
import firebase from "firebase";
import {CustomRecipeType} from "../../types";
// @ts-ignore
import {Link, useHistory} from 'react-router-dom'
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";

export default function AddInventory() {

  const history = useHistory()
  const {currentUser} = useAuthenticationContext()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const reduxDispatch = useDispatch()
  const recipeIngredientsRedux = useSelector<any, Food[]>(state => state.recipeReducer.customIngredients)

  useEffect(() => {
    reduxDispatch({type: "RESET_INGREDIENTS"})
    const inventoryRef = firebase.database().ref(`Inventories/${currentUser.uid}/Inventory`);
    inventoryRef.on("value", (snapshot) => {
      const inventory = snapshot.val()
      for (let id in inventory) {
        if (inventory[id] !== null && inventory[id] !== undefined) {
          inventory[id].forEach((element: any) => {
            reduxDispatch({type: 'ADD_INGREDIENT', payload: element})
          })
        }
      }
    })
  }, [])

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()
    setLoading(true)
    const invetoryRef = firebase.database().ref(`Inventories/${currentUser.uid}/Inventory`)
    const inventoryIngredient = {
      ingredients: recipeIngredientsRedux,
    }
    try {
      await invetoryRef.set(inventoryIngredient)
      reduxDispatch({type: "RESET_INGREDIENTS"})
      history.push("/")
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  return (
    <div>
      <h2 className="text-center mb-3">Enter Inventory</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <IngredientDropdown/>
      {recipeIngredientsRedux && recipeIngredientsRedux.map((recipeIngredient, index) => {
        return (<Ingredient someIndex={index} ingredient={recipeIngredient} key={`${recipeIngredient.name}_${index}`}/>)
      })}
      <Button disabled={loading} className="w-100" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}