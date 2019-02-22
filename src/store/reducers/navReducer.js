import { SHOW_LOGIN, HIDE_LOGIN} from '../actions/types'

const initialState = {
    isShowedLogin: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...state,
        isShowedLogin: true
      }
    case HIDE_LOGIN:
    return {
      ...state,
      isShowedLogin: false
    }
    default:
      return state
  }
}