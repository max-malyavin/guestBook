import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
