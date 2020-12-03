import React, { useEffect } from "react";

const CartPage = ({}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <h2 extraMargin>Your shopping list</h2>

      <button>order now</button>
    </section>
  );
};

export default CartPage;
