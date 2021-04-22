import React from 'react'
import firebase from 'firebase';
import {useAuth} from "../../../contexts/AuthContext";
import { Card, Button } from 'react-bootstrap';

export default function Recipe({recipe, selected}: any) {

  console.log(recipe.ingredients);

  const {currentUser} = useAuth()
  console.log(selected)

  return (
    <div className="mb-2">
      <Card className="mb-2" style={{ width: '18rem' }}>
        {selected && <div style={{height: "25px", backgroundColor: "green"}}></div>}
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
        </Card.Body>
      </Card>
    </div>
  )
}
