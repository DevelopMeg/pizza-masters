import React, { useState, useEffect } from "react";
import SearchCategories from "../subcomponents/OrderPageComponents/SearchCategories";
import Menu from "../subcomponents/OrderPageComponents/Menu";

import { SectionTitleStyle } from "../../styles/CommonStyles";
import { MenuImageStyle } from "../../styles/OrderPageStyles";

const OrderPage = ({
  menuItems,
  menuExtraIngredients,
  menuSauces,
  shoppingCart,
  handleShoppingCart,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // CATEGORIES MENU

  const initialMenuCategories = [
    { name: "all", choosed: false },
    { name: "popular", choosed: false },
    { name: "meat pizza", choosed: false },
    { name: "seafood pizza", choosed: false },
    { name: "vege pizza", choosed: false },
  ];

  const [menuCategories, setMenuCategories] = useState(initialMenuCategories);

  const [menuItemsCategories, setMenuItemsCategories] = useState([]);

  const handleChoosedMenuCategories = (chooseCategory) => {
    setMenuCategories(
      menuCategories.map((category) => {
        return category.name === chooseCategory
          ? { ...category, choosed: true }
          : { ...category, choosed: false };
      })
    );
  };

  const handleMenuItemsCategories = (categoryName) => {
    let categoryForItem = [];

    menuItems.forEach((item) => {
      const result = item.categories.includes(categoryName);
      result && categoryForItem.push(item);
    });

    if (categoryName !== "all") {
      setMenuItemsCategories(categoryForItem);
    } else {
      setMenuItemsCategories([]);
    }

    handleChoosedMenuCategories(categoryName);
  };

  return (
    <section>
      <SectionTitleStyle extraMargin>choose your pizza</SectionTitleStyle>

      <SearchCategories
        menuCategories={menuCategories}
        handleMenuItemsCategories={handleMenuItemsCategories}
      />

      <MenuImageStyle />

      {menuItems.length !== 0 && (
        <Menu
          menuItems={menuItems}
          menuExtraIngredients={menuExtraIngredients}
          menuSauces={menuSauces}
          menuItemsCategories={menuItemsCategories}
          shoppingCart={shoppingCart}
          handleShoppingCart={handleShoppingCart}
        />
      )}
    </section>
  );
};

export default OrderPage;
