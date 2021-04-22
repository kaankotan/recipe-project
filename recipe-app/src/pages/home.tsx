import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import IPageProps from '../interfaces/page'
import { RecipeCard } from './shared/cards'
import Header from './shared/header'
import './shared/styles/home.css'


const HomePage: React.FunctionComponent<IPageProps> = props => {

    const APP_ID = "5b1fa91c"
    const APP_KEY = "650369383b992b578f0dc4741524dfe7"

    const history = useHistory();

    const [query, setQuery] = useState("orange");
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        const getRecipe = async () => {
            const res = await fetch(
                `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            )
            const data = await res.json()
            setRecipes(data.hits)
        };
        getRecipe()
    }, [query])


    const updateSearch = (e: any) => {
        setSearch(e.target.value);
    }

    const getSearch = (e: any) => {
        e.preventDefault()
        setQuery(search);
        setSearch(search)
    }


    return (
        <div className="container">
            <Header name="header" />
            <div className="recipe__category">
                <div className="recipe__banner">
                    <h2>Search through millions of recipes</h2>
                    <div className="input__wrapper">
                        <form>
                            <input
                                className="input__wrapper--input"
                                type="text"
                                value={search}
                                onChange={updateSearch}
                                placeholder="Recipe search..."
                            />
                            <button
                                type="submit"
                                onClick={getSearch}
                                className="btns"
                            >
                            </button>
                        </form>

                    </div>
                </div>
            </div>
            <RecipeCard recipeData={recipes} />
        </div>
    );
}


export default HomePage;