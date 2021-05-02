import React from "react"
import {Container} from "react-bootstrap";
import AuthenticationContextProvider from "../contexts/AuthenticationContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard/Dashboard"
import Login from './Login'
import Search from './Search'
import AddRecipe from './Dashboard/AddRecipe'
import UpdateProfile from "./Dashboard/UpdateProfile";
import ForgotPassword from './ForgotPassword'
import {useSelector, useDispatch} from 'react-redux'
import './app-style.css';
// @ts-ignore
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SpecialRoute from './SpecialRoute'
import CustomNavbar from './CustomNavbar';
import AddInventory from "./Dashboard/AddInventory";
import Inventory from "./Dashboard/Inventory";
import ShoppingList from "./Dashboard/Shopping/ShoppingList";

function App() {
  return (
    <div>
      <Router>
        <CustomNavbar />
        <Container className="mt-5 d-flex align-items-center justify-content-center"
                   style={{minHeight: "100vh"}}
        >
          <div className="w-100">
            <AuthenticationContextProvider>
              <Switch>
                <SpecialRoute exact path="/" component={Dashboard} />
                <SpecialRoute path="/update-profile" component={UpdateProfile} />
                <SpecialRoute path="/add-recipe" component={AddRecipe} />
                <SpecialRoute path="/add-inventory" component={AddInventory} />
                <SpecialRoute path="/shopping-list" component={ShoppingList} />
                <Route path="/search" component={Search}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
              </Switch>
            </AuthenticationContextProvider>
          </div>
        </Container>
      </Router>
    </div>
  )
}

export default App;
