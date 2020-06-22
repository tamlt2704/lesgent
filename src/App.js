import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from './components/app/AppHeader';
import AppCanvas from './components/app/AppCanvas';
import AppFooter from './components/app/AppFooter';
import AppDemo01 from './components/app/AppDemo01';
import AppDemo02 from './components/app/AppDemo02';

function App() {
  return (
      <div className="container">
          <AppHeader> 
          </AppHeader>

          <AppCanvas>
          </AppCanvas>
        
          <AppDemo01>
          </AppDemo01>

          <AppDemo02>
          </AppDemo02>

          <AppFooter>
          </AppFooter>
    </div>
  );
}

export default App;
