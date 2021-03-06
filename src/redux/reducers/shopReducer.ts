import { CustomIngredientState } from '../../types'
import { Food } from '../../utils/FoodFactory'
const initialState = {
  selectedRecipe: null
}

export function shopReducer(state = initialState, action: any): any {

  switch(action.type) {
    case "SELECT_RECIPE": {
      return {
        selectedRecipe: action.id
      }
    }
    default:
      return state
  }
}