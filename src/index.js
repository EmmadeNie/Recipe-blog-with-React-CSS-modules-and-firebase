import React from "react";
import ReactDOM from "react-dom";
import DisplayContextProvider from "./context/display-context"
import PostsContextProvider from "./context/posts-context"
import InputContextProvider from "./context/input-context"

//STYLING
import "./style.css";

//CONTAINERS
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
<DisplayContextProvider>
<InputContextProvider>
<PostsContextProvider>
      <App /></PostsContextProvider></InputContextProvider>
</DisplayContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
