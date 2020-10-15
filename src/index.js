import React from "react";
import ReactDOM from "react-dom";
import DisplayContextProvider from "./context/display-context"
import PostsContextProvider from "./context/posts-context"
import InputContextProvider from "./context/input-context"

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
<InputContextProvider>
<PostsContextProvider>
      <App /></PostsContextProvider></InputContextProvider>
</DisplayContextProvider></ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
