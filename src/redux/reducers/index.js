import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import numbers from './numbers'

export default combineReducers({
    todos,
    visibilityFilter,
    numbers
})