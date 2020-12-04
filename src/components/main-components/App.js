import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RouteSections from "./RouteSections";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [shoppingCartLength, setShoppingCartLength] = useState(0);

  const handleCountItemInCart = (shoppingCart) => {
    setShoppingCartLength(shoppingCart.length);
  };

  const handleClearShoppingCartLength = () => {
    setShoppingCartLength(0);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header shoppingCartLength={shoppingCartLength} />
        <RouteSections
          handleCountItemInCart={handleCountItemInCart}
          handleClearShoppingCartLength={handleClearShoppingCartLength}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
