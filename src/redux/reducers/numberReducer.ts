import { NumberState } from "../../types";

const initialState: NumberState = {
    someNumber: 0
}

export function numberReducer(state: NumberState = initialState, action: any): NumberState {
    switch(action.type) {
        case "INCREMENT": {
            return {...state, someNumber: state.someNumber + 1}
        }
        case "DECREMENT": {
            return {...state, someNumber: state.someNumber - 1}
        }
        default:
            return state
    }
}