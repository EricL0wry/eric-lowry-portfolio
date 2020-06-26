import React from 'react';
import Banner from './banner';
import About from './about';
import ProjectList from './component-data/project-list';
import Projects from './projects';
import Skills from './skills';
import SkillsList from './component-data/skills-list';
import Tools from './tools';
import ToolsList from './component-data/tools-list';
import Contact from './contact';

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
        <Skills skills={SkillsList}/>
        <Tools tools={ToolsList} />
        <Contact />
      </div>
    );
  }
}
