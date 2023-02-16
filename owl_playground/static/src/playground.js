/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";

export class Playground extends Component {
  setup() {
    this.todo = { id: 3, description: "Buy Milk", done: false };
  }
  static template = "owl_playground.playground";
  static components = { Counter, Todo };
}
