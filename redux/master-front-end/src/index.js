import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";



const store = configureStore({
  reducer: rootReducer,
  devtools: true,
});

store.dispatch(getPosts());
store.dispatch(getUser());

// REDUX STORE
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);

