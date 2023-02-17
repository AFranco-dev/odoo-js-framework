/** @odoo-module **/

import { Component, useState, onMounted, useRef } from "@odoo/owl";
import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils/utils";

export class TodoList extends Component {
  setup() {
    this.state = useState({
      todos: [
        { id: 1, description: "Buy Milk", done: false },
        { id: 2, description: "Clean the house", done: true },
        { id: 3, description: "Go for a run", done: false },
      ],
    });
    this.nextId = 4;
    useAutofocus("todoListInput");
    // console.log(state.todos);
  }
  addTodo(ev) {
    if (ev.keyCode === 13 && ev.target.value != "") {
      this.state.todos.push({
        id: this.nextId++,
        description: ev.target.value,
        done: false,
      });
      ev.target.value = "";
    }
  }
  static template = "owl_playground.todoList";
  static components = { Todo };
}
