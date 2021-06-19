import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './SettingsMenu.scss';

const Menu = () => {
  return (
    <div className="settings__menu">
      <h2 className="settings__menu--header">Settings</h2>
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
  );
};

const SettingsMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="settings">
      {showMenu ? <Menu /> : null}
      <FontAwesomeIcon className="settings__icon" role="button" icon={faCog} onClick={toggleMenu} />
    </div>
  );
};

export default SettingsMenu;
