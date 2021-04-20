import { CustomRecipeState } from '../../types'
import { Food } from '../../utils/FoodFactory'
const initialState: CustomRecipeState = {
  customRecipes: [] as Food[]
}

export function recipeReducer(state: CustomRecipeState = initialState, action: any): any {
  switch(action.type) {
    case "ADD_RECIPE": {
      return {
        customRecipes: [...state.customRecipes, action.payload]
      }
    }
    case "UPDATE_VARIATION": {
      const blah = state.customRecipes.map((item, index): Food => {
        if (index !== action.index) {
          return item
        } else {
          return {
            ...item,
            selectedVariation: item.variations![action.variationIndex]
          }
        }
      })
      return {
        customRecipes: blah
      }
    }
    case "UPDATE_AMOUNT": {
      const blah = state.customRecipes.map((item, index): Food => {
        if (index !== action.index) {
          return item
        } else {
          return {
            ...item,
            amount: action.amount
          }
        }
      })
      return {
        customRecipes: blah
      }
    }
    default:
      return state
  }
}