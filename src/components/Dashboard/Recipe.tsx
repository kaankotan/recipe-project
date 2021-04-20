import React from 'react'
import firebase from 'firebase';
import '../app-style.css'

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
      <button className="app__submit" onClick={deleteRecipe}>Delete</button>
      <button className="app__submit" onClick={updateRecipe}>Update</button>
      <button className="app__submit" >Share</button>
    </div>
  )
}
