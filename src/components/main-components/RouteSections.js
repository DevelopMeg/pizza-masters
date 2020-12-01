import React, { useState, useEffect } from "react";
import HomePage from "../route-components/HomePage";
import OrderPage from "../route-components/OrderPage";
import CartPage from "../route-components/CartPage";

import { Switch, Route } from "react-router-dom";

const RouteSections = () => {
  // MENU

  const [menuItems, setMenuItems] = useState([]);
  const [errMenuItems, setErrMenuItems] = useState(false);

  const [menuExtraIngredients, setMenuExtrangredients] = useState([]);
  const [menuSauces, setMenuSauces] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    try {
      const response = await fetch("http://localhost:3001/menu");

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setMenuItems(data.items);
      setMenuExtrangredients(data.extra_ingredient);
      setMenuSauces(data.sauces);
    } catch (err) {
      setErrMenuItems(true);
    }
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return <HomePage errMenuItems={errMenuItems} menuItems={menuItems} />;
        }}
      />
      <Route
        path="/order"
        render={() => {
          return (
            <OrderPage
              menuItems={menuItems}
              menuExtraIngredients={menuExtraIngredients}
              menuSauces={menuSauces}
            />
          );
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
