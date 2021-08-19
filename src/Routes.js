import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Locator from "./containers/Locator";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import AboutUs from "./containers/AboutUs";
import Services from "./containers/Services";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/locator">
        <Locator />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/notfound">
        <NotFound />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
    </Switch>
  );
}
