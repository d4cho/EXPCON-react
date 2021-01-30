import React from 'react';

import GetNow from './sections/GetNow';
import Footer from '../../Components/Footer';
import Reviews from './sections/Reviews';
import Perks from './sections/Perks';

const LandingPage = () => {
  return (
    <div>
      {/* <div>Hero Section</div>
      <div>Superior Sound</div>
      <div>Front Row Seats</div> */}
      <Perks />
      <Reviews />
      <GetNow />
      <Footer />
    </div>
  );
};

export default LandingPage;
