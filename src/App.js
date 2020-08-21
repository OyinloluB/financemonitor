import React from "react";
import AuthUser from "./components/authentication/AuthUser";
import { Switch, Route } from "react-router-dom";
import OverviewPage from "./components/overview/OverviewPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path to="/" component={AuthUser} />
        <Route to="/overview" component={OverviewPage} />
      </Switch>
    </div>
  );
}

export default App;
