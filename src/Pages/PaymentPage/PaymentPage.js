import React from 'react';

import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import Plan from './sections/Plan';
import BillingInformation from './sections/BillingInformation';

const PaymentPage = () => {
  return (
    <div style={styles.container}>
      <Menu color='#000000' />
      <h1 style={styles.heading}>PAYMENT</h1>
      <Plan />
      <div>
        <BillingInformation />
        <div>credit Card info</div>
      </div>
      <div>terms</div>
      <button>download</button>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10rem'
  },
  heading: {
    fontSize: '4rem'
  }
};

export default PaymentPage;
