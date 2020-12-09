import React from "react";

import { SectionTitleStyle } from "../../../styles/CommonStyles";
import {
  AboutTeamSectionStyle,
  AboutTeamTextStyle,
} from "../../../styles/HomePageStyles";

const AboutTeam = () => {
  return (
    <AboutTeamSectionStyle>
      <SectionTitleStyle>about us</SectionTitleStyle>
      <AboutTeamTextStyle>
        Our international team do everything, that you can eat delicious pizza.
        You can feel like in Italy. We prepare our pizza with the best
        ingredients according to secret Italian recipe. Our team is properly
        trained to prepare a real Italian pizza. You can order pizza online as
        above instruction or by calling us. We have a choice of different types
        of pizza - with meat, seafood or vege. You will be happy!
      </AboutTeamTextStyle>
    </AboutTeamSectionStyle>
  );
};

export default AboutTeam;
