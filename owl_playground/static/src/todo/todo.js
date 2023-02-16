/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Todo extends Component {
  setup() {
    this.todo = { id: 3, description: "Buy Milk", done: false };
    // , done: false
  }
  increment() {
    this.state.value++;
  }
}
Todo.template = "owl_playground.todo";
Todo.props = {
  todo: {
    id: { type: Number },
    description: { type: String },
    done: { type: Boolean },
  },
  // id: { type: Number },
  // description: { type: String },
  // done: { type: Boolean },
};
