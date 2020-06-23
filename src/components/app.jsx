import React from 'react';
import Banner from './banner';
import About from './about';
import ProjectList from './project-list';
import Projects from './projects';
import Skills from './skills';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Banner />
        <About />
        <Projects projects={ProjectList}/>
        <Skills />
      </div>
    );
  }
}
