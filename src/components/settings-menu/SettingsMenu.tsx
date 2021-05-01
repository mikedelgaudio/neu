import React, { Component } from 'react';
import './SettingsMenu.scss';

class SettingsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="logo--menu">
          <object type="image/svg+xml" data="/assets/cog-solid.svg" className="logo"></object>
        </div>
      </>
    );
  }
}

export default SettingsMenu;
