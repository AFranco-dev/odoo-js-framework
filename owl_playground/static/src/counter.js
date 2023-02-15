/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
  static components = { Counter };
  static template = "owl_playground.playground";
  state = useState({ value: 0 });
  increment() {
    this.state.value++;
  }
}
