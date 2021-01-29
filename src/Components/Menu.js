import React from 'react';

import './Menu.css';

const Menu = (props) => {
  const color = props.color ? props.color : '#fff';

  return (
    <div className='Menu' style={{ color }}>
      <i class='fas fa-bars'></i> EXP|CON
    </div>
  );
};

export default Menu;
