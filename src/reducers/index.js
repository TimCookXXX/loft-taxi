import { combineReducers } from 'redux'
import AuthReducer from './auth'
import CardData from './card'
import addressesReducer from './addresses'

export default combineReducers({AuthReducer, CardData, addressesReducer})