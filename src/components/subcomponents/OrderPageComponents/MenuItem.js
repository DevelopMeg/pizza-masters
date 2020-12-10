import React, { useState } from "react";
import ChooseAdditions from "./ChooseAdditions";
import ChooseMainPrice from "./ChooseMainPrice";

import {
  MenuItemStyle,
  MenuItemInfoStyle,
  MenuItemNameStyle,
  MenuItemExtraInfoStyle,
  MenuItemIconNameStyle,
  MenuItemButtonStyle,
  MenuItemAdditionsStyle,
  MenuSubtitleStyle,
  MenuButtonAddToCartStyle,
} from "../../../styles/OrderPageStyles";

const MenuItem = ({
  item,
  statusOpenAdditions,
  handleSetStatusOpenAdditions,
  handleSetStatusCloseAdditions,
  handleShoppingCart,
  menuSauces,
  menuExtraIngredients,
}) => {
  // prices

  const initialSetPrices = () => {
    return item.prices.map((price) => {
      return {
        name: price.name,
        size: price.size,
        price: price.price,
        checked: false,
      };
    });
  };

  const [choosePrice, setChoosePrice] = useState(initialSetPrices);

  const handleChangeChoosePrice = (name) => {
    setChoosePrice(
      choosePrice.map((item) => {
        return name.includes(item.name)
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false };
      })
    );
  };

  // choose additions

  const initialSetIngredient = () => {
    return menuExtraIngredients.map((ingredient) => {
      return {
        name: ingredient.name,
        price: ingredient.price,
        checked: false,
      };
    });
  };

  const [chooseIngredients, setChooseIngredients] = useState(
    initialSetIngredient
  );

  const initialSetSauces = () => {
    return menuSauces.map((sauce) => {
      return {
        name: sauce.name,
        price: sauce.price,
        checked: false,
      };
    });
  };

  const [chooseSauces, setChooseSauces] = useState(initialSetSauces);

  const handleChangeChooseAdditions = (
    nameAdditions,
    name,
    chooseAdditions
  ) => {
    const result = chooseAdditions.map((item) => {
      return item.name === name ? { ...item, checked: !item.checked } : item;
    });

    if (nameAdditions === "ingredients") {
      setChooseIngredients(result);
    } else if (nameAdditions === "sauces") {
      setChooseSauces(result);
    }
  };

  // icons

  const iconsClass = item.categories.map((category) => {
    if (category === "meat pizza") {
      return "fas fa-bacon";
    } else if (category === "vege pizza") {
      return "fas fa-leaf";
    } else if (category === "seafood pizza") {
      return "fas fa-fish";
    } else if (category === "popular") {
      return "fas fa-star";
    } else {
      return null;
    }
  });

  const categoriesIcons = iconsClass.map((iconClass, id) => {
    return (
      <MenuItemIconNameStyle
        key={id}
        className={iconClass}
      ></MenuItemIconNameStyle>
    );
  });

  // button add to cart

  const statusChoosePrice = choosePrice.filter((price) => {
    return price.checked;
  });

  let addedItemToCart;

  const handleAddMenuItemToCart = (e) => {
    e.preventDefault();

    const itemName = item.name;
    const itemPrice = choosePrice.find((price) => {
      return price.checked;
    });

    const itemIngredients = chooseIngredients.filter((ingredient) => {
      return ingredient.checked;
    });

    const itemSauces = chooseSauces.filter((sauce) => {
      return sauce.checked;
    });

    const generateId = Math.random().toString(36).substr(2, 9);

    addedItemToCart = {
      name: itemName,
      price: itemPrice,
      ingredients: itemIngredients,
      sauces: itemSauces,
      id: generateId,
    };

    setChoosePrice(
      choosePrice.map((item) => {
        return { ...item, checked: false };
      })
    );
    setChooseIngredients(
      chooseIngredients.map((item) => {
        return { ...item, checked: false };
      })
    );
    setChooseSauces(
      chooseSauces.map((item) => {
        return { ...item, checked: false };
      })
    );
  };

  let status;

  statusOpenAdditions.forEach((itemStatus) => {
    if (item.name === itemStatus.name) {
      status = itemStatus.status;
    }
  });

  return (
    <MenuItemStyle status={status}>
      <MenuItemInfoStyle>
        <div>
          <MenuItemNameStyle>
            {item.name} {categoriesIcons}
          </MenuItemNameStyle>

          <MenuItemExtraInfoStyle>{item.ingredients}</MenuItemExtraInfoStyle>
          <MenuItemExtraInfoStyle
            smallMargin
            bold
          >{`from ${item.prices[0].price} $`}</MenuItemExtraInfoStyle>
        </div>

        <MenuItemButtonStyle
          onClick={() => handleSetStatusOpenAdditions(item.name)}
        >
          <i className="fas fa-plus"></i>
        </MenuItemButtonStyle>
      </MenuItemInfoStyle>

      <MenuItemAdditionsStyle status={status}>
        <MenuSubtitleStyle>choose size pizza:</MenuSubtitleStyle>
        <ChooseMainPrice
          item={item}
          choosePrice={choosePrice}
          handleChangeChoosePrice={handleChangeChoosePrice}
        />

        <MenuSubtitleStyle>choose extra ingredients:</MenuSubtitleStyle>
        {chooseIngredients.length !== 0 && (
          <ChooseAdditions
            item={item}
            nameAdditions="ingredients"
            chooseAdditions={chooseIngredients}
            handleChangeChooseAdditions={handleChangeChooseAdditions}
          />
        )}

        <MenuSubtitleStyle>choose sauce:</MenuSubtitleStyle>
        {chooseSauces.length !== 0 && (
          <ChooseAdditions
            item={item}
            nameAdditions="sauces"
            chooseAdditions={chooseSauces}
            handleChangeChooseAdditions={handleChangeChooseAdditions}
          />
        )}

        <MenuButtonAddToCartStyle
          disabled={statusChoosePrice.length === 0 ? true : false}
          onClick={(e) => {
            handleSetStatusCloseAdditions(e);
            handleAddMenuItemToCart(e);
            handleShoppingCart(addedItemToCart);
          }}
        >
          add pizza to cart
        </MenuButtonAddToCartStyle>
      </MenuItemAdditionsStyle>
    </MenuItemStyle>
  );
};

export default MenuItem;
