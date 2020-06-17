import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));
// this line of code is what hooks up the middleware to redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// GENERAL DATA LOADING WITH REDUX IN THIS APPLICATION
//  Component gets rendered onto screen
//  Components componentDidMount LCM gets called
//  Call action creator from 'componentDidMount'
//  Action creator runs code to make API request
//  API responds with data
//  Action Creator returns an 'action' with the fetched data on the 'payload'
//  Some reducer sees the action, returns data off the 'payload'
//  New state object generated, thus redux/react-redux causes rerender
