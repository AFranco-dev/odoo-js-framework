/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { TodoList } from "./todoList/todoList";
import { Todo } from "./todo/todo";
import { Card } from "./card/card";

export class Playground extends Component {
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
  static template = "owl_playground.playground";
  static components = { Counter, TodoList, Todo, Card };
}
