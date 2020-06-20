import React from 'react';
import Banner from './banner';
import About from './about';

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
      </div>
    );
  }
}
