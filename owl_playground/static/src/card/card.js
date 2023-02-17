/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Card extends Component {
  // setup() {
  //   this.state = useState({
  //     todos: [
  //       { id: 1, description: "Buy Milk", done: false },
  //       { id: 2, description: "Clean the house", done: true },
  //       { id: 3, description: "Go for a run", done: false },
  //     ],
  //   });
  //   // console.log(state.todos);
  // }
  static template = "owl_playground.card";
  static props = {
    slots: {
      type: Object,
      shape: {
        default: Object,
        title: {
          type: Object,
          optional: true,
        },
      },
    },
  };
  //   static components = { Counter, TodoList, Todo };
}
