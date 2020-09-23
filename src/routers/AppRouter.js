import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DeepamMain from "../components/DeepamMain";
import HelpPage from "../components/HelpPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DeepamMain} exact={true} />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
