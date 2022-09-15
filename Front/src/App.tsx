import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { Card } from './components/Card';
import { Login } from './components/Login';
import { SignIn } from './components/SignIn';
import { Match } from './components/Match';
import { PariCard } from './components/PariCard';
import { Pari } from './components/Pari';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/pari' element={<Pari/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/match' element={<Match/>}/>
    </Routes>
  );
}

export default App;
