import React from "react"
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard"
import Login from './Login'
import Search from './Search'
import AddRecipe from './AddRecipe'
import { useSelector, useDispatch } from 'react-redux'
import './app-style.css';
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import CustomNavbar from './CustomNavbar';

function App() {
  return (
      <div>
        <CustomNavbar />
        <Container className="d-flex align-items-center justify-content-center"
                   style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/add-recipe" component={AddRecipe} />
                  <Route path="/search" component={Search} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      </div>
  )
}

export default App;
