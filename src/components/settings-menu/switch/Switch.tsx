import { useState } from 'react';
import './Switch.scss';

const Switch = (props) => {
  // Need Redux
  const [showToggle, setShowToggle] = useState(false);
  const flipToggle = (e) => {
    console.log(e);
    setShowToggle(!showToggle);
  };

  return (
    <label className="settings__list--item-toggle" key={props.name}>
      <input checked={showToggle} onChange={(e) => flipToggle(e.target.id)} type="checkbox" id={props.name} />
      <div className="slider round"></div>
    </label>
  );
};

export default Switch;
