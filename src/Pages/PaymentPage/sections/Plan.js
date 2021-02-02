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
        <label className={styles.radio} style={{ color: '#d24848' }}>
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='plan'
              value='basic'
              defaultChecked={props.plan === 'BASIC' ? true : false}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>BASIC</span>
        </label>

        <label className={styles.radio} style={{ color: '#ffb33f' }}>
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='plan'
              value='advanced'
              defaultChecked={props.plan === 'ADVANCED' ? true : false}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>ADVANCED</span>
        </label>

        <label className={styles.radio} style={{ color: '#1fe1e9' }}>
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='plan'
              value='pro'
              defaultChecked={props.plan === 'PRO' ? true : false}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>PRO</span>
        </label>
      </form>
    </div>
  );
};

export default Plan;
