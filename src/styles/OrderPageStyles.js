import styled from "styled-components";
import { ButtonStyle } from "./CommonStyles";

import srcMenuImage from "../images/menu-image.jpg";

// IMAGE

export const MenuImageStyle = styled.div`
  margin: 0 auto;
  background-image: url(${srcMenuImage});
  background-size: cover;
  height: 360px;
  width: 90%;

  @media (min-width: 500px) {
    height: 440px;
    width: 80%;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    height: 220px;
    width: 100%;
    background-position-y: 34%;
  }

  @media (min-width: 1400px) {
    width: 95%;
  }
`;

// MENU CATEGORIES

export const MenuCategoriesStyle = styled.ul`
  margin: 24px auto;
  padding-left: 0;
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  list-style: none;

  @media (min-width: 500px) {
    width: 85%;
  }

  @media (min-width: 1024px) {
    margin: 30px auto;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1400px) {
    width: 95%;
  }
`;

export const MenuCategoryStyle = styled.li`
  background-color: ${({ theme }) => `${theme.colors.orange.medium}`};
  color: ${({ theme }) => `${theme.colors.powderred.dark}`};

  padding: 12px 0;
  margin-bottom: 10px;
  position: relative;
  flex-basis: 48%;
  text-transform: uppercase;
  border-radius: 40px;
  font-weight: 700;

  :nth-child(1) {
    flex-basis: 54%;
  }

  ::before {
    background-color: ${({ theme }) => `${theme.colors.orange.dark}`};

    content: "";
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translateX(-50%);
    display: block;
    width: 25%;
    height: 2px;
    border-radius: 30px;
    opacity: ${(props) => (props.choosedCategory ? "1" : "0")};
  }

  @media (min-width: 500px) {
    margin-bottom: 12px;
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    padding: 16px 0;
    flex-basis: 18%;
    cursor: pointer;
    font-size: 2rem;

    &:nth-child(1) {
      flex-basis: 18%;
    }

    ::before {
      height: 3px;
    }
  }

  @media (min-width: 1600px) {
    font-size: 2.2rem;
  }
`;

// MENU

export const MenuListStyle = styled.ul`
  margin: 34px auto 20px;
  padding-left: 0;
  list-style: none;

  @media (min-width: 500px) {
    width: 90%;
  }

  @media (min-width: 1400px) {
    margin: 40px auto 30px;
    width: 85%;
  }

  @media (min-width: 1600px) {
    width: 80%;
  }
`;

export const MenuItemStyle = styled.li`
  max-height: ${(props) => (props.status ? "1100" : "255")}px;

  overflow: hidden;
  transition: max-height 1s;

  @media (min-width: 1024px) {
    max-height: ${(props) => (props.status ? "1100" : "200")}px;
  }
`;

// MENU ITEM INFO STYLE

export const MenuItemInfoStyle = styled.section`
  background-color: ${({ theme }) => `${theme.colors.powderred.basic}`};

  padding: 20px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
  -webkit-transform: translateZ(0);

  @media (min-width: 1024px) {
    padding: 22px 50px;
    height: 180px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MenuItemNameStyle = styled.h3`
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: 1px;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const MenuItemIconNameStyle = styled.i`
  margin-left: 5px;
`;

export const MenuItemExtraInfoStyle = styled.p`
  margin: ${(props) => (props.smallMargin ? "10px 0" : "20px 0 14px")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};

  font-size: 1.8rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const MenuItemButtonStyle = styled(ButtonStyle)`
  border: ${({ theme }) => `4px double ${theme.colors.powderred.medium}`};
  color: ${({ theme }) => `${theme.colors.powderred.medium}`};

  padding: 2px 80px;
  font-size: 2rem;
  letter-spacing: 0;

  @media (min-width: 1024px) {
    padding: 6px 12px;
  }
`;

// MENU ITEM ADDITIONS STYLE

export const MenuItemAdditionsStyle = styled.form`
  transform: translateY(${(props) => (props.status ? "0" : "-105%")});
  opacity: ${(props) => (props.status ? "1" : "0")};
  background-color: ${({ theme }) => `${theme.colors.powderred.light}`};

  padding: 10px 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  transition: transform 1s, opacity 1s;
  -webkit-transform: translateZ(0);

  @media (min-width: 1024px) {
    padding: 10px 30px;
  }

  @media (min-width: 1400px) {
    padding: 16px 40px;
  }
`;

export const MenuSubtitleStyle = styled.h4`
  margin: 20px 0 15px;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;

  :nth-of-type(1) {
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    margin: 30px 0 20px;
    font-size: 2rem;

    :nth-of-type(1) {
      margin-top: 20px;
    }
  }
`;

export const MenuCheckboxListStyle = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const MenuCheckboxItemStyle = styled.div`
  margin: 0 0 10px 10px;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    flex-basis: 32%;
  }
`;

export const MenuCheckboxInputStyle = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;

  @media (min-width: 1024px) {
    margin-right: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const MenuCheckboxNameStyle = styled.label`
  @media (min-width: 1024px) {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const MenuButtonAddToCartStyle = styled(ButtonStyle)`
  background-color: ${({ theme }) => `${theme.colors.powderred.dark}`};
  box-shadow: ${({ theme }) => `0 0 2px 2px ${theme.colors.powderred.dark}`};

  margin: 30px auto 10px;
  padding: 10px 30px;
  color: #fff;
  font-weight: 500;

  :disabled {
    background-color: ${({ theme }) => `${theme.colors.gray.basic}`};
    box-shadow: ${({ theme }) => `0 0 2px 2px ${theme.colors.gray.dark}`};
    color: ${({ theme }) => `${theme.colors.gray.medium}`};
  }

  @media (min-width: 1024px) {
    margin: 45px auto 20px;
    padding: 10px 50px;
  }
`;
