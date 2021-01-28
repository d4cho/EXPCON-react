import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage';
import PricingPage from './Pages/PricingPage/PricingPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/pricing'>
          <PricingPage />
        </Route>
        <Route exact path='/payment'>
          <PaymentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
