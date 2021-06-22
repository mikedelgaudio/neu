import React, { Component } from 'react';
import './Clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //useEffect
  componentDidMount = () => {
    this.calculateTime();
  };

  calculateTime = () => {
    const deg = 6;
    const hr = document.querySelector<HTMLElement>('#hr');
    const mn = document.querySelector<HTMLElement>('#mn');
    const sc = document.querySelector<HTMLElement>('#sc');

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr!.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn!.style.transform = `rotateZ(${mm}deg)`;
      sc!.style.transform = `rotateZ(${ss}deg)`;
    });
  };

  render() {
    return (
      <>
        <div className="neu-container">
          <div className="neu-box">
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
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
