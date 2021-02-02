import React from 'react';

import styles from './Perks.module.css';

const DATA = [
  {
    title: 'Subscription Payment Model',
    subtitle:
      'No commitment, cancel anytime. Never worry about forgetting a payment again!'
  },
  {
    title: 'No Fee Cancellation Policy',
    subtitle:
      'No commitment, cancel anytime. Never worry about forgetting a payment again!'
  },
  {
    title: 'Subscription Payment Model',
    subtitle:
      'No commitment, cancel anytime. Never worry about forgetting a payment again!'
  }
];

const Perks = () => {
  const renderItems = () =>
    DATA.map((item, idx) => (
      <div key={idx} className={styles.item}>
        <div className={styles.line}></div>
        <h2 className={styles.title}>{item.title}</h2>
        <div className={styles.subtitle}>{item.subtitle}</div>
      </div>
    ));

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>PERKS</h1>
      <div className={styles.itemsContainer}>{renderItems()}</div>
    </div>
  );
};

export default Perks;
