
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Hall of Fame</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold oswald mb-6">BUILD GALLERY</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Witness the transformation. Explore our portfolio of professional car modifications and high-end styling projects.
          </p>
        </header>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden glass"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-red-600 font-bold uppercase text-[10px] tracking-widest mb-2">{item.category}</span>
                <h4 className="text-2xl font-bold oswald text-white uppercase">{item.title}</h4>
                <div className="mt-4 w-10 h-1 bg-red-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-10 right-10 text-white text-4xl hover:text-red-600 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={selectedImage}
                className="max-w-full max-h-full rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
