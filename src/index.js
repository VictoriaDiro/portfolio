import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from '../src/components/App/App';
import './index.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
document.getElementById('root'));
