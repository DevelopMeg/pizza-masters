import React from "react";

import {
  MenuCheckboxListStyle,
  MenuCheckboxItemStyle,
  MenuCheckboxInputStyle,
  MenuCheckboxNameStyle,
} from "../../../styles/OrderPageStyles";

const ChooseMainPrice = ({ item, choosePrice, handleChangeChoosePrice }) => {
  const nameItem = item.name.toLowerCase();

  const formSize = choosePrice.map((price) => {
    const name = `${price.name}-${price.size}`;

    return (
      <MenuCheckboxItemStyle key={price.name}>
        <MenuCheckboxInputStyle
          type="checkbox"
          id={`${price.name} ${nameItem}`}
          name={name}
          checked={price.checked}
          onChange={() => handleChangeChoosePrice(name)}
        />
        <MenuCheckboxNameStyle htmlFor={`${price.name} ${nameItem}`}>
          <span>{`${price.name} (${price.size} cm) -`} </span>
          <span style={{ fontWeight: "700", color: "#ce6b6b" }}>
            {`${price.price}$`}
          </span>
        </MenuCheckboxNameStyle>
      </MenuCheckboxItemStyle>
    );
  });

  return <MenuCheckboxListStyle>{formSize}</MenuCheckboxListStyle>;
};

export default ChooseMainPrice;
