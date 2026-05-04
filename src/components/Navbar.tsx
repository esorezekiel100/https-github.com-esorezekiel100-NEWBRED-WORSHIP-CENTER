import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Church, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Explore',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Join a Department', path: '/join-department' },
        { name: 'Join a Fellowship', path: '/join-fellowship' },
        { name: 'Events', path: '/events' },
      ]
    },
    {
      name: 'Media',
      links: [
        { name: 'Sermons', path: '/media' },
        { name: 'Devotional', path: '/devotional' },
        { name: 'Gallery', path: '/gallery' },
      ]
    },
    {
      name: 'Connect',
      links: [
        { name: 'Give', path: '/give' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  ];

  const liveLink = { name: 'Live', path: '/live', isSpecial: true };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white py-3 shadow-[0_20px_50px_-12px_rgba(75,28,113,0.15)] border-b border-brand-border' 
          : 'bg-white py-5 border-b border-brand-primary/5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 lg:gap-4 group">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center relative z-10 shadow-lg shadow-brand-primary/20 group-hover:scale-105 transition-all">
              <Church className="w-6 h-6 lg:w-8 lg:h-8 text-brand-accent drop-shadow-sm" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="flex flex-wrap items-center gap-x-1 lg:gap-x-1.5 leading-tight">
              <span className="text-[14px] sm:text-lg lg:text-2xl font-black tracking-tighter text-brand-primary">NEWBREED</span>
              <span className="text-[14px] sm:text-lg lg:text-2xl font-black tracking-tighter text-slate-950">WORSHIP CENTRE</span>
            </h1>
            <p className="text-[8px] lg:text-[10px] uppercase tracking-[0.3em] font-black text-brand-secondary mt-0.5 flex items-center gap-2">
              <span className="h-px w-2 sm:w-4 bg-brand-accent/40" />
              INTERNATIONAL
              <span className="h-px w-2 sm:w-4 bg-brand-accent/40" />
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {categories.map((category) => (
            <div key={category.name} className="relative group/cat py-2">
              <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 hover:text-brand-primary transition-colors">
                {category.name}
                <ChevronDown size={14} className="group-hover/cat:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover/cat:opacity-100 group-hover/cat:pointer-events-auto transition-all duration-300 translate-y-2 group-hover/cat:translate-y-0">
                <div className="bg-white rounded-2xl shadow-2xl border border-brand-border p-3 min-w-[180px]">
                  {category.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center px-5 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        location.pathname === link.path 
                          ? 'bg-brand-bg text-brand-primary' 
                          : 'text-brand-primary/60 hover:bg-brand-bg hover:text-brand-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <Link
            to={liveLink.path}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-500 hover:text-red-600 transition-all px-5 py-2.5 rounded-xl border border-red-500/10 bg-red-500/5 hover:bg-red-500/10"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            {liveLink.name}
          </Link>

          <Link 
            to="/give" 
            className="px-8 py-3.5 rounded-xl text-[10px] font-black tracking-[0.15em] transition-all bg-brand-primary text-white shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            GIVE NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link 
            to="/give" 
            className="px-4 py-2 rounded-lg text-[9px] font-black tracking-[0.1em] transition-all bg-brand-primary text-white shadow-md active:scale-95"
          >
            GIVE
          </Link>
          <button 
            className="text-brand-primary p-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-border shadow-2xl absolute top-full left-0 w-full max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col px-8 py-12 gap-12">
              {categories.map((category) => (
                <div key={category.name} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/30 whitespace-nowrap">{category.name}</p>
                    <div className="h-px bg-brand-bg w-full" />
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {category.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl transition-all flex items-center justify-between ${
                          location.pathname === link.path 
                            ? 'bg-brand-bg text-brand-primary border-r-4 border-brand-accent' 
                            : 'text-brand-primary/60 hover:bg-brand-bg hover:text-brand-primary'
                        }`}
                      >
                        {link.name}
                        {location.pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="space-y-4 pt-4 border-t border-brand-bg">
                <Link
                  to={liveLink.path}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between px-6 py-5 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-500 hover:bg-red-500/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    <span className="text-sm font-black uppercase tracking-widest">{liveLink.name} SERVICE</span>
                  </div>
                  <ChevronDown size={18} className="-rotate-90" />
                </Link>

                <Link 
                  to="/give" 
                  onClick={() => setIsOpen(false)}
                  className="w-full block bg-brand-primary text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase text-center shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all"
                >
                  GIVE ONLINE
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
