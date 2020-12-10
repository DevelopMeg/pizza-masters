import React from "react";

import {
  MenuCheckboxListStyle,
  MenuCheckboxItemStyle,
  MenuCheckboxInputStyle,
  MenuCheckboxNameStyle,
} from "../../../styles/OrderPageStyles";

const ChooseAdditions = ({
  item,
  nameAdditions,
  chooseAdditions,
  handleChangeChooseAdditions,
}) => {
  const nameItem = item.name.toLowerCase();

  const formAdditions = chooseAdditions.map((item) => {
    return (
      <MenuCheckboxItemStyle key={item.name}>
        <MenuCheckboxInputStyle
          type="checkbox"
          id={`${item.name} ${nameItem}`}
          name={item.name}
          checked={item.checked}
          onChange={() => {
            handleChangeChooseAdditions(
              nameAdditions,
              item.name,
              chooseAdditions
            );
          }}
        />
        <MenuCheckboxNameStyle htmlFor={`${item.name} ${nameItem}`}>
          <span>{item.name}</span>
          <span>{` (+ ${item.price}$)`}</span>
        </MenuCheckboxNameStyle>
      </MenuCheckboxItemStyle>
    );
  });

  return <MenuCheckboxListStyle>{formAdditions}</MenuCheckboxListStyle>;
};

export default ChooseAdditions;
