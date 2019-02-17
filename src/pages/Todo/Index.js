import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTodos, newTodo, completeTask, removeTask } from '../../store/actions/todoAction'

import DefaultPage from './../DefaultPage'

import Span from './../../components/span/Span'
import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'

import "./todo.css"

class Todo extends Component {

  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }

  componentWillMount () {
    this.props.fetchTodos();
  }
  
  inputHandler = e => {this.setState({task: e.target.value})}

  saveTask = (e) => {
    e.preventDefault()
    this.props.newTodo({
      data: this.state.task,
      status: false
    })
    this.setState({task: ''})
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

  logout = () => {
    this.props.history.push('/')
  }

  render() {

    let todoList = this.props.todos.map((m, i) => {
      let controlBtn = (m.status === true) ? (<i className="fas fa-trash" onClick={(e)=>{this.removeTask(e, m)}} ></i>): (<i className="fas fa-check" onClick={(e) => {this.completeTask(e, m)}}></i>)
      return <li key={i} className={m.status ? 'completedTask':''}> {m.data} {controlBtn}</li>
    })

    let todoBox = (this.state.isLoading !== true)?(<ul>{todoList}</ul>) : (<div className="loader"><i class="fas fa-spinner fa-5x"></i></div>)
  
    return (
      <DefaultPage>
        <div className="control-wrapper">
          <Span onClick={this.logout} className="span-pr" text="logout" />
        </div>
        <div className="todo-wrapper">
        <div className="todo-ctrl">
          <Input className="input-todo" type="text" value={this.state.task} onChange={this.inputHandler} placeholder="Homework..."/>
          <Button type="submit" onClick={(e) => {this.saveTask(e)}} text="add" className="btn-todo"  />
        </div>
          <div className="todo-list">
            {todoBox}
          </div>
        </div>
      </DefaultPage>
    );
  }
}

Todo.prototypes = {
  newTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  completedTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos.todo_list
})

export default connect(mapStateToProps, {fetchTodos, newTodo, completeTask, removeTask})(Todo);  