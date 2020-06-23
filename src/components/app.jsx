import React from 'react';
import Banner from './banner';
import About from './about';
import Projects from './projects';

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
        <Projects />
      </div>
    );
  }
}
