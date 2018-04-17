import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

//pages
import BlankTemplateComponent from '../pages/BlankTemplate';
//import FileLoaderComponent from '../pages/FileLoader';
var FileLoaderComponent = require('../pages/FileLoader').default;

//<NavLink exact activeClassName = {styles.routeActive} to="/..." >...</NavLink>

if (module.hot) {
    module.hot.accept('../pages/FileLoader', () => {
      // if you are using harmony modules ({modules:false})
      //render(App)
      // in all other cases - re-require App manually
     // renderApp(require('../pages/FileLoader').default)
     FileLoaderComponent = require('../pages/FileLoader').default;
    })
}


const AppRouter = () =>(
    <Router>
        <div>
            <div>
                <div>
                    <NavLink exact  to="/BlankTemplate" >BlankTemplate</NavLink>
                    <NavLink exact  to="/FileLoader" >FileLoader</NavLink>
                    <NavLink exact  to="/" >null</NavLink>
                </div>

            </div>
           
            <div >
                <div>
                    <Switch >
                        <Route path="/BlankTemplate" component = {BlankTemplateComponent} />
                        <Route path="/FileLoader" component = {FileLoaderComponent} />
                        <Route path="/" render = {()=> <div>Null /</div>} />
                    </Switch> 
                </div>
                <div>
                    <Route path="/" render = {()=> 
                            <div>Common </div>
                        } 
                    />
                </div>
            </div>

        </div>
    </Router>
);

export default AppRouter;