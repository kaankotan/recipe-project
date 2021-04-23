export const initialState = {
    user: null,
    item : []
}

export const actionTypes = {
    SET_USER : "SET_USER",
    ADD_ITEM: "ADD_ITEM"
}


const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case actionTypes.SET_USER : 
            return {
                ...state,
                user: action.user,
            };
        
         case actionTypes.ADD_ITEM :
            return {
                 ...state,
                item: [...state.item, action.item],
            };

         case 'REMOVE_ITEM':
             const index = state.item.findIndex(
                 (inventoryItem) => inventoryItem.id === action.id
             )

             let newItem = [...state.item]

             if (index >= 0){
                 newItem.splice(index, 1)
             }
        
             else {
                 console.warn(`can't remove item (id: $action.id) as it is not in the inventory`)
             }

             return {
                 ...state,
                 item: newItem
             }
         
            default:
                return state;
    }
}

export default reducer