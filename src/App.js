import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';
import {
    Home,
    Products,
    About,
    News,
    Demos,
    Whoop404
} from './pages/pages.js'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
    return (
        <>
        <AppHeader> </AppHeader>
        <Switch>
            <Redirect from="/demos" to="/about/demos" />
            <Redirect from="/news" to="/about/news" />

            <Route exact path="/" component={Home}/> 
            <Route path="/products" component={Products}/>
            <Route path="/about"
                render={
                    ({match: {url}}) => (
                        <>
                            <Route path={`${url}/`} component={About} exact/>
                            <Route path={`${url}/news`} component={News} exact/>
                            <Route path={`${url}/demos`} component={Demos} exact/>
                        </>
                    )
                }
            />
        <Route path="*" component={Whoop404}/>
        </Switch>
        <AppFooter>
        </AppFooter>
        </>
    );
}

export default App;
