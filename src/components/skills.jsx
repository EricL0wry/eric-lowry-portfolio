import React from 'react';
import SkillsList from './skills-list';

export default function Skills(props) {
  const { name, img } = SkillsList[0];

  return (
    <section className="skills">
      <div className="skills-content container sp-top sp-bottom">
        <div className="skills-title row flex-column justify-content-center align-items-center">
          <h4>Skills</h4>
          <h1>What I can do</h1>
        </div>
        <div className="skills-cards row">
          <div className="col-lg-4 skill-card d-flex flex-column justify-content-center align-items-center">
            <div className="skill-img-container d-flex justify-content-center">
              <img className="skill-img" src={img} alt={name}/>
            </div>
            <div className="skill-name-container">
              <h4>{name}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
