import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Auth from './pages/Auth/Index'
import Todo from './pages/Todo/Index'
import * as serviceWorker from './serviceWorker';
import store from './store/store'

import { authorized } from './store/actions/types'
import requireAuth from './components/auth/require_auth';
import noAuth from './components/auth/no_auth';

const user = localStorage.getItem('user');

if(user) {
    store.dispatch({ type: authorized });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={noAuth(Auth)} />
                <Route path="/todo" exact={true} component={requireAuth(Todo)} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
