import React from 'react';

import styles from './GetNow.module.css';
import GradientButton from '../../../Components/GradientButton';

const GetNow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.heading}>GET EXP|CON NOW</h1>
          <h2 className={styles.subheading}>Purchase and download the app.</h2>
        </div>
        <GradientButton text='TRY IT NOW' size='larger' path='/pricing' />
      </div>
    </div>
  );
};

export default GetNow;
