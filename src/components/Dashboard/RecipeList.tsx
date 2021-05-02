import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import Recipe from './Recipe';
import {useAuthenticationContext} from '../../contexts/AuthenticationContext'

export default function RecipeList() {
  const [recipeList, setRecipeList] = useState<any[]>();
  const {currentUser} = useAuthenticationContext()

  // [] at the end means work only for once at initial render.
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
  },[])
  return (
    <div>
      {recipeList?.map((recipe, index) => (
        <Recipe recipe={recipe} key={index}/>
      ))}
    </div>
  )
}
