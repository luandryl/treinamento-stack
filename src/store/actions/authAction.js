import { authorized, unauthorized } from './types'
import { HttpProvider } from './../../services/HttpProvider'

export const signup = (data, history) => dispatch => {

  HttpProvider.post('auth/signup/', data).then(res => {
    if (res.status === 201) {
      dispatch({ type: authorized })
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      history.push('/todo/')
    } else {
      dispatch({ type: unauthorized })
    }
  }).catch(e => {
    console.log(e)
  })

}

export const login = (data, history) => dispatch => {
  HttpProvider.post('auth/login/', data).then(res => {
    if (res.status === 200) {
      dispatch({ type: authorized })
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      history.push('/todo/')
    } else {
      dispatch({ type: unauthorized })
    }
  }).catch(e => {
    console.log(e)
  })

}
export const logout = (history) => dispatch => {
  localStorage.clear()
  dispatch({ type: unauthorized })
  dispatch({ type: logout })
  history.push('/')
}