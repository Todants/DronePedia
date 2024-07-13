import logo from './logo.svg';

import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState } from 'react';
import {Header} from './Components/Header.js';
import { AppRouter } from './Components/AppRouter.js';
import { UserContext } from './Context/UserContext.js';



export function App() {
  
  return (
      <div className="App">
        <Header />
        <AppRouter/>
      </div>
  );
}
