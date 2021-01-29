import React from 'react';

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
    DATA.map((item, idx) => {
      return (
        <div key={idx} style={styles.item}>
          <div style={styles.line}></div>
          <h2 style={styles.title}>{item.title}</h2>
          <div style={styles.subtitle}>{item.subtitle}</div>
        </div>
      );
    });

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PERKS</h1>
      <div style={styles.itemsContainer}>{renderItems()}</div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D34848',
    padding: '10rem'
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  line: {
    borderBottom: '2px solid #fff',
    width: '5rem'
  },
  heading: {
    color: '#fff',
    fontSize: '4rem',
    paddingBottom: '3rem'
  },
  title: {
    color: '#fff',
    fontSize: '3rem'
  },
  item: {
    width: '20rem'
  },
  subtitle: {
    fontSize: '2rem'
  }
};

export default Perks;
