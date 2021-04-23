import {Food} from "../utils/FoodFactory";

export interface NumberState {
    someNumber: number
}

export interface CustomIngredientState {
    customIngredients: Food[]
}

export interface RecipeType {
    name: string,
    ingredients: string,
    method: string
}

export interface CustomRecipeType {
    name: string,
    ingredients: Food[],
    method: string
}