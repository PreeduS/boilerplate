import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';

import styles from './App.scss';
import styles2 from './App.css';

import AppRouter from '../router'

//import { hot } from 'react-hot-loader'

const App = ()=>(
    <div>
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    </div>

);


//export default hot(module)(App);
export default App;