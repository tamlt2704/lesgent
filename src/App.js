import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from './components/app/AppHeader';
import AppCanvas from './components/app/AppCanvas';
import AppFooter from './components/app/AppFooter';
import AppDemo01 from './components/app/AppDemo01';
import AppDemo02 from './components/app/AppDemo02';
import AppBanner from './components/app/AppBanner';

function App() {
    return (
        <>
        <AppHeader> 
        </AppHeader>
        <div className="container-fluid">
                <AppCanvas> </AppCanvas> 
                <AppDemo01>
                </AppDemo01>

                <AppDemo02>
                </AppDemo02>

                <AppFooter>
                </AppFooter>
            </div>
        </>
    );
}

export default App;
