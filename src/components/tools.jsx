import React from 'react';
import Tool from './tool';

export default function Tools(props) {
  const tools = props.tools.map(toolObj => {
    const { id, name, img } = toolObj;
    return <Tool key={id} name={name} img={img} />;
  });

  return (
    <section className="tools grey">
      <div className="tools-content container sp-top sp-bottom">
        <div className="tools-title row flex-column justify-content-center align-items-center">
          <h4>Tools</h4>
          <h1>What I use to do it</h1>
        </div>
        <div className="tools-cards row">
          {tools}
        </div>
      </div>
    </section>
  );
}
