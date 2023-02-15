/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
  static template = xml`
        <div class="p-3">
            <p>
                Counter <t t-esc="state.value" />
            </p>
            <button class="btn btn-primary" t-on-click="increment">Increment</button>
        </div>`;
  state = useState({ value: 0 });
  increment() {
    this.state.value++;
  }
}
