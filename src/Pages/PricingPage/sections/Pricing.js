import React from 'react';

const DATA = [
  {
    type: 'BASIC',
    payment: 'MONTHLY',
    price: '$9',
    features: [
      'Very good',
      'Amazing',
      'Perfect Job',
      'Love this',
      `It's so good`,
      'Features'
    ]
  },
  {
    type: 'ADVANCED',
    payment: 'YEARLY',
    price: '$99',
    features: [
      'Very very good',
      'Even Amazing',
      'Perfect Job',
      'Love this more',
      `It's so so good`,
      'More Features'
    ]
  },
  {
    type: 'PRO',
    payment: 'YEARLY',
    price: '$120',
    features: [
      'Very very good',
      'Even more',
      'Perfect Job',
      'Love this more',
      `It's so so good`,
      'Features'
    ]
  }
];

const Pricing = () => {
  const renderFeatures = (features) =>
    features.map((feature, idx) => {
      return (
        <div key={idx} style={styles.feature}>
          <i class='fas fa-music'></i> {feature}
        </div>
      );
    });

  const renderItems = () =>
    DATA.map((item, idx) => {
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
          <div style={{ color, fontSize: '2rem', fontWeight: 'bold' }}>
            {item.type}
          </div>
          <div
            style={{
              borderBottom: `2px solid ${color}`,
              width: '5rem',
              paddingTop: '1rem'
            }}></div>
          <div
            style={{
              color,
              fontSize: '2.2rem',
              paddingTop: '1rem',
              fontWeight: 'bold'
            }}>
            {item.payment}
          </div>
          <div
            style={{
              color,
              fontSize: '4.5rem',
              fontWeight: 'bold',
              padding: '1rem 0'
            }}>
            {item.price}
          </div>
          <div>{renderFeatures(item.features)}</div>
          <button
            style={{
              backgroundColor: color,
              border: 'none',
              color: '#fff',
              width: '15rem',
              height: '4rem',
              fontSize: '1.2rem',
              borderRadius: '7.5rem',
              margin: '2rem 0'
            }}>
            SELECT
          </button>
        </div>
      );
    });

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PRICING</h1>
      <h2 style={styles.subheading}>
        Test out our app today! Choose from three subscription-based payment
        models.
      </h2>
      <div style={styles.itemContainer}>{renderItems()}</div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#191919',
    padding: '10rem'
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    color: '#fff',
    fontSize: '4rem'
  },
  subheading: {
    color: '#fff',
    fontSize: '3rem',
    paddingBottom: '6rem'
  },
  feature: {
    color: '#FFFFFF',
    fontSize: '2.2rem'
  }
};

export default Pricing;
