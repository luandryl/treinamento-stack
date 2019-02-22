import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newTodo } from '../../store/actions/todoAction'

import DefaultPage from './../DefaultPage'

import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'

import TodoList from './TodoList'

import "./todo.css"

class Todo extends Component {

  constructor () {
    super()
    this.state = {
      task: ''
    }
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

  render() {
    return (
      <DefaultPage>
        <div className="todo-wrapper">
        <div className="todo-ctrl">
          <Input className="input-todo" type="text" value={this.state.task} onChange={this.inputHandler} placeholder="Homework..."/>
          <Button type="submit" onClick={(e) => {this.saveTask(e)}} text="add" className="btn-todo"  />
        </div>
          <div className="todo-list">
            <TodoList />
          </div>
        </div>
      </DefaultPage>
    );
  }
}

Todo.prototypes = {
  newTodo: PropTypes.func.isRequired
}

export default connect(null , {newTodo})(Todo);  