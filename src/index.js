import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background/Background';
import Portfolio from './components/Portfolio/Portfolio';
import * as serviceWorker from './serviceWorker';

import './index.sass';
import './styles/_colors.sass';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Portfolio/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
