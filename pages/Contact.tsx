
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Get In Touch</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold oswald mb-8">CONTACT THE WORKSHOP</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to start your build? Have questions about our parts? Reach out to our experts and let's discuss your next project.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="glass p-10 rounded-3xl">
              <h3 className="text-3xl font-bold oswald mb-8">VISIT US</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-red-600 text-2xl">📍</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Main Workshop</h4>
                    <p className="text-gray-300">123 Turbo Avenue, Drift District<br />Nitro City, 90210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 text-2xl">📞</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Call Us</h4>
                    <p className="text-gray-300">+1 (555) 012-3456</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 text-2xl">✉️</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Email</h4>
                    <p className="text-gray-300">service@velocemods.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 text-2xl">🕒</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Hours</h4>
                    <p className="text-gray-300">Mon - Fri: 9:00 AM - 7:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-72 border border-white/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-50 grayscale" 
                alt="Map Placeholder" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest animate-bounce">
                  Find Us on Map
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 md:p-12 rounded-3xl"
          >
            <h3 className="text-3xl font-bold oswald mb-10">SEND A MESSAGE</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Build Type</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition-colors text-gray-400">
                  <option>Body Kit & Styling</option>
                  <option>Performance Tuning</option>
                  <option>Interior Upgrade</option>
                  <option>Maintenance & Service</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Floating */}
        <div className="mt-24 flex justify-center gap-12">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl group-hover:bg-red-600 transition-colors">💬</div>
                <span className="text-xs font-bold uppercase text-gray-400 tracking-widest">WhatsApp</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl group-hover:bg-red-600 transition-colors">📸</div>
                <span className="text-xs font-bold uppercase text-gray-400 tracking-widest">Instagram</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl group-hover:bg-red-600 transition-colors">📍</div>
                <span className="text-xs font-bold uppercase text-gray-400 tracking-widest">Directions</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
