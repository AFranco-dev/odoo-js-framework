/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter";

export class Playground extends Component {
  static components = { Counter };
  static template = "owl_playground.playground";
}
