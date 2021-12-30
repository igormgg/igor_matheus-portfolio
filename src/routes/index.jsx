import Contact from "../pages/Contact";
import Curriculum from "../pages/Curriculum";
import Homepage from "../pages/Homepage";
import Portfolio from "../pages/Portfolio";

import { Route, Switch, useHistory } from "react-router";

const Routes = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/curriculum">
        <Curriculum />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route>{() => history.push("/")}</Route>
    </Switch>
  );
};

export default Routes;
