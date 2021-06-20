import { RootStateOrAny, useSelector } from 'react-redux';
import store from '../../../redux/store';
import { changeTheme } from '../../../redux/themeSlice';
import './Switch.scss';

const Switch = (props) => {
  const selected = useSelector((state: RootStateOrAny) => state.themes.selected);
  const showToggle = props.name === selected;
  const flipToggle = (id) => {
    if (id === selected && !showToggle) {
      document.documentElement.className = '';
      document.documentElement.classList.add(`theme-${id}`);
      store.dispatch(changeTheme(id));
    } else {
      store.dispatch(changeTheme(id));
    }
  };

  return (
    <label className="settings__list--item-toggle" key={props.name}>
      <input checked={showToggle} onChange={(e) => flipToggle(e.target.id)} type="checkbox" id={props.name} />
      <div className="slider round"></div>
    </label>
  );
};

export default Switch;
