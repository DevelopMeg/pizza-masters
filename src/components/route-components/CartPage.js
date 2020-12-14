import React, { useEffect } from "react";
import CartList from "../subcomponents/CartPageComponents/CartList";

import { useHistory } from "react-router-dom";

import { SectionTitleStyle } from "../../styles/CommonStyles";
import {
  CartSectionStyle,
  CartImageStyle,
  CartButtonOrderStyle,
} from "../../styles/CartPageStyles";

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
    <CartSectionStyle>
      <SectionTitleStyle extraMargin>Your shopping list</SectionTitleStyle>

      <CartImageStyle></CartImageStyle>

      <CartList
        pricesInCart={pricesInCart}
        shoppingCart={shoppingCart}
        sumShoppingCart={sumShoppingCart}
        handleDeleteItemCart={handleDeleteItemCart}
      />

      <CartButtonOrderStyle
        disabled={shoppingCart.length === 0}
        onClick={() => {
          handleOpenNewPage("/finished-order");
          handleClearOrder();
          handleClearShoppingCartLength();
        }}
      >
        order now
      </CartButtonOrderStyle>
    </CartSectionStyle>
  );
};

export default CartPage;
