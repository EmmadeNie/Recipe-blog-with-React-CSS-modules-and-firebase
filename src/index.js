import React from "react";
import ReactDOM from "react-dom";
import PostsContextProvider from "./context/posts-context"
import DisplayContextProvider from "./context/display-context"

//STYLING
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "./theme"
import "./style.css";

//CONTAINERS
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <DisplayContextProvider>
<PostsContextProvider>
      <App /></PostsContextProvider>
</DisplayContextProvider></ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
