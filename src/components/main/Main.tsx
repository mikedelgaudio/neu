import React, { Component } from 'react';
import Clock from '../clock/Clock';
import SettingsMenu from '../settings-menu/SettingsMenu';
import Todo from '../todo/Todo';
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
        <SettingsMenu />
      </>
    );
  }
}

export default Main;
