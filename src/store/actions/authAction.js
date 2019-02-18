import { authorized, unauthorized, FETCH_TODOS } from './types'
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

export const login = (data) => dispatch => {
  HttpProvider.post('auth/login/', data).then(res => {
    if (res.status === 200) {
      dispatch({ type: authorized })
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
    } else {
      dispatch({ type: unauthorized })
    }
  }).then(()=> {
      let user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        let user_data = localStorage.getItem('user')

      if (user_data) {
        let userid = JSON.parse(localStorage.getItem('user')).user._id
        HttpProvider.get('todo/task_list/'+userid).then(res => {
          if (res.status === 200) {
            dispatch({
              type: FETCH_TODOS,
              payload: res.data
            })
          }
        }).catch(e => {
          console.log(e)
        })
      }
    }
  })
  .catch(e => {
    console.log(e)
  })

}
export const logout = (history) => dispatch => {
  localStorage.clear()
  dispatch({ type: unauthorized })
  dispatch({ type: logout })
  history.push('/')
}