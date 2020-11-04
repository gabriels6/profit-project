import React from 'react';
import Engine from './Pages/Engine/index'
import logo from './logo.svg';

import {ThemeProvider} from 'styled-components';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';
import theme from './theme'
import {NavBar,FooterBar} from './components'
import SwitchControl from './Pages/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <SwitchControl />
        <FooterBar/>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
