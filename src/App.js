import React from "react";
import Home from "./Home";
import Safe from "./Safe";
import Glass from "./Glass";
import Sense from "./Sense";
import Users from "./Users";
import {Route,Switch} from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route exact path="/buzztara_main" component={Home} />
      <Route exact path="/buzztara_main/safe" component={Safe} />
      <Route exact path="/buzztara_main/glass" component={Glass} />
      <Route exact path="/buzztara_main/sense" component={Sense} />
      <Route exact path="/buzztara_main/users" component={Users} />
    </Switch>
  );
}

export default App;
