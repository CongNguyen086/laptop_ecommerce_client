import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerLayout from '../component-customer/layout/Layout';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          key='customer'
          path=''
          render={(props) => {
            window.scrollTo(0, 0);
            return <CustomerLayout {...props} />;
          }}
        />
        <Route
          key='admin'
          path='/admin'
          render={(props) => {
            window.scrollTo(0, 0);
            return <CustomerLayout {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
