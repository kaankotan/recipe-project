import React, { useState, useEffect } from 'react'
import IPageProps from "../../interfaces/page";
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Axios from "axios"
import { Link } from "react-router-dom"



const Header: React.FC<IPageProps> = props => {

    const [query, setQuery] = useState("");
    const [recipes, setrecipes] = useState([])


    var url = `https://api.edamam.com/search?q=${query}app_id=5b1fa91c&app_key=650369383b992b578f0dc4741524dfe7&health=alcohol-free`


    async function getRecipes() {
        var result = await Axios.get(url);
        setrecipes(result.data.hits)
        console.log(result.data);

    }

    const onSearchSubmit = (e: any) => {
        e.preventDefault();
        getRecipes()
    }



    return (
        <div className="wrapper">
            <div className="logowrapper">
                <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585714 14.8353C2.7544 6.11865 10.5819 0 19.5643 0C28.5467 0 36.3742 6.11865 38.5429 14.8353H36.8286C33.9367 14.7927 31.1041 15.657 28.7286 17.3067C28.5915 17.406 28.4483 17.4967 28.3 17.5782H28.1C27.9517 17.4967 27.8085 17.406 27.6714 17.3067C22.7693 14.0103 16.3593 14.0103 11.4571 17.3067C11.32 17.406 11.1769 17.4967 11.0286 17.5782H10.8286C10.6802 17.4967 10.5371 17.406 10.4 17.3067C8.02447 15.657 5.19188 14.7927 2.3 14.8353H0.585714ZM33.7429 23.7925C34.6229 23.1071 35.7136 22.7486 36.8286 22.7782H39.1286V18.1925H36.8286C34.8646 18.1687 32.9455 18.78 31.3571 19.9353C29.5224 21.288 27.0205 21.288 25.1857 19.9353C21.85 17.6133 17.4214 17.6133 14.0857 19.9353C12.2509 21.288 9.74907 21.288 7.91429 19.9353C6.30628 18.7652 4.35971 18.1531 2.37143 18.1925H0V22.7782H2.3C3.41501 22.7486 4.5057 23.1071 5.38571 23.7925C8.71563 26.1162 13.1415 26.1162 16.4714 23.7925C17.3526 23.1092 18.4425 22.751 19.5571 22.7782C20.6725 22.7462 21.764 23.105 22.6429 23.7925C25.9785 26.1145 30.4072 26.1145 33.7429 23.7925ZM36.8286 30.9782C35.7136 30.9486 34.6229 31.3071 33.7429 31.9925C30.4072 34.3145 25.9785 34.3145 22.6429 31.9925C21.764 31.305 20.6725 30.9462 19.5571 30.9782C18.4425 30.951 17.3526 31.3092 16.4714 31.9925C13.1415 34.3162 8.71563 34.3162 5.38571 31.9925C4.5057 31.3071 3.41501 30.9486 2.3 30.9782H0V26.3925H2.37143C4.35971 26.3531 6.30628 26.9652 7.91429 28.1353C9.74907 29.488 12.2509 29.488 14.0857 28.1353C17.4214 25.8133 21.85 25.8133 25.1857 28.1353C27.0205 29.488 29.5224 29.488 31.3571 28.1353C32.9455 26.98 34.8646 26.3687 36.8286 26.3925H39.1286V30.9782H36.8286Z" fill="#D80337" />
                </svg>
            </div>

            <div className="searchwrapper">
                <div className="searchwrapper__bar">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setQuery(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </div>
            </div>


            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">Hello{!user ? "Guest" : user.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}


export default Header