import {combineReducers} from 'redux'
import {currentCharacterReducer as character} from './currentCharacterReducer'

const reducer = combineReducers({character})

export default reducer