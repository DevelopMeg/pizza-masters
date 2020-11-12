import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleOpenNewPage = (path) => {
    history.push(path);
  };

  return (
    <header>
      <h1>
        <NavLink to="/">pizza masters</NavLink>
      </h1>

      <button onClick={() => handleOpenNewPage("/order")}>
        <i className="fas fa-pizza-slice"></i>
        order pizza
      </button>

      <button onClick={() => handleOpenNewPage("/cart")}>
        <i className="fas fa-shopping-cart"></i>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
