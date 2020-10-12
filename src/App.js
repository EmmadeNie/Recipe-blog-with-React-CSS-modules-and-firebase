import React from "react";

import Layout from "./hoc/Layout/Layout";
import BlogOverview from "./containers/BlogOverview/BlogOverview";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import BlogDashboard from "./containers/BlogDashboard"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
          <Route path="/home" exact component={BlogDashboard} />
            <Route path="/" exact component={BlogOverview} />
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/posts" component={BlogOverview} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
