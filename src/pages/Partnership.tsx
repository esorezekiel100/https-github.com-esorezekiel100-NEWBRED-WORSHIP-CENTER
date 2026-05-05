import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, ShieldCheck, Zap, Globe, ArrowRight, Stars, Crown, MessageSquare, Mail, Phone, MapPin, Radio, Fuel, GraduationCap, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partnership = () => {
  return (
    <div className="bg-brand-bg pb-32">
      {/* Hero Section */}
      <section className="pt-48 pb-40 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute -bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-secondary/30 rounded-full blur-[140px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 shadow-2xl"
          >
            <Crown className="w-4 h-4 text-brand-accent" />
            <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.4em]">Strategic Alliance</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter font-display leading-[0.85]"
          >
            PARTNER WITH <br />
            <span className="text-brand-accent">THE MANDATE.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed"
          >
            "One can chase a thousand, but two can put ten thousand to flight." Join us in taking the Gospel to the ends of the earth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             <a href="#partner-accounts" className="inline-block bg-brand-accent text-brand-primary px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-brand-accent/20">
                Join Now
              </a>
          </motion.div>
        </div>
      </section>

      {/* Partnership Dimensions */}
      <section className="py-32 px-8 max-w-7xl mx-auto -mt-24 relative z-20">
        <div className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Global Radio Mandate",
                desc: "Sponsoring the Word of Power across airwaves to reach homes and hearts globally.",
                icon: <Radio size={24} />,
                accent: "text-brand-accent"
              },
              {
                title: "Power & Operations",
                desc: "Support for diesel and infrastructure to ensure the fire on the altar never goes out.",
                icon: <Fuel size={24} />,
                accent: "text-brand-glow"
              },
              {
                title: "Apostolic Scholarship",
                desc: "Empowering the next generation of Kingdom leaders through educational grants.",
                icon: <GraduationCap size={24} />,
                accent: "text-brand-accent"
              },
              {
                title: "Kingdom Welfare",
                desc: "Reaching out to the less privileged with the love and supplies of the Spirit.",
                icon: <HeartHandshake size={24} />,
                accent: "text-brand-glow"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-brand-border p-10 rounded-[2.5rem] hover:border-brand-accent transition-all shadow-sm hover:shadow-xl"
              >
                <div className={`w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center mb-8 ${item.accent} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-brand-primary tracking-tight mb-4 uppercase">{item.title}</h3>
                <p className="text-xs text-brand-primary/50 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-brand-border p-12 lg:p-20 rounded-[3.5rem] relative overflow-hidden"
          >
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">The Vision</span>
                <h2 className="text-4xl md:text-5xl font-black text-brand-primary tracking-tighter">Why We Partner.</h2>
              </div>
              <p className="text-brand-primary/60 text-lg leading-relaxed font-medium">
                Partnership is a commitment to stand with the mandate given to Newbreed Worship Centre. It is a spiritual identification with the grace that is at work in this house. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-brand-bg">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-accent">
                    <Zap size={24} />
                  </div>
                  <h4 className="text-brand-primary font-black uppercase tracking-widest text-xs">Apostolic Reach</h4>
                  <p className="text-brand-primary/50 text-xs font-medium leading-relaxed">Sponsoring the spread of the Word through global broadcasts and events.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-accent">
                    <Stars size={24} />
                  </div>
                  <h4 className="text-brand-primary font-black uppercase tracking-widest text-xs">Soul Winning</h4>
                  <p className="text-brand-primary/50 text-xs font-medium leading-relaxed">Every life transformed is a credit to your account in glory.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary p-12 lg:p-20 rounded-[3.5rem] text-white flex flex-col justify-center"
          >
            <div className="space-y-10">
              <h3 className="text-3xl font-black tracking-tight leading-tight italic">
                "Not because I desire a gift: but I desire fruit that may abound to your account."
              </h3>
              <p className="text-white/40 text-xs font-black uppercase tracking-widest">— Philippians 4:17</p>
              <div className="h-px bg-white/10 w-full" />
              <div className="space-y-6">
                {[
                  "Monthly Financial Support",
                  "Intercessory Support",
                  "Professional Skill Partnership",
                  "Equipment & Asset Giving"
                ].map((tier, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                    <span className="font-bold text-sm tracking-wide">{tier}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Global Broadcast Partnership Section */}
      <section className="py-32 px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Global Impact</span>
              <h2 className="text-5xl md:text-7xl font-black text-brand-primary tracking-tighter leading-tight font-display">Sponsoring the <br /> <span className="text-brand-glow">Broadcast.</span></h2>
            </div>
            <p className="text-brand-primary/60 text-lg leading-relaxed font-medium italic border-l-4 border-brand-accent pl-8">
              "Every time we go live across the world, your partnership is what fuels the signal. You are in the rooms of thousands, bringing healing and prophetic insight."
            </p>
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-black text-brand-primary tracking-tighter font-display">150+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40">Nations Reached</p>
              </div>
              <div className="w-px h-12 bg-brand-bg" />
              <div className="space-y-2">
                <p className="text-3xl font-black text-brand-primary tracking-tighter font-display">1M+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40">Live Views Yearly</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3">
              <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200" alt="Broadcast" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-primary/20" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Account Details Section */}
      <section id="partner-accounts" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="bg-brand-primary rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[100px]" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-5xl font-black text-white tracking-tighter leading-tight font-display">Partnership <br /> Information.</h2>
                <p className="text-white/60 text-lg leading-relaxed font-medium">Please use the details provided for all partnership seeds. Indicate 'PARTNERSHIP' as the payment description.</p>
              </div>
              
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                <div className="flex items-center gap-4 text-brand-accent">
                  <Mail size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">For Record Keeping</span>
                </div>
                <p className="text-white font-bold">Newbreedworshipcentre@gmail.com</p>
                <div className="pt-4 border-t border-white/10 mt-4">
                  <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Kindly send a notification or receipt after your seed.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 lg:p-16 rounded-[3rem] shadow-2xl">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em]">Account Details</p>
                      <h3 className="text-white text-3xl font-black tracking-tight">ZENITH BANK</h3>
                    </div>

                    <div className="space-y-8">
                       <div className="flex flex-col gap-2">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Account Name</span>
                        <span className="text-white text-xl md:text-2xl font-black tracking-tight uppercase">Newbreed Worship Centre Int'l</span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Account Number</span>
                        <div className="flex items-center gap-6">
                          <span className="text-white text-4xl md:text-6xl font-black tracking-tighter">1223605146</span>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary">
                            <ShieldCheck size={20} />
                          </div>
                          <span className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-tight">Secured Kingdom <br /> Transaction</span>
                        </div>
                        <button className="bg-white text-brand-primary px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-accent transition-all">
                          Copy Details
                        </button>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 text-center px-8">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="w-20 h-px bg-brand-accent mx-auto" />
          <h2 className="text-4xl font-black text-brand-primary tracking-tighter uppercase italic opacity-20">Established in Power</h2>
          <Link to="/give" className="inline-flex items-center gap-4 text-brand-accent font-black uppercase tracking-widest text-xs hover:gap-6 transition-all group">
            Other Giving Ways <ArrowRight className="group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
