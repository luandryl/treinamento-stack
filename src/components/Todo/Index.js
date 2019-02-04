import React, { Component } from 'react';
import "./todo.css"
class Todo extends Component {
    render() {
        return (
          <div class="todo-wrapper">
              <div class="todo-input">
                <h1>UNECTodo</h1>
                <input type="text" /> <button> Add Todo </button>
              </div>
              <div class="todo-list">
                <ul>
                  <li>Homework <div><i class="fas fa-check"></i><i class="fas fa-trash"></i></div></li>
                  <li>Buy Cigarr <div><i class="fas fa-check"></i><i class="fas fa-trash"></i></div></li>
                  <li>Narguileasdasdasdasdas <div><i class="fas fa-check"></i><i class="fas fa-trash"></i></div></li>
                </ul>
              </div>
          </div>
        
        );
    }
}

export default Todo;  