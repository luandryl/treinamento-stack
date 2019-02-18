import { authorized, unauthorized } from './types'
import axios from 'axios'

export const signup = (data, history) => dispatch => {

  axios.post('https://unectodo.herokuapp.com/auth/signup/', data).then(res => {
    if (res.status === 201) {
      dispatch({ type: authorized })
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(data))
      }
      history.push('/todo/')
    } else {
      dispatch({ type: unauthorized })
    }
  }).catch (err => {
    console.log(err)
  })
}

export const login = (data, history) => dispatch => {
  axios.post('https://unectodo.herokuapp.com/auth/login/', data).then(res => {
    if (res.status === 200) {
      dispatch({ type: authorized })
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(data))
      }
      history.push('/todo/')
    } else {
      dispatch({ type: unauthorized })
    }
  }).catch (err => {
    console.log(err)
  })
}
export const logout = (history) => dispatch => {
  localStorage.clear()
  dispatch({ type: unauthorized })
  history.push('/')
}