import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUri } from '../../util/getUri'
import { LazyImage } from './LazyImage'
import SaveIcon from '@material-ui/icons/Save';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Bread from '../../assets/bread.jpg'
import ShareIcon from '@material-ui/icons/Share';
import './cards.css'


const API_URL = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

export const RecipeCard = ({
}: any) => {


    const [recipe, setRecipe] = useState(undefined)

    useEffect(async () => {
        const res = await fetch(API_URL);
        const getRecipe = await res.json()

        setRecipe(getRecipe)
    }, [])

    if (!recipe) return null;

    return (
        <div className="wrap">
            <div className="contain">
                <img className="image" src={Bread} alt="" />
                <div className="textarea">
                    <h2> Garlic Bread</h2>
                    <p>By Serious Eats</p>
                    <span className="healthdata">4 Ingredients</span>
                    <span className="healthdata">776 kcal</span>

                    <div className="icon">
                        <div className="cardsaveandshare">
                            <SaveIcon fontSize="large" />
                        </div>
                        <div className="cardsaveandshare">
                            <ShareIcon fontSize="large" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}