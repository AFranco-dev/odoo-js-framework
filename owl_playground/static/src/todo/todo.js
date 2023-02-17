/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Todo extends Component {
  onClick(e) {
    this.props.todo.toggleState(this.props.todo.id);
  }
  onRemove(e) {
    this.props.todo.removeTodo(this.props.todo.id);
  }
  static props = {
    todo: {
      type: Object,
      shape: {
        id: Number,
        description: String,
        done: { type: Boolean, default: false },
        toggleState: { type: Function },
        removeTodo: { type: Function },
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
