import React from "react";

import { NavLink, useHistory } from "react-router-dom";

import {
  HeaderBoxStyle,
  HeaderTitleStyle,
  HeaderButtonOrderStyle,
  HeaderButtonCartStyle,
  HeaderIconStyle,
  HeaderCounterCartStyle,
} from "../../styles/HeaderStyles";

const Header = ({ shoppingCartLength }) => {
  const history = useHistory();

  const handleOpenNewPage = (path) => {
    history.push(path);
  };

  return (
    <HeaderBoxStyle>
      <HeaderTitleStyle>
        <NavLink to="/">pizza masters</NavLink>
      </HeaderTitleStyle>

      <HeaderButtonOrderStyle onClick={() => handleOpenNewPage("/order")}>
        <HeaderIconStyle className="fas fa-pizza-slice"></HeaderIconStyle>
        <span>order pizza</span>
      </HeaderButtonOrderStyle>

      <HeaderButtonCartStyle onClick={() => handleOpenNewPage("/cart")}>
        <HeaderIconStyle className="fas fa-shopping-cart"></HeaderIconStyle>
        <HeaderCounterCartStyle>{shoppingCartLength}</HeaderCounterCartStyle>
      </HeaderButtonCartStyle>
    </HeaderBoxStyle>
  );
};

export default Header;
