import React from 'react';
import ReactDOM from 'react-dom';
// use Provider object to connect redux to react
// components and its children inside <Provider> will be able to access the store
import {Provider} from 'react-redux';


// use resolve property and modulesDirectories property
// in webpack.config.js to substitute for alias
// that way, you don't need to list every jsx component in alias in webpack.config.js
import Main from 'Main';

// const actions = require('actions');
import {createStore} from './store/store';
const store = createStore();

const unsubscribe = store.subscribe( () => {
    console.log('New state is ', store.getState());
});

require('appStyle');


ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('app')
);