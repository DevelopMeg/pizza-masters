import styled from "styled-components";

export const SectionTitleStyle = styled.h2`
  margin: ${(props) => (props.extraMargin ? "10px 0 0" : "0")};

  text-transform: uppercase;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1px;

  @media (min-width: 1024px) {
    margin: ${(props) => (props.extraMargin ? "20px 0 0" : "0")};

    font-size: 2.8rem;
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  display: block;
  text-transform: uppercase;
  background-color: #fff;
  font-size: 1.8rem;
  letter-spacing: 1px;
  font-weight: 600;
  outline: 1px solid transparent;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const IconHiddenStyle = styled.i`
  position: relative;
  z-index: -1;
`;
