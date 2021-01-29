import React, { useState } from 'react';

import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';
import Plan from './sections/Plan';
import BillingInfo from './sections/BillingInfo';
import CreditCardInfo from './sections/CreditCardInfo';
import Terms from './sections/Terms';
import GradientButton from '../../Components/GradientButton';

const PaymentPage = () => {
  const [billingFilled, setBillingFilled] = useState(false);
  const [creditFilled, setCreditFilled] = useState(false);
  const [plan, setPlan] = useState('basic');

  console.log(creditFilled);

  return (
    <div style={styles.container}>
      <div style={styles.paymentSectionContainer}>
        <Menu color='#000000' />
        <h1 style={styles.heading}>PAYMENT</h1>
        <Plan setPlan={setPlan} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <BillingInfo setBillingFilled={setBillingFilled} />
          <CreditCardInfo setCreditFilled={setCreditFilled} />
        </div>
        <Terms />
        <GradientButton
          disabled={billingFilled && creditFilled ? false : true}
        />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  paymentSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10rem'
  },
  heading: {
    fontSize: '4rem'
  }
};

export default PaymentPage;
