import React, { useState } from "react";
import Header from "./Header";
import RouteSections from "./RouteSections";
import Footer from "./Footer";

import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "../../styles/GlobalStyles";

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
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header shoppingCartLength={shoppingCartLength} />
          <main>
            <RouteSections
              handleCountItemInCart={handleCountItemInCart}
              handleClearShoppingCartLength={handleClearShoppingCartLength}
            />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
