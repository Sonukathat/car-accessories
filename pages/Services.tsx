
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <header className="mb-24 text-center">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Master Customization</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold oswald mb-8">MODIFICATION SERVICES</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Our workshop is where automotive dreams become reality. From performance tuning to aesthetic masterpieces, our certified technicians treat every car like a work of art.
          </p>
        </header>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-red-600/20 rounded-2xl blur-2xl group-hover:bg-red-600/30 transition-all" />
                  <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 glass border-red-600/30 border hidden md:flex items-center justify-center rounded-2xl rotate-12 group-hover:rotate-0 transition-transform">
                     <span className="text-3xl">🛠️</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-red-600 font-black text-6xl opacity-10 oswald mb-[-40px]">0{idx + 1}</h2>
                <h3 className="text-4xl md:text-5xl font-bold oswald mb-6">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {service.description} We use only the finest materials and latest technology to ensure your car's modifications are durable, functional, and visually stunning.
                </p>
                
                {/* Before/After Visualization */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative">
                    <img src={service.beforeImg} className="w-full h-32 object-cover rounded-lg" alt="Before" />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-[10px] font-bold px-2 py-1 uppercase rounded text-white">Before</span>
                  </div>
                  <div className="relative">
                    <img src={service.afterImg} className="w-full h-32 object-cover rounded-lg" alt="After" />
                    <span className="absolute bottom-2 left-2 bg-red-600 text-[10px] font-bold px-2 py-1 uppercase rounded text-white">After</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold uppercase text-xs transition-colors">Learn More</button>
                  <button className="glass hover:bg-white/10 px-8 py-3 rounded-md font-bold uppercase text-xs transition-colors">Pricing Info</button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
