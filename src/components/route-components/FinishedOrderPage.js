import React from "react";

import { useHistory } from "react-router-dom";

import {
  FinishOrderImageStyle,
  FinishedOrderTitleStyle,
  FinishOrderButtonStyle,
} from "../../styles/CartPageStyles";

const FinishedOrderPage = () => {
  const history = useHistory();

  const handleComeBackToHomePage = () => {
    history.push("/");
  };

  return (
    <>
      <FinishOrderImageStyle></FinishOrderImageStyle>
      <FinishedOrderTitleStyle>
        Congratulations finished your order!
      </FinishedOrderTitleStyle>
      <FinishOrderButtonStyle onClick={handleComeBackToHomePage}>
        come back
      </FinishOrderButtonStyle>
    </>
  );
};

export default FinishedOrderPage;
