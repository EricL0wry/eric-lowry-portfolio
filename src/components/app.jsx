import React from 'react';
import Banner from './banner';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Banner />
    );
  }
}
