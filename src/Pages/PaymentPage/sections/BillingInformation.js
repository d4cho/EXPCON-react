import React from 'react';

import './Plan.css';

const BillingInformation = () => {
  return (
    <div>
      <div className='planSubheading'>2. Billing Information</div>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label for='fullname'>FULL NAME</label>
        <input type='text' id='fullname' name='fullname' />

        <label for='billingAddress'>BILLING ADDRESS</label>
        <input type='text' id='billingAddress' name='billingAddress' />

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label for='city'>CITY</label>
            <input type='text' id='city' name='city' />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label for='postalCode'>POSTAL CODE</label>
            <input type='text' id='postalCode' name='postalCode' />
          </div>
        </div>

        <label for='country'>COUNTRY</label>
        <input type='text' id='country' name='country' />
      </form>
    </div>
  );
};

export default BillingInformation;
