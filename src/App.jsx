import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AboutDesa from './pages/AboutDesa';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umkm/:id" element={<Profile />} />
          <Route path="/tentang-desa" element={<AboutDesa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
