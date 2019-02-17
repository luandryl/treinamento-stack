import { FETCH_TODOS, NEW_TODO, COMPLETE_TASK, REMOVE_TASK } from './../actions/types';

const initialState = {
  todo_list: [],
  todo: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todo_list: action.payload
      }
    case NEW_TODO:
      return {
        ...state,
        todo_list: [...state.todo_list, action.payload]
      }
    case COMPLETE_TASK: 
      return {
        ...state,
        todo_list: [...state.todo_list]
      }
    
    case REMOVE_TASK:
      let newT = state.todo_list.filter((todo) => {
        if (action.payload._id !== todo._id)
          return todo
      })
      return {
        ...state,
        todo_list: newT
      }

    default:
      return state;
  }
}