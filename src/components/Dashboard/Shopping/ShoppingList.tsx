import React, {useEffect, useState} from 'react';
import { Food } from '../../../utils/FoodFactory';
import { useSelector, useDispatch } from 'react-redux';
import firebase from "firebase";
import {useAuth} from "../../../contexts/AuthContext";
import Recipe from './Recipe';
import { Card } from 'react-bootstrap';

export default function ShoppingList() {

  const [recipeList, setRecipeList] = useState<any[]>();
  const [inventory, setInventory] = useState<any[]>();
  const [shoppingList, setShoppingList] = useState<any[]>();
  const [selectedRecipe, setSelectedRecipe] = useState<number>();
  const {currentUser} = useAuth()
  const reduxDispatch = useDispatch()

  useEffect(() => {
    const recipeRef = firebase.database().ref(`CustomRecipes/${currentUser.uid}/Recipes`);
    recipeRef.on("value", (snapshot) => {
      const recipes = snapshot.val();
      const recipeList = [];
      for (let id in recipes) {
        recipeList.push({ id,...recipes[id] })
      }
      setRecipeList(recipeList);
    })

    const inventoryRef = firebase.database().ref(`Inventories/${currentUser.uid}/Inventory`);
    inventoryRef.on("value", (snapshot) => {
      const ingredients = snapshot.val();
      const inventory = [];
      for (let id in ingredients) {
        inventory.push(ingredients[id])
      }
      setInventory(inventory);
    })

  },[])

  function clickHandler(index: any) {
    setSelectedRecipe(index);
  }

  function checkMissingIngredients() {
    let resultArray: { name: any; amount: any; amountType: any; }[] = [];
    if (recipeList !== undefined) {
      if(selectedRecipe !== undefined) {
        recipeList[selectedRecipe].ingredients.map((element: any, index: any) => {
          if (inventory) {
            const inventoryArray = inventory[0]
            const relativeIndex = inventoryArray.findIndex((inventoryElement: any ) => inventoryElement.name === element.name )
            if(relativeIndex > -1) {
              if(inventoryArray[relativeIndex].amount < element.amount) {
                resultArray.push({
                  name: inventoryArray[relativeIndex].name,
                  amount: element.amount - inventoryArray[relativeIndex].amount,
                  amountType: element.amountType
                })
              }
            } else {
              resultArray.push({
                name: element.name,
                amount: element.amount,
                amountType: element.amountType
              })
            }
          }
        })
      }
    }
    setShoppingList(resultArray)
  }

  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <h5>Recipes</h5>
          {recipeList !== undefined && recipeList.map((recipe: any, index: any) => {
            return (
              <div onClick={function (){clickHandler(index)}} style={{cursor: 'pointer'}}>
                <Recipe recipe={recipe} selected={selectedRecipe === index} key={`${recipe.name}_${index}`}/>
              </div>
            )
          })}
        </div>
        <div>
          <h5>Inventory</h5>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              {inventory && inventory[0].map((element: any, index: any) => {
                return (
                  <div key={`${element.name}_${index}`}>
                    <span>{element.name}: </span>
                    <span>{element.amount} </span>
                    <span>{element.amountType}</span>
                  </div>
                )
              })}
            </Card.Body>
          </Card>
          { selectedRecipe !== undefined && inventory ? <button className="btn btn-danger mt-4 mb-2" onClick={checkMissingIngredients}>Check missing ingredients</button>: null }
          <Card className="mt-2" style={{ width: '18rem' }}>
            <Card.Body>
              <h5>Shopping List</h5>
              {shoppingList && shoppingList.map((element: any, index: any) => {
                return (
                  <div key={`${element.name}_${index}`}>
                    <span>{element.name}: </span>
                    <span>{element.amount} </span>
                    <span>{element.amountType}</span>
                  </div>
                )
              })}
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>

  )
}