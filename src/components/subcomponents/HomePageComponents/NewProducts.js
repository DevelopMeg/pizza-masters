import React from "react";

import NewProductsSlider from "./NewProductsSlider";

const NewProducts = ({ menuItems }) => {
  return (
    <section>
      <div></div>
      <section>
        <h2>new pizzas!</h2>
        <NewProductsSlider menuItems={menuItems} />
      </section>
    </section>
  );
};

export default NewProducts;
