import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import './SettingsMenu.scss';
import Switch from './switch/Switch';

const Menu = () => {
  const themeList = useSelector((state: RootStateOrAny) => state.themes.list);
  return (
    <div className="settings__menu">
      <h2 className="settings__menu--header">Themes</h2>
      <ul className="settings__list">
        {themeList.map((theme) => {
          return (
            <li className="settings__list--item" key={theme.id}>
              {theme.title} {<Switch name={theme.name} key={theme.id} />}
            </li>
          );
        })}
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
