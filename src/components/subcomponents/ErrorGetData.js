import React from "react";

import {
  ErrorGetDataBoxStyle,
  LoadingBoxStyle,
  LoadingItemStyle,
} from "../../styles/ErrorGetDataStyles";

const ErrorGetData = ({ name }) => {
  return (
    <ErrorGetDataBoxStyle name={name}>
      <LoadingBoxStyle>
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
        <LoadingItemStyle />
      </LoadingBoxStyle>
    </ErrorGetDataBoxStyle>
  );
};

export default ErrorGetData;
