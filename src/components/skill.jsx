import React from 'react';

export default function Skill(props) {
  const { name, img } = props;
  return (
    <div className="col-lg-4 skill-card d-flex flex-column justify-content-center align-items-center">
      <div className="skill-img-container d-flex justify-content-center">
        <img className="skill-img" src={img} alt={name} />
      </div>
      <div className="skill-name-container">
        <h4>{name}</h4>
      </div>
    </div>
  );
}
