import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Bio from './components/pages/bio';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/bio' exact element={<Bio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;