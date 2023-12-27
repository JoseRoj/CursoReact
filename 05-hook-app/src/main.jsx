import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { FormWithCustomHook } from "./02-useEffect/SimpleFormCustomHook";
//import { MultipleCustomHooks } from "./03-example/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-Layout/Layout";
ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Layout />
  //</React.StrictMode>
);
