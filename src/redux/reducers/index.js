import { combineReducers } from 'redux'
import { numberReducer } from './numberReducer'
import { ingredientReducer } from './ingredientReducer'
import { shopReducer } from "./shopReducer";

export default combineReducers({
    numberReducer,
    recipeReducer: ingredientReducer,
    shopReducer
})