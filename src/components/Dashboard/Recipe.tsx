import React from 'react'
import firebase from 'firebase';

export default function Recipe({recipe}: any) {

  const deleteRecipe = () => {
    const recipeRef = firebase.database().ref("CustomRecipes").child(recipe.id)
    recipeRef.remove();
  }

  const updateRecipe = () => {
    // const recipeRef = firebase.database().ref("CustomRecipe").child(recipe.id)
    // recipeRef.update({
    //   complete: !recipe.complete,
    // })
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <button onClick={deleteRecipe}>Delete</button>
      <button onClick={updateRecipe}>Update</button>
      <button>Share</button>
    </div>
  )
}
