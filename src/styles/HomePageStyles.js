import styled from "styled-components";
import { ButtonStyle } from "./CommonStyles";

import srcNewProductsMainImage from "../images/new-products-main-image.jpg";

export const BoxMainImageStyle = styled.div`
  margin: 25px auto;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 35px auto 60px;
  }

  @media (min-width: 1400px) {
    margin: 45px auto 65px;
  }
`;

// ORDER STEPS

export const StepsStyle = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin: 45px auto;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
  }

  @media (min-width: 1900px) {
    width: 80%;
  }
`;

export const StepStyle = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StepNumberStyle = styled.span`
  box-shadow: ${({ theme }) => `0 0 2px 2px ${theme.colors.red.basic}`};

  border: 2px solid #fff;
  height: 34px;
  width: 34px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: #fff;

  @media (min-width: 1024px) {
    height: 40px;
    width: 40px;
    font-size: 2rem;
    cursor: default;
  }

  @media (min-width: 1300px) {
    height: 46px;
    width: 46px;
    font-size: 2.4rem;
  }
`;

export const StepNameStyle = styled.p`
  margin: 10px 0 0;
  font-size: 1.4rem;

  @media (min-width: 400px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1300px) {
    font-size: 1.8rem;
  }
`;

export const StepButtonOrderStyle = styled(ButtonStyle)`
  background-color: ${({ theme }) => `${theme.colors.red.basic}`};

  border: 4px double #fff;
  padding: 8px 55px;
  margin: 0 auto 25px;
  color: #fff;

  @media (min-width: 1024px) {
    margin-bottom: 40px;
    padding: 12px 80px;
  }
`;

export const StepBoxArrowStyle = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: relative;

    :last-child {
      display: none;
    }
  }
`;

export const StepArrowStyle = styled.svg`
  display: none;

  @media (min-width: 1024px) {
    fill: ${({ theme }) => `${theme.colors.red.basic}`};

    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
  }
`;

export const StepArrowSignStyle = styled.path`
  width: 40px;
`;

// NEW PRODUCTS

export const NewProductsSectionStyle = styled.section`
  margin-bottom: 30px;
`;

export const NewProductsImageStyle = styled.div`
  position: relative;
  height: 400px;
  background-image: url(${srcNewProductsMainImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: 90% 100px;
  opacity: 0.8;

  @media (min-width: 1024px) {
    height: 280px;
  }

  @media (min-width: 1600px) {
    background-position: -150px 85px;
  }
`;

export const SliderSectionStyle = styled.section`
  background-color: ${({ theme }) => `${theme.colors.orange.light}`};

  padding: 20px 2px 30px;

  @media (min-width: 1024px) {
    padding: 30px 0;
  }
`;

export const SliderBoxStyle = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;

  @media (min-width: 1024px) {
    margin: 30px auto 20px;
    width: 70%;
  }

  @media (min-width: 1900px) {
    width: 65%;
  }
`;

export const SliderItemStyle = styled.section`
  min-width: 100%;
  transform: translateX(${(props) => props.positionSlider}px);
  transition: transform 0.8s;
  text-align: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 40% 45%;
    justify-content: center;
  }
`;

export const SliderItemTitleStyle = styled.h4`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1.8rem;

  @media (min-width: 1024px) {
    margin: 0;
    font-size: 2.4rem;
    grid-row: 1/2;
    grid-column: 2/3;
    align-self: center;
  }
`;

export const SliderItemImageStyle = styled.img`
  width: 240px;
  height: 240px;

  @media (min-width: 1024px) {
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: center;
  }
`;

export const SliderItemTextStyle = styled.p`
  margin: 15px auto 30px;
  width: 80%;
  line-height: 22px;

  @media (min-width: 1024px) {
    margin: 10px auto 0;
    width: 90%;
    font-size: 2.2rem;
    grid-row: 2/3;
    grid-column: 2/3;
    line-height: 30px;
  }
`;

export const SliderButtonStyle = styled(ButtonStyle)`
  left: ${(props) => props.positionLeft && 0};
  right: ${(props) => props.positionRight && 0};
  color: ${({ theme }) => `${theme.colors.gray.dark}`};

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  background-color: transparent;
  font-size: 3.4rem;
  letter-spacing: 0;

  @media (min-width: 400px) {
    font-size: 3.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const DotsStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const DotStyle = styled.span`
  background-color: ${(props) =>
    props.chooseDot ? `${props.theme.colors.gray.basic}` : "#fff"};
  border: ${({ theme }) => `2px solid ${theme.colors.gray.dark}`};

  margin: 0 6px;
  width: 24px;
  height: 24px;
  display: block;
  border-radius: 50%;
  outline: 1px solid transparent;

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
