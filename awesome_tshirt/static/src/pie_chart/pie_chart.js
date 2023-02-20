/** @odoo-module **/

import { loadJS } from "@web/core/assets";
import { getColor } from "@web/views/graph/colors";

const { Component, onWillStart, useRef, onMounted, onWillUnmount } = owl;

export class PieChart extends Component {
  setup() {
    this.canvasRef = useRef("canvas");

    this.labels = Object.keys(this.props.data);
    this.data = Object.values(this.props.data);
    this.color = this.labels.map((_, index) => {
      return getColor(index);
    });

    onWillStart(() => {
      return loadJS(["/web/static/lib/Chart/Chart.js"]);
    });
    onMounted(() => {
      this.renderChart;
    });
    onWillUnmount(() => {
      if (this.chart) this.chart.destroy();
    });
  }

  getChartConfig() {
    return {
      type: "pie",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.props.label,
            data: this.data,
            backgroundColor: this.color,
          },
        ],
      },
    };
  }
  // {
  //           type: "pie",
  //           data: {
  //               labels: this.labels,
  //               datasets: [
  //                   {
  //                       label: this.props.label,
  //                       data: this.data,
  //                       backgroundColor: this.color,
  //                   },
  //               ],
  //           },
  //       }

  renderChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const config = this.getChartConfig();
    this.chart = new Chart(this.canvasRef.el, config);
    // To perform its animations, ChartJS will perform each animation
    // step in the next animation frame. The initial rendering itself
    // is delayed for consistency. We can avoid this by manually
    // advancing the animation service.
    Chart.animationService.advance();
  }
}

PieChart.template = "awesome_tshirt.pie_chart";
