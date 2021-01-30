import React from 'react';
import { Link } from 'react-router-dom';

import styles from './GradientButton.module.css';

const GradientButton = (props) => {
  const { disabled, size, path, text } = props;

  return (
    <Link to={`${path}`}>
      <button
        className={
          disabled
            ? styles.btnDisabled
            : size === 'larger'
            ? styles.btnLarger
            : styles.btn
        }
        disabled={disabled}>
        {text}
      </button>
    </Link>
  );
};

export default GradientButton;
