import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Users, MessageSquare, Share2, Heart, Send, Radio, 
  Youtube, Download, HandHeart as HandsPraying, Calendar, BookOpen, 
  Edit3, Search 
} from 'lucide-react';

const Live = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'pray' | 'schedule' | 'note' | 'bible'>('chat');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: 'Minister Gabriel', text: 'The depth of this revelation is mind-blowing! Newbreed is indeed the portal.', time: '5m ago' },
    { id: 2, user: 'Sis. Esther', text: 'Receiving from Ghana. The fire is burning here too!', time: '3m ago' },
    { id: 3, user: 'Bro. Samuel', text: 'I testify to the healing power of God in this atmosphere!', time: '2m ago' },
    { id: 4, user: 'Prophetic Voice', text: 'Kingdom governance is being established now!', time: 'Just now' },
  ]);

  const [note, setNote] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments([...comments, { id: Date.now(), user: 'You', text: comment, time: 'Just now' }]);
    setComment('');
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your prayer request has been sent to our intercessory team. God bless you!');
    setPrayerRequest('');
  };

  return (
    <div className="bg-brand-bg min-h-screen pb-32">
      {/* Live Header */}
      <section className="pt-32 pb-16 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">Live Stream</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-display">
              Super <span className="text-brand-accent">Sunday</span>
            </h1>
            <p className="text-white/60 font-medium">with Pastor Bod' Olukole & The Newbreed Sound</p>
          </motion.div>
          
          <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10">
            <div className="flex items-center gap-3">
              <Users className="text-brand-accent w-5 h-5" />
              <span className="text-white font-black tabular-nums">3,485</span>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-1">Watching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-8 -mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20">
        {/* Video Player Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video bg-black rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/10 ring-1 ring-white/5"
          >
            {/* YouTube Embed Placeholder - In real world, use current live ID */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/AicfwCB1JHQ?autoplay=1&mute=0" 
              title="YouTube Live Stream" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
            
            <div className="absolute top-6 left-6 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Youtube size={16} className="text-red-500" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">YouTube Live</span>
              </div>
            </div>
          </motion.div>

          {/* Interaction Bar */}
          <div className="flex items-center justify-between p-8 bg-white rounded-[2.5rem] border border-brand-border shadow-sm">
            <div className="flex items-center gap-10">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-4 transition-all hover:scale-110 active:scale-95 ${isLiked ? 'text-red-500' : 'text-brand-primary/40 hover:text-brand-primary'}`}
              >
                <Heart size={28} className={isLiked ? 'fill-current' : ''} />
                <div className="text-left">
                  <span className="block text-sm font-black leading-none">4.8k Likes</span>
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Approve Service</span>
                </div>
              </button>
              <button className="flex items-center gap-4 text-brand-primary/40 hover:text-brand-primary transition-all hover:scale-110 active:scale-95">
                <Share2 size={28} />
                <div className="text-left">
                  <span className="block text-sm font-black leading-none">Broadcast</span>
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Share with Friends</span>
                </div>
              </button>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-4 border-white bg-brand-bg flex items-center justify-center text-[10px] font-black ${i === 1 ? 'z-30 bg-brand-accent text-brand-primary' : i === 2 ? 'z-20 bg-brand-secondary text-white' : 'z-10 bg-brand-primary text-white'}`}>
                    {i === 1 ? 'NB' : i === 2 ? 'OC' : 'DO'}
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40">Established in Glory</p>
            </div>
          </div>

          {/* Service Resources Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 bg-white rounded-[3rem] border border-brand-border shadow-sm space-y-10"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-brand-primary tracking-tighter">Kingdom Resources</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Equipping the Saints</p>
              </div>
              <Download className="text-brand-accent w-8 h-8 opacity-20" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Apostolic Notes", size: "1.2 MB", type: "PDF" },
                { name: "Prophetic Confessions", size: "850 KB", type: "DOC" },
                { name: "Ministry Blueprint", size: "2.4 MB", type: "PDF" }
              ].map((item, i) => (
                <button key={i} className="group p-6 bg-brand-bg border border-brand-soft rounded-3xl hover:border-brand-accent hover:bg-white transition-all duration-500 text-left relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-brand-accent/10 rounded-full group-hover:scale-[10] transition-transform duration-1000" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-accent shadow-sm">
                      <Download size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-brand-primary mb-1">{item.name}</h4>
                      <p className="text-[9px] font-black text-brand-primary/40 uppercase tracking-widest">{item.size} • {item.type}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar Tabs Area */}
        <div className="lg:col-span-4 flex flex-col h-[700px] lg:h-auto">
          <div className="flex-1 bg-white rounded-[3rem] border border-brand-border shadow-2xl flex flex-col overflow-hidden">
            {/* Tab Navigation */}
            <div className="grid grid-cols-5 p-2 bg-brand-bg border-b border-brand-border h-20">
              {[
                { id: 'chat', icon: MessageSquare, label: 'Feed' },
                { id: 'pray', icon: HandsPraying, label: 'Pray' },
                { id: 'schedule', icon: Calendar, label: 'Timing' },
                { id: 'note', icon: Edit3, label: 'Note' },
                { id: 'bible', icon: BookOpen, label: 'Bible' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex flex-col items-center justify-center gap-1.5 transition-all relative ${
                    activeTab === tab.id ? 'text-brand-accent' : 'text-brand-primary/30 hover:text-brand-primary'
                  }`}
                >
                  <tab.icon size={20} className={activeTab === tab.id ? 'scale-110' : ''} />
                  <span className="text-[8px] font-black uppercase tracking-widest">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-2 right-2 h-1 bg-brand-accent rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
              <AnimatePresence mode="wait">
                {activeTab === 'chat' && (
                  <motion.div 
                    key="chat"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xs font-black tracking-[0.2em] uppercase text-brand-primary/40">Live Interaction</h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-green-500">Online</span>
                      </div>
                    </div>
                    {comments.map((msg) => (
                      <div key={msg.id} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.1em]">{msg.user}</span>
                          <span className="text-[8px] font-black text-brand-primary/20 uppercase">{msg.time}</span>
                        </div>
                        <div className="bg-brand-bg p-4 rounded-2xl text-sm font-medium text-brand-primary/80 border border-brand-soft">
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'pray' && (
                  <motion.div 
                    key="pray"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-brand-primary tracking-tighter">Prayer Request</h3>
                      <p className="text-xs font-medium text-brand-primary/60">Our intercessory team is standing by to agree with you in prayer.</p>
                    </div>
                    <form onSubmit={handlePrayerSubmit} className="space-y-6">
                      <textarea 
                        value={prayerRequest}
                        onChange={(e) => setPrayerRequest(e.target.value)}
                        placeholder="Write your request here..."
                        className="w-full h-40 bg-brand-bg border border-brand-border rounded-[2rem] p-6 text-sm font-medium focus:outline-none focus:border-brand-accent resize-none transition-all"
                      />
                      <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-accent hover:text-brand-primary transition-all shadow-xl">
                        Submit Petition
                      </button>
                    </form>
                  </motion.div>
                )}

                {activeTab === 'schedule' && (
                  <motion.div 
                    key="schedule"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-xl font-black text-brand-primary tracking-tighter">Service Schedule</h3>
                    <div className="space-y-4">
                      {[
                        { day: 'SUNDAY', time: '09:00 AM', event: 'Super Sunday' },
                        { day: 'WEDNESDAY', time: '05:00 PM', event: 'Life Application Service' }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-2 p-5 bg-brand-bg border border-brand-soft rounded-2xl group hover:border-brand-accent transition-all">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black text-brand-accent tracking-[0.2em]">{item.day}</span>
                            <span className="text-xs font-black text-brand-primary/40">{item.time}</span>
                          </div>
                          <span className="text-sm font-bold text-brand-primary underline group-hover:no-underline">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'note' && (
                  <motion.div 
                    key="note"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-brand-primary tracking-tighter">Sermon Journal</h3>
                      <button className="p-3 bg-brand-bg rounded-xl text-brand-primary/40 hover:text-brand-accent transition-colors">
                        <Download size={18} />
                      </button>
                    </div>
                    <textarea 
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Capture what the Spirit is saying..."
                      className="w-full h-80 bg-brand-bg border border-brand-border rounded-[2rem] p-6 text-sm font-medium focus:outline-none focus:border-brand-accent resize-none transition-all placeholder:opacity-30"
                    />
                    <p className="text-[10px] font-black uppercase text-brand-primary/30 text-center tracking-widest">Notes are saved locally in your session</p>
                  </motion.div>
                )}

                {activeTab === 'bible' && (
                  <motion.div 
                    key="bible"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="relative">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-primary/40" size={18} />
                      <input 
                        type="text" 
                        placeholder="Search Verse..."
                        className="w-full bg-brand-bg border border-brand-border rounded-[2rem] pl-16 pr-6 py-5 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-brand-accent"
                      />
                    </div>
                    
                    <div className="p-8 bg-brand-bg rounded-[2.5rem] border border-brand-soft space-y-6">
                      <div className="text-center space-y-2">
                        <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Prophetic Focus</span>
                        <h4 className="text-lg font-black text-brand-primary">Genesis 1:1-3</h4>
                      </div>
                      <p className="text-sm font-medium text-brand-primary/80 leading-relaxed italic text-center">
                        "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters..."
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex flex-col items-center gap-3 p-6 bg-brand-bg border border-brand-soft rounded-2xl hover:border-brand-accent transition-all group">
                        <BookOpen size={20} className="text-brand-primary/40 group-hover:text-brand-accent" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Old Testament</span>
                      </button>
                      <button className="flex flex-col items-center gap-3 p-6 bg-brand-bg border border-brand-soft rounded-2xl hover:border-brand-accent transition-all group">
                        <Radio size={20} className="text-brand-primary/40 group-hover:text-brand-accent" />
                        <span className="text-[10px] font-black uppercase tracking-widest">New Testament</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sticky Chat Input (only for Chat tab) */}
            {activeTab === 'chat' && (
              <form onSubmit={handleSendComment} className="p-6 bg-brand-bg border-t border-brand-border">
                <div className="relative">
                  <input 
                    type="text" 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="SAY SOMETHING..."
                    className="w-full bg-white border border-brand-border rounded-2xl pl-6 pr-14 py-4 text-[10px] font-black tracking-widest focus:outline-none focus:border-brand-accent transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center hover:bg-brand-accent transition-colors shadow-lg"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;
