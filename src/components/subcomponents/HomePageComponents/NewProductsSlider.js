import React, { useState, useRef } from "react";

import NewProductsSliderDots from "./NewProductsSliderDots";

import newProductImage1 from "../../../images/new-product-image-1.png";
import newProductImage2 from "../../../images/new-product-image-2.png";
import newProductImage3 from "../../../images/new-product-image-3.png";

const NewProductsSlider = ({ menuItems }) => {
  // new products

  let newProducts = [];

  menuItems.forEach((item) => {
    const result = item.categories.includes("new");
    result && newProducts.push(item);
  });

  const newProductImages = [
    newProductImage1,
    newProductImage2,
    newProductImage3,
  ];

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
      <section
        key={`${product.name}-slider`}
        ref={sectionSlider}
        positionSlider={positionSlider}
      >
        <h4>{product.name}</h4>

        <img src={productImage} alt="new pizza" />

        <p>{product.ingredients}</p>
      </section>
    );
  });

  return (
    <>
      <div>
        {newProductsData.length !== 0 && newProductsList}

        <button onClick={handlePrevProduct}>
          <i className="fas fa-angle-left"></i>
        </button>

        <button onClick={handleNextProduct}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>

      {newProducts.length !== 0 && (
        <NewProductsSliderDots
          newProducts={newProducts}
          sliderCounter={sliderCounter}
          setSliderCounter={setSliderCounter}
        />
      )}
    </>
  );
};

export default NewProductsSlider;
