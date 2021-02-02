import React, { useState, useEffect } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={styles.cursor}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default Cursor;