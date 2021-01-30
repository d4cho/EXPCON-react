import React, { useState } from 'react';
import useSound from 'use-sound';

import styles from './SuperiorSounds.module.css';
import speaker1 from '../../../Assets/Images/bigspeaker1.png';
import speaker2 from '../../../Assets/Images/bigspeaker2.png';
import HoverButton from '../../../Components/HoverButton';
import cursor from '../../../Assets/Images/cursor.png';
import audio from '../../../Assets/Audio/audio.mp3';

const SuperiorSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop }] = useSound(audio);

  const handleImageClick = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.container} style={{ cursor: `url(${cursor})` }}>
      <div className={styles.button}>
        <HoverButton color='#D34848' />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftContentContainer}>
          <h1 className={styles.heading}>SUPERIOR SOUND</h1>
          <div className={styles.subheading}>
            Experience live versions of your favourite songs.
          </div>
          <button className={styles.demoButton}>SEE DEMO</button>
        </div>
        <div>
          <img
            className={styles.img2}
            src={speaker2}
            alt='speaker2'
            onClick={handleImageClick}
          />
          <img
            className={styles.img1}
            src={speaker1}
            alt='speaker1'
            onClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SuperiorSound;
