import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, CreditCard, Landmark, Gift, ArrowRight, ShieldCheck, Zap, Globe, Users, Church as ChurchIcon, Crown, Stars } from 'lucide-react';

const Give = () => {
  return (
    <div className="bg-brand-bg pb-32">
      {/* Header - More inviting and layered */}
      <section className="pt-48 pb-40 px-8 bg-brand-primary relative overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-secondary/30 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[140px] animate-float" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 shadow-2xl">
              <Crown className="w-4 h-4 text-brand-accent animate-pulse" />
              <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.4em]">Kingdom Investment</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter font-display leading-[0.9]">
              Let's Build <br />
              <span className="text-brand-accent">Together.</span>
            </h1>
            
            <p className="text-white/70 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
              "Honour the LORD with thy substance, and with the firstfruits of all thine increase: So shall thy barns be filled with plenty."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giving Areas - More descriptive and unique */}
      <section id="giving-options" className="py-32 px-8 max-w-7xl mx-auto -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { 
              title: "Tithes & Offering", 
              desc: "Biblical obedience that opens the heavens and secures your harvest.",
              icon: <Stars className="w-6 h-6" />,
              color: "hover:border-brand-accent"
            },
            { 
              title: "Kingdom Project", 
              desc: "Investing in infrastructure to create space for thousands to encounter God.",
              icon: <ChurchIcon className="w-6 h-6" />,
              color: "hover:border-brand-secondary"
            },
            { 
              title: "Missions & Outreach", 
              desc: "Taking the Gospel to the unreached and providing for the needy.",
              icon: <Globe className="w-6 h-6" />,
              color: "hover:border-brand-accent"
            },
            { 
              title: "Seed of Honour", 
              desc: "A special gift to support the leadership and apostolic grace.",
              icon: <Heart className="w-6 h-6" />,
              color: "hover:border-brand-secondary"
            }
          ].map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-white p-8 rounded-[2.5rem] border border-brand-border ${option.color} hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col items-center text-center`}
            >
              <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-lg font-black text-brand-primary tracking-tight mb-4 uppercase">{option.title}</h3>
              <p className="text-xs text-brand-primary/50 font-medium leading-relaxed mb-8">{option.desc}</p>
              <a href="#bank-details" className="mt-auto w-full py-4 rounded-xl bg-brand-primary text-white font-black text-[10px] uppercase tracking-[0.2em] text-center transform transition-all group-hover:bg-brand-accent shadow-lg shadow-brand-primary/10">
                Give Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Partnership Focus Section */}
        <div id="partnership" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white border border-brand-border p-12 lg:p-20 rounded-[3.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Users size={400} className="-mr-32 -mt-32" />
            </div>
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Strategic Alliance</span>
                <h2 className="text-5xl md:text-6xl font-black text-brand-primary tracking-tighter leading-tight font-display">Partner With <br /> The <span className="text-brand-accent">Mandate.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-brand-primary/60 text-lg leading-relaxed font-medium">
                    Partnership is not just giving; it's a commitment to stand with the mandate of God in Newbreed Worship Centre. It's an identification with the grace and the dimensions of Spirit released through this house.
                  </p>
                  <p className="text-brand-primary/60 text-lg leading-relaxed font-medium">
                    When you partner with us, you become a vital part of every life transformed, every soul saved, and every prophetic dimension established across the globe.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs pb-4 border-b border-brand-bg">Why Partner?</h4>
                  {[
                    "Direct access to apostolic grace and prayers.",
                    "Sustaining the Global Broadcast reach.",
                    "Supporting the physical infrastructure of the Mandate.",
                    "Empowering our various departments and fellowships."
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 mt-1">
                        <Zap size={12} />
                      </div>
                      <p className="text-brand-primary/80 text-sm font-bold">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-brand-primary text-white p-12 lg:p-16 rounded-[3.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
              <Heart size={240} className="-mr-16 -mt-16" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-4xl font-black tracking-tighter leading-tight font-display italic">"One can chase a thousand, but two can put ten thousand to flight."</h2>
              <p className="text-white/60 font-medium leading-relaxed">
                Become a Monthly Financial Partner today and help us reach the ends of the earth with the Word of Power.
              </p>
              <Link to="/partnership" className="w-full py-5 rounded-2xl bg-brand-accent text-brand-primary font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 flex items-center justify-center">
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Impact Visualizer */}
        <div id="impact" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-12 text-center mb-16 space-y-4">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">The Fruit of Your Giving</span>
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Your Seed at Work</h2>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Community Care", val: "500+", context: "Families Supported Weekly", icon: <Users /> },
              { label: "Global Missions", val: "12", context: "Nations Impacted", icon: <Globe /> },
              { label: "Church Planting", val: "2", context: "Successful Branches Pioneered", icon: <ChurchIcon /> },
              { label: "Spiritual Growth", val: "Thousands", context: "Lives Transformed Yearly", icon: <Stars /> }
            ].map((stat, i) => (
              <div key={i} className="p-10 bg-white rounded-[2rem] border border-brand-border hover:border-brand-accent/30 transition-all group">
                <div className="text-brand-accent mb-6 scale-125 origin-left">{stat.icon}</div>
                <div className="text-4xl font-black text-brand-primary tracking-tighter mb-2 font-display">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.1em] text-brand-primary/40 mb-1">{stat.label}</div>
                <div className="text-xs text-brand-primary/60 font-medium">{stat.context}</div>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-brand-primary text-white p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
              <Heart size={240} className="-mr-16 -mt-16" />
            </div>
            <div className="relative z-10 space-y-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-4xl font-black tracking-tighter leading-tight font-display">The Power of <br /> Partnership</h2>
              <div className="space-y-6">
                <p className="text-white/70 leading-relaxed text-lg font-medium">
                  "Partnering with Newbreed is more than a donation; it's a strategic alliance for the advancement of the Kingdom. Together, we are establishing a culture of excellence and power."
                </p>
                <div className="pt-6 border-t border-white/10">
                  <Link to="/partnership" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                      <ArrowRight size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors">Partner With Us Today</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bank Details - More Unique and Secured Design */}
        <div className="bg-white rounded-[3.5rem] border border-brand-border p-12 lg:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent/[0.02] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 bg-brand-bg px-4 py-2 rounded-lg border border-brand-soft">
                <Landmark className="w-4 h-4 text-brand-accent" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary">Direct Transfers</span>
              </div>
              <h2 className="text-4xl font-black text-brand-primary tracking-tighter">Secure Bank Details</h2>
              <p className="text-brand-primary/60 leading-relaxed font-sm font-medium">
                For those who prefer traditional banking, our secure accounts are monitored daily to ensure full accountability and transparency.
              </p>
              
              <div className="flex items-center gap-4 p-6 bg-brand-bg rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <ShieldCheck className="text-brand-accent" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.1em] text-brand-primary">Account Audit</div>
                  <div className="text-xs text-brand-primary/50 font-medium">Audited annually for transparency</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                { label: "Account Name", value: "Newbreed Worship Centre International", highlight: false },
                { label: "Bank Name", value: "Zenith Bank PLC", highlight: false },
                { label: "Tithes & Seed", value: "1223605146", highlight: true },
                { label: "Offering & Projects", value: "1223605146", highlight: true },
                { label: "Missions & Welfare", value: "1223605146", highlight: true }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 rounded-2xl border transition-all duration-300 ${
                    item.highlight 
                      ? 'bg-brand-primary text-white border-brand-primary scale-[1.02] shadow-xl' 
                      : 'bg-white border-brand-border hover:bg-brand-bg'
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase tracking-[0.15em] mb-2 sm:mb-0 ${item.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-black tracking-tight">{item.value}</span>
                    {item.highlight && <ArrowRight size={14} className="text-brand-accent" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Badge */}
      <section className="py-10 px-8 text-center">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-brand-border shadow-md">
          <ShieldCheck className="w-5 h-5 text-brand-accent" />
          <span className="text-brand-primary text-[9px] font-black uppercase tracking-[0.3em]">Kingdom Integrity & Secure Encryption Guaranteed</span>
        </div>
      </section>
    </div>
  );
};

export default Give;
