import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Zap, Heart, ArrowRight, Star } from 'lucide-react';

const fellowships = [
  { 
    name: 'MEN FELLOWSHIP', 
    desc: 'STRENGTH & LEADERSHIP',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    longDesc: 'Empowering men to be spiritual pillars in their homes and society through the apostolic mandate.'
  },
  { 
    name: 'WOMEN FELLOWSHIP', 
    desc: 'GRACE & VIRTUE',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    longDesc: 'Uniting women of grace to manifest kingdom culture through prayer, virtue, and deep devotion.'
  },
  { 
    name: 'YOUTHS FELLOWSHIP', 
    desc: 'FIRE & IMPACT',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    longDesc: 'Igniting a generation of fire-brands to conquer systems and establish divine influence everywhere.'
  },
  { 
    name: 'TEENAGERS UNIT', 
    desc: 'IDENTITY & PURPOSE',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    longDesc: 'Guiding young minds to discover their royal identity before the world shapes their narrative.'
  },
  { 
    name: 'CHILDREN UNIT', 
    desc: 'SEEDS OF FAITH',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
    longDesc: 'Planting the undiluted word of God in the hearts of children to raise stars for the kingdom.'
  }
];

const Fellowships = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 bg-brand-bg border border-brand-border px-6 py-2 rounded-full mb-8"
          >
            <Star className="text-brand-accent h-4 w-4 fill-brand-accent" />
            <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em]">One Body, Many Parts</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black text-brand-primary tracking-tighter mb-8 font-display leading-[0.85]">
            Join a <br />
            <span className="text-brand-accent">Fellowship.</span>
          </h1>
          <p className="text-brand-primary/60 max-w-2xl font-medium text-lg md:text-xl leading-relaxed">
            Find your tribe. Grow in grace with like-minded believers who share your season of life and spiritual aspirations.
          </p>
        </div>
      </section>

      {/* Fellowships Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="space-y-32">
          {fellowships.map((fellow, i) => (
            <motion.div
              key={fellow.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-[4rem] group-hover:inset-0 transition-all duration-700" />
                <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={fellow.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt={fellow.name}
                  />
                  <div className="absolute inset-0 bg-brand-primary/20" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">{fellow.desc}</span>
                  <h2 className="text-4xl md:text-6xl font-black text-brand-primary tracking-tighter font-display leading-tight">
                    {fellow.name}
                  </h2>
                </div>
                <p className="text-brand-primary/60 text-lg md:text-xl leading-relaxed font-medium">
                  {fellow.longDesc}
                </p>
                <div className="pt-8">
                  <button className="group flex items-center gap-6 bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-brand-primary transition-all shadow-xl">
                    Connect with {fellow.name.split(' ')[0]}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Values */}
      <section className="py-32 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Heart />, title: 'Genuine Love', desc: 'A community where every soul is valued and cherished.' },
              { icon: <Zap />, title: 'Spirit Fire', desc: 'Nurturing spiritual intensity in a corporate environment.' },
              { icon: <Users />, title: 'True Support', desc: 'Walking with you through every mountain and valley.' }
            ].map((value, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent border border-white/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight">{value.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fellowships;
