import React from 'react';

import styles from './Menu.module.css';

const Menu = (props) => {
  const color = props.color ? props.color : '#fff';

  return (
    <div className={styles.Menu} style={{ color }}>
      <i className='fas fa-bars'></i> EXP|CON
    </div>
  );
};

export default Menu;
