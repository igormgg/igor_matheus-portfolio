import { Route, Switch, useHistory } from "react-router";
import Contact from "../pages/Contact";
import Homepage from "../pages/Homepage";

const Routes = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route>{() => history.push("/")}</Route>
    </Switch>
  );
};

export default Routes;
