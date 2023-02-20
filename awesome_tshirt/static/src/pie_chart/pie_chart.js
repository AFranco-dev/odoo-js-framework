/** @odoo-module **/

import { loadJS } from "@web/core/assets";
import { getColor } from "@web/views/graph/colors";

const { Component, onWillStart, useRef, onMounted, onWillUnmount } = owl;

export class PieChart extends Component {
  setup() {
    console.log(this.props.data);
    this.canvasRef = useRef("canvas");

    this.labels = Object.keys(this.props.data);
    this.data = Object.values(this.props.data);
    this.color = this.labels.map((_, index) => {
      return getColor(index);
    });

    console.log(this.labels);
    console.log(this.data);
    console.log(this.color);

    onWillStart(() => {
      return loadJS(["/web/static/lib/Chart/Chart.js"]);
    });
    onMounted(() => {
      console.log("onMounted started");
      this.renderChart();
    });
    onWillUnmount(() => {
      if (this.chart) this.chart.destroy();
    });
  }

  onPieClick(ev, chartElem) {
    console.log("onpieclick initiated");
    const clickedIndex = chartElem[0]._index;
    console.log("printing clicked index");
    console.log(clickedIndex);
    console.log("printinh this.labels[clickedIndex");
    console.log(this.labels[clickedIndex]);
    this.props.onPieClick(this.labels[clickedIndex]);
  }

  renderChart() {
    console.log("renderChart initiated");
    if (this.chart) {
      this.chart.destroy();
    }
    // const config = this.getChartConfig();
    this.chart = new Chart(this.canvasRef.el, {
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
      options: {
        onClick: this.onPieClick.bind(this),
      },
    });
    // To perform its animations, ChartJS will perform each animation
    // step in the next animation frame. The initial rendering itself
    // is delayed for consistency. We can avoid this by manually
    // advancing the animation service.
    Chart.animationService.advance();
  }
}

PieChart.template = "awesome_tshirt.pie_chart";

PieChart.props = {
  data: { type: Object },
  label: { type: String },
  onPieClick: { type: Function },
};
