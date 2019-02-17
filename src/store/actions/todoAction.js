import axios from 'axios'
import { FETCH_TODOS, NEW_TODO, COMPLETE_TASK, REMOVE_TASK } from './types';

export const fetchTodos = () => dispatch => {
  axios.get("https://unectodo.herokuapp.com/todo").then(res => {
    dispatch({
      type: FETCH_TODOS,
      payload: res.data
    })
  })
}

export const newTodo = (newTodo) => dispatch => {
  axios.post("https://unectodo.herokuapp.com/todo", newTodo).then(res => {
    if (res.status === 200) {
      dispatch({
        type: NEW_TODO,
        payload: res.data
      })
    }
  })
}

export const completeTask = (task) => dispatch => {
  axios.put("https://unectodo.herokuapp.com/todo/" + task._id, task).then(res => {
    if (res.status === 200) {
      dispatch({
        type: COMPLETE_TASK,
        payload: res.data
      })
    }
  })
}

export const removeTask = (task) => dispatch => {
  axios.delete("https://unectodo.herokuapp.com/todo/" + task._id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: REMOVE_TASK,
        payload: res.data
      })
    }
  })
}