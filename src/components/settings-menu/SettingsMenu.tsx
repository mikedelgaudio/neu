import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import './SettingsMenu.scss';

class SettingsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="settings">
          <div className="settings__menu">
            <h2>Settings</h2>
            <ul className="settings__list">
              <li className="settings__list--item">
                Color Choice 1{' '}
                <div className="settings__list--item-toggle">
                  <input type="checkbox" id="switch" />
                  <label>Toggle</label>
                </div>
              </li>
              <li className="settings__list--item">
                Color Choice 2{' '}
                <div className="settings__list--item-toggle">
                  <input type="checkbox" id="switch" />
                  <label>Toggle</label>
                </div>
              </li>
              <li className="settings__list--item">
                Color Choice 3{' '}
                <div className="settings__list--item-toggle">
                  <input type="checkbox" id="switch" />
                  <label>Toggle</label>
                </div>
              </li>
              <li className="settings__list--item">
                Color Choice 4{' '}
                <div className="settings__list--item-toggle">
                  <input type="checkbox" id="switch" />
                  <label>Toggle</label>
                </div>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon className="settings__icon" role="button" icon={faCog} />
        </div>
      </>
    );
  }
}

export default SettingsMenu;
