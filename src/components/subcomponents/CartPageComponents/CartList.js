import React, { useRef, useEffect } from "react";
import CartListItem from "./CartListItem";

import {
  CartListStyle,
  CartSumStyle,
  CartSumAmountStyle,
} from "../../../styles/CartPageStyles";

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
      <CartListStyle ref={refCartList}>{cart}</CartListStyle>
      <CartSumStyle>
        sum of shopping cart:
        <CartSumAmountStyle> {sumShoppingCart}$</CartSumAmountStyle>
      </CartSumStyle>
    </>
  );
};

export default CartList;
