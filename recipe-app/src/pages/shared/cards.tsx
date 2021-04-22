import React, { useState, useEffect } from 'react'
import './styles/cards.css'


export const RecipeCard = (props: any) => {

    return (
        <div className="recipe__container">
            {props.recipeData.map((recipeData: any) => (
                <div className="card__style">
                    <img className="recipe__image" src={recipeData.recipe.image} alt="" />
                    <div className="recipe__text">
                        <h1 className="heading">{recipeData.recipe.label}</h1>
                        <h2 className="subheading">Ingredients</h2>
                        <ol>
                            {recipeData.recipe.ingredientLines.map((ingredients: any) => (
                                <li>{ingredients}</li>
                            ))}
                        </ol>
                        <p className="cal__style">
                            Total Energy {Math.round(recipeData.recipe.calories)} kcal
                          </p>
                    </div>
                </div>
            ))}

        </div>
    )
}


            // <div className="contain">
            //     <img className="image" src={Bread} alt="" />
            //     <div className="textarea">
            //         <h2> Garlic Bread</h2>
            //         <p>By Serious Eats</p>
            //         <span className="healthdata">4 Ingredients</span>
            //         <span className="healthdata">776 kcal</span>

            //         <div className="icon">
            //             <div className="cardsaveandshare">
            //                 <SaveIcon fontSize="large" />
            //             </div>
            //             <div className="cardsaveandshare">
            //                 <ShareIcon fontSize="large" />
            //             </div>
            //         </div>
            //     </div>

            // </div>