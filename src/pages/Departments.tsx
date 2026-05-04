import React from 'react';
import { motion } from 'motion/react';
import { Music, Radio, Shield, ShieldAlert, Heart, Zap, Info, Users, ArrowRight } from 'lucide-react';

const departments = [
  { 
    name: 'WORSHIP TEAM', 
    icon: <Music />, 
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1000&auto=format&fit=crop',
    desc: 'Leading the congregation in prophetic worship and divine melodies.' 
  },
  { 
    name: 'USHERING & GREETERS', 
    icon: <Users />, 
    image: 'https://images.unsplash.com/photo-1523580494863-6f30312248fd?q=80&w=1000&auto=format&fit=crop',
    desc: 'The face of the kingdom, welcoming all with grace and excellence.' 
  },
  { 
    name: 'MEDIA & TECH', 
    icon: <Radio />, 
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop',
    desc: 'Amplifying the kingdom message through digital sound and vision.' 
  },
  { 
    name: 'SANCTUARY KEEPERS', 
    icon: <Shield />, 
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop',
    desc: 'Custodians of the holy place, maintaining beauty and sacredness.' 
  },
  { 
    name: 'PROTOCOL UNIT', 
    icon: <ShieldAlert />, 
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    desc: 'Upholding kingdom standards, order, and spiritual decorum.' 
  },
  { 
    name: 'HOSPITALITY TEAM', 
    icon: <Heart />, 
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04cb113d?q=80&w=1000&auto=format&fit=crop',
    desc: 'Nurturing first timers and members with the warmth of Christ.' 
  },
  { 
    name: 'PRAYER & EVANGELISM', 
    icon: <Zap />, 
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1000&auto=format&fit=crop',
    desc: 'The engine room of power, pioneering soul winning and intercession.' 
  },
  { 
    name: 'COUNSELING UNIT', 
    icon: <Info />, 
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    desc: 'Guiding new converts through their initial walk of faith.' 
  }
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000" 
            className="w-full h-full object-cover grayscale" 
            alt="Hero Background"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-brand-accent/20 border border-brand-accent/30 px-6 py-2 rounded-full mb-8"
          >
            <Zap className="text-brand-accent h-4 w-4" />
            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em]">Service in the Kingdom</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 font-display leading-[0.85]">
            Join a <br />
            <span className="text-brand-accent">Department.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
            Discover your place of impact. Serve with excellence and let your light shine within the apostolic community.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer bg-brand-bg border border-brand-border"
            >
              <img 
                src={dept.image} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                alt={dept.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent group-hover:via-brand-primary/20 transition-all duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-xl group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  {dept.icon}
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-4 group-hover:text-brand-accent transition-colors">
                  {dept.name}
                </h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {dept.desc}
                </p>
                <div className="flex items-center gap-3 text-brand-accent pt-6 border-t border-white/10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Become a Part</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto p-12 lg:p-24 bg-brand-bg rounded-[4rem] border border-brand-border text-center relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-all duration-700" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary tracking-tighter font-display">Ready to serve?</h2>
            <p className="text-brand-primary/60 max-w-xl mx-auto font-medium">
              Take the first step towards kingdom impact. Our unit heads are waiting to welcome you into the workforce.
            </p>
            <button className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-brand-primary transition-all shadow-2xl hover:-translate-y-1">
              Apply to join now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
