/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Todo extends Component {
  static props = {
    todos: {
      type: Array,
      element: {
        type: Object,
        shape: {
          id: Number,
          description: String,
          done: { type: Boolean, default: false },
        },
      },
    },
  };
  setup() {
    this.state = useState({
      todos: [
        { id: 1, description: "Buy Milk", done: false },
        { id: 2, description: "Clean the house", done: true },
        { id: 3, description: "Go for a run", done: false },
      ],
    });
    console.log(state.todos);
  }
}
Todo.template = "owl_playground.todo";
// Todo.props = {
//   todo: {
//     id: { type: Number },
//     description: { type: String },
//     done: Boolean,
//   },
// };
