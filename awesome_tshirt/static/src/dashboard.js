/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";
import { Domain } from "@web/core/domain";
import { Card } from "./card/card";
import { PieChart } from "./pie_chart/pie_chart";

const { Component, useSubEnv, onWillStart } = owl;

class AwesomeDashboard extends Component {
  // This is the setup part of the component
  setup() {
    // The useSubEnv below can be deleted if you're > 16.0
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });
    // Here I am defining the display properties
    this.display = {
      controlPanel: { "top-right": false, "bottom-right": false },
    };
    // This is used in order to be able to create actions from the js framework
    this.action = useService("action");
    // This is used in order to be able to do RPC calls to the server
    // This line of code is replaced in order to be able to use the custom service
    // this.rpc = useService("rpc");
    this.tshirtService = useService("tshirtService");
    // These are the keys that are used in the return object of the statistics call
    this.keyToString = {
      average_quantity: "Average amount of t-shirt by order this month",
      average_time:
        "Average time for an order to go from 'new' to 'sent' or 'cancelled'",
      nb_cancelled_orders: "Number of cancelled orders this month",
      nb_new_orders: "Number of new orders this month",
      total_amount: "Total amount of new orders this month",
    };
    // This is used in order to load values before page rendering time
    onWillStart(async () => {
      // Replaced this for a custom service that enables cache the server call
      // this.statistics = await this.rpc("/awesome_tshirt/statistics");
      this.statistics = await this.tshirtService.loadStatistics();
    });
  }
  // This is the action defined for opening the clients section
  openCustomerView() {
    this.action.doAction("base.action_partner_form");
  }
  // this is the base action for opening the purchase orders
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
  // This is the extension that enables to show the orders from the last seven days
  openLast7DaysOrders() {
    const domain =
      "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d'))]";
    this.openOrders("Last 7 days orders", domain);
  }
  // This is the extension that enables to show the orders from the last seven days that are cancelled

  openLast7DaysCancelledOrders() {
    const domain =
      "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d')), ('state','=', 'cancelled')]";
    this.openOrders("Last 7 days orders", domain);
  }

  // This is the logging tool for finding the description of objects
  cLogKeysFromObject() {
    console.log(Object.keys(this.statistics));
    console.log(this.statistics);
  }
}

AwesomeDashboard.components = { Layout, Card, PieChart };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
