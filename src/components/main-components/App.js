import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
