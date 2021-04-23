import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path='/' component={CustomerLayout} />
        <Route path='/admin' component={CustomerLayout} />
      </Switch>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
