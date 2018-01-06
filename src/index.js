import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import AppComponent from './app/app.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppComponent />, document.getElementById('root'));
registerServiceWorker();