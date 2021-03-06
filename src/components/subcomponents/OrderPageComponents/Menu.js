import React, { useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";

import { MenuListStyle } from "../../../styles/OrderPageStyles";

import gsap from "gsap";

const Menu = ({
  menuItems,
  menuSauces,
  menuExtraIngredients,
  menuItemsCategories,
  shoppingCart,
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
          shoppingCart={shoppingCart}
          handleShoppingCart={handleShoppingCart}
          menuSauces={menuSauces}
          menuExtraIngredients={menuExtraIngredients}
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

  // ANIMATIONS GSAP

  const refMenuList = useRef();

  useEffect(() => {
    const elementsMenuList = refMenuList.current;

    gsap.fromTo(
      elementsMenuList,
      { autoAlpha: 0, y: "+=100" },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <MenuListStyle ref={refMenuList}>
      {menuCategoryList.length === 0 ? menuList : menuCategoryList}
    </MenuListStyle>
  );
};

export default Menu;
