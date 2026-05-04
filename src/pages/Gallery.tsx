import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Share2, Plus, X, MessageCircle, Search, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPhotos } from '../mockData';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | typeof galleryPhotos[0]>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPhotos, setLikedPhotos] = useState<string[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const featuredPhotos = [...galleryPhotos].sort((a, b) => b.likes - a.likes).slice(0, 10);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredPhotos.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredPhotos.length) % featuredPhotos.length);
  };
  
  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter(p => p !== id));
    } else {
      setLikedPhotos([...likedPhotos, id]);
    }
  };

  const categories = ['All', ...new Set(galleryPhotos.map(p => p.category))];
  const filteredPhotos = galleryPhotos.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.caption.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    }
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'ArrowRight') navigatePhoto('next');
      if (e.key === 'ArrowLeft') navigatePhoto('prev');
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  return (
    <div className="bg-brand-bg min-h-screen pb-32">
      {/* Header */}
      <section className="pt-40 pb-24 px-8 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-secondary/20 blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left space-y-6"
          >
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Visual Chronicles</span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter font-display">Kingdom Moments</h1>
          </motion.div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-3 bg-white text-brand-primary px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:-translate-y-1 transition-all">
              <Plus size={18} /> Upload Photo
            </button>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 relative z-20">
        <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-brand-primary border border-white/10 group/carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={featuredPhotos[carouselIndex].url} 
                alt={featuredPhotos[carouselIndex].caption} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-12 lg:p-20 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-4 max-w-2xl">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]"
                  >
                    Featured Moment • {featuredPhotos[carouselIndex].category}
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white tracking-tighter font-display leading-[0.9]"
                  >
                    {featuredPhotos[carouselIndex].caption}
                  </motion.h2>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full bg-brand-accent text-brand-primary flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="absolute top-12 right-12 flex gap-3 z-30">
            {featuredPhotos.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === carouselIndex ? 'w-10 bg-brand-accent' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-brand-border pb-12">
          <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
            {categories.map((cat) => ( activeCategory === cat ? (
              <button 
                key={cat}
                className="bg-brand-primary text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-xl shadow-brand-primary/20"
              >
                {cat}
              </button>
            ) : (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="bg-white text-brand-primary/60 border border-brand-border px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap hover:border-brand-accent transition-all"
              >
                {cat}
              </button>
            )))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary/30" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH MOMENTS..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border border-brand-border focus:outline-none focus:border-brand-accent text-[10px] font-black tracking-widest text-brand-primary"
            />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-8 min-h-[400px]">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.length > 0 ? (
              filteredPhotos.map((photo, i) => (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative group rounded-[2.5rem] overflow-hidden border border-brand-border bg-white cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img src={photo.url} alt={photo.caption} className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
                    <div className="flex justify-end gap-3">
                      <button 
                        onClick={(e) => toggleLike(photo.id, e)}
                        className={`p-3 rounded-xl backdrop-blur-md border border-white/20 transition-all ${likedPhotos.includes(photo.id) ? 'bg-red-500 text-white border-red-500' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      >
                        <Heart size={18} className={likedPhotos.includes(photo.id) ? 'fill-current' : ''} />
                      </button>
                      <button className="p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all">
                        <Share2 size={18} />
                      </button>
                    </div>
                    
                    <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[9px]">{photo.category}</span>
                      <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight">{photo.caption}</h3>
                      <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-white/80">
                          <Heart size={14} className="text-red-400" />
                          <span className="text-xs font-black tabular-nums">{photo.likes + (likedPhotos.includes(photo.id) ? 1 : 0)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <MessageCircle size={14} className="text-brand-accent" />
                          <span className="text-xs font-black tabular-nums">{photo.shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-brand-bg rounded-3xl flex items-center justify-center text-brand-primary/20 mx-auto border border-brand-border">
                  <Search size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-brand-primary tracking-tighter capitalize">No moments found</h3>
                  <p className="text-brand-primary/40 font-medium max-w-xs mx-auto">We couldn't find any photos matching "{searchTerm}". Try another keyword.</p>
                </div>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-brand-accent font-black uppercase tracking-[0.2em] text-[10px] underline"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bio Modal */}
      {/* ... previous code ... */}

      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0 bg-brand-primary/98 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-10 right-10 z-30 p-4 bg-brand-bg rounded-full text-brand-primary hover:bg-brand-accent transition-all shadow-xl hover:rotate-90"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 md:px-10 flex justify-between pointer-events-none z-20">
                <button 
                  onClick={() => navigatePhoto('prev')}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent transition-all shadow-2xl pointer-events-auto"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  onClick={() => navigatePhoto('next')}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent transition-all shadow-2xl pointer-events-auto"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="w-full lg:w-3/4 bg-brand-primary/10 flex items-center justify-center overflow-hidden relative group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedPhoto.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    src={selectedPhoto.url} 
                    alt={selectedPhoto.caption} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </AnimatePresence>
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-10 left-10 right-10 pointer-events-none hidden md:block">
                  <div className="bg-brand-primary/20 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-3xl inline-block">
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">{selectedPhoto.category}</span>
                    <h4 className="text-white text-lg font-bold tracking-tight">{selectedPhoto.caption}</h4>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/4 p-12 lg:p-16 overflow-y-auto scrollbar-hide bg-white flex flex-col">
                <div className="flex-grow space-y-12">
                  <div className="space-y-6">
                    <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] block">Apostolic Archive</span>
                    <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter leading-none font-display">
                      {selectedPhoto.caption}
                    </h2>
                    <div className="flex items-center gap-4">
                      <p className="text-brand-primary/40 font-black uppercase tracking-[0.2em] text-[10px] py-1 px-4 bg-brand-bg rounded-lg">{selectedPhoto.category}</p>
                      <div className="h-px flex-grow bg-brand-border" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={(e) => toggleLike(selectedPhoto.id, e)}
                      className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] border transition-all shadow-lg ${
                        likedPhotos.includes(selectedPhoto.id) 
                        ? 'bg-red-500 text-white border-red-500 shadow-red-500/20' 
                        : 'bg-brand-primary text-white border-brand-primary hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent'
                      }`}
                    >
                      <Heart size={18} className={likedPhotos.includes(selectedPhoto.id) ? 'fill-current' : ''} />
                      {likedPhotos.includes(selectedPhoto.id) ? 'Moment Liked' : 'Approve Moment'}
                    </button>
                    <button className="w-full h-16 rounded-2xl bg-brand-bg text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] border border-brand-border hover:border-brand-accent transition-all flex items-center justify-center gap-3">
                      <Share2 size={18} /> Broadcast
                    </button>
                  </div>

                  <div className="space-y-8 pt-12 border-t border-brand-border">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/30">Witnesses</h4>
                      <span className="text-brand-accent font-black text-xs">{selectedPhoto.likes + (likedPhotos.includes(selectedPhoto.id) ? 1 : 0)} Likes</span>
                    </div>
                    <div className="space-y-4">
                      {["Radiating absolute grace.", "A moment established in glory.", "Truly inspiring."].map((comment, i) => (
                        <div key={i} className="flex gap-4 items-start bg-brand-bg/50 p-5 rounded-3xl border border-brand-border/30">
                          <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-[8px] font-black">
                            {i + 1}
                          </div>
                          <p className="text-xs font-medium text-brand-primary/70 italic leading-relaxed">"{comment}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-12 text-center">
                  <p className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-primary/20">© Newbreed Archive 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
