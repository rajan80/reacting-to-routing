import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import FilmsDetails from "./pages/FilmsDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/films/:filmsid">
          <FilmsDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
