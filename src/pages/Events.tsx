import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight, Share2, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../mockData';

const Events = () => {
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
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block leading-none">Holy Convocation</span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 font-display">Kingdom Mandates</h1>
            <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              Experience atmospheric worship and the manifesting power of the Holy Spirit. Join us for our upcoming events across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event Card */}
      <div className="max-w-7xl mx-auto px-8 -mt-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-brand-border flex flex-col lg:flex-row min-h-[500px]"
        >
          <div className="lg:w-12 flex flex-row lg:flex-col bg-brand-accent items-center justify-center p-6 gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white vertical-lr rotate-180 hidden lg:block">FEATURED MANDATE</span>
            <div className="flex lg:flex-col gap-4 text-white">
              <Share2 size={20} className="cursor-pointer hover:scale-125 transition-transform" />
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 relative group overflow-hidden">
              <img src={events[0].image} alt={events[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-primary/20" />
            </div>
            <div className="md:col-span-7 p-12 lg:p-16 flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  {/* Date Badge */}
                  <div className="flex items-center bg-white border border-brand-border rounded-2xl overflow-hidden shadow-lg">
                    <div className="bg-brand-accent p-3 flex items-center justify-center">
                      <Calendar className="text-white" size={20} />
                    </div>
                    <div className="px-5 py-2 flex flex-col items-center justify-center min-w-[80px]">
                      {events[0].date.includes(',') ? (
                        <>
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary leading-none mb-1">{events[0].date.split(' ')[0]}</span>
                          <span className="text-2xl font-black text-brand-primary tracking-tighter leading-none">{events[0].date.split(' ')[1]?.replace(',', '')}</span>
                        </>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary leading-none uppercase">{events[0].date.split(' ').slice(0, 2).join(' ')}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px] bg-brand-accent/10 px-6 py-2 rounded-full border border-brand-accent/20">
                    {events[0].category || 'Kingdom Mandate'}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand-primary leading-tight tracking-tighter">{events[0].title}</h2>
                <p className="text-brand-primary/60 leading-relaxed font-medium text-lg">
                  {events[0].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-8 py-8 border-t border-brand-border">
                <div className="flex items-center gap-3">
                  <Clock className="text-brand-accent" size={20} />
                  <div>
                    <p className="text-[9px] font-black text-brand-primary/40 uppercase tracking-widest">Time</p>
                    <p className="text-sm font-black text-brand-primary uppercase">{events[0].time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-brand-accent" size={20} />
                  <div>
                    <p className="text-[9px] font-black text-brand-primary/40 uppercase tracking-widest">Location</p>
                    <p className="text-sm font-black text-brand-primary uppercase">{events[0].location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to={`/events/${events[0].id}`} className="flex-1 flex items-center justify-center gap-3 bg-brand-primary text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/20 transition-all hover:-translate-y-1">
                  Secure Your Spot <Ticket size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Events Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto space-y-20">
        <div className="flex justify-between items-end border-b border-brand-border pb-10">
          <div className="space-y-4 text-left">
            <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">Mark Your Calendar</span>
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Event Catalogue</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-2 bg-white border border-brand-border rounded-[2.5rem] hover:border-brand-accent hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 rounded-[2rem] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                
                {/* Visual Date Badge */}
                <div className="absolute top-6 left-6 flex items-stretch bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="bg-brand-accent px-3 flex items-center justify-center">
                    <Calendar className="text-white" size={16} />
                  </div>
                  <div className="px-4 py-2 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md min-w-[70px]">
                    {event.date.includes(',') ? (
                      <>
                        <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-brand-secondary leading-none mb-1">{event.date.split(' ')[0]}</span>
                        <span className="block text-xl font-black text-brand-primary tracking-tighter leading-none">{event.date.split(' ')[1]?.replace(',', '')}</span>
                      </>
                    ) : (
                      <span className="block text-[9px] font-black uppercase tracking-[0.1em] text-brand-primary leading-tight font-black uppercase max-w-[60px] text-center">
                        {event.date.split(' ').slice(0, 2).join(' ')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="bg-brand-accent/90 backdrop-blur-md text-white font-black uppercase tracking-widest text-[8px] px-3 py-1.5 rounded-full shadow-lg">
                    {event.category || 'MANDATE'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 space-y-8 text-left">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-brand-primary tracking-tight leading-tight line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-brand-primary/50 font-medium leading-relaxed line-clamp-2">{event.description}</p>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-brand-border">
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-secondary">
                    <Clock size={16} className="text-brand-accent" /> {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-secondary">
                    <MapPin size={16} className="text-brand-accent" /> {event.location}
                  </div>
                </div>

                <Link to={`/events/${event.id}`} className="w-full py-4 rounded-2xl bg-brand-bg border border-brand-border font-black text-[10px] uppercase tracking-[0.2em] text-brand-primary hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-3 group/btn">
                  View Details <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
