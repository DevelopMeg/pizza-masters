import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-size: 0.625rem;
}

body {
  font-size: 1.6rem;
  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}

main {
  padding-top: 125px;
  margin: 0 auto;
  width:90%;

  @media(min-width: 400px) {
    width:85%;
  }

  @media(min-width:1024px) {
    padding-top: 160px;
  }

  @media(min-width:1300px) {
    width: 75%;
    min-height: 90vh;
  }

  @media(min-width:1600px) {
    width: 65%;
  }

  @media(min-width:1900px) {
    width: 60%;
  }
}

h2, h3, h4 {
  cursor: default;
}

p {
  @media(min-width:1024px) {
    cursor: default;
  }
}

button {
  outline: 1px solid transparent;
  
  @media(min-width: 1024px) {
  cursor: pointer;
  }
}

.fade-appear,
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-appear-active,
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms linear 100ms;
}

.fade-exit,
.fade-exit.fade-exit-active {
  opacity: 0;
}

#main-image-svg {
  width: 320px;
  height: auto;

  @media(min-width: 400px) {
    width: 360px;
  }

  @media(min-width: 1024px) {
    width: 700px;
  }

  @media(min-width:1600px) {
    width: auto;
  }
}
`;
