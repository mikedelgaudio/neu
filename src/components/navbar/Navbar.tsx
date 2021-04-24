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
          <h1>Neu</h1>
        </header>
      </>
    );
  }
}

export default Navbar;
