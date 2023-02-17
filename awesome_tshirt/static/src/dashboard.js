/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";

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

    this.action = useService("action");
  }
  openCustomerView() {
    this.action.doAction("base.action_partner_form");
  }
}

AwesomeDashboard.components = { Layout };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
