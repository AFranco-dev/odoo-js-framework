/** @odoo-module **/

import { Component } from "@odoo/owl";

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
}
Todo.template = "owl_playground.todo";
// Todo.props = {
//   todo: {
//     id: { type: Number },
//     description: { type: String },
//     done: Boolean,
//   },
// };
