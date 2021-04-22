import React, {MutableRefObject, useEffect, useRef} from 'react';
import {Dropdown} from "react-bootstrap";
import {Food, ingredients} from "../../utils/FoodFactory";
import {useDispatch} from "react-redux";

export default function IngredientDropdown() {

  const ingredientsListRef = useRef() as MutableRefObject<HTMLButtonElement>

  const reduxDispatch = useDispatch()

  function addRecipeToRedux(food: Food) {
    reduxDispatch({type: 'ADD_INGREDIENT', payload: food})
  }

  return (
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
  )
}