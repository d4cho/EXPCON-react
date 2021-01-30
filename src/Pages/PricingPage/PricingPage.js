import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../Components/Footer';
import Perks from './sections/Perks';
import Pricing from './sections/Pricing';
import Menu from '../../Components/Menu';

const PricingPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Menu />
      <Pricing />
      <Perks />
      <Footer />
    </div>
  );
};

export default PricingPage;
