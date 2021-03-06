import React from 'react';

import './app-style.css'

export default function RecipesTile({recipe}) {
    return (
        <div className="recipeTile" onClick={()=>{window.open(recipe["recipe"]["url"])}}>
            <img className="recipeTile__img" src={recipe["recipe"]["image"]}/>
            <p className="recipeTile__name ">{recipe["recipe"]["label"]}</p>
        </div>
    )
}
