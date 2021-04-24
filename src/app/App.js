import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerLayout from '../component-customer/layout/Layout';
import AdminLayout from '../component-admin/layout/Layout';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          key='customer'
          path=''
          render={(props) => {
            window.scrollTo(0, 0);
            return <AdminLayout {...props} />;
          }}
        />
        <Route
          key='admin'
          path='/admin'
          render={(props) => {
            window.scrollTo(0, 0);
            return <AdminLayout {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
