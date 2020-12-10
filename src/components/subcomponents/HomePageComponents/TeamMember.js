import React, { useEffect, useRef } from "react";

import {
  TeamSectionStyle,
  TeamTitleStyle,
  TeamListStyle,
  TeamMemberStyle,
  TeamMemberImageStyle,
  TeamMemberNameStyle,
} from "../../../styles/HomePageStyles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TeamMember = ({ teams, errTeams }) => {
  const teamsList = teams.map((person) => {
    const { picture, name } = person;

    return (
      <TeamMemberStyle key={name.first}>
        <TeamMemberImageStyle src={picture.large} alt="team member" />
        <TeamMemberNameStyle>
          {name.first} {name.last}
        </TeamMemberNameStyle>
      </TeamMemberStyle>
    );
  });

  const refTeamsList = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elementsTeamsList = [...refTeamsList.current.children];

    elementsTeamsList.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, scale: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          scale: 1,
          scrollTrigger: {
            trigger: refTeamsList.current,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  return (
    <TeamSectionStyle>
      <TeamTitleStyle>our team</TeamTitleStyle>
      <TeamListStyle ref={refTeamsList}>{teamsList}</TeamListStyle>
    </TeamSectionStyle>
  );
};

export default TeamMember;
