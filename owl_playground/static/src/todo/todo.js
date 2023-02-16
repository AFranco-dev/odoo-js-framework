/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Todo extends Component {}
Todo.template = "owl_playground.todo";
Todo.props = {
  todo: {
    id: { type: Number },
    description: { type: String },
    done: {
      type: Boolean,
      validate: (v) => v === true || v === false,
    },
  },
};
