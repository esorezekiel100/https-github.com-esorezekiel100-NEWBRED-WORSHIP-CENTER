import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy loading components for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Media = lazy(() => import('./pages/Media'));
const Events = lazy(() => import('./pages/Events'));
const Give = lazy(() => import('./pages/Give'));
const Contact = lazy(() => import('./pages/Contact'));
const Live = lazy(() => import('./pages/Live'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Devotional = lazy(() => import('./pages/Devotional'));
const Departments = lazy(() => import('./pages/Departments'));
const Fellowships = lazy(() => import('./pages/Fellowships'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Partnership = lazy(() => import('./pages/Partnership'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-brand-bg flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join-department" element={<Departments />} />
            <Route path="/join-fellowship" element={<Fellowships />} />
            <Route path="/media" element={<Media />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/give" element={<Give />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/live" element={<Live />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/devotional" element={<Devotional />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
