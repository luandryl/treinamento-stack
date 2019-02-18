import { authorized, unauthorized, auth_error } from '../actions/types'

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
    
    case auth_error:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}