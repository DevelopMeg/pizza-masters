import React from "react";
import NewProductsSlider from "./NewProductsSlider";

import { SectionTitleStyle } from "../../../styles/CommonStyles";
import {
  NewProductsSectionStyle,
  NewProductsImageStyle,
  SliderSectionStyle,
} from "../../../styles/HomePageStyles";

const NewProducts = ({ menuItems }) => {
  return (
    <NewProductsSectionStyle>
      <NewProductsImageStyle></NewProductsImageStyle>

      <SliderSectionStyle>
        <SectionTitleStyle>new pizzas!</SectionTitleStyle>
        <NewProductsSlider menuItems={menuItems} />
      </SliderSectionStyle>
    </NewProductsSectionStyle>
  );
};

export default NewProducts;
