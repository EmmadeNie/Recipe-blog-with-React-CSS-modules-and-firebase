import React from "react";
import ReactDOM from "react-dom";
import DisplayContextProvider from "./context/display-context"
import PostsContextProvider from "./context/posts-context"

//STYLING
import "./style.css";

//CONTAINERS
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
<DisplayContextProvider>
<PostsContextProvider>
      <App /></PostsContextProvider>
</DisplayContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
