import React from 'react';
import { render } from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Main} from 'Main';
import {MainContent} from 'MainContent';
const NewRequest = require('NewRequest');
const RequestsPasswordReset = require('RequestsPasswordReset');
const RequestsAccess = require('RequestsAccess');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyle');

render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='new_request' component={NewRequest}>
      </Route>
      <Route path='requests_password_reset' component={RequestsPasswordReset}>
      </Route>
      <Route path='requests_for_access' component={RequestsAccess}>
      </Route>
      <IndexRoute component ={MainContent}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
