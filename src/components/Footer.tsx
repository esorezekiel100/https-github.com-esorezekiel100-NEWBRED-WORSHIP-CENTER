import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Church } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 px-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <Link to="/" className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <Church className="w-7 h-7 text-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black leading-none tracking-tighter">NEWBREED</span>
                <span className="text-[10px] tracking-[0.4em] uppercase font-black text-brand-accent">Worship Centre International</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Re-establishing the fading dimensions of kingdom culture through God's presence, principles, and power. Join our apostolic community.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-brand-accent">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Vision</Link></li>
              <li><Link to="/live" className="hover:text-white transition-colors">Live Platform</Link></li>
              <li><Link to="/devotional" className="hover:text-white transition-colors">Morning Dew Devotional</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Kingdom Moments</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/give" className="hover:text-white transition-colors">Give Online</Link></li>
              <li><Link to="/partnership" className="hover:text-white transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-brand-accent">Gatherings</h4>
            <ul className="space-y-6 text-sm">
              <li className="space-y-1">
                <span className="block font-black text-xs text-white/40 uppercase tracking-widest">Sundays</span>
                <p className="font-bold">08:00 AM & 10:30 AM</p>
              </li>
              <li className="space-y-1">
                <span className="block font-black text-xs text-white/40 uppercase tracking-widest">Wednesdays</span>
                <p className="font-bold">05:30 PM</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-brand-accent">HQ Office</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li className="flex gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span className="text-white/60">Bayelsa, Nigeria</span>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span className="text-white/60">07019571727</span>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span className="text-white/60">Newbreedworshipcentre@gmail.com</span>
              </li>
              <li className="flex gap-3 justify-center lg:justify-start pt-4">
                <Facebook className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span className="text-white/60 uppercase text-[10px] tracking-widest font-black">NEWBREED WORSHIP CENTRE INTERNATIONAL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
          <p>© 2026 NEWBREED WORSHIP CENTRE INTERNATIONAL</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
