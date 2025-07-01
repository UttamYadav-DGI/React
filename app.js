import React from "react"
import ReactDOM from "react-dom/client"

const papa=React.createElement('div',{id:"papa"},React.createElement('div',{id:"bacha"},React.createElement('h1',{},"bacha hello world")));
     
// root.render(papa);
const heading=React.createElement("h1",{},"hello world by react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(papa);