import React, { useState, useEffect } from 'react';

import styles from './CreditCardInfo.module.css';

const CreditCardInfo = (props) => {
  const [cardname, setCardname] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    if (cardname && cardnumber && month && year && cvv) {
      props.setCreditFilled(true);
    }
  }, [cardname, cardnumber, month, year, cvv]);

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleCardname = (e) => {
    setCardname(e.target.value);
  };

  const handleCardnumber = (e) => {
    setCardnumber(e.target.value);
  };

  const handleCvv = (e) => {
    setCvv(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subheading}>3. Credit Card Information</div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.inputTitle} htmlFor='cardname'>
            CARDHOLDERS'S NAME
          </label>
          <div className={styles.input}>
            <input
              className={styles.txtunderline}
              type='text'
              id='cardname'
              name='cardname'
              value={cardname}
              onChange={handleCardname}
            />
            <span className={styles.underline}></span>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputTitle} htmlFor='cardnumber'>
            CARD NUMBER
          </label>
          <div className={styles.input}>
            <input
              className={styles.txtunderline}
              type='text'
              id='cardnumber'
              name='cardnumber'
              value={cardnumber}
              onChange={handleCardnumber}
            />
            <span className={styles.underline}></span>
          </div>
        </div>

        <div className={styles.formSubContainer}>
          <div className={styles.inputContainerMulti}>
            <label className={styles.inputTitle} htmlFor='expmonth'>
              EXPIRY MONTH
            </label>
            <select
              className={styles.select}
              id='expmonth'
              name='expmonth'
              value={month}
              onChange={handleMonth}>
              <option value=''></option>
              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
          </div>

          <div className={styles.inputContainerMulti}>
            <label className={styles.inputTitle} htmlFor='expyear'>
              EXPIRY YEAR
            </label>
            <select
              className={styles.select}
              id='expyear'
              name='expyear'
              value={year}
              onChange={handleYear}>
              <option value=''></option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
              <option value='2028'>2028</option>
              <option value='2029'>2029</option>
              <option value='2030'>2030</option>
            </select>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputTitle} htmlFor='cvv'>
            CVV
          </label>
          <div className={styles.input}>
            <input
              className={styles.txtunderline}
              type='text'
              id='cvv'
              name='cvv'
              value={cvv}
              onChange={handleCvv}
            />
            <span className={styles.underline}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardInfo;
