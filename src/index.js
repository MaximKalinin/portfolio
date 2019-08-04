import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import MainPage from './pages/MainPage';
import Dortable from './pages/Dortable';

const app = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ MainPage } exact />
      <Route path="/dortable" component={ Dortable } />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
