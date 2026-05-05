import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, BookOpen, Calendar, Mail, Facebook, Instagram, Twitter, ExternalLink, Heart, CloudSun, Book, ArrowRight, Share2 } from 'lucide-react';
import { devotionals } from '../mockData';

const Devotional = () => {
  const [selectedId, setSelectedId] = useState(devotionals[0].id);
  const selected = devotionals.find(d => d.id === selectedId) || devotionals[0];

  return (
    <div className="bg-brand-bg min-h-screen pb-32">
      {/* Header Section */}
      <section className="pt-40 pb-24 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#b57edc_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <motion.div
            key={`header-badge-${selectedId}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-brand-accent/20 border border-brand-accent/30 px-6 py-2 rounded-full mb-4"
          >
            <CloudSun className="text-brand-accent w-4 h-4" />
            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em]">Daily Apostolic Mandate</span>
          </motion.div>
          
          <motion.h1 
            key={`header-title-${selectedId}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter font-display leading-tight"
          >
            {selected.title.split(' ')[0]} <span className="text-brand-accent">{selected.title.split(' ')[1]}</span>
          </motion.h1>
          
          <motion.div 
            key={`header-meta-${selectedId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-8 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <Calendar className="text-brand-accent w-5 h-5" />
              <span className="text-white/60 text-xs font-black uppercase tracking-widest">{selected.date}</span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-3">
              <BookOpen className="text-brand-accent w-5 h-5" />
              <span className="text-white/60 text-xs font-black uppercase tracking-widest">Apostolic Insight</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Devotional Content */}
      <section className="max-w-7xl mx-auto px-8 -mt-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-brand-border"
            >
              {/* Main Body */}
              <div className="p-10 md:p-20 space-y-12">
                <div className="space-y-4">
                  <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">Today's Theme</span>
                  <h2 className="text-4xl md:text-5xl font-black text-brand-primary tracking-tighter uppercase">{selected.subtitle}</h2>
                  <div className="flex items-center gap-4 pt-4 border-t border-brand-bg">
                    <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center overflow-hidden border border-brand-soft">
                      <img src="https://images.unsplash.com/photo-1544717305-27a734ef1904?q=80&w=1000&auto=format&fit=crop" alt="Apostle" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-brand-primary uppercase tracking-widest">{selected.author}</p>
                      <p className="text-[10px] font-medium text-brand-primary/40 uppercase tracking-[0.2em]">Presiding Apostle</p>
                    </div>
                  </div>
                </div>

                {/* Scripture Quote */}
                <div className="bg-brand-bg p-10 rounded-[2.5rem] border border-brand-soft relative overflow-hidden group">
                  <Quote className="absolute top-8 left-8 text-brand-accent opacity-10 group-hover:scale-110 transition-transform" size={80} />
                  <div className="relative z-10 space-y-6">
                    <p className="text-2xl md:text-3xl font-black text-brand-primary tracking-tight leading-tight font-display">
                      "{selected.scriptureText}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-px bg-brand-accent w-8" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">{selected.scripture}</span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="prose prose-brand max-w-none space-y-8">
                  {selected.content.map((p, i) => (
                    <p key={i} className="text-lg text-brand-primary/80 leading-relaxed font-medium">
                      {p}
                    </p>
                  ))}
                  
                  <div className="p-10 bg-brand-primary text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/20 blur-[60px]" />
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter font-display mb-8">{selected.highlight}</h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {selected.highlightText}
                    </p>
                  </div>
                </div>

                {/* Prayer Section */}
                <div className="space-y-6 pt-12 border-t border-brand-bg">
                  <div className="flex items-center gap-3">
                    <Heart className="text-brand-accent w-5 h-5 fill-current" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Daily Prayer</h3>
                  </div>
                  <div className="p-10 bg-brand-bg rounded-3xl border border-brand-soft">
                    <p className="text-xl font-black text-brand-primary tracking-tight leading-relaxed text-center italic">
                      "{selected.prayer}"
                    </p>
                  </div>
                </div>

                {/* Further Reading */}
                <div className="space-y-6 pt-12">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Further Reading</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selected.furtherReading.map((book, i) => (
                      <div key={i} className="p-8 bg-white border border-brand-border rounded-[2rem] flex items-center gap-6 group hover:border-brand-accent transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center text-brand-primary group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                          <Book size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-brand-primary/30 uppercase tracking-widest mb-1">Study Further</p>
                          <p className="text-sm font-black text-brand-primary">{book}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social & Contact Bar */}
              <div className="bg-brand-primary p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left border-t border-white/5">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-white text-2xl font-black tracking-tight font-display">Let us pray with you.</h4>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Send your requests via email</p>
                  </div>
                  <a href="mailto:Newbreedworshipcentre@gmail.com" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl border border-white/10 transition-all">
                    <Mail className="text-brand-accent" size={20} />
                    <span className="text-white font-bold text-sm">Newbreedworshipcentre@gmail.com</span>
                  </a>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Join our community</p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <a href="https://www.facebook.com/NewbreedWorshipCentre/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-primary transition-all border border-white/10">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-primary transition-all border border-white/10">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-primary transition-all border border-white/10">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-3 bg-brand-accent text-brand-primary px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-transform shadow-2xl">
                    <ExternalLink size={18} /> Official Website
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar - Recent Devotionals */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-brand-border rounded-[2.5rem] p-10 shadow-sm sticky top-32">
            <h3 className="text-brand-primary font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
              <BookOpen size={16} className="text-brand-accent" /> Recent Dews
            </h3>
            <div className="space-y-6">
              {devotionals.map((dev) => (
                <button
                  key={dev.id}
                  onClick={() => setSelectedId(dev.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all group ${
                    selectedId === dev.id 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                    : 'bg-brand-bg border-brand-soft hover:border-brand-accent text-brand-primary'
                  }`}
                >
                  <p className={`text-[9px] font-black uppercase tracking-widest mb-2 transition-colors ${
                    selectedId === dev.id ? 'text-brand-accent' : 'text-brand-primary/40'
                  }`}>
                    {dev.date}
                  </p>
                  <h4 className="font-black tracking-tight text-sm uppercase leading-tight">
                    {dev.subtitle}
                  </h4>
                  <div className={`mt-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest transition-all ${
                    selectedId === dev.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    Reading <ArrowRight size={10} />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-brand-bg space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-primary/30">Quick Share</h4>
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-3 bg-brand-bg border border-brand-soft py-4 rounded-xl text-brand-primary font-black text-[10px] uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
                  <Share2 size={14} /> Link
                </button>
                <button className="flex-1 flex items-center justify-center gap-3 bg-brand-bg border border-brand-soft py-4 rounded-xl text-brand-primary font-black text-[10px] uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
                  <Facebook size={14} /> Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-brand-border">
            <span className="text-brand-primary/40 text-[10px] font-black uppercase tracking-[0.2em]">Kingdom Partnership</span>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-black text-brand-primary tracking-tighter font-display">Join us in spreading the Gospel.</p>
            <div className="p-8 bg-white border border-brand-border rounded-[2.5rem] max-w-md mx-auto shadow-sm">
              <p className="text-[10px] font-black text-brand-primary/30 uppercase tracking-[0.2em] mb-4">Bank Details</p>
              <h5 className="text-lg font-black text-brand-primary leading-tight">Newbreed Worship Centre Int'l.</h5>
              <p className="text-brand-accent font-black text-2xl tracking-tighter mt-2">Zenith Bank: 1223605146</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devotional;
