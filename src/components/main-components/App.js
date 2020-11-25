import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RouteSections from "./RouteSections";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <RouteSections />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
