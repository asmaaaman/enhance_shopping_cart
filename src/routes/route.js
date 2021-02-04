import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "../containers/ProductList/ProductList";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
