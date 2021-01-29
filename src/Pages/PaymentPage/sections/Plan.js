import React from 'react';

import './Plan.css';

const Plan = () => {
  return (
    <div>
      <div className='planSubheading'>1. Select your plan</div>
      <form className='planRadioContainer'>
        <label className='planRadioBasic'>
          <input type='radio' name='plan' value='BASIC' />
          BASIC
        </label>
        <label className='planRadioAdvanced'>
          <input type='radio' name='plan' value='ADVANCED' />
          ADVANCED
        </label>
        <label className='planRadioPro'>
          <input type='radio' name='plan' value='PRO' />
          PRO
        </label>
      </form>
    </div>
  );
};

export default Plan;
