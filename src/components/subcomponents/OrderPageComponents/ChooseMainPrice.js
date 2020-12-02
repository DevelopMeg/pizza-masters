import React from "react";

const ChooseMainPrice = ({ item, choosePrice, handleChangeChoosePrice }) => {
  const nameItem = item.name.toLowerCase();

  const formSize = choosePrice.map((price) => {
    const name = `${price.name}-${price.size}`;

    return (
      <div key={price.name}>
        <input
          type="checkbox"
          id={`${price.name} ${nameItem}`}
          name={name}
          checked={price.checked}
          onChange={() => handleChangeChoosePrice(name)}
        />
        <label htmlFor={`${price.name} ${nameItem}`}>
          <span>{`${price.name} (${price.size} cm) -`} </span>
          <span style={{ fontWeight: "700", color: "#ce6b6b" }}>
            {`${price.price}$`}
          </span>
        </label>
      </div>
    );
  });

  return <div>{formSize}</div>;
};

export default ChooseMainPrice;
