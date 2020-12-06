import React from "react";

import CartListItem from "./CartListItem";

const CartList = ({
  shoppingCart,
  pricesInCart,
  sumShoppingCart,
  handleDeleteItemCart,
}) => {
  const cart = shoppingCart.map((itemCart, idItemCart) => {
    return (
      <CartListItem
        key={itemCart.id}
        itemCart={itemCart}
        idItemCart={idItemCart}
        pricesInCart={pricesInCart}
        handleDeleteItemCart={handleDeleteItemCart}
      />
    );
  });

  return (
    <>
      <ol>{cart}</ol>
      <h4>
        sum of shopping cart:
        <span> {sumShoppingCart}$</span>
      </h4>
    </>
  );
};

export default CartList;
