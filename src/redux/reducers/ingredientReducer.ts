import { CustomIngredientState } from '../../types'
import { Food } from '../../utils/FoodFactory'
const initialState: CustomIngredientState = {
  customIngredients: [] as Food[]
}

export function ingredientReducer(state: CustomIngredientState = initialState, action: any): any {

  console.log(action.type);
  switch(action.type) {
    case "ADD_INGREDIENT": {
      let valid = true
      if(!!state.customIngredients) {
        state.customIngredients.map((element, index) => {
          if (element.name === action.payload.name) {
            valid = false
          }
        })
      }
      if (valid) {
        return {
          customIngredients: [...state.customIngredients, action.payload]
        }
      } else {
        return {
          customIngredients: [...state.customIngredients]
        }
      }

    }
    case "UPDATE_VARIATION": {
      const updated = state.customIngredients.map((item, index): Food => {
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
        customIngredients: updated
      }
    }
    case "UPDATE_AMOUNT": {
      const updated = state.customIngredients.map((item, index): Food => {
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
        customIngredients: updated
      }
    }
    case "RESET_INGREDIENTS": {
      console.log('reset');
      return initialState
    }
    default:
      return state
  }
}