import React from 'react'
import Link from 'react-router-dom'
import IPageProps from '../interfaces/page'
import Header from './shared/header'

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div className="container">
            <Header name="header" />
        </div>
    );
}


export default HomePage;