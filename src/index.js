import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';

import Data from './component/Data';

import DataContext from './component/DataContext';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers';

const data = new Data;
const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <DataContext.Provider value={data}>
            <App/>
        </DataContext.Provider>
    </Provider>
    , document.getElementById('root'));


