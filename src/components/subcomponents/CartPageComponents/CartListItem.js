import React from "react";

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
    <li key={`${itemCart.name}-${idItemCart}`}>
      <div onClick={() => handleDeleteItemCart(itemCart.id)}>
        <i className="fas fa-times"></i>
      </div>

      <h3>{itemCart.name} </h3>

      <p>
        <span>{`(${price.name} / ${price.size}cm) -`}</span>
        <span style={{ fontWeight: "600" }}> {primaryPrice}$</span>
      </p>

      {ingredientsList.length !== 0 && (
        <div>
          <p titleAddition>
            extra ingredients: <span>{`(+${ingredientPrice}$)`}</span>
          </p>
          <p>{ingredientsList}</p>
        </div>
      )}

      {saucesList.length !== 0 && (
        <div>
          <p titleAddition>
            sauces: <span>{`(+${saucesPrice}$)`}</span>
          </p>
          <p>{saucesList}</p>
        </div>
      )}

      <h4>sum: {fullPrice}$</h4>
    </li>
  );
};

export default CartListItem;
