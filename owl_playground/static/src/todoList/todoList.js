/** @odoo-module **/

import { Component, useState, onMounted, useRef } from "@odoo/owl";
import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils/utils";

export class TodoList extends Component {
  setup() {
    this.toggleState = this.toggleState.bind(this);
    this.state = useState({
      todos: [
        {
          id: 1,
          description: "Buy Milk",
          done: false,
          toggleState: this.toggleState,
        },
        {
          id: 2,
          description: "Clean the house",
          done: true,
          toggleState: this.toggleState,
        },
        {
          id: 3,
          description: "Go for a run",
          done: false,
          toggleState: this.toggleState,
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
      });
      ev.target.value = "";
    }
  }
  toggleState(todoId) {
    console.log("using toggle state");
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    if (todo) todo.done = !todo.done;
  }
  static template = "owl_playground.todoList";
  static components = { Todo };
}
