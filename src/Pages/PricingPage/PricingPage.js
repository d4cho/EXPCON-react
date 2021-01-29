import React from 'react';

import Footer from '../../Components/Footer';
import Perks from './sections/Perks';
import Pricing from './sections/Pricing';

const PricingPage = () => {
  return (
    <div>
      <Pricing />
      <Perks />
      <Footer />
    </div>
  );
};

export default PricingPage;
