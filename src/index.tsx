import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
const store = createStore(rootReducer);
import './index.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();





//
// const store = createStore(rootReducer)
//
