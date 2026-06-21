import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './index.css'; // Make sure styles are imported

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umkm/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
