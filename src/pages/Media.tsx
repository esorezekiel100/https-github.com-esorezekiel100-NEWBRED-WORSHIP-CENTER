import React from 'react';
import { motion } from 'motion/react';
import { Play, Mic, Search, Filter, ArrowRight } from 'lucide-react';
import { sermons } from '../mockData';

const Media = () => {
  return (
    <div className="bg-brand-bg pb-32">
      {/* Header */}
      <section className="pt-40 pb-32 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-secondary/20 blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block leading-none">Apostolic Resources</span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 font-display">Sermons & Messages</h1>
            <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              Dive deep into the word of truth. Gain clarity on kingdom principles and experience the manifesting power of the Spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Sermon */}
      <div className="max-w-7xl mx-auto px-8 -mt-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-brand-border"
        >
          <div className="lg:col-span-7 relative group cursor-pointer aspect-video lg:aspect-auto">
            <img 
              src={sermons[0].thumbnail} 
              alt="Featured" 
              loading="lazy" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform" 
            />
            <div className="absolute inset-0 bg-brand-primary/20 flex items-center justify-center">
              <div className="w-24 h-24 bg-white text-brand-primary rounded-[2rem] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-all duration-500">
                <Play size={32} className="ml-1 fill-current" />
              </div>
            </div>
            <div className="absolute top-8 left-8 glass px-6 py-2 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Featured Broadcast</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center p-12 lg:p-16 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">Series: Kingdom Culture</span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-primary leading-tight tracking-tighter">{sermons[0].title}</h2>
              <p className="text-brand-primary/60 leading-relaxed font-medium">
                Experience a transformative dimension of the Spirit as the Lead Pastor unveils the mysteries behind the apostolic mandate for this generation.
              </p>
            </div>
            
            <div className="flex items-center gap-4 py-6 border-y border-brand-border">
              <div className="w-12 h-12 rounded-2xl bg-brand-glow overflow-hidden shadow-sm flex items-center justify-center text-brand-accent">
                <Mic size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-brand-primary">{sermons[0].speaker}</p>
                <p className="text-[10px] text-brand-primary/40 uppercase font-black tracking-widest">{sermons[0].date}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 bg-brand-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/20 transition-all hover:-translate-y-1">
                Full Message
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 border border-brand-border text-brand-primary py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-brand-bg">
                Watch Snippet
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filter and Content Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
            {['All Messages', 'Worship', 'Leadership', 'Prayer'].map((category) => (
              <button 
                key={category}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all ${
                  category === 'All Messages' ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' : 'bg-white text-brand-primary/60 border border-brand-border hover:border-brand-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary/30 group-focus-within:text-brand-accent transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH CATALOGUE..." 
              className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border border-brand-border focus:outline-none focus:border-brand-accent text-[10px] font-black tracking-widest text-brand-primary placeholder:text-brand-primary/20 shadow-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sermons.map((sermon, i) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-2 bg-white border border-brand-border rounded-[2.5rem] hover:border-brand-accent hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 rounded-[2rem] overflow-hidden">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" 
                />
                <div className="absolute right-4 bottom-4 glass px-3 py-1.5 rounded-xl text-[10px] font-black text-brand-primary uppercase tracking-widest z-10">
                  {sermon.duration}
                </div>
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-2xl scale-75 group-hover:scale-100 transition-all">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[9px]">{sermon.category}</span>
                  <h3 className="text-xl font-black text-brand-primary tracking-tight leading-tight line-clamp-2">{sermon.title}</h3>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-brand-border">
                  <div>
                    <p className="text-[10px] font-black text-brand-primary tracking-widest uppercase">{sermon.speaker}</p>
                    <p className="text-[9px] text-brand-primary/40 uppercase font-black tracking-widest">{sermon.date}</p>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-brand-bg text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
