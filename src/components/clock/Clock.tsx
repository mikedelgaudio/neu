import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="clock">
          <div className="hour">
            <div className="hr" id="hr"></div>
          </div>
          <div className="minute">
            <div className="mn" id="mn"></div>
          </div>
          <div className="second">
            <div className="sc" id="sc"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
