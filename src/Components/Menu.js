import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const color = isOpen ? '#000000' : props.color ? props.color : '#fff';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={isOpen ? styles.Backdrop : undefined}
        onClick={handleClick}
      />
      <div className={isOpen ? styles.CircleBig : styles.Circle}>
        {isOpen && (
          <div className={styles.TextContainer}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span className={styles.TextHome}>WHAT IS IT</span>
            </Link>
            <Link to='/pricing' style={{ textDecoration: 'none' }}>
              <span className={styles.TextPricing}>PRICING</span>
            </Link>
            <Link to='/payment' style={{ textDecoration: 'none' }}>
              <span className={styles.TextPayment}>PAYMENT</span>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.Menu} style={{ color }}>
        <i
          className='fas fa-bars'
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
        <div style={{ paddingLeft: '1rem' }}>EXP|CON</div>
      </div>
    </div>
  );
};

export default Menu;
