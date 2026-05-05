import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowLeft, Share2, Ticket, Shield, Target, Zap, Stars, Camera, ArrowRight } from 'lucide-react';
import { events, galleryPhotos } from '../mockData';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(e => e.id === id);

  // Filter photos based on event category/mandate
  const eventPhotos = galleryPhotos.filter(photo => {
    if (event?.category === 'SUPPLY OF THE SPIRIT') {
      return ['Worship', 'Praise'].includes(photo.category);
    }
    if (event?.category === 'A-N-S-W-E-R') {
      return ['Prayer', 'Word', 'Worship'].includes(photo.category);
    }
    if (event?.category === 'SEX AND YOU') {
      return ['Relationship', 'Word'].includes(photo.category);
    }
    return true;
  }).slice(0, 6);

  if (!event) {
    return (
      <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-black text-brand-primary mb-8 tracking-tighter">Event Not Found</h1>
        <Link to="/events" className="text-brand-accent font-black uppercase tracking-widest text-xs flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg pb-32">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Link to="/events" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-accent font-black uppercase tracking-[0.3em] text-[10px] transition-colors">
              <ArrowLeft size={14} /> Back to Mandates
            </Link>
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-brand-accent text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-full">
                {event.category || 'Kingdom Mandate'}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none font-display">
                {event.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 -mt-32 relative z-20">
        {/* Detail Body */}
        <div className="lg:col-span-8 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-brand-border rounded-[3rem] p-10 md:p-16 shadow-2xl space-y-12"
          >
            {/* Essential Mandate Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-bg/50 border border-brand-border p-8 rounded-[2rem] space-y-4 hover:border-brand-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 mb-1">Mandate Date</p>
                  <p className="text-lg font-black text-brand-primary">{event.date}</p>
                </div>
              </div>
              
              <div className="bg-brand-bg/50 border border-brand-border p-8 rounded-[2rem] space-y-4 hover:border-brand-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 mb-1">Encounter Time</p>
                  <p className="text-lg font-black text-brand-primary uppercase">{event.time}</p>
                </div>
              </div>

              <div className="bg-brand-bg/50 border border-brand-border p-8 rounded-[2rem] space-y-4 hover:border-brand-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 mb-1">Sacred Location</p>
                  <p className="text-lg font-black text-brand-primary uppercase line-clamp-1">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-brand-border">
              <h2 className="text-3xl font-black text-brand-primary tracking-tighter">About the Mandate</h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed font-medium">
                {event.description}
              </p>
              <p className="text-brand-primary/60 text-lg leading-relaxed font-medium">
                This is a sacred assembly designed to realign destinies and re-establish the fading dimensions of kingdom culture. We believe in the manifesting power of the Holy Spirit and the uncompromised word of God. Expect an atmosphere of thick glory, prophetic insights, and a direct distribution of spiritual virtues and dimensions.
              </p>
            </div>

            <div className="space-y-8 pt-12 border-t border-brand-border">
              <h3 className="text-2xl font-black text-brand-primary tracking-tighter">What to Expect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Prophetic Ministry", icon: <Shield size={20} />, text: "Direct spiritual guidance and oversight." },
                  { title: "Atmospheric Worship", icon: <Zap size={20} />, text: "A sound that calls forth the deep." },
                  { title: "Kingdom Doctrine", icon: <Target size={20} />, text: "Uncompromised truth for dominion." },
                  { title: "Divine Encounters", icon: <Stars size={20} />, text: "Personal moments in God's presence." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-brand-bg border border-brand-soft rounded-3xl group hover:border-brand-accent transition-all">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-110 transition-transform mb-6">
                      {item.icon}
                    </div>
                    <h4 className="text-brand-primary font-black uppercase tracking-tight mb-3">{item.title}</h4>
                    <p className="text-brand-primary/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Gallery */}
            <div className="space-y-10 pt-10 border-t border-brand-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-accent">
                  <Camera size={24} />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary/40">Captured Moments</span>
                  <h3 className="text-2xl font-black text-brand-primary tracking-tighter">Event Gallery</h3>
                </div>
              </div>

              <div className="columns-1 sm:columns-2 gap-6 space-y-6">
                {eventPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group rounded-[2rem] overflow-hidden border border-brand-border"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
                      className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest">{photo.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                to="/gallery" 
                className="inline-flex items-center gap-3 text-brand-accent font-black uppercase tracking-widest text-[10px] hover:gap-5 transition-all"
              >
                View Full Gallery <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Sidebar/Registration */}
        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32 space-y-8"
          >
            <div className="bg-brand-primary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                  <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Secure Your Spot</span>
                  <h3 className="text-4xl font-black tracking-tighter">Event Registration</h3>
                  <p className="text-white/60 font-medium leading-relaxed">
                    Join believers from around the world in this sacred mandate. Registration is required for atmospheric alignment.
                  </p>
                </div>
                
                <button className="w-full flex items-center justify-center gap-4 bg-brand-accent text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-brand-accent/20 transition-all hover:-translate-y-2 hover:bg-white hover:text-brand-primary group">
                  Register Now <Ticket size={20} className="group-hover:scale-125 transition-transform" />
                </button>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-primary bg-brand-bg flex items-center justify-center">
                        <img 
                          src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                          className="w-full h-full rounded-full object-cover"
                          alt="Attendee"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 italic">700+ Registered</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand-border p-10 rounded-[2.5rem] shadow-sm space-y-6">
              <h4 className="text-brand-primary font-black uppercase tracking-widest text-xs">Spread the Word</h4>
              <div className="flex gap-4">
                <button className="p-4 bg-brand-bg rounded-2xl text-brand-primary hover:bg-brand-accent hover:text-white transition-all">
                  <Share2 size={20} />
                </button>
                <div className="flex-1 flex items-center gap-4 px-6 bg-brand-bg rounded-2xl text-brand-primary text-xs font-black uppercase tracking-widest cursor-pointer hover:bg-brand-soft transition-all">
                  Copy Event Link
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
