import React from 'react';

export default function ProjectCard(props) {
  const { image, alt, name, shortDesc } = props.project;

  return (
    <div className='col-lg-4'>
      <div className="card project-card">
        <img src={image} alt={alt} className="card-img-top"/>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h4 className="card-subtitle">{shortDesc}</h4>
        </div>
      </div>
    </div>
  );
}
