import React, { useEffect } from "react";

import OrderSteps from "../subcomponents/HomePageComponents/OrderSteps";
import NewProducts from "../subcomponents/HomePageComponents/NewProducts";
import Team from "../subcomponents/HomePageComponents/Team";
import Contact from "../subcomponents/HomePageComponents/Contact";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OrderSteps />
      <NewProducts />
      <Team />
      <Contact />
    </>
  );
};

export default HomePage;
