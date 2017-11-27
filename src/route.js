import React from 'react';
import { Switch, Route } from 'react-router-dom';


import cart from './cart';

const MainRoutes = () => (
    <Switch>
      <Route path="/cart" component={cart} />
    </Switch>
  );