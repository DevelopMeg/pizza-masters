import styled from "styled-components";
import { ButtonStyle } from "./CommonStyles";

import srcCartImage from "../images/cart-image.jpg";
import srcFinishOrderImage from "../images/finished-order-image.png";

export const CartSectionStyle = styled.section`
  padding-bottom: 30px;

  @media (min-width: 1024px) {
    padding-bottom: 40px;
  }
`;

export const CartImageStyle = styled.div`
  margin: 25px 0 30px;
  height: 220px;
  background-image: url(${srcCartImage});
  background-size: cover;

  @media (min-width: 480px) {
    height: 270px;
  }

  @media (min-width: 1024px) {
    margin: 30px 0 40px;
    background-position-y: center;
  }

  @media (min-width: 1024px) {
    height: 210px;
  }
`;

export const CartListStyle = styled.ol`
  padding: 0;
  margin: 0 auto;
  width: 90%;
  list-style: none;
  counter-reset: li;

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 88%;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }

  @media (min-width: 1900px) {
    width: 78%;
  }
`;

export const CartItemStyle = styled.li`
  border: ${({ theme }) => `3px dotted ${theme.colors.gray.basic}`};
  background-color: ${({ theme }) => `${theme.colors.gray.medium}`};

  margin: 30px 0;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  counter-increment: li;

  :first-child {
    margin-top: 0;
  }

  ::before {
    color: ${({ theme }) => `${theme.colors.red.intensedark}`};

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -28px;
    font-size: 2.2rem;
    font-weight: 600;
    content: counter(li);
  }

  @media (min-width: 1024px) {
    flex-basis: 46%;
    margin: 0 0 40px;
    padding: 10px 20px 15px;

    ::before {
      left: -32px;
      font-size: 2.6rem;
    }
  }

  @media (min-width: 1900px) {
    flex-basis: 44%;
  }
`;

export const CartDeleteItemStyle = styled.div`
  color: ${({ theme }) => `${theme.colors.red.intensedark}`};

  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 2.4rem;

  @media (min-width: 1024px) {
    top: 6px;
    right: 14px;
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const CartProductNameStyle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  letter-spacing: 2px;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const CartInfoBoxSizeStyle = styled.p`
  margin-top: 2px;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    margin-top: 4px;
    font-size: 2rem;
  }
`;

export const CartBoxAdditionsStyle = styled.div`
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const CartAdditionsStyle = styled.p`
  font-weight: ${(props) => (props.titleAddition ? "600" : "300")};

  margin: 4px 0;
`;

export const CartProductSumStyle = styled.h4`
  border-top: ${({ theme }) => `3px double ${theme.colors.gray.basic}`};

  padding-top: 10px;
  margin: 20px 0 0;
  font-size: 1.8rem;
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const CartSumStyle = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const CartSumAmountStyle = styled.span`
  font-weight: 600;
  font-size: 1.8rem;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const CartButtonOrderStyle = styled(ButtonStyle)`
  border: ${({ theme }) => `3px double ${theme.colors.red.intensedark}`};
  background-color: ${({ theme }) => `${theme.colors.powderred.medium}`};
  color: ${({ theme }) => `${theme.colors.red.intensedark}`};

  margin: 0 auto;
  padding: 6px 50px;

  :disabled {
    background-color: ${({ theme }) => `${theme.colors.gray.basic}`};
    border-color: ${({ theme }) => `${theme.colors.gray.dark}`};
    color: ${({ theme }) => `${theme.colors.gray.dark}`};
  }

  @media (min-width: 1024px) {
    padding: 8px 80px;
    letter-spacing: 2px;
  }
`;

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
    height: 330px;
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
