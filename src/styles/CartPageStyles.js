import styled from "styled-components";
import { ButtonStyle } from "./CommonStyles";

import srcFinishOrderImage from "../images/finished-order-image.png";

// FINISH ORDER PAGE

export const FinishOrderImageStyle = styled.div`
  margin: 30px auto;
  display: block;
  background-image: url(${srcFinishOrderImage});
  background-size: cover;
  background-position: center center;
  height: 200px;
  width: 80%;

  @media (min-width: 480px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 420px;
  }

  @media (min-width: 1800px) {
    width: 40%;
  }
`;

export const FinishedOrderTitleStyle = styled.h3`
  color: ${({ theme }) => `${theme.colors.red.dark}`};

  margin: 30px auto;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 24px;
  font-size: 2rem;

  @media (min-width: 1024px) {
    margin: 45px auto;
    font-size: 2.4rem;
  }
`;

export const FinishOrderButtonStyle = styled(ButtonStyle)`
  box-shadow: ${({ theme }) =>
    `0px 0px 2px 2px ${theme.colors.red.intensedark}`};
  color: ${({ theme }) => ` ${theme.colors.red.intensedark}`};

  padding: 10px 50px;
  margin: 20px auto;
  border-radius: 4px;

  @media (min-width: 1024px) {
    padding: 10px 80px;
  }
`;
