import React, { useState, useEffect } from 'react'
import spoontacular from '../../../api/spoontacular'


const [recipe, setRecipe] = useState([])

export const getRecipes = (term: any) => {
    return spoontacular.get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
            query: term
        }
    })
}


export const onSearchSubmit = (term: any) => {
    console.log('on search', term)
    getRecipes(term).then((res) => {
        let results = res.data.results

        let setRecipe = [
            ...results,
            ...recipe,
        ]
    })
}

