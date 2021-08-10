import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootStateOrAny, useSelector } from 'react-redux';
import useComponentVisible from '../../hooks/useComponentVisible';
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
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className="settings">
      <div ref={ref}>{isComponentVisible ? <Menu /> : null}</div>

      <div>
        {!isComponentVisible && (
          <FontAwesomeIcon
            className="settings__icon"
            role="button"
            icon={faCog}
            onClick={() => setIsComponentVisible(true)}
          />
        )}
      </div>

      <div ref={ref}>{isComponentVisible && <span>close</span>}</div>
    </div>
  );
};

export default SettingsMenu;
