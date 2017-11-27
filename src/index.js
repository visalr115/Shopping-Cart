import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from './Client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Client />, document.getElementById('root'));
registerServiceWorker();
