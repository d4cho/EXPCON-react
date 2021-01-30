import React, { useRef } from 'react';

import styles from './FrontRowSeats.module.css';
import HoverButton from '../../../Components/HoverButton';
import backgroundImg from '../../../Assets/Images/Image4.png';

const FrontRowSeats = () => {
  const test = useRef(null);

  const handleMouseMove = (e) => {
    // debugger;
    let magic = test;
    let magicWHalf = magic.current.offsetWidth / 2;

    magic.current.style.left = e.pageX - magicWHalf + 'px';
    magic.current.style.top =
      parseInt(e.pageY - e.target.offsetTop - magicWHalf) + 'px';
    console.log(parseInt(e.pageY - e.target.offsetTop - magicWHalf));
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      {/* <div className={styles.button}>
        <HoverButton color='#FFB33F' text='TRY IT NOW' link='/pricing' />
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>FRONT ROW SEATS</h1>
        <h1 className={styles.subheading}>
          Experience concerts up close and personal.
        </h1>
      </div>
      <div>
        <HoverButton color='#FFB33F' text='SEE DEMO' />
      </div> */}
      <div
        ref={test}
        className={styles.magic}
        style={{ backgroundImage: `url(${backgroundImg})` }}></div>
    </div>
  );
};

export default FrontRowSeats;
