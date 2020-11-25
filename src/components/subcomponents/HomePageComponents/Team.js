import React, { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import AboutTeam from "./AboutTeam";
import ErrorGetData from "../ErrorGetData";

import teamsImage from "../../../images/teams-image.png";

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

  return (
    <section>
      {teams && !errTeams ? <TeamMember teams={teams} /> : <ErrorGetData />}
      <img src={teamsImage} alt="pizza" />
      <AboutTeam />
    </section>
  );
};

export default Team;
