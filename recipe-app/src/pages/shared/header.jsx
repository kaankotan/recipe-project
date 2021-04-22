import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { useHistory, Link } from "react-router-dom"
import { useStateValue } from '../../StateProvider'
import { auth } from '../../config/firebase'
import './styles/header.css'
import logo from '../../assets/food.svg'
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import StorefrontIcon from '@material-ui/icons/Storefront'
import KitchenIcon from '@material-ui/icons/Kitchen';


const Header = props => {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue()


    const AddRecipe = () => {
        history.push('/new-recipe')
    }


    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const isUser = !user


    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img src={logo} alt="" />
                </div>


                <div className="header__center">
                    <div className="header__option">
                        <IconButton
                            onClick={AddRecipe}
                        >
                            <LocalPharmacyIcon fontSize="large" />
                        </IconButton>
                    </div>

                    <div className="header__option">
                        <StorefrontIcon fontSize="large" />
                    </div>

                    <div className="header__option">
                        <KitchenIcon onClick={AddRecipe} fontSize="large" />
                    </div>

                    <div className="header__option">
                        <SubscriptionsIcon fontSize="large" />
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