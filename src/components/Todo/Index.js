import React, { Component } from 'react';
import "./todo.css"
class Todo extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [{data: "delete me and add some tasks", status: true}],
      task: ''
    }
  }

  inputHandler = e => {this.setState({task: e.target.value})}

  saveTask = () => {
    let newTask = {
      data: this.state.task,
      status: false
    }
    this.setState({tasks: [...this.state.tasks, newTask]})
    this.setState({task: ''})
  }

  completeTask = (e, task) => {
    e.preventDefault();
    let updatedTaskList = this.state.tasks.map(t => {
      if (t === task) {
        t.status = true
      }
      return t
    })
    this.setState({tasks: updatedTaskList})
  }

  removeTask = (e, task) => {
    e.preventDefault();
    let updatedTaskList = this.state.tasks.filter(t => {
      if (t !== task) {
        return t
      }
    })
    this.setState({tasks: updatedTaskList})
  }

  render() {

    let todoList = this.state.tasks.map((m, i) => {
      let controlBtn = (m.status === true) ? (<i className="fas fa-trash" onClick={(e)=>{this.removeTask(e, m)}} ></i>): (<i className="fas fa-check" onClick={(e) => {this.completeTask(e, m)}}></i>)
      return <li key={i} className={m.status ? 'completedTask':''}> {m.data} <div>{controlBtn}</div></li>
    })

    return (
      <div className="todo-wrapper">
          <div className="todo-input">
            <h1>UNECTodo</h1>
            <input type="text" value={this.state.task} onChange={this.inputHandler} placeholder="Add some task"/>
            <button type="submit" onClick={this.saveTask}> Add Todo </button>
          </div>
          <div className="todo-list">
            <ul>
              {todoList}
            </ul>
          </div>
      </div>
    
    );
  }
}

export default Todo;  