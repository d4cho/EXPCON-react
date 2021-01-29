import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.container}>
      <div style={styles.email}>
        <i class='fas fa-envelope'></i> support@experienceconcerts.co
      </div>
      <div style={styles.subcontainer}>
        <div style={styles.brand}>EXP|CON</div>
        <div style={styles.text}>
          2019 &#169; all Rights Reserved | Speer Technologies Incorporated
        </div>
      </div>
    </footer>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#5E33D1',
    color: '#FFFFFF'
  },
  email: {
    fontSize: '1.5rem',
    paddingTop: '8rem',
    paddingLeft: '5rem'
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem'
  },
  brand: {
    padding: '4rem',
    fontSize: '2rem'
  },
  text: {
    fontSize: '1.2rem',
    paddingBottom: '3rem'
  }
};

export default Footer;
