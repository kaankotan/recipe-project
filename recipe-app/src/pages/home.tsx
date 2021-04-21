import React from 'react'
import { useState } from 'react'
import IPageProps from '../interfaces/page'
import { RecipeCard } from './shared/cards'
import Header from './shared/header'

const HomePage: React.FunctionComponent<IPageProps> = props => {

    const [recipes, setrecipes] = useState([])

    return (
        <div className="container">
            <Header name="header" />
            <RecipeCard />
        </div>
    );
}


export default HomePage;