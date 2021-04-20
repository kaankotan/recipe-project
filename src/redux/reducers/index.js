import { combineReducers } from 'redux'
import { numberReducer } from './numberReducer'
import { recipeReducer } from './recipeReducer'

export default combineReducers({
    numberReducer,
    recipeReducer
})