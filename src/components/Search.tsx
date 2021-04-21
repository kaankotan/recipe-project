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
    const [healthLabel, sethealthLabel] = useState("vegan")
    
  
    var url = `https://api.edamam.com/search?q=${query}&app_id=5b1fa91c&app_key=650369383b992b578f0dc4741524dfe7&health=${healthLabel}`

  
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
          <select className="app_healthLabels">
            <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
            <option onClick={() => sethealthLabel("vegetarian")}>Vegetarian</option>
            <option onClick={() => sethealthLabel("paleo")}>Paleo</option>
            <option onClick={() => sethealthLabel("dairy-free")}>Dairy-Free</option>
            <option onClick={() => sethealthLabel("gluten-free")}>Gluten-Free</option>
            <option onClick={() => sethealthLabel("wheat-free")}>Wheat-Free</option>
            <option onClick={() => sethealthLabel("low-sugar")}>Low-Sugar</option>
            <option onClick={() => sethealthLabel("egg-free")}>Egg-Free</option>
            <option onClick={() => sethealthLabel("peanut-free")}>Peanut-Free</option>
            <option onClick={() => sethealthLabel("tree-nut-free")}>Tree-Nut-Free</option>
            <option onClick={() => sethealthLabel("soy-free")}>Soy-Free</option>
            <option onClick={() => sethealthLabel("fish-free")}>Fish-Free</option>
            <option onClick={() => sethealthLabel("shelfish-free")}>Shelfish-Free</option>
          </select>
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
  