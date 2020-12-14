import React from "react";

import {
  CartItemStyle,
  CartDeleteItemStyle,
  CartProductNameStyle,
  CartInfoBoxSizeStyle,
  CartBoxAdditionsStyle,
  CartAdditionsStyle,
  CartProductSumStyle,
} from "../../../styles/CartPageStyles";

const CartListItem = ({
  itemCart,
  idItemCart,
  pricesInCart,
  handleDeleteItemCart,
}) => {
  const { price, ingredients, sauces } = itemCart;

  const pricesInCartItem = pricesInCart.find((price) => {
    return price.id === itemCart.id;
  });

  const {
    primaryPrice,
    ingredientPrice,
    saucesPrice,
    fullPrice,
  } = pricesInCartItem;

  const ingredientsList = ingredients
    .map((ingredient) => {
      return ingredient.name;
    })
    .join(", ");

  const saucesList = sauces
    .map((sauce) => {
      return sauce.name;
    })
    .join(", ");

  return (
    <CartItemStyle key={`${itemCart.name}-${idItemCart}`}>
      <CartDeleteItemStyle onClick={() => handleDeleteItemCart(itemCart.id)}>
        <i className="fas fa-times"></i>
      </CartDeleteItemStyle>
      <CartProductNameStyle>{itemCart.name} </CartProductNameStyle>

      <CartInfoBoxSizeStyle>
        <span>{`(${price.name} / ${price.size}cm) -`}</span>
        <span style={{ fontWeight: "600" }}> {primaryPrice}$</span>
      </CartInfoBoxSizeStyle>

      {ingredientsList.length !== 0 && (
        <CartBoxAdditionsStyle>
          <CartAdditionsStyle titleAddition>
            extra ingredients: <span>{`(+${ingredientPrice}$)`}</span>
          </CartAdditionsStyle>
          <CartAdditionsStyle>{ingredientsList}</CartAdditionsStyle>
        </CartBoxAdditionsStyle>
      )}

      {saucesList.length !== 0 && (
        <CartBoxAdditionsStyle>
          <CartAdditionsStyle titleAddition>
            sauces: <span>{`(+${saucesPrice}$)`}</span>
          </CartAdditionsStyle>
          <CartAdditionsStyle>{saucesList}</CartAdditionsStyle>
        </CartBoxAdditionsStyle>
      )}

      <CartProductSumStyle>sum: {fullPrice}$</CartProductSumStyle>
    </CartItemStyle>
  );
};

export default CartListItem;
