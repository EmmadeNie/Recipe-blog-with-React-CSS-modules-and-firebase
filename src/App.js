import React from "react";

import Layout from "./hoc/Layout";
import BlogOverview from "./pages/BlogOverview";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from "./pages/NewPost";
import BlogDashboard from "./pages/BlogDashboard"

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
