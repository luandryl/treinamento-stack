import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchTodos, newTodo, completeTask, removeTask } from '../../store/actions/todoAction'

class TodoList extends Component {

  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }
  
  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    let todoList = this.props.list.map((m, i) => {
      let controlBtn = (m.status === true) ? (<i className="fas fa-trash" onClick={(e)=>{this.removeTask(e, m)}} ></i>): (<i className="fas fa-check" onClick={(e) => {this.completeTask(e, m)}}></i>)
      return <li key={i} className={m.status ? 'completedTask':''}> {m.data} {controlBtn}</li>
    })
  
    let todoBox = (this.state.isLoading !== true)?(<ul>{todoList}</ul>) : (<div className="loader"><i class="fas fa-spinner fa-5x"></i></div>)
    
    return todoBox
  }
}
TodoList.prototypes = {
  list: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}


const mapStateToProps = state => ({
  list: state.todos.todo_list
})

export default connect(mapStateToProps, {fetchTodos})(TodoList);