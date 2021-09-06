import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
