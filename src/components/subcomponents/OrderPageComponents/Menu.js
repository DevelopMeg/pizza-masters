import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({
  menuItems,
  menuSauces,
  menuExtraIngredients,
  menuItemsCategories,
  handleShoppingCart,
}) => {
  const initialStatusOpenAdditions = () => {
    return menuItems.map((item) => {
      return {
        name: item.name,
        status: false,
      };
    });
  };

  const [statusOpenAdditions, setStatusOpenAdditions] = useState(
    initialStatusOpenAdditions
  );

  const handleSetStatusOpenAdditions = (name) => {
    setStatusOpenAdditions(
      statusOpenAdditions.map((item) => {
        return name === item.name
          ? { ...item, status: !item.status }
          : { ...item, status: false };
      })
    );
  };

  const handleSetStatusCloseAdditions = (e) => {
    e.preventDefault();

    setStatusOpenAdditions(
      statusOpenAdditions.map((item) => {
        return { ...item, status: false };
      })
    );

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const menuItem = (item) => {
    return (
      menuSauces.length !== 0 &&
      menuExtraIngredients.length !== 0 && (
        <MenuItem
          key={item.name}
          item={item}
          statusOpenAdditions={statusOpenAdditions}
          handleSetStatusOpenAdditions={handleSetStatusOpenAdditions}
          handleSetStatusCloseAdditions={handleSetStatusCloseAdditions}
          menuSauces={menuSauces}
          menuExtraIngredients={menuExtraIngredients}
          handleShoppingCart={handleShoppingCart}
        />
      )
    );
  };

  const menuList = menuItems.map((item) => {
    return menuItem(item);
  });

  const menuCategoryList = menuItemsCategories.map((item) => {
    return menuItem(item);
  });

  return <ul>{menuCategoryList.length === 0 ? menuList : menuCategoryList}</ul>;
};

export default Menu;
