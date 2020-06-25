import React from 'react';

export default function Tool(props) {
  const { name, img } = props;
  return (
    <div className="col-lg-4 tool-card d-flex flex-column justify-content-center align-items-center">
      <div className="tool-img-container d-flex justify-content-center">
        <img className="tool-img" src={img} alt={name} />
      </div>
      <div className="tool-name-container">
        <h4>{name}</h4>
      </div>
    </div>
  );
}
