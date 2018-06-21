import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import TodoList from "./TodoList";
import { Provider } from "react-redux";

import "./styles.css";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
