import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import RemoteData from './services/RemoteData';
import DataContext from './services/DataContext';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const remoteData = new RemoteData();

const store = createStore(
    rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);



ReactDOM.render(
    <Provider store={store}>
        <DataContext.Provider value={remoteData}>
            <App/>
        </DataContext.Provider>
    </Provider>
    , document.getElementById('root'));

