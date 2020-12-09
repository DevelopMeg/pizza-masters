import styled from "styled-components";
import { ButtonStyle } from "./CommonStyles";

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
