import {createStore, combineReducers} from 'redux'
import Mode from './mode/index'
export default createStore(
    combineReducers({
        mode: Mode
    })
)
