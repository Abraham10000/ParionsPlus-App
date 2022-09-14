import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { Card } from './components/Card';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/body' element={<Body/>}/>
    </Routes>
  );
}

export default App;
