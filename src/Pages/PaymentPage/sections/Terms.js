import React from 'react';

const Terms = () => {
  return (
    <div style={styles.container}>
      By continuing, I acknowledge that I've read and agree to the{' '}
      <span style={styles.clickable}>Terms of Service</span> &amp;{' '}
      <span style={styles.clickable}>Privacy Policy</span>.
    </div>
  );
};

const styles = {
  container: {
    paddingTop: '5rem',
    paddingBottom: '2rem',
    fontSize: '1rem'
  },
  clickable: {
    color: '#2F1FE9',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Terms;
