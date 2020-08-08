import React from 'react';
import ProjectCard from './project-card';

export default function Projects(props) {
  const projectList = props.projects.map((project) => {
    const { id } = project;
    return <ProjectCard key={id} project={project} />;
  });

  return (
    <section className="projects grey" id="portfolio">
      <div className="projects-content container sp-top sp-bottom">
        <div className="projects-title row flex-column justify-content-center align-items-center">
          <h4>Portfolio</h4>
          <h1>Latest Projects</h1>
        </div>
        <div className="projects-cards row">{projectList}</div>
      </div>
    </section>
  );
}
