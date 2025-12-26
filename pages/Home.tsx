
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ACCESSORIES, SERVICES, BRANDS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.pexels.com/photos/30508565/pexels-photo-30508565/free-photo-of-land-rover-defender-in-a-kerala-forest.jpeg" 
            alt="Modified Car" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-20 text-center md:text-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-red-600 font-bold uppercase tracking-[0.5em] mb-4 text-sm md:text-base">Elite Performance & Style</h2>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight">
              UPGRADE YOUR <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">CAR STYLE</span>
            </h1>
            <p className="text-gray-300 max-w-lg mb-10 text-lg md:text-xl leading-relaxed">
              Premium car modifications and luxury accessories for drivers who demand excellence. Turn heads on every corner.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link to="/accessories" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-md font-bold uppercase tracking-wider transition-all transform hover:scale-105">
                Explore Accessories
              </Link>
              <Link to="/services" className="glass hover:bg-white/10 text-white px-10 py-4 rounded-md font-bold uppercase tracking-wider transition-all transform hover:scale-105">
                View Modifications
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-red-600 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Accessories */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Shop Premium</h2>
              <h3 className="text-4xl md:text-5xl font-bold oswald">Featured Accessories</h3>
            </div>
            <Link to="/accessories" className="text-red-600 font-bold uppercase text-sm border-b-2 border-red-600 pb-1 hidden md:block">
              View All Shop
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCESSORIES.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass group overflow-hidden rounded-xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase rounded">
                    New Arrival
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs uppercase tracking-widest">{item.category}</span>
                    <span className="text-red-600 font-bold">${item.price}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 oswald">{item.name}</h4>
                  <button className="w-full py-3 border border-white/10 group-hover:bg-red-600 transition-colors uppercase text-xs font-bold tracking-widest rounded">
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Slider */}
      <section className="py-12 bg-zinc-950 border-y border-white/5 overflow-hidden">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex items-center gap-4 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
              <span className="text-2xl font-bold text-gray-400 oswald">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-24 bg-zinc-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold oswald">Modification Services</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {SERVICES.slice(0, 1).map((service) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-red-900/10"
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h4 className="text-3xl font-bold mb-4 oswald">{service.title}</h4>
                  <Link to="/services" className="bg-white text-black px-6 py-3 rounded-md font-bold uppercase text-xs">Explore Service</Link>
                </div>
              </motion.div>
            ))}
            <div className="grid grid-cols-1 gap-6">
              {SERVICES.slice(1, 3).map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center"
                >
                  <img src={service.image} className="w-32 h-32 rounded-lg object-cover" alt="" />
                  <div>
                    <h4 className="text-2xl font-bold mb-2 oswald">{service.title}</h4>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <Link to="/services" className="text-red-600 font-bold uppercase text-xs">Learn More &rarr;</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
             <div className="text-center md:text-left">
              <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Client Reviews</h2>
              <h3 className="text-4xl md:text-5xl font-bold oswald">What Drivers Say</h3>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">←</button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">→</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass p-10 rounded-3xl relative"
              >
                <div className="text-red-600 text-6xl absolute top-6 right-10 opacity-20">"</div>
                <p className="text-gray-300 text-lg italic mb-8 relative z-10">{t.content}</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-red-600 p-0.5" />
                  <div>
                    <h5 className="font-bold oswald">{t.name}</h5>
                    <p className="text-red-600 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
