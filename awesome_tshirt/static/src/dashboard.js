/** @odoo-module **/

import { registry } from "@web/core/registry";
import { layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";

const { Component, useSubEnv } = owl;

class AwesomeDashboard extends Component {
  setup() {
    // The useSubEnv below can be deleted if you're > 16.0
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });

    this.display = {
      controlPanel: { "top-right": false, "bottom-right": false },
    };
  }
}

AwesomeDashboard.components = { layout };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
