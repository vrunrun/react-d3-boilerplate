import * as d3 from "d3";

const MARGIN = { TOP: 10, BOTTOM: 80, LEFT: 70, RIGHT: 10 };
const WIDTH = 500 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 300 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
  constructor(element, data) {
    let vis = this;

    vis.g = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    // Scale
    vis.x = d3.scaleLinear().range([0, WIDTH]);
    vis.y = d3.scaleLinear().range([HEIGHT, 0]);

    vis.update(data);
  }

  update(data) {
    let vis = this;
    vis.data = data;

    // Scale
    vis.x.domain([0, d3.max(vis.data, d => Number(d.age))]);
    vis.y.domain([0, d3.max(vis.data, d => Number(d.height))]);

    // JOIN
    const circles = vis.g.selectAll("circle").data(vis.data, d => d.name);
    // console.log(circles);

    // EXIT
    circles.exit().remove();

    // UPDATE
    circles.attr("cx", d => vis.x(d.age)).attr("cy", d => vis.y(d.height));

    // ENTER
    circles
      .enter()
      .append("circle")
      .attr("cx", d => vis.x(Number(d.age)))
      .attr("cy", d => vis.y(Number(d.height)))
      .attr("r", 5)
      .attr("fill", "grey");
  }
}

export default D3Chart;
