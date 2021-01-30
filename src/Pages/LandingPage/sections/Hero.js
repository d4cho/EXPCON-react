import React, { useState } from 'react';

// import styles from './Hero.module.css';
import GradientButton from '../../../Components/GradientButton';
import img1 from '../../../Assets/Images/Image1.png';
import img2 from '../../../Assets/Images/Image2.png';
import img3 from '../../../Assets/Images/Image3.png';

const Hero = () => {
  const [img, setImg] = useState(1);

  const handleClick = (num) => {
    setImg(num);
  };

  return (
    <div style={styles.container(img)}>
      <div style={styles.content}>
        <h1 style={styles.heading}>INTERACTIVE CONCERT EXPERIENCE</h1>
        <h2 style={styles.subheading}>
          Experience your favourite artists like never before and from the
          comfort of your own home.
        </h2>
        <GradientButton text='TRY IT NOW' size='larger' path='/pricing' />
      </div>
      <div style={styles.circleContainer}>
        <span
          style={styles.circle(img, 1)}
          onClick={() => handleClick(1)}></span>
        <span
          style={styles.circle(img, 2)}
          onClick={() => handleClick(2)}></span>
        <span
          style={styles.circle(img, 3)}
          onClick={() => handleClick(3)}></span>
      </div>
    </div>
  );
};

const styles = {
  container(img) {
    let containerStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end'
    };

    if (img === 1) {
      containerStyle.backgroundImage = `url(${img1}) `;
    } else if (img === 2) {
      containerStyle.backgroundImage = `url(${img2}) `;
    } else {
      containerStyle.backgroundImage = `url(${img3}) `;
    }

    return containerStyle;
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontSize: '4rem'
  },
  subheading: {
    color: '#fff',
    fontSize: '2rem',
    maxWidth: '47rem',
    textAlign: 'center'
  },
  circleContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '10rem',
    paddingBottom: '2rem',
    paddingTop: '15rem'
  },
  circle(img, circleId) {
    let circleStyle = {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      display: 'inline-block',
      border: '2px solid #fff',
      cursor: 'pointer'
    };

    if (img === circleId) {
      circleStyle.backgroundColor = '#fff';
    }

    return circleStyle;
  }
};

export default Hero;
