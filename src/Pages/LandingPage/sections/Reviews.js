import React from 'react';

import styles from './Reviews.module.css';
import speaker1 from '../../../Assets/Images/smallspeaker1.png';
import speaker2 from '../../../Assets/Images/smallspeaker2.png';
import HoverButton from '../../../Components/HoverButton';

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <HoverButton />
      </div>
      <div className={styles.contentContainer}>
        <img className={styles.img1} src={speaker1} alt='speaker1' />
        <img className={styles.img2} src={speaker2} alt='speaker2' />

        <div className={styles.rightContentContainer}>
          <h1 className={styles.heading}>REVIEWS</h1>
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewContainer}>
              <div className={styles.stars}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <div className={styles.reviewBy}>ARTIST</div>
              <div className={styles.review}>
                "Love it, it's the best. I can't live without it!"
              </div>
            </div>
            <div className={styles.reviewContainer}>
              <div className={styles.stars}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <div className={styles.reviewBy}>PRODUCER</div>
              <div className={styles.review}>
                "Love it, it's the best. I can't live without it!"
              </div>
            </div>
            <div className={styles.reviewContainer}>
              <div className={styles.stars}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <div className={styles.reviewBy}>MUSIC FAN</div>
              <div className={styles.review}>
                "Love it, it's the best. I can't live without it!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
