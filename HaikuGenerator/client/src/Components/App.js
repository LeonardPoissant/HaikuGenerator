import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ToolBox from "./MyToolbox";
import HaikuGenerator from "./HaikuGenerator";
import CreateHaikuDatabase from "./HaikuDataBase";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ToolBox />
        </Route>
        <Route path="/HaikuGenerator">
          <HaikuGenerator />
        </Route>
        <Route path="/CreateMyHaikuDataBase">
          <CreateHaikuDatabase />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
