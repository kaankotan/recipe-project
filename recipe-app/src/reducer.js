export const initialState = {
    user: null,
    recipe: []
}

export const actionTypes = {
    SET_USER : "SET_USER",
    ADD_RECIPE: "ADD_RECIPE"
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case actionTypes.SET_USER : 
            return {
                ...state,
                user: action.user,
            };
        
         case actionTypes.ADD_RECIPE :
            return {
                 ...state,
                recipe: [...state.recipe, action.item],
            };

            default:
                return state;
    }
}

export default reducer