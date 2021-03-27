const travels = [
  {
    flag: "🇫🇷",
    isPlural: false,
    value: "France",
    visited: 1,
  },
  {
    flag: "🇮🇸",
    isPlural: false,
    value: "Iceland",
    visited: 1,
  },
  {
    flag: "🇮🇹",
    isPlural: false,
    value: "Italy",
    visited: 1,
  },
  {
    flag: "🇲🇾",
    isPlural: false,
    value: "Malaysia",
    visited: 1,
  },
  {
    flag: "🇳🇱",
    isPlural: true,
    value: "Netherlands",
    visited: 1,
  },
  {
    flag: "🇵🇭",
    isPlural: true,
    value: "Philippines",
    visited: 0,
  },
  {
    flag: "🇰🇷",
    isPlural: false,
    value: "South Korea",
    visited: 0,
  },
  {
    flag: "🇪🇸",
    isPlural: false,
    value: "Spain",
    visited: 1,
  },
  {
    flag: "🇹🇭",
    isPlural: false,
    value: "Thailand",
    visited: 1,
  },
  {
    flag: "🇬🇧",
    isPlural: true,
    value: "United Kingdom",
    visited: 1,
  },
];

const array = travels.map(country => {
  return [
    { v: country.value, f: "" },
    country.visited,
    `<h2 class="country"><span class="label${country.visited ? ` visited` : ``}">${
      country.visited ? `Visited` : addNBSP("Want to visit")
    }</span><span role="img" aria-label="Flag of${country.isPlural ? ` the ` : ` `}${country.value}">${
      country.flag
    }</span>&nbsp;${addNBSP(country.value)}</h2>`,
  ];
});

function drawMap() {
  const data = google.visualization.arrayToDataTable(array);

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

function addNBSP(string) {
  return string.replace(/\s/g, "&nbsp;");
}

array.unshift(["Country", "Visited", { p: { html: true }, role: "tooltip", type: "string" }]);

google.charts.load("current", {
  packages: ["geochart"],
});

google.charts.setOnLoadCallback(drawMap);

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});

window.onresize = function () {
  drawMap();
};
