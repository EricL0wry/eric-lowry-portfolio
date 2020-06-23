import React from 'react';
import ProjectList from './project-list';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectList
    };
  }

  render() {
    return (
      <section className="projects container">
        <div className="projects-content row  sp-top sp-bottom">
          <div className="projects-title">
            <h4>Portfolio</h4>
            <h1>Latest Projects</h1>
          </div>
        </div>
      </section>
    );
  }
}
