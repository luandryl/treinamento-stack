import { 
    HIDE_LOGIN,
    SHOW_LOGIN
  } from './types'
  
  export const showLogin = () => dispatch => {
    dispatch({type: SHOW_LOGIN })
  }
  
  export const hideLogin = () => dispatch => {
    dispatch({type: HIDE_LOGIN })
  }
  