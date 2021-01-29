import React from 'react';
import { Link } from 'react-router-dom';

import './Pricing.css';
import { data } from './PricingData';

const Pricing = () => {
  const renderFeatures = (features) =>
    features.map((feature, idx) => {
      return (
        <div className='pricingFeature' key={idx}>
          <i class='fas fa-music'></i> {feature}
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
          <div className='pricingItemType' style={{ color }}>
            {item.type}
          </div>
          <div
            className='pricingLineHor'
            style={{ borderBottom: `2px solid ${color}` }}></div>
          <div className='pricingItemPayment' style={{ color }}>
            {item.payment}
          </div>
          <div className='pricingItemPrice' style={{ color }}>
            {item.price}
          </div>
          <div>{renderFeatures(item.features)}</div>
          <Link to='/payment'>
            <button
              className='pricingButton'
              style={{ backgroundColor: color }}>
              SELECT
            </button>
          </Link>
        </div>
      );
    });

  return (
    <div className='pricingContainer'>
      <h1 className='pricingHeading'>PRICING</h1>
      <h2 className='pricingSubheading'>
        Test out our app today! Choose from three subscription-based payment
        models.
      </h2>
      <div className='pricingItemContainer'>{renderItems()}</div>
    </div>
  );
};

export default Pricing;
