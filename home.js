document.addEventListener("DOMContentLoaded", function () {
  // Sample data for charts
  const performanceData = [
    { department: "Dev", value: 80 },
    { department: "Design", value: 65 },
    { department: "Marketing", value: 55 },
    { department: "Sales", value: 70 },
  ];

  const globalData = [
    { region: "North America", value: 75 },
    { region: "Europe", value: 68 },
    { region: "Asia", value: 82 },
    { region: "Africa", value: 60 },
    { region: "South America", value: 72 },
  ];

  const resourceData = [
    { project: "Project A", value: 90 },
    { project: "Project B", value: 75 },
    { project: "Project C", value: 85 },
    { project: "Project D", value: 60 },
  ];

  // Create charts
  createBarChart(
    "#performanceChart",
    performanceData,
    "department",
    "value",
    d3.schemeSet2[0]
  );
  createBarChart(
    "#globalChart",
    globalData,
    "region",
    "value",
    d3.schemeSet2[1]
  );
  createBarChart(
    "#resourceChart",
    resourceData,
    "project",
    "value",
    d3.schemeSet2[2]
  );

  // Search functionality
  document
    .getElementById("searchButton")
    .addEventListener("click", performSearch);
});

function createBarChart(selector, data, xKey, yKey, color) {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 300 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  const svg = d3
    .select(selector)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand().range([0, width]).padding(0.1);

  const y = d3.scaleLinear().range([height, 0]);

  x.domain(data.map((d) => d[xKey]));
  y.domain([0, d3.max(data, (d) => d[yKey])]);

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x(d[xKey]))
    .attr("width", x.bandwidth())
    .attr("y", (d) => y(d[yKey]))
    .attr("height", (d) => height - y(d[yKey]))
    .attr("fill", color);

  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)");

  svg.append("g").call(d3.axisLeft(y));
}

function performSearch() {
  const searchTerm = document.getElementById("searchInput").value;
  alert(`Searching for: ${searchTerm}`);
  // Implement actual search functionality here
}
