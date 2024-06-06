import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
        <Home/>
      </Router>
    </>
  );
}

export default App;