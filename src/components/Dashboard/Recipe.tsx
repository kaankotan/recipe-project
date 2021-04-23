import React from 'react'
import firebase from 'firebase';
import {useAuth} from "../../contexts/AuthContext";
import { Card, Button } from 'react-bootstrap';

export default function Recipe({recipe}: any) {

  const {currentUser} = useAuth()

  const deleteRecipe = () => {
    const recipeRef = firebase.database().ref(`CustomRecipes/${currentUser.uid}/Recipes`).child(recipe.id)
    recipeRef.remove()
  }

  const updateRecipe = () => {
    // const recipeRef = firebase.database().ref("CustomRecipe").child(recipe.id)
    // recipeRef.update({
    //   complete: !recipe.complete,
    // })
  }

  return (
    <div className="mb-2">
      <Card className="mb-2" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Recipe: {recipe.name}</Card.Title>
          <Card.Body>
            <h5>Ingredients</h5>
            {!!recipe.ingredients ? recipe.ingredients.map((element: any) => {
              return <p><span>{element.name}: </span><span>{element.amount} </span><span>{element.amountType}</span></p>
            }) : null}
          </Card.Body>
          <Card.Body>
            <h5>Method</h5>
            {recipe.method}
          </Card.Body>
          <Button onClick={deleteRecipe}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
