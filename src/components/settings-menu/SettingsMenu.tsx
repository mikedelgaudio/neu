import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './SettingsMenu.scss';
import Switch from './switch/Switch';

const Menu = () => {
  return (
    <div className="settings__menu">
      <h2 className="settings__menu--header">Settings</h2>
      <ul className="settings__list">
        <li className="settings__list--item">Color Choice 1 {<Switch name="lightmode" checked="false" />}</li>
        <li className="settings__list--item">Color Choice 2 {<Switch name="darkmode" checked="false" />}</li>
        <li className="settings__list--item">Color Choice 3 {<Switch name="neumode" />}</li>
        <li className="settings__list--item">Color Choice 4 {<Switch name="starwarsmode" />}</li>
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
