import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//STYLING
import "./style.css";

//CONTAINERS
import App from "./App";

//REDUX
import displayReducer from "./store/reducers/display";
import postsReducer from "./store/reducers/posts";
import fullPostReducer from "./store/reducers/fullPost";

const rootReducer = combineReducers({
  display: displayReducer,
  posts: postsReducer,
  fullPost: fullPostReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
