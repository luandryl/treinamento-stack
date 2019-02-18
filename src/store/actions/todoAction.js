import axios from 'axios'
import { FETCH_TODOS, NEW_TODO, COMPLETE_TASK, REMOVE_TASK } from './types';
import {HttpProvider} from './../../services/HttpProvider'

export const fetchTodos = () => dispatch => {

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