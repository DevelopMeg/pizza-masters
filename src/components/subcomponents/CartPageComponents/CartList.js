import React, { useRef, useEffect } from "react";

import CartListItem from "./CartListItem";

import gsap from "gsap";

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

  // ANIMATIONS GSAP

  const refCartList = useRef();

  useEffect(() => {
    const elementsCartList = refCartList.current;

    gsap.fromTo(
      elementsCartList,
      { autoAlpha: 0, y: "+=100" },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
  }, []);

  return (
    <>
      <ol ref={refCartList}>{cart}</ol>
      <h4>
        sum of shopping cart:
        <span> {sumShoppingCart}$</span>
      </h4>
    </>
  );
};

export default CartList;
