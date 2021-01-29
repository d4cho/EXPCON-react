import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './GradientButton.css';

const GradientButton = (props) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Link to='/'>
      <button
        className={props.disabled ? 'btn-disabled' : 'btn'}
        disabled={props.disabled}>
        DOWNLOAD
      </button>
    </Link>
  );
};

export default GradientButton;
