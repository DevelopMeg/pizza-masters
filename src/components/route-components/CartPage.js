import React, { useEffect } from "react";

import CartList from "../subcomponents/CartPageComponents/CartList";

import { useHistory } from "react-router-dom";

const CartPage = ({
  shoppingCart,
  pricesInCart,
  sumShoppingCart,
  handleClearOrder,
  handleClearShoppingCartLength,
  handleDeleteItemCart,
}) => {
  const history = useHistory();

  const handleOpenNewPage = (path) => {
    history.push(path);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <h2 extraMargin>Your shopping list</h2>

      <CartList
        pricesInCart={pricesInCart}
        shoppingCart={shoppingCart}
        sumShoppingCart={sumShoppingCart}
        handleDeleteItemCart={handleDeleteItemCart}
      />

      <button
        disabled={shoppingCart.length === 0}
        onClick={() => {
          handleOpenNewPage("/finished-order");
          handleClearOrder();
          handleClearShoppingCartLength();
        }}
      >
        order now
      </button>
    </section>
  );
};

export default CartPage;
