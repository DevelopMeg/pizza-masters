import React, { useState, useEffect } from "react";

const NewProductsSliderDots = ({
  newProducts,
  sliderCounter,
  setSliderCounter,
}) => {
  const initialInfoDots = () => {
    return newProducts.map((product, id) => {
      return {
        id,
        chooseDot: false,
      };
    });
  };

  const [infoDots, setInfoDots] = useState(initialInfoDots);

  // useEffect

  useEffect(() => {
    setInfoDots(
      infoDots.map((infoDot) => {
        return sliderCounter === infoDot.id
          ? { ...infoDot, chooseDot: true }
          : { ...infoDot, chooseDot: false };
      })
    );
  }, [sliderCounter]);

  const handleDots = (idDot) => {
    setSliderCounter(idDot);

    setInfoDots(
      infoDots.map((infoDot) => {
        return idDot === infoDot.id
          ? { ...infoDot, chooseDot: true }
          : { ...infoDot, chooseDot: false };
      })
    );
  };

  const dots = infoDots.map((infoDot) => {
    return (
      <span
        key={infoDot.id}
        onClick={() => handleDots(infoDot.id)}
        chooseDot={infoDot.chooseDot}
      ></span>
    );
  });

  return <div>{infoDots.length !== 0 && dots}</div>;
};

export default NewProductsSliderDots;
