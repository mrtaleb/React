function app() {
  return React.createElement(ul);
}



function ul() {
  return React.createElement(
    "table",
    { class: "main",border:"1px"},
    React.createElement(
      "tr",
      {},
      React.createElement("th", {}, "Name"),
      React.createElement("th", {}, "Location"),
      React.createElement("th", {}, "Age"),
      React.createElement("th", {}, "Qualification")
    ),
    React.createElement(
      "tr",
      {},
      React.createElement("td", {}, "Syed Shadab"),
      React.createElement("td", {}, "Nanded"),
      React.createElement("td", {}, "26"),
      React.createElement("td", {}, "B-Tech")
    ),
    React.createElement(
      "tr",
      {},
      React.createElement("td", {}, " Taleb Qureshi"),
      React.createElement("td", {}, "Nanded"),
      React.createElement("td", {}, "23"),
      React.createElement("td", {}, "D-Pharmacy")
    ),
    React.createElement(
      "tr",
      {},
      React.createElement("td", {}, "Shoeb Khan "),
      React.createElement("td", {}, "Nanded"),
      React.createElement("td", {}, "28"),
      React.createElement("td", {}, "D-Pharmacy")
    ),
    React.createElement(
      "tr",
      {},
      React.createElement("td", {}, "Naveed Ali"),
      React.createElement("td", {}, "Nanded"),
      React.createElement("td", {}, "25"),
      React.createElement("td", {}, "Diploma in Electrical")
    )
  );
}
ReactDOM.createRoot(document.getElementById("main")).render(
  React.createElement(app)
);
