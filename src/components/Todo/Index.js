import React, { Component } from 'react';
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

  saveTask = () => {
    let newTask = {
      data: this.state.task,
      status: false
    }
    axios.post("https://unectodo.herokuapp.com/todo", newTask).then(res => {
      if (res.status === 200) {
        this._updateState()
      }
    })
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

  render() {

    let todoList = this.state.tasks.map((m, i) => {
      let controlBtn = (m.status === true) ? (<i className="fas fa-trash" onClick={(e)=>{this.removeTask(e, m)}} ></i>): (<i className="fas fa-check" onClick={(e) => {this.completeTask(e, m)}}></i>)
      return <li key={i} className={m.status ? 'completedTask':''}> {m.data} <div>{controlBtn}</div></li>
    })

    let todoBox = (this.state.isLoading !== true)?(<ul>{todoList}</ul>) : (<div className="loader"><i class="fas fa-spinner fa-5x"></i></div>)
  
    return (
      <div className="todo-wrapper">
          <div className="todo-input">
            <h1>UNECTodo</h1>
            <input type="text" value={this.state.task} onChange={this.inputHandler} placeholder="Add some task"/>
            <button type="submit" onClick={this.saveTask}> Add Todo </button>
          </div>
          <div className="todo-list">
            {todoBox}
          </div>
      </div>
    );
  }
}

export default Todo;  