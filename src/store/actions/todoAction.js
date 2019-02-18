import { 
  FETCH_TODOS_START, 
  FETCH_TODOS_SUCESS, 
  FETCH_TODOS_FAIL, 
  NEW_TODO, 
  COMPLETE_TASK, 
  REMOVE_TASK } from './types';
import {HttpProvider} from './../../services/HttpProvider'

export const fetchTodos = () => dispatch => {
  dispatch({type:  FETCH_TODOS_START})
  let user_data = localStorage.getItem('user')

  if (user_data) {
    let userid = JSON.parse(localStorage.getItem('user')).user._id
    HttpProvider.get('todo/task_list/'+userid).then(res => {
      if (res.status === 200) {
        dispatch({
          type: FETCH_TODOS_SUCESS,
          payload: res.data
        })
      }
    }).catch(e => {
      console.log(e)
      dispatch({
        type: FETCH_TODOS_FAIL
      })
    })
  }
}

export const newTodo = (newTodo) => dispatch => {

  newTodo = {
    ...newTodo,
    _user: JSON.parse(localStorage.getItem('user')).user._id
  }
  HttpProvider.post('todo/', newTodo).then(res => {
    if (res.status === 200) {
      dispatch({
        type: NEW_TODO,
        payload: res.data
      })
    }
  }).catch(e => {
    console.log(e)
  })

}

export const completeTask = (task) => dispatch => {
  HttpProvider.put('todo/'+ task._id, task).then(res => {
    if (res.status === 200) {
      dispatch({
        type: COMPLETE_TASK,
        payload: res.data
      })
    }
  }).catch(e => {
    console.log(e)
  })
}

export const removeTask = (task) => dispatch => {
  HttpProvider.del('todo/' + task._id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: REMOVE_TASK,
        payload: res.data
      })
    }
  }).catch(e => {
    console.log(e)
  })
}