import React, { useState, useEffect } from "react";
import HomePage from "../route-components/HomePage";
import OrderPage from "../route-components/OrderPage";
import CartPage from "../route-components/CartPage";

import { Switch, Route } from "react-router-dom";

const RouteSections = ({
  handleCountItemInCart,
  handleClearShoppingCartLength,
}) => {
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

  // SHOPPING CART

  const [shoppingCart, setShoppingCart] = useState([]);
  const [pricesInCart, setPricesInCart] = useState([]);
  const [sumShoppingCart, setSumShoppingCart] = useState(0);

  useEffect(() => {
    if (pricesInCart.length === 0) {
      setSumShoppingCart(0);
    } else {
      const allFullPrices = pricesInCart.map((price) => {
        return price.fullPrice;
      });

      const sumResult = allFullPrices.reduce((a, b) => {
        return a + b;
      });

      setSumShoppingCart(sumResult);
    }
  }, [pricesInCart]);

  useEffect(() => {
    if (shoppingCart.length !== 0) {
      handleCountItemInCart(shoppingCart);
    }
  }, [shoppingCart]);

  const handleShoppingCart = (addedItemToCart) => {
    const { price, ingredients, sauces } = addedItemToCart;

    setShoppingCart((prevShoppingCart) => [
      ...prevShoppingCart,
      addedItemToCart,
    ]);

    let ingredientPrice = 0;
    let saucesPrice = 0;

    if (ingredients.length !== 0) {
      const ingredientsPriceList = ingredients.map((ingredient) => {
        return ingredient.price;
      });

      ingredientPrice = ingredientsPriceList.reduce((a, b) => {
        return a + b;
      });
    }

    if (sauces.length !== 0) {
      const saucesPriceList = sauces.map((sauce) => {
        return sauce.price;
      });

      saucesPrice = saucesPriceList.reduce((a, b) => {
        return a + b;
      });
    }

    const primaryPrice = price.price;
    const fullPrice = primaryPrice + ingredientPrice + saucesPrice;

    setPricesInCart((prevPricesInCart) => [
      ...prevPricesInCart,
      {
        primaryPrice,
        ingredientPrice,
        saucesPrice,
        fullPrice,
        id: addedItemToCart.id,
      },
    ]);
  };

  const handleDeleteItemCart = (deleteItemId) => {
    setShoppingCart(
      shoppingCart.filter((item) => {
        return item.id !== deleteItemId;
      })
    );

    setPricesInCart(
      pricesInCart.filter((price) => {
        return price.id !== deleteItemId;
      })
    );
  };

  const handleClearOrder = () => {
    setShoppingCart([]);
    setPricesInCart([]);
    setSumShoppingCart(0);
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
              handleShoppingCart={handleShoppingCart}
            />
          );
        }}
      />
      <Route
        path="/cart"
        render={() => {
          return (
            <CartPage
              shoppingCart={shoppingCart}
              pricesInCart={pricesInCart}
              sumShoppingCart={sumShoppingCart}
              handleClearOrder={handleClearOrder}
              handleClearShoppingCartLength={handleClearShoppingCartLength}
              handleDeleteItemCart={handleDeleteItemCart}
            />
          );
        }}
      />
    </Switch>
  );
};

export default RouteSections;
