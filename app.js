
const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{id:"subchild"},"radheshyam"),React.createElement("h2",{},"i am h2"),React.createElement("h1",{id:"subchild"},"radheshyam")]
    )
)


const papa=React.createElement('div',{id:"papa"},React.createElement('div',{id:"bacha"},React.createElement('h1',{},"bacha hello world")));

// root.render(papa);
const heading=React.createElement("h1",{},"hello world by react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(papa);