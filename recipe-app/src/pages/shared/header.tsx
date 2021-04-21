import React, { useState } from 'react'
import IPageProps from "../../interfaces/page";
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Axios from "axios"
import { Link } from "react-router-dom"
import { useStateValue } from '../../StateProvider'
import { auth } from '../../config/firebase'
import './header.css'
import logo from '../../assets/food.svg'
import { RecipeCard } from './cards';




const Header: React.FC<IPageProps> = props => {

    const [query, setQuery] = useState("");
    const [recipes, setrecipes] = useState([])
    const [{ user }, dispatch] = useStateValue()




    var url = `https://api.edamam.com/search?q=${query}app_id=5b1fa91c&app_key=650369383b992b578f0dc4741524dfe7`


    async function getRecipes() {
        var result = await Axios.get(url);
        setrecipes(result.data.hits)
        console.log(result.data);

    }

    const onSearchSubmit = (e: any) => {
        e.preventDefault();
        getRecipes()
    }

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const isUser: any = !user


    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img src={logo} alt="" />
                </div>

                <div className="header__center">
                    <div className="header__input">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <form>
                            <input type="text" onChange={(e) => setQuery(e.target.value)} />
                            <button type="submit" onClick={onSearchSubmit}></button>
                        </form>
                    </div>
                </div>

                <div className="header__right">

                    <div className="header__info">
                        <Link to={isUser && "/login"}>
                            <div className="header__option" onClick={handleAuthentication}>
                                <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                                <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Header