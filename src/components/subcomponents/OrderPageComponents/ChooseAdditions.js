import React from "react";

const ChooseAdditions = ({
  item,
  nameAdditions,
  chooseAdditions,
  handleChangeChooseAdditions,
}) => {
  const nameItem = item.name.toLowerCase();

  const formAdditions = chooseAdditions.map((item) => {
    return (
      <div key={item.name}>
        <input
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
        <label htmlFor={`${item.name} ${nameItem}`}>
          <span>{item.name}</span>
          <span>{` (+ ${item.price}$)`}</span>
        </label>
      </div>
    );
  });

  return <div>{formAdditions}</div>;
};

export default ChooseAdditions;
