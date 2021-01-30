import React from 'react';

import GetNow from './sections/GetNow';
import Footer from '../../Components/Footer';
import Reviews from './sections/Reviews';
import Perks from './sections/Perks';
import SuperiorSound from './sections/SuperiorSound';
import Hero from './sections/Hero';
import Menu from '../../Components/Menu';
import FrontRowSeats from './sections/FrontRowSeats';

const LandingPage = () => {
  return (
    <div>
      <Menu />
      <Hero />
      <SuperiorSound />
      <FrontRowSeats />
      <Perks />
      <Reviews />
      <GetNow />
      <Footer />
    </div>
  );
};

export default LandingPage;
