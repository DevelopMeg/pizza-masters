import styled from "styled-components";

export const FooterBoxStyle = styled.footer`
  background-color: ${({ theme }) => `${theme.colors.orange.light}`};

  padding: 6px 0;
`;
export const FooterTextStyle = styled.p`
  margin: 5px 0;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 6px 0;
    font-size: 1.8rem;
  }
`;
