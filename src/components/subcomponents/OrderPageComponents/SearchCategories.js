import React from "react";
import SearchCategory from "./SearchCategory";

import { MenuCategoriesStyle } from "../../../styles/OrderPageStyles";

const SearchCategories = ({ menuCategories, handleMenuItemsCategories }) => {
  const categoriesList = menuCategories.map((category) => {
    return (
      <SearchCategory
        key={category.name}
        category={category}
        handleMenuItemsCategories={handleMenuItemsCategories}
      />
    );
  });

  return <MenuCategoriesStyle>{categoriesList}</MenuCategoriesStyle>;
};

export default SearchCategories;
