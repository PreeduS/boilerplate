import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
//import './commons/styles/global.scss';

import { AppContainer } from 'react-hot-loader'
/*
ReactDOM.render(
    <App />
, document.getElementById('app'));
*/

const renderApp = (App) =>{
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>
    , document.getElementById('app'));
}
renderApp(App);


console.log('process.env.NODE_ENV ',process.env.NODE_ENV)
console.log('module.hot : ',module.hot)
//if (module.hot) { module.hot.accept();}

/*

if (module.hot) {
    module.hot.accept('./app', () => {
      // if you are using harmony modules ({modules:false})
      //render(App)
      // in all other cases - re-require App manually
      renderApp(require('./app').default)
    })
}*/