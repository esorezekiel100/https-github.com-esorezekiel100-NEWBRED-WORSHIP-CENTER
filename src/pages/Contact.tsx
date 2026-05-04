import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
  };

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
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block leading-none">Connect With Us</span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 font-display">Get In Touch</h1>
            <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              We would love to hear from you. Reach out for prayers, inquiries about kingdom mandates, or powerful testimonies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-6 text-left">
              <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">Information</span>
              <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Reach Out Directly</h2>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: <MapPin />, title: "Visit Us", content: "85 INEC Rd. Kpansia, Yenagoa, Bayelsa." },
                { icon: <Phone />, title: "Call Us", content: "07019571727" },
                { icon: <Mail />, title: "Email Us", content: "Newbreedworshipcentre@gmail.com" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-white border border-brand-border rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <div className="space-y-2 text-left">
                    <h4 className="font-black text-brand-primary uppercase tracking-widest text-xs">{item.title}</h4>
                    <p className="text-brand-primary/60 leading-relaxed font-medium text-lg">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-16 border-t border-brand-border space-y-10">
              <h4 className="font-black text-brand-primary uppercase tracking-[0.2em] text-xs text-left">Kingdom Community</h4>
              <div className="flex gap-4">
                {[<Facebook />, <Instagram />, <Twitter />, <Youtube />].map((icon, i) => (
                  <a key={i} href="#" className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:-translate-y-2 transition-all shadow-sm">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-12 lg:p-20 rounded-[3rem] shadow-2xl border border-brand-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-brand-primary tracking-tighter">Send a Message</h3>
                <p className="text-brand-primary/40 font-medium tracking-tight">Our team is ready to respond to your kingdom inquiries.</p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 ml-2">Your Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all font-black text-[10px] tracking-widest placeholder:text-brand-primary/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 ml-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-8 py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all font-black text-[10px] tracking-widest placeholder:text-brand-primary/20" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 ml-2">Subject / Mandate</label>
                  <input required type="text" placeholder="Inquiry about..." className="w-full px-8 py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all font-black text-[10px] tracking-widest placeholder:text-brand-primary/20" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/40 ml-2">Your Divine Testimony / Message</label>
                  <textarea required rows={5} placeholder="Write your message here..." className="w-full px-8 py-5 rounded-2xl bg-brand-bg border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all font-black text-[10px] tracking-widest placeholder:text-brand-primary/20 resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full py-6 rounded-2xl bg-brand-primary text-white font-black tracking-[0.3em] uppercase text-xs hover:bg-brand-accent transition-all shadow-[0_20px_40px_-10px_rgba(75,28,113,0.3)] flex items-center justify-center gap-4 group">
                    Send Mandate <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Header */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="h-[500px] bg-brand-primary rounded-[3rem] overflow-hidden relative border border-brand-border group">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
            alt="Map" 
            className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="glass p-12 rounded-[2.5rem] border border-white/20 text-center max-w-sm shadow-2xl transform transition-transform group-hover:scale-105">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <MapPin size={32} />
              </div>
              <h4 className="font-black text-brand-primary text-xl mb-3 tracking-tighter">Visit the Sanctuary</h4>
              <p className="text-[10px] text-brand-primary/60 leading-relaxed uppercase tracking-[0.2em] font-black">85 INEC Rd. Kpansia, Yenagoa, Bayelsa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
