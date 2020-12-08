import React from "react";

import { FooterBoxStyle, FooterTextStyle } from "../../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterBoxStyle>
      <FooterTextStyle>
        DevelopMeg 2020 &copy; All right reserved
      </FooterTextStyle>
      <FooterTextStyle>
        Photos in page by <a href="https://unsplash.com/">Unsplash</a> and{" "}
        <a href="https://pixabay.com/pl/">Pixabay</a>.
      </FooterTextStyle>
    </FooterBoxStyle>
  );
};

export default Footer;
