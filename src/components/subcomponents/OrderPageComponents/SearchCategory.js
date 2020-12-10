import React from "react";

import { MenuCategoryStyle } from "../../../styles/OrderPageStyles";

const SearchCategory = ({ category, handleMenuItemsCategories }) => {
  return (
    <MenuCategoryStyle
      choosedCategory={category.choosed}
      onClick={() => handleMenuItemsCategories(category.name)}
    >
      {category.name}
    </MenuCategoryStyle>
  );
};

export default SearchCategory;
