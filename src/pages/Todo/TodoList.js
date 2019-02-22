import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchTodos, completeTask, removeTask } from '../../store/actions/todoAction'

class TodoList extends Component {

  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }

  completeTask = (e, task) => {
    e.preventDefault();
    task.status = true
    this.props.completeTask(task)
  }

  removeTask = (e, task) => {
    e.preventDefault();
    this.props.removeTask(task)
  }
  
  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    if (this.props.list.length > 0) {
      let todoList = this.props.list.map((m, i) => {
        let controlBtn = (m.status === true) ? (<i className="fas fa-trash" onClick={(e)=>{this.removeTask(e, m)}} ></i>): (<i className="fas fa-check" onClick={(e) => {this.completeTask(e, m)}}></i>)
        return <li key={i} className={m.status ? 'completedTask':''}> {m.data} {controlBtn}</li>
      })
    
      let todoBox = (this.props.isLoading !== true)?(<ul>{todoList}</ul>) : (<div className="loader"><i className="fas fa-spinner fa-5x"></i></div>)
      
      return todoBox
    } else {
      return <li>write some task and press add</li>
    }
  }
}
TodoList.prototypes = {
  list: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}


const mapStateToProps = state => ({
  list: state.todos.todo_list,
  isLoading: state.todos.isLoading,
  completedTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
})

export default connect(mapStateToProps, {fetchTodos, completeTask, removeTask})(TodoList);