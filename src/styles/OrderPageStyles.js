import styled from "styled-components";

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
