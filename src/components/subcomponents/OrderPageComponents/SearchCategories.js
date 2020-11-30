import React from "react";
import SearchCategory from "./SearchCategory";

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

  return <ul>{categoriesList}</ul>;
};

export default SearchCategories;
