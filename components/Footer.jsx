
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span className="text-red-600">⚡</span>
              <span className="tracking-tighter oswald">SC<span className="text-red-600">A</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              The ultimate destination for premium car modifications and high-end accessories. We redefine your driving experience.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter', 'Youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-600 transition-colors text-xs font-bold uppercase tracking-tighter">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-6 oswald">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/accessories" className="hover:text-red-600 transition-colors">Accessories Shop</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Mod Services</Link></li>
              <li><Link to="/gallery" className="hover:text-red-600 transition-colors">Build Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Our Workshop</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-6 oswald">Categories</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-red-600 cursor-pointer">Interior Styling</li>
              <li className="hover:text-red-600 cursor-pointer">Performance Parts</li>
              <li className="hover:text-red-600 cursor-pointer">Wheel & Tires</li>
              <li className="hover:text-red-600 cursor-pointer">Body Kits</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-6 oswald">Workshop</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-red-600">📍</span>
                <span>Fatehpur(Dharamshala), Kangra District, Himachal Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600">📞</span>
                <span>+91 8627868153</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600">✉️</span>
                <span>service@sca.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Veloce Mods. All Rights Reserved. Built for speed.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
