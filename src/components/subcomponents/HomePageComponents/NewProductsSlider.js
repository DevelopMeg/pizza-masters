import React, { useState, useRef } from "react";
import NewProductsSliderDots from "./NewProductsSliderDots";

import sliderImageOne from "../../../images/new-product-image-1.png";
import sliderImageTwo from "../../../images/new-product-image-2.png";
import sliderImageThree from "../../../images/new-product-image-3.png";

import { IconHiddenStyle } from "../../../styles/CommonStyles";
import {
  SliderBoxStyle,
  SliderItemStyle,
  SliderItemTitleStyle,
  SliderItemImageStyle,
  SliderItemTextStyle,
  SliderButtonStyle,
} from "../../../styles/HomePageStyles";

const NewProductsSlider = ({ menuItems }) => {
  // new products

  let newProducts = [];

  menuItems.forEach((item) => {
    const result = item.categories.includes("new");
    result && newProducts.push(item);
  });

  const newProductImages = [sliderImageOne, sliderImageTwo, sliderImageThree];

  const newProductsData = newProducts.map((product, productId) => {
    const productImage = newProductImages.find((image, idImage) => {
      return idImage === productId;
    });

    return {
      product,
      productImage,
    };
  });

  // slider

  const sectionSlider = useRef();

  const [sliderCounter, setSliderCounter] = useState(0);

  const handlePrevProduct = () => {
    if (sliderCounter !== 0) {
      setSliderCounter((prev) => prev - 1);
    } else {
      setSliderCounter(newProductsData.length - 1);
    }
  };

  const handleNextProduct = () => {
    if (sliderCounter !== newProductsData.length - 1) {
      setSliderCounter((prev) => prev + 1);
    } else {
      setSliderCounter(0);
    }
  };

  const widthProduct =
    sectionSlider.current !== undefined && sectionSlider.current.offsetWidth;

  const positionSlider = -sliderCounter * widthProduct;

  const newProductsList = newProductsData.map((item) => {
    const { product, productImage } = item;

    return (
      <SliderItemStyle
        key={`${product.name}-slider`}
        ref={sectionSlider}
        positionSlider={positionSlider}
      >
        <SliderItemTitleStyle>{product.name}</SliderItemTitleStyle>

        <SliderItemImageStyle src={productImage} alt="new pizza" />

        <SliderItemTextStyle>{product.ingredients}</SliderItemTextStyle>
      </SliderItemStyle>
    );
  });

  return (
    <section>
      <SliderBoxStyle>
        {newProductsData.length !== 0 && newProductsList}

        <SliderButtonStyle positionLeft onClick={handlePrevProduct}>
          <IconHiddenStyle className="fas fa-angle-left"></IconHiddenStyle>
        </SliderButtonStyle>

        <SliderButtonStyle positionRight onClick={handleNextProduct}>
          <IconHiddenStyle className="fas fa-angle-right"></IconHiddenStyle>
        </SliderButtonStyle>
      </SliderBoxStyle>

      {newProducts.length !== 0 && (
        <NewProductsSliderDots
          newProducts={newProducts}
          sliderCounter={sliderCounter}
          setSliderCounter={setSliderCounter}
        />
      )}
    </section>
  );
};

export default NewProductsSlider;
