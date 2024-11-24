import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowCards from '../pages/ShowCards';
import Timeline from '../pages/Timeline';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/showcards" element={<ShowCards />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;