import React from "react";

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

  return (
    <section>
      <h2>our team</h2>
      <div>{teamsList}</div>
    </section>
  );
};

export default TeamMember;
