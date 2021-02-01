import React, { useState } from 'react';

import styles from './Menu.module.css';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const color = isOpen ? '#000000' : '#fff';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen && styles.Backdrop} onClick={handleClick} />
      <div className={isOpen ? styles.CircleBig : styles.Circle}>
        {isOpen && (
          <div className={styles.Text}>
            <span className={styles.TextHome}>HOME</span>
            <span className={styles.TextPricing}>PRICING</span>
            <span className={styles.TextPayment}>PAYMENT</span>
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
