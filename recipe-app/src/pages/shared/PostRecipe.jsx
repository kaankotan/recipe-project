import React, { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import Header from './header';
import RecipeSender from './RecipeSender';


function PostRecipe() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        db.collection("recipes").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setRecipes(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        );
    }, [])

    return (
        <div className="feed">
            <Header />

            {recipes.map((recipe) => (
                <RecipeSender
                    key={recipe.data.id}
                    label={recipe.data.label}
                    Ingredients={recipe.data.Ingridients}
                    image={recipe.data.image}
                    calories={recipe.data.calories}
                    timestamp={recipe.data.timestamp}

                />
            ))}
        </div>
    )
}

export default PostRecipe