import React from 'react';

import Footer from '../../Components/Footer';
import Perks from './sections/Perks';
import Pricing from './sections/Pricing';
import Menu from '../../Components/Menu';

const PricingPage = () => {
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
