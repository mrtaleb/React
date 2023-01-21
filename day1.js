function app(){
    return React.createElement("h1" ,{class:"main"},"Hello this is my code")
}

// const main=document.getElementById("root");
//ReactDOM.createRoot("root").render(React.createElement(app))

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(app));