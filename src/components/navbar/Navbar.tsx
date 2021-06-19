import React, { Component } from 'react';
import './Navbar.scss';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header className="neu-header">
          <h1 className="neu-header--title">Neu</h1>
          <h2 className="neu-header--subtitle">vibes, simplified.</h2>
        </header>
      </>
    );
  }
}

export default Navbar;
