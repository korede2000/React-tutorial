import React from "react";
//import ReactDom from "react-dom"; (old syntax for render)
import { createRoot } from "react-dom/client";
import App from "./App";
// CSS
import "./code/menu/index.css";
// setup variables

//ReactDom.render(<BookList />, document.getElementById("root")); (old syntax for render)
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
