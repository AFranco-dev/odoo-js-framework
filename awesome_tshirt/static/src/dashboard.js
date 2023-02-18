/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";
import { Domain } from "@web/core/domain";
import { Card } from "./card/card";

const { Component, useSubEnv, onWillStart } = owl;

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
    this.rpc = useService("rpc");

    onWillStart(async () => {
      this.statistics = await this.rpc("/awesome_tshirt/statistics");
    });
  }
  openCustomerView() {
    this.action.doAction("base.action_partner_form");
  }
  openOrders(title, domain) {
    this.action.doAction({
      type: "ir.actions.act_window",
      name: title,
      res_model: "awesome_tshirt.order",
      domain: new Domain(domain).toList(),
      views: [
        [false, "list"],
        [false, "form"],
      ],
    });
  }
  openLast7DaysOrders() {
    const domain =
      "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d'))]";
    this.openOrders("Last 7 days orders", domain);
  }
  openLast7DaysCancelledOrders() {
    const domain =
      "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d')), ('state','=', 'cancelled')]";
    this.openOrders("Last 7 days orders", domain);
  }
  cLogKeysFromObject() {
    console.log(Object.keys(this.statistics));
    console.log(this.statistics);
  }
}

AwesomeDashboard.components = { Layout, Card };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
