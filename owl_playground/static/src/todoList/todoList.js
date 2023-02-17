/** @odoo-module **/

import { Component, useState, onMounted, useRef } from "@odoo/owl";
import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils/utils";

export class TodoList extends Component {
  setup() {
    this.toggleState = this.toggleState.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = useState({
      todos: [
        {
          id: 1,
          description: "Buy Milk",
          done: false,
          toggleState: this.toggleState,
          removeTodo: this.removeTodo,
        },
        {
          id: 2,
          description: "Clean the house",
          done: true,
          toggleState: this.toggleState,
          removeTodo: this.removeTodo,
        },
        {
          id: 3,
          description: "Go for a run",
          done: false,
          toggleState: this.toggleState,
          removeTodo: this.removeTodo,
        },
      ],
    });
    this.nextId = 4;
    useAutofocus("todoListInput");
    console.log(this.state.todos);
  }
  addTodo(ev) {
    if (ev.keyCode === 13 && ev.target.value != "") {
      this.state.todos.push({
        id: this.nextId++,
        description: ev.target.value,
        done: false,
        toggleState: this.toggleState,
        removeTodo: this.removeTodo,
      });
      ev.target.value = "";
    }
  }
  toggleState(todoId) {
    console.log("using toggle state");
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    if (todo) todo.done = !todo.done;
  }
  removeTodo(todoId) {
    console.log("using delete todo");
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex > 0) {
      console.log("if found");
      this.state.todos.splice(todoIndex, 1);
    }
  }
  static template = "owl_playground.todoList";
  static components = { Todo };
}
