import React, { useState, useEffect } from 'react';

import styles from './BillingInfo.module.css';
import { countries } from './CountriesData';

const BillingInfo = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (name && address && city && postalcode && country) {
      props.setBillingFilled(true);
    } else {
      props.setBillingFilled(false);
    }
  }, [name, address, city, postalcode, country]);

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handlePostalcode = (e) => {
    setPostalcode(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subheading}>2. Billing Information</div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.inputTitle} htmlFor='name'>
            FULL NAME
          </label>
          <div className={styles.input}>
            <input
              className={styles.txtunderline}
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={handleName}
            />
            <span className={styles.underline}></span>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputTitle} htmlFor='billingAddress'>
            BILLING ADDRESS
          </label>
          <div className={styles.input}>
            <input
              className={styles.txtunderline}
              type='text'
              id='billingAddress'
              name='billingAddress'
              value={address}
              onChange={handleAddress}
            />
            <span className={styles.underline}></span>
          </div>
        </div>

        <div className={styles.formSubContainer}>
          <div className={styles.inputContainerMulti}>
            <label className={styles.inputTitle} htmlFor='city'>
              CITY
            </label>
            <div className={styles.input}>
              <input
                className={styles.txtunderlineMulti}
                type='text'
                id='city'
                name='city'
                value={city}
                onChange={handleCity}
              />
              <span className={styles.underline}></span>
            </div>
          </div>

          <div className={styles.inputContainerMulti}>
            <label className={styles.inputTitle} htmlFor='postalCode'>
              POSTAL CODE
            </label>
            <div className={styles.input}>
              <input
                className={styles.txtunderlineMulti}
                type='text'
                id='postalcode'
                name='postalcode'
                value={postalcode}
                onChange={handlePostalcode}
              />
              <span className={styles.underline}></span>
            </div>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputTitle} htmlFor='country'>
            COUNTRY
          </label>
          <select
            className={styles.select}
            id='country'
            name='country'
            value={country}
            onChange={handleCountry}>
            <option value=''></option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
