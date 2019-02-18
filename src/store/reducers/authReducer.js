import { authorized, unauthorized, logout } from '../actions/types'

const initialState = {
  error: {},
  authorized: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case authorized:
      return {
        ...state,
        authorized: true
      }
    
    case unauthorized:
      return {
        ...state,
        authorized: false
      }

    default:
      return state
  }
}