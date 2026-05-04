import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Eye, Quote, Shield, Zap, Heart, Users, X, Info, Music, Radio, ShieldAlert, Wand2, Globe, ArrowRight } from 'lucide-react';
import { leadership } from '../mockData';

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState<null | typeof leadership[0]>(null);

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
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block leading-none">Our Identity</span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 font-display">Apostolic Mandate</h1>
            <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed shadow-text">
              "Re-establishing the fading dimensions of kingdom culture through God's presence, principles, and power."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Card */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-2 bg-white border border-brand-border rounded-[3rem] hover:border-brand-accent hover:shadow-2xl transition-all"
          >
            <div className="p-16 space-y-10 relative overflow-hidden">
              <div className="w-16 h-16 bg-brand-glow rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                <Eye size={32} />
              </div>
              <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Our Vision</h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed font-medium">
                To re-establish fading dimensions of kingdom culture across nations, raising a generation that functions as pioneers of God's tangible reality on earth.
              </p>
              <div className="absolute top-10 right-10 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Eye size={150} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-2 bg-brand-primary border border-white/10 rounded-[3rem] hover:border-brand-accent hover:shadow-2xl transition-all"
          >
            <div className="p-16 space-y-10 relative overflow-hidden text-white">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                <Target size={32} />
              </div>
              <h2 className="text-5xl font-black text-white tracking-tighter">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                To manifest God's Presence through atmospheric worship, to teach His Principles through unadulterated word, and to demonstrate His Power through apostolic operations.
              </p>
              <div className="absolute top-10 right-10 opacity-[0.05] -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Target size={150} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-8 bg-white border-y border-brand-border overflow-hidden relative">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Our Core Essence</span>
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Kingdom Foundations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Spirit Word", content: "Engaging the unadulterated word of God through the illumination and active leading of the Holy Spirit." },
              { title: "Authentic Worship", content: "Cultivating a lifestyle and atmosphere where God's presence is tangibly encountered through sincere devotion." },
              { title: "Well-Mobilized Lay Ministry", content: "Equipping every believer with the tools and spiritual discipline to function effectively in their unique divine calling." },
              { title: "Ministry Excellence", content: "Striving for the highest standards of quality in all operations to reflect the excellency of our King." },
              { title: "Innovation & Creativity", content: "Communicating ancient eternal truths through contemporary and creative expressions that resonate with our generation." }
            ].map((belief, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center md:items-start gap-8 p-10 transition-all border border-brand-border rounded-[2.5rem] hover:bg-brand-bg hover:border-brand-accent relative"
              >
                <div className="w-14 h-14 bg-brand-glow rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                  <Shield size={24} />
                </div>
                <div className="text-center md:text-left space-y-4">
                  <h3 className="text-xl font-black text-brand-primary tracking-tight">{belief.title}</h3>
                  <p className="text-brand-primary/60 leading-relaxed text-sm font-medium">{belief.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Leadership */}
      <section className="py-32 px-8 bg-brand-glow/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Kingdom Stewards</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter font-display">Leadership Council</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                onClick={() => setSelectedLeader(leader)}
                className="group w-full max-w-sm md:max-w-md bg-white border border-brand-border rounded-[4rem] hover:border-brand-accent hover:shadow-[0_40px_80px_-20px_rgba(42,43,101,0.15)] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="p-4">
                  <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5]">
                    <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
                    
                    {/* Perspective Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-brand-primary/40 backdrop-blur-[2px] flex items-center justify-center p-12">
                      <div className="text-center space-y-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-16 h-16 rounded-3xl bg-brand-accent mx-auto flex items-center justify-center text-brand-primary shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                          <Zap size={28} />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Unveiling the Apostolic Path</h4>
                        <div className="flex items-center justify-center gap-2 text-brand-accent">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Read Bio</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-10 pb-12 pt-6 text-center space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-black text-brand-primary tracking-tighter leading-none group-hover:text-brand-accent transition-colors">{leader.name}</h3>
                    <p className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">{leader.title}</p>
                  </div>
                  
                  {/* Creative Tags */}
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    {leader.id === '1' ? (
                      ['Author', 'Psalmist', 'Corporate Excellence'].map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-brand-primary/40 px-3 py-1 bg-brand-bg rounded-full border border-brand-border">
                          {tag}
                        </span>
                      ))
                    ) : (
                      ['Lecturer', 'Relationship Coach', 'Godly Standards'].map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-brand-primary/40 px-3 py-1 bg-brand-bg rounded-full border border-brand-border">
                          {tag}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="absolute inset-0 bg-brand-primary/95 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-6xl bg-white rounded-[4rem] overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedLeader(null)}
                className="absolute top-10 right-10 z-30 p-4 bg-brand-bg rounded-full text-brand-primary hover:bg-brand-accent transition-all shadow-xl hover:-rotate-90"
              >
                <X size={24} />
              </button>

              <div className="w-full lg:w-2/5 relative h-[400px] lg:h-auto overflow-hidden">
                <img src={selectedLeader.photo} alt={selectedLeader.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary lg:bg-gradient-to-r via-brand-primary/20 lg:via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12 text-white block lg:hidden">
                  <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Leadership</span>
                  <h2 className="text-4xl font-black tracking-tighter leading-none">{selectedLeader.name}</h2>
                </div>
              </div>

              <div className="w-full lg:w-3/5 p-12 lg:p-24 overflow-y-auto scrollbar-hide flex flex-col relative bg-white">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-brand-primary pointer-events-none">
                  <Shield size={300} />
                </div>

                <div className="relative z-10 space-y-12">
                  <div className="space-y-4">
                    <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] block">Apostolic Stewards</span>
                    <h2 className="text-5xl md:text-6xl font-black text-brand-primary tracking-tighter leading-none font-display">{selectedLeader.name}</h2>
                    <div className="flex items-center gap-4">
                      <p className="text-brand-primary/40 font-black uppercase tracking-[0.3em] text-[11px] py-1 px-4 bg-brand-bg rounded-lg">{selectedLeader.title}</p>
                      <div className="h-px flex-grow bg-brand-border" />
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="relative group">
                      <Quote size={40} className="text-brand-accent opacity-20 absolute -top-4 -left-6" />
                      <p className="text-brand-primary/80 text-xl leading-relaxed italic relative z-10 font-medium">
                        {selectedLeader.bio}
                      </p>
                    </div>

                    {/* Mandate Focus */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-brand-border">
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">Spiritual Focus</h4>
                        <p className="text-sm font-bold text-brand-primary">Prophetic Excellence & Kingdom Culture</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">Divine Role</h4>
                        <p className="text-sm font-bold text-brand-primary">Raising Giants & Restoration</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12">
                    <button className="flex items-center gap-4 text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] hover:text-brand-accent transition-colors group">
                      <span className="w-12 h-[2px] bg-brand-accent group-hover:w-20 transition-all" />
                      Follow the Mandate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* History Quote */}
      <section className="py-40 px-8 bg-brand-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Quote size={800} className="absolute -top-64 -left-64" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight font-display">Our Heritage</h2>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white/70 max-w-3xl mx-auto">
            "Driven by a prophetic mandate to re-establish the foundations of righteousness, Newbreed began as a gathering of seekers. Today, it stands as a testament to God's faithfulness—a global altar where the fire of the spirit burns bright and lives are consistently rebuilt."
          </p>
          <div className="flex justify-center gap-4">
            <Quote size={40} className="text-brand-accent opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
