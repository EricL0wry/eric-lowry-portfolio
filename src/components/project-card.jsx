import React from 'react';

export default function ProjectCard(props) {
  const { image, alt } = props;

  return (
    <div className='col-lg-4'>
      <div className="card project-card">
        <img src={image} alt={alt} className="card-img-top"/>
        <div className="card-body">
          <h1>Card Body</h1>
        </div>
      </div>
    </div>
  );
}
