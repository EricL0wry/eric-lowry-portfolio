import React from 'react';
import Skill from './skill';

export default function Skills(props) {
  const skills = props.skills.map(skillObj => {
    const { id, name, img } = skillObj;
    return <Skill key={id} name={name} img={img}/>;
  });

  return (
    <section className="skills">
      <div className="skills-content container sp-top sp-bottom">
        <div className="skills-title row flex-column justify-content-center align-items-center">
          <h4>Skills</h4>
          <h1>What I do</h1>
        </div>
        <div className="skills-cards row">
          {skills}
        </div>
      </div>
    </section>
  );
}
