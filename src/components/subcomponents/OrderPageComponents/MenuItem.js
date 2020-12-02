import React, { useState } from "react";
import ChooseAdditions from "./ChooseAdditions";
import ChooseMainPrice from "./ChooseMainPrice";

const MenuItem = ({
  item,
  menuSauces,
  menuExtraIngredients,
  statusOpenAdditions,
  handleSetStatusOpenAdditions,
  handleSetStatusCloseAdditions,
}) => {
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

  // choose additions

  const initialSetIngredient = () => {
    return menuExtraIngredients.map((ingredient) => {
      return {
        name: ingredient.name,
        price: ingredient.price,
        checked: false,
      };
    });
  };

  const [chooseIngredients, setChooseIngredients] = useState(
    initialSetIngredient
  );

  const initialSetSauces = () => {
    return menuSauces.map((sauce) => {
      return {
        name: sauce.name,
        price: sauce.price,
        checked: false,
      };
    });
  };

  const [chooseSauces, setChooseSauces] = useState(initialSetSauces);

  const handleChangeChooseAdditions = (
    nameAdditions,
    name,
    chooseAdditions
  ) => {
    const result = chooseAdditions.map((item) => {
      return item.name === name ? { ...item, checked: !item.checked } : item;
    });

    if (nameAdditions === "ingredients") {
      setChooseIngredients(result);
    } else if (nameAdditions === "sauces") {
      setChooseSauces(result);
    }
  };

  // button add to cart

  const statusChoosePrice = choosePrice.filter((price) => {
    return price.checked;
  });

  // status open additions

  let status;

  statusOpenAdditions.forEach((itemStatus) => {
    if (item.name === itemStatus.name) {
      status = itemStatus.status;
    }
  });

  return (
    <li status={status}>
      <section>
        <div>
          <h3>
            {item.name} {categoriesIcons}
          </h3>

          <p>{item.ingredients}</p>
          <p>{`from ${item.prices[0].price} $`}</p>
        </div>

        <button onClick={() => handleSetStatusOpenAdditions(item.name)}>
          <i className="fas fa-plus"></i>
        </button>
      </section>

      <form status={status}>
        <h4>choose size pizza:</h4>
        <ChooseMainPrice
          item={item}
          choosePrice={choosePrice}
          handleChangeChoosePrice={handleChangeChoosePrice}
        />

        <h4>choose extra ingredients:</h4>
        {chooseIngredients.length !== 0 && (
          <ChooseAdditions
            item={item}
            nameAdditions="ingredients"
            chooseAdditions={chooseIngredients}
            handleChangeChooseAdditions={handleChangeChooseAdditions}
          />
        )}

        <h4>choose sauce:</h4>
        {chooseSauces.length !== 0 && (
          <ChooseAdditions
            item={item}
            nameAdditions="sauces"
            chooseAdditions={chooseSauces}
            handleChangeChooseAdditions={handleChangeChooseAdditions}
          />
        )}

        <button
          disabled={statusChoosePrice.length === 0 ? true : false}
          onClick={(e) => {
            handleSetStatusCloseAdditions(e);
          }}
        >
          add pizza to cart
        </button>
      </form>
    </li>
  );
};

export default MenuItem;
