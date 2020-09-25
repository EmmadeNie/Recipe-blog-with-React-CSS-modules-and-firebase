import React from "react";
import styles from "./App.modules.css";
import Layout from "./hoc/Layout/Layout";
import BlogOverview from "./containers/BlogOverview/BlogOverview";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";

function App() {
  return (
    <BrowserRouter>
      <div className={styles["App"]}>
        <Layout>
          <Switch>
            <Route path="/" exact component={BlogOverview} />
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/posts" exact component={BlogOverview} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
