import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import reducer from "./reducer/main";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

//TODO:Create Store with Thunk middleware

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  //TODO:Provide Store to the app
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
