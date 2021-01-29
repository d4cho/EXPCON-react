import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Pricing.module.css';
import { data } from './PricingData';

const Pricing = () => {
  const renderFeatures = (features) =>
    features.map((feature, idx) => {
      return (
        <div className={styles.feature} key={idx}>
          <i className='fas fa-music'></i> {feature}
        </div>
      );
    });

  const renderItems = () =>
    data.map((item, idx) => {
      const color =
        item.type === 'BASIC'
          ? '#D24848'
          : item.type === 'ADVANCED'
          ? '#FFB33F'
          : item.type === 'PRO'
          ? '#1FE1E9'
          : '#FFF';

      return (
        <div key={idx}>
          <div className={styles.itemType} style={{ color }}>
            {item.type}
          </div>
          <div
            className={styles.horizontalLine}
            style={{ borderBottom: `2px solid ${color}` }}></div>
          <div className={styles.itemPayment} style={{ color }}>
            {item.payment}
          </div>
          <div className={styles.itemPrice} style={{ color }}>
            {item.price}
          </div>
          <div>{renderFeatures(item.features)}</div>
          <Link to='/payment'>
            <button
              className={styles.button}
              style={{ backgroundColor: color }}>
              SELECT
            </button>
          </Link>
        </div>
      );
    });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>PRICING</h1>
      <h2 className={styles.subheading}>
        Test out our app today! Choose from three subscription-based payment
        models.
      </h2>
      <div className={styles.featureContainer}>{renderItems()}</div>
    </div>
  );
};

export default Pricing;
