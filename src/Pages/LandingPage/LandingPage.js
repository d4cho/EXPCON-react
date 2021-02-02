import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import GetNow from './sections/GetNow';
import Footer from '../../Components/Footer';
import Reviews from './sections/Reviews';
import Perks from './sections/Perks';
import SuperiorSound from './sections/SuperiorSound';
import Hero from './sections/Hero';
import Menu from '../../Components/Menu';
import FrontRowSeats from './sections/FrontRowSeats';

import Cursor from '../../Components/Cursor';

const LandingPage = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
