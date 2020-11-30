import React from "react";

const SearchCategory = ({ category, handleMenuItemsCategories }) => {
  return (
    <li
      choosedCategory={category.choosed}
      onClick={() => handleMenuItemsCategories(category.name)}
    >
      {category.name}
    </li>
  );
};

export default SearchCategory;
