import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/Signin';

import Dashboard from '../pages/Dashboard';

import Sidebar from '../components/Sidebar';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />

    <Route path="/dashboard/:id?" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
