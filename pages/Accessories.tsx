
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACCESSORIES } from '../constants';
import { Accessory } from '../types';

const Accessories: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Accessory | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Performance', 'Exterior', 'Interior', 'Lighting'];

  const filteredItems = activeCategory === 'All' 
    ? ACCESSORIES 
    : ACCESSORIES.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Elite Shop</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold oswald mb-6">CAR ACCESSORIES</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance parts and aesthetic upgrades sourced from the world's most reputable manufacturers. Built for those who settle for nothing less than perfect.
          </p>
        </header>

        {/* Filter UI */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-red-600 text-white' 
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass group cursor-pointer overflow-hidden rounded-2xl relative"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase text-[10px]">Quick View</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-600 text-xs font-bold uppercase">{item.category}</span>
                  <div className="flex text-yellow-500 text-xs">
                    {'★'.repeat(Math.floor(item.rating))}
                    <span className="text-gray-600 ml-1">({item.rating})</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold oswald mb-4">{item.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">${item.price}</span>
                  <button className="text-red-600 hover:text-white transition-colors text-xs font-bold uppercase">View Specs &rarr;</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-20 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-2xl z-20"
              >
                &times;
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-96 md:h-auto">
                  <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">{selectedItem.category}</span>
                  <h2 className="text-4xl font-bold oswald mb-6">{selectedItem.name}</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <div className="flex items-center justify-between mb-8 border-y border-white/5 py-6">
                    <div>
                      <span className="text-gray-500 block text-xs uppercase mb-1">Price Tag</span>
                      <span className="text-3xl font-bold text-white">${selectedItem.price}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-xs uppercase mb-1">Availability</span>
                      <span className="text-green-500 font-bold uppercase text-xs">In Stock</span>
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-colors mb-4">
                    Order via WhatsApp
                  </button>
                  <p className="text-center text-gray-500 text-[10px] uppercase">Shipping worldwide & professional installation available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accessories;
