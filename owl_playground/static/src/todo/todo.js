/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Todo extends Component {
  setup() {
    this.todo = useState({ id: 3, description: "Buy Milk", done: false });
  }
  increment() {
    this.state.value++;
  }
}
Todo.template = "owl_playground.Todo";
Todo.props = {
  id: { type: Number },
  description: { type: String },
  done: { type: Boolean },
};
