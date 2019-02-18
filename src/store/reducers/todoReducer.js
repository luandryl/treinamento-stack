import { FETCH_TODOS_START, FETCH_TODOS_SUCESS, FETCH_TODOS_FAIL, NEW_TODO, COMPLETE_TASK, REMOVE_TASK } from './../actions/types';

const initialState = {
  todo_list: [],
  todo: {},
  isLoading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_START:
    return {
      ...state,
      isLoading: true
    }
    case FETCH_TODOS_SUCESS:
      return {
        ...state,
        todo_list: action.payload,
        isLoading: false
      }
    case FETCH_TODOS_FAIL:
      return {
        ...state,
        isLoading: false
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