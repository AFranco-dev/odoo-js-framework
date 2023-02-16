/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
  static props = {
    todo: {
      id: { type: Number },
      description: { type: String },
      done: Boolean,
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
