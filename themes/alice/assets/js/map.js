google.charts.load("current", {
  packages: ["geochart"],
});

google.charts.setOnLoadCallback(drawMap);

function drawMap() {
  const data = google.visualization.arrayToDataTable([
    ["Country", "Visited", { p: { html: true }, role: "tooltip", type: "string" }],
    [
      { v: "United Kingdom", f: "" },
      1,
      `<h2 class="country"><span class="label">Visited</span>🇬🇧&nbsp;United&nbsp;Kingdom</h2>`,
    ],
    ["Netherlands", 1, "🇳🇱"],
    ["France", 1, "🇫🇷"],
    ["Iceland", 1, "🇮🇸"],
    ["Spain", 1, "🇪🇸"],
    ["Italy", 1, "🇮🇹"],
    ["Malaysia", 1, "🇲🇾"],
    ["Thailand", 1, "🇹🇭"],
    ["South Korea", 0, "🇰🇷"],
    ["Philippines", 0, "🇵🇭"],
  ]);

  const options = {
    backgroundColor: { fill: "#2c292d" },
    colorAxis: { colors: ["#fc9867", "#a9dc76"] },
    datalessRegionColor: "#ff6188",
    legend: false,
    tooltip: { isHtml: true, textStyle: { color: "#fcfcfa" }, showColorCode: false },
  };

  const chart = new google.visualization.GeoChart(document.getElementById("map"));

  chart.draw(data, options);
}

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});

window.onresize = function () {
  drawMap();
};
