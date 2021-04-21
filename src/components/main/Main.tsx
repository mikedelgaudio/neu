import React, { Component } from 'react';
import Clock from '../clock/Clock';
import './Main.scss';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Clock />
      </>
    );
  }
}

export default Main;
