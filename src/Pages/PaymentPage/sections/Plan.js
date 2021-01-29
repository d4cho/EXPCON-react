import React from 'react';

import styles from './Plan.module.css';

const Plan = (props) => {
  const handleChange = (event) => {
    props.setPlan(event.target.value);
  };

  return (
    <div>
      <div className={styles.subheading}>1. Select your plan</div>
      <form className={styles.radioContainer} onChange={handleChange}>
        <label className={styles.radioBasic}>
          <input
            type='radio'
            name='plan'
            value='basic'
            defaultChecked={props.plan === 'BASIC' ? true : false}
          />
          BASIC
        </label>
        <label className={styles.radioAdvanced}>
          <input
            type='radio'
            name='plan'
            value='advanced'
            defaultChecked={props.plan === 'ADVANCED' ? true : false}
          />
          ADVANCED
        </label>
        <label className={styles.radioPro}>
          <input
            type='radio'
            name='plan'
            value='pro'
            defaultChecked={props.plan === 'PRO' ? true : false}
          />
          PRO
        </label>
      </form>
    </div>
  );
};

export default Plan;
