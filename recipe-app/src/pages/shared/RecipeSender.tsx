import React, { useState } from 'react'
import { db } from '../../config/firebase'
import firebase from "firebase"
import "./styles/recipe.css"
import Header from './header'


function RecipeSender() {


    const [input, setInput] = useState("")

    const [kcal, setKcal] = useState("")

    const [imageUrl, setImageUrl] = useState("")

    const [label, setLabel] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault();

        db.collection("recipes").add({
            image: imageUrl,
            ingredient: input,
            title: label,
            calories: kcal,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
        setImageUrl("")
        setLabel("")
        setKcal("")
    }

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="form__container">
                    <div className="form__container--title">
                        <h1>Add my Recipe</h1>
                    </div>

                    <div className="form">
                        <div>
                            <input
                                className="form__textinput"
                                placeholder="Enter your Recipe name"
                                type="text"
                                required
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                        </div>

                        <div>
                            <textarea
                                className="form__textinput"
                                placeholder="write down the ingridients"
                                required
                                rows={5}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder={"image URL"}
                                className="form__textinput"
                            />
                        </div>

                        <button
                            type="submit"
                            className="post__recipebutton"
                            onClick={handleSubmit}
                        >
                            Done
                    </button>

                    </div>




                </div>
            </div>
        </>
    )
}


export default RecipeSender