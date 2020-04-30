import React from 'react';
import Auth from 'views/Auth/Auth.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    </Router>
  );
}

export default Root;
