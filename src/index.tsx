// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
// import rootReducer from './reducers';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { render } from 'react-dom';
// const store = createStore(rootReducer, applyMiddleware(thunk));
// import thunk from 'redux-thunk';
// import './index.css';
//
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
//
// registerServiceWorker();
//
//
//


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './App';

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);