import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TeamMember = ({ teams }) => {
  const teamsList = teams.map((person) => {
    const { picture, name } = person;

    return (
      <div key={name.first}>
        <img src={picture.large} alt="team member" />
        <h3>
          {name.first} {name.last}
        </h3>
      </div>
    );
  });

  // ANIMATIONS GSAP

  const refTeamsList = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elementsTeamsList = [...refTeamsList.current.children];

    elementsTeamsList.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0 },
        {
          duration: 1,
          opacity: 1,
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
    <section>
      <h2>our team</h2>
      <div ref={refTeamsList}>{teamsList}</div>
    </section>
  );
};

export default TeamMember;
