import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
registerServiceWorker();
