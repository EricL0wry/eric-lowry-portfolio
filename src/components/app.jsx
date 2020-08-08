import React from 'react';
import Nav from './nav';
import NavItemList from './component-data/nav-item-list';
import Banner from './banner';
import About from './about';
import ProjectList from './component-data/project-list';
import Projects from './projects';
import Skills from './skills';
import SkillsList from './component-data/skills-list';
import Tools from './tools';
import ToolsList from './component-data/tools-list';
import Contacts from './contacts';
import ContactList from './component-data/contact-list';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Nav navItems={NavItemList} />
        <Banner />
        <About />
        <Projects projects={ProjectList} />
        <Skills skills={SkillsList} />
        <Tools tools={ToolsList} />
        <Contacts contacts={ContactList} />
        <Footer />
      </div>
    );
  }
}
