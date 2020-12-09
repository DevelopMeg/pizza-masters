import React, { useState, useEffect, useRef } from "react";
import TeamMember from "./TeamMembers";
import AboutTeam from "./AboutTeam";
import ErrorGetData from "../ErrorGetData";

import srcTeamImage from "../../../images/teams-image.png";

import { TeamImageStyle } from "../../../styles/HomePageStyles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const [teams, setTeams] = useState();
  const [errTeams, setErrTeams] = useState(false);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=4&nat=us"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      setTeams(data.results);
    } catch (err) {
      setErrTeams(true);
    }
  };

  // ANIMATIONS GSAP

  const refTeamImage = useRef();
  const refSectionTeam = useRef();

  useEffect(() => {
    if (teams) {
      const teamImage = refTeamImage.current;
      const sectionTeam = refSectionTeam.current;

      gsap.fromTo(
        teamImage,
        { autoAlpha: 0, y: "-=100" },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionTeam,
            start: "20% 60%",
          },
        }
      );
    }
  }, [teams]);

  return (
    <section ref={refSectionTeam}>
      {teams && !errTeams ? (
        <TeamMember teams={teams} />
      ) : (
        <ErrorGetData name="team" />
      )}
      <TeamImageStyle ref={refTeamImage} src={srcTeamImage} alt="pizza" />
      <AboutTeam />
    </section>
  );
};

export default Team;
