import styled from "styled-components";

import { ButtonStyle } from "./CommonStyles";

export const HeaderBoxStyle = styled.header`
  padding-bottom: 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 4px #000;
  background-color: #fff;
`;

export const HeaderTitleStyle = styled.h1`
  margin: 15px auto;
  width: 100%;
  font-family: "Poiret One", cursive;
  text-transform: uppercase;
  font-size: 2.8rem;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 20px auto;
    font-size: 3.8rem;
  }
`;

export const HeaderButtonOrderStyle = styled(ButtonStyle)`
  border: ${({ theme }) => `2px dashed ${theme.colors.red.light}`};
  color: ${({ theme }) => `${theme.colors.red.basic}`};

  padding: 6px 14px;
  margin-right: 12px;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 9px 40px;
    margin-right: 30px;
    border-width: 3px;
  }
`;

export const HeaderButtonCartStyle = styled(ButtonStyle)`
  border: ${({ theme }) => `2px solid ${theme.colors.red.light}`};

  padding: 4px 10px;
  display: flex;
  align-items: center;
  letter-spacing: 0;

  @media (min-width: 1024px) {
    border-width: 3px;
    padding: 6px 14px;
  }
`;

export const HeaderIconStyle = styled.i`
  color: ${({ theme }) => `${theme.colors.red.basic}`};

  margin-right: 10px;
  font-size: 2rem;

  @media (min-width: 1024px) {
    margin-right: 15px;
    font-size: 2.6rem;
  }
`;

export const HeaderCounterCartStyle = styled.span`
  background-color: ${({ theme }) => `${theme.colors.red.light}`};
  color: ${({ theme }) => `${theme.colors.red.basic}`};

  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 24px;

  @media (min-width: 1024px) {
    height: 34px;
    width: 34px;
    font-size: 2.6rem;
    line-height: 34px;
  }
`;
