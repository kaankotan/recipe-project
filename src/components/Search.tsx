import Axios from "axios";
import React, {FormEvent, MutableRefObject, useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'
import './app-style.css'
import './RecipesTile'
import RecipesTile from "./RecipesTile";


  function Search() {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([])
    
  
    var url = 'https://api.edamam.com/search?q=chicken&app_id=5b1fa91c&app_key=650369383b992b578f0dc4741524dfe7&health=alcohol-free'
  
    async function getRecipes(){
      var result = await Axios.get(url);
      setrecipes(result.data.hits)
      console.log(result.data);
  
    }
  
    const onSubmit = (e: any) =>{
      e.preventDefault();
      getRecipes();
    };
  
    return (
        <div className="app__name">
        <h2 className="text-center mb-3">Food Recipes</h2>
        <form className="app__serachForm text-center mt-2" onSubmit={onSubmit}>
          <input type="text"
            className="app__input text-center mt-2"
            placeholder="enter engridient"
            value={query} onChange={(e) => setquery(e.target.value)}/>
          <input className="app__submit text-center mt-2 shadow" type="submit" value="Search" />
        </form>
        
        <div className="app__recipes">
          {recipes.map(recipe =>{
            return <RecipesTile recipe={recipe}/>;
          })}
        </div>
          
      </div>
    );
  }
  
  export default Search;
  