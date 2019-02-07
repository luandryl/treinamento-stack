import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/Auth/Index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Auth />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
