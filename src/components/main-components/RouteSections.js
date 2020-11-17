import React from "react";
import HomePage from "../route-components/HomePage";
import OrderPage from "../route-components/OrderPage";
import CartPage from "../route-components/CartPage";

import { Switch, Route } from "react-router-dom";

const RouteSections = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return <HomePage />;
        }}
      />
      <Route
        path="/order"
        render={() => {
          return <OrderPage />;
        }}
      />
      <Route
        path="/cart"
        render={() => {
          return <CartPage />;
        }}
      />
    </Switch>
  );
};

export default RouteSections;
