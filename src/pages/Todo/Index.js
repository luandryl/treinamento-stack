import React, { Component } from 'react';
import DefaultPage from './../DefaultPage'

import Span from './../../components/span/Span'
import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'

import "./todo.css"
import axios from 'axios'

class Todo extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [],
      task: '',
      isLoading: true
    }
  }
  async _updateState () {
    await axios.get("https://unectodo.herokuapp.com/todo").then(res => {
      this.setState({tasks: res.data})
      this.setState({isLoading: false})
    }).catch(e => {
      console.log(e)
    })

  }
  componentWillMount () {
    this._updateState()
  }

  inputHandler = e => {this.setState({task: e.target.value})}

  saveTask = (e) => {
    e.preventDefault()
    let newTask = {
      data: this.state.task,
      status: false
    }
    axios.post("https://unectodo.herokuapp.com/todo", newTask).then(res => {
      if (res.status === 200) {
        this._updateState()
      }
    }).catch(e => {console.log(e)})
    this.setState({task: ''})
  }

  completeTask = (e, task) => {
    e.preventDefault();
    task.status = true
    axios.put("https://unectodo.herokuapp.com/todo/" + task._id, task).then(res => {
      if (res.status === 200) {
        this._updateState()
      }
    })
  }

  removeTask = (e, task) => {
    e.preventDefault();
    task.status = true
    axios.delete("https://unectodo.herokuapp.com/todo/" + task._id).then(res => {
      if (res.status === 200) {
        this._updateState()
      }
    })
  }

  logout = () => {
    this.props.history.push('/')
  }

  render() {

    let todoList = this.state.tasks.map((m, i) => {
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

export default Todo;  