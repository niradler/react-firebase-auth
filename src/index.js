import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './firebase/auth';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
<Auth>
<App />
</Auth>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
