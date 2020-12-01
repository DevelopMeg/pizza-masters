import React from "react";

const MenuItem = ({ item }) => {
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

        <h4>choose extra ingredients:</h4>

        <h4>choose sauce:</h4>

        <button>add pizza to cart</button>
      </form>
    </li>
  );
};

export default MenuItem;
