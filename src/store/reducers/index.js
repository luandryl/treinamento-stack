import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import authReducer from './authReducer'
import navReducer from './navReducer'

export default combineReducers({
  todos: todoReducer,
  auth: authReducer,
  nav: navReducer
})