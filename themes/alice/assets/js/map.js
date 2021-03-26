google.charts.load("current", {
  packages: ["geochart"],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Visited"],
    ["United Kingdom", 1],
    ["Netherlands", 1],
    ["France", 1],
    ["Iceland", 1],
    ["Spain", 1],
    ["Italy", 1],
    ["Malaysia", 1],
    ["Thailand", 1],
    ["South Korea", 0],
    ["Philippines", 0],
  ]);

  var options = {
    backgroundColor: "#2c292d",
    colorAxis: { colors: ["#fc9867", "#a9dc76"] },
    datalessRegionColor: "#ff6188",
    legend: false,
    tooltip: { isHtml: true, textStyle: { color: "#fcfcfa" }, showColorCode: false },
  };

  var chart = new google.visualization.GeoChart(document.getElementById("map"));

  chart.draw(data, options);
}

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});

window.onresize = function () {
  drawRegionsMap();
};
