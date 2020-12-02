import React, { useState } from "react";
import ChooseAdditions from "./ChooseAdditions";
import ChooseMainPrice from "./ChooseMainPrice";

const MenuItem = ({ item, menuSauces, menuExtraIngredients }) => {
  // icons

  const iconsClass = item.categories.map((category) => {
    if (category === "meat pizza") {
      return "fas fa-bacon";
    } else if (category === "vege pizza") {
      return "fas fa-leaf";
    } else if (category === "seafood pizza") {
      return "fas fa-fish";
    } else if (category === "popular") {
      return "fas fa-star";
    } else {
      return null;
    }
  });

  const categoriesIcons = iconsClass.map((iconClass, id) => {
    return <i key={id} className={iconClass}></i>;
  });

  // prices

  const initialSetPrices = () => {
    return item.prices.map((price) => {
      return {
        name: price.name,
        size: price.size,
        price: price.price,
        checked: false,
      };
    });
  };

  const [choosePrice, setChoosePrice] = useState(initialSetPrices);

  const handleChangeChoosePrice = (name) => {
    setChoosePrice(
      choosePrice.map((item) => {
        return name.includes(item.name)
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false };
      })
    );
  };

  return (
    <li>
      <section>
        <div>
          <h3>
            {item.name} {categoriesIcons}
          </h3>

          <p>{item.ingredients}</p>
          <p>{`from ${item.prices[0].price} $`}</p>
        </div>

        <button>
          <i className="fas fa-plus"></i>
        </button>
      </section>

      <form>
        <h4>choose size pizza:</h4>
        <ChooseMainPrice
          item={item}
          choosePrice={choosePrice}
          handleChangeChoosePrice={handleChangeChoosePrice}
        />

        <h4>choose extra ingredients:</h4>

        <h4>choose sauce:</h4>

        <button>add pizza to cart</button>
      </form>
    </li>
  );
};

export default MenuItem;
