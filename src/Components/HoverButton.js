import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HoverButton.module.css';

const HoverButton = (props) => {
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
    // debugger;
    console.log(x, y, e.target.offsetLeft, e.target.offsetTop);
  };

  return (
    <Link to='/pricing'>
      <button
        onMouseMove={handleMouseMove}
        className={styles.button}
        style={{ color: `${props.color}` }}>
        <span>TRY IT NOW</span>
      </button>
    </Link>
  );
};

export default HoverButton;
