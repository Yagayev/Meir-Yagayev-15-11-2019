import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// redux-saga
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

//create store, add reducers, attach saga
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );
  
//run saga(s)
sagaMiddleware.run(Sagas);

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
