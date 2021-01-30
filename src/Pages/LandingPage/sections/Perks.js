import React from 'react';

import GradientButton from '../../../Components/GradientButton';

const DATA = [
  {
    color: '#D34848',
    title: 'Subscription Payment Model',
    subtitle:
      'No commitment, cancel anytime. Never worry about forgetting a payment again!'
  },
  {
    color: '#1FE1E9',
    title: 'No Fee Cancellation Policy',
    subtitle:
      'No commitment, cancel anytime. Never worry about forgetting a payment again!'
  },
  {
    color: '#FFB33F',
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
          <div
            style={{
              ...styles.line,
              borderBottom: `2px solid ${item.color}`
            }}></div>
          <h2 style={{ ...styles.title, color: item.color }}>{item.title}</h2>
          <div style={styles.subtitle}>{item.subtitle}</div>
        </div>
      );
    });

  return (
    <div style={styles.container}>
      <div style={styles.button}>
        <GradientButton text='TRY IT NOW' path='/pricing' />
      </div>
      <div style={styles.contentContainer}>
        <h1 style={styles.heading}>PERKS</h1>
        <div style={styles.itemsContainer}>{renderItems()}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#191919'
  },
  contentContainer: {
    padding: '5rem 10rem 15rem'
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
    fontSize: '2rem',
    color: '#fff'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3rem',
    marginRight: '3rem'
  }
};

export default Perks;
