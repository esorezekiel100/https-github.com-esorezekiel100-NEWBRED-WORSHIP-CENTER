import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Calendar, Clock, MapPin, Play, ArrowRight, Heart, Users, Shield, Zap, Quote, Target, Stars, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events, sermons } from '../mockData';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2000&auto=format&fit=crop", // Worship
  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000&auto=format&fit=crop", // Praise
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000&auto=format&fit=crop", // Word
  "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000&auto=format&fit=crop", // Prayer
  "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2000&auto=format&fit=crop", // Worship 2
];

const HERO_CONTENT = [
  {
    tag: "Establishing Kingdom Culture",
    title: "Established In Presence",
    desc: "An apostolic community driven by God's presence, principles, and power. Join us as we manifest heaven's dimension on earth."
  },
  {
    tag: "The Sound of Victory",
    title: "Sacrifice Of Praise",
    desc: "Where every sound is a weapon and every song is a prayer. Experience the transformative power of authentic prophetic worship."
  },
  {
    tag: "Living the Mandate",
    title: "Manifest The Truth",
    desc: "Built upon the uncompromised word of God. We are raised as ambassadors of the Kingdom, equipped to dominate in every sphere."
  },
  {
    tag: "Intercessory Fire",
    title: "Power Of Prayer",
    desc: "The engine room of the kingdom. We are a house of prayer for all nations, birthing divine realities through spiritual fervor."
  },
  {
    tag: "Apostolic Governance",
    title: "Unleash The Glory",
    desc: "Passing the torch of spiritual excellence. Together, we are building a legacy of faith that transcends time and space."
  }
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-primary">
        {/* Parallax Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 0.65, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={HERO_IMAGES[currentImage]} 
                alt="Church Culture" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Dynamic Glowing Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 100, 0],
                y: [0, 50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-accent/30 rounded-full blur-[160px] pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1.3, 1, 1.3],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -80, 0],
                y: [0, -100, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-brand-secondary/20 rounded-full blur-[180px] pointer-events-none" 
            />
          </div>
          
          {/* Grain Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/70 to-brand-primary/50" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-8 py-20 text-center z-10">
          <motion.div style={{ y: y2, opacity }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 mb-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                  <Stars className="w-4 h-4 text-brand-accent animate-pulse" />
                  <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.5em]">{HERO_CONTENT[currentImage].tag}</span>
                </div>
                
                <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-12 max-w-5xl mx-auto tracking-tighter font-display">
                  {HERO_CONTENT[currentImage].title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? 'block text-brand-accent' : 'block'}>{word}</span>
                  ))}
                </h1>
                
                <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 leading-relaxed font-medium tracking-tight">
                  {HERO_CONTENT[currentImage].desc}
                </p>
              </motion.div>
            </AnimatePresence>
              
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                to="/media" 
                className="group relative flex items-center gap-6 bg-white text-brand-primary px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-[0_40px_80px_-20px_rgba(255,255,255,0.3)] hover:-translate-y-2 hover:shadow-brand-accent/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                <span className="relative z-10 group-hover:text-white transition-colors">Watch Service</span>
                <Play className="relative z-10 w-4 h-4 fill-current group-hover:scale-125 group-hover:text-white transition-all" />
              </Link>
              <Link 
                to="/join-department" 
                className="group flex items-center gap-6 bg-brand-primary/20 text-white border-2 border-white/10 backdrop-blur-xl px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-brand-primary hover:border-white hover:-translate-y-2"
              >
                Start Serving <ArrowRight size={18} className="group-hover:translate-x-2 transition-all" />
              </Link>
            </div>
          </motion.div>
            
          {/* Carousel Indicators Reimagined */}
          <div className="flex justify-center gap-4 mt-24">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="group relative py-4 px-2 focus:outline-none"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className={`h-1.5 transition-all duration-700 rounded-full bg-white relative overflow-hidden ${
                  currentImage === i ? 'w-16' : 'w-8 opacity-20 group-hover:opacity-40'
                }`}>
                  {currentImage === i && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-brand-accent shadow-[0_0_15px_#b57edc]"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-12 hidden lg:flex flex-col items-center gap-6"
        >
          <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] rotate-90 origin-left translate-x-3">Scroll</span>
          <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 96, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent shadow-[0_0_15px_#b57edc]"
            />
          </div>
        </motion.div>
      </section>


      {/* Welcome & Vision */}
      <section className="py-32 px-8 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1000&auto=format&fit=crop" 
                alt="Leadership" 
                className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
              
              {/* Overlay Stat */}
              <div className="absolute bottom-10 left-10 glass p-8 rounded-3xl">
                <p className="text-4xl font-black text-brand-primary mb-1 tracking-tighter">1,000+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">Impacted Lives</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-xs px-4 py-1.5 bg-brand-accent/10 rounded-full">The Mandate</span>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter">A Home for seekers of <span className="text-brand-accent font-display">Truth</span> and Power.</h2>
              <p className="text-lg text-brand-primary/60 leading-relaxed font-medium">
                "We are an apostolic community driven by God's presence, principles, and power. Newbreed Worship Centre International is a movement aimed at re-establishing the fading dimensions of kingdom culture in our generation."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {[
                { title: "Spirit Word", icon: <Quote size={18} />, color: "bg-brand-accent/10 text-brand-accent" },
                { title: "Authentic Worship", icon: <Users size={18} />, color: "bg-brand-secondary/10 text-brand-secondary" },
                { title: "Mobilized Ministry", icon: <Zap size={18} />, color: "bg-brand-accent/10 text-brand-accent" },
                { title: "Ministry Excellence", icon: <Shield size={18} />, color: "bg-brand-secondary/10 text-brand-secondary" },
                { title: "Innovation", icon: <Target size={18} />, color: "bg-brand-accent/10 text-brand-accent" }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-border shadow-sm hover:shadow-md transition-all ${i === 4 ? 'sm:col-span-2' : ''}`}>
                  <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[13px] font-black uppercase tracking-tight">{item.title}</h4>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center gap-4 font-black text-brand-primary uppercase tracking-[0.2em] text-xs group">
              Explore Our Story <span className="w-12 h-0.5 bg-brand-accent group-hover:w-16 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sacred Worship Section */}
      <section className="py-32 px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">The Sacred Presence</span>
              <h2 className="text-5xl md:text-6xl font-black text-brand-primary tracking-tighter">Sacred <span className="text-brand-accent font-display">Worship</span></h2>
            </div>
            <p className="text-brand-primary/60 max-w-md text-lg leading-relaxed font-medium">
              Where deep calls unto deep. Experience the raw, unadulterated presence of God through prophetic worship and spiritual songs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[800px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative group rounded-[3rem] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Worship Moment" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 text-white">
                <span className="block text-[10px] font-black uppercase tracking-[0.4em] mb-2">Atmosphere</span>
                <h3 className="text-3xl font-black tracking-tighter">The Sound of Sovereignty</h3>
              </div>
            </motion.div>
            <div className="md:col-span-4 grid grid-rows-2 gap-8">
              {[
                "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop"
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group rounded-[2.5rem] overflow-hidden"
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={`Worship ${i}`} 
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/0 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Living Word Section */}
      <section className="py-32 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/20 rounded-full" 
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] bg-brand-accent/20 px-5 py-2 rounded-full border border-brand-accent/30">Doctrine & Power</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">The Living <span className="text-brand-accent font-display">Word</span></h2>
              <p className="text-white/60 text-xl leading-relaxed font-medium">
                The uncompromised revelation of Jesus Christ. We believe the Word of God is the ultimate authority for kingdom living and spiritual governance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Kingdom Mystery", icon: <Shield size={20} /> },
                { title: "Prophetic Truth", icon: <Target size={20} /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl group hover:bg-white transition-all">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-primary group-hover:text-white transition-colors mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-white group-hover:text-brand-primary font-black uppercase tracking-widest text-xs transition-colors">{item.title}</h4>
                </div>
              ))}
            </div>
            
            <Link to="/media" className="inline-flex items-center gap-6 bg-brand-accent text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-brand-primary transition-all shadow-[0_30px_60px_-15px_rgba(181,126,220,0.4)]">
              Listen to the Word <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop" 
                alt="Teaching the Word" 
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
            </div>
            {/* Design Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Kingdom Praise Section */}
      <section className="py-32 px-8 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-brand-secondary font-black uppercase tracking-[0.5em] text-[10px]">The Shout of a King</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter">Kingdom <span className="text-brand-accent font-display">Praise</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1514525253361-bee8a81f40fc?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-brand-border bg-white"
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" 
                  alt={`Praise ${i}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="space-y-2">
                    <Sparkles className="text-brand-accent mb-4" />
                    <h4 className="text-white font-black text-lg tracking-tighter uppercase">Unrestrained Joy</h4>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Victory Sound</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Grid - Reimagined */}
      <section className="py-32 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white" />)}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-20">
          <div className="space-y-4">
            <h2 className="text-5xl font-black text-white tracking-tighter">Gather With Us</h2>
            <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em]">Local & Global Service Times</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { day: "Sunday", time: "08:00 & 10:30 AM", title: "Worship Service", color: "bg-brand-glow" },
              { day: "Wednesday", time: "05:30 PM", title: "Midweek Teaching", color: "bg-white" },
              { day: "Friday", time: "06:00 AM", title: "Corporate Prayer", color: "bg-brand-soft" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-1 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-brand-accent transition-all"
              >
                <div className="bg-white/5 p-12 rounded-[2.2rem] space-y-6">
                  <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] block">{service.day}s</span>
                  <h3 className="text-3xl font-black text-white tracking-tighter">{service.title}</h3>
                  <div className="inline-block px-6 py-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent font-black text-xs">
                    {service.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 px-8 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <span className="text-brand-secondary font-black uppercase tracking-[0.3em] text-[10px]">What's Happening</span>
              <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Upcoming Kingdom Mandates</h2>
            </div>
            <Link to="/events" className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent hover:text-brand-primary transition-colors flex items-center gap-4 group">
              View All Events <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.slice(0, 3).map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-2 bg-white border border-brand-border rounded-[2.5rem] hover:border-brand-accent hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden relative rounded-[2rem]">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 glass px-5 py-3 rounded-2xl text-center">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-secondary">{event.date.split(' ')[0]}</span>
                    <span className="block text-xl font-black text-brand-primary tracking-tighter">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2 text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{event.location}</p>
                    <h3 className="text-xl font-black text-brand-primary tracking-tight line-clamp-2">{event.title}</h3>
                  </div>
                  <Link to="/events" className="flex items-center justify-center py-4 rounded-2xl bg-brand-bg border border-brand-border font-black text-[10px] uppercase tracking-[0.2em] text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                    Event Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-32 px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto p-1 bg-brand-primary rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-full lg:w-1/2 p-2 relative z-10">
            <div className="group relative rounded-[2.5rem] overflow-hidden aspect-video bg-black/40 flex items-center justify-center cursor-pointer shadow-2xl">
              <img src={sermons[0].thumbnail} alt="Latest Sermon" className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white text-brand-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                  <Play size={28} className="ml-1 fill-current" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-12 lg:pr-20 relative z-10 text-white space-y-8">
            <div className="inline-block px-4 py-1.5 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent font-black text-[10px] uppercase tracking-[0.3em]">
              Latest Broadcast
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">{sermons[0].title}</h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Explore the apostolic mandate as our Lead Pastor shares insights into re-establishing kingdom dimensions in the church today.
            </p>
            <Link to="/media" className="inline-flex items-center gap-6 bg-brand-accent text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-primary transition-all shadow-xl hover:-translate-y-1">
              Watch Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-32 px-8 bg-brand-bg border-y border-brand-border">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Get Involved</span>
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Kingdom Units</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Music Academy", desc: "Kingdom sounds of worship." },
              { title: "Prayer Band", desc: "The engine room of power." },
              { title: "Outreach Unit", desc: "Revealing God's love to all." },
              { title: "Children's Church", desc: "Building strong foundations." },
            ].map((m, i) => (
              <div key={i} className="group p-1 bg-white border border-brand-border rounded-[2.5rem] hover:border-brand-accent hover:shadow-xl transition-all">
                <div className="p-10 text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mx-auto text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                    <Users size={24} />
                  </div>
                  <h4 className="font-black text-lg text-brand-primary tracking-tight">{m.title}</h4>
                  <p className="text-[10px] text-brand-primary/40 uppercase tracking-widest font-black leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving CTA */}
      <section className="py-32 px-8 bg-brand-bg overflow-hidden relative border-t border-brand-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="inline-flex items-center gap-3 bg-brand-glow px-5 py-2 rounded-full border border-brand-soft mb-4">
            <Heart className="w-4 h-4 text-brand-accent animate-pulse" />
            <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em]">Kingdom Partnership</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter leading-tight">Support the Vision</h2>
          <p className="text-brand-primary/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Your generous partnership helps us re-establish kingdom culture through divine mandates across the globe.
          </p>
          <Link to="/give" className="inline-block bg-brand-primary text-white px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-secondary shadow-[0_30px_60px_-15px_rgba(75,28,113,0.3)] transition-all hover:-translate-y-1">
            Give Online Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
