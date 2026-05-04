import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import Events from './pages/Events';
import Give from './pages/Give';
import Contact from './pages/Contact';
import Live from './pages/Live';
import Gallery from './pages/Gallery';
import Devotional from './pages/Devotional';
import Departments from './pages/Departments';
import Fellowships from './pages/Fellowships';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join-department" element={<Departments />} />
          <Route path="/join-fellowship" element={<Fellowships />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live" element={<Live />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/devotional" element={<Devotional />} />
        </Routes>
      </Layout>
    </Router>
  );
}
