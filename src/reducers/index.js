import { combineReducers } from 'redux'
import { showData } from './showData'
import { addData } from './addData'

const reducer = combineReducers({
    showData, 
    addData
})

export default reducer