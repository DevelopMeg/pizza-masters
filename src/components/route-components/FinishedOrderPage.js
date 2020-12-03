import React from "react";
import { useHistory } from "react-router-dom";

const FinishedOrderPage = () => {
  const history = useHistory();

  const handleComeBackToHomePage = () => {
    history.push("/");
  };

  return (
    <>
      <h3>Congratulations finished your order!</h3>
      <button onClick={handleComeBackToHomePage}>come back</button>
    </>
  );
};

export default FinishedOrderPage;
