import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Data from './services/Data';
import DataContext from './services/DataContext';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import rootReducer from './reducers';


import '../node_modules/font-awesome/css/font-awesome.min.css';

const data = new Data();
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//applyMiddleware(logger)
//

ReactDOM.render(
    <Provider store={store}>
        <DataContext.Provider value={data}>
            <App/>
        </DataContext.Provider>
    </Provider>
    , document.getElementById('root'));


