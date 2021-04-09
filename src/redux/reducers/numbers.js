const numbers = (state = {number: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return [
                ...state,
                {number: action.result}
            ]
    }
}