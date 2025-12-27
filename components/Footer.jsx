import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold flex items-center gap-2 mb-6"
            >
              <span className="text-red-600">⚡</span>
              <span className="tracking-tighter oswald">
                SC<span className="text-red-600">A</span>
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6">
              The ultimate destination for premium car modifications and high-end
              accessories. We redefine your driving experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 oswald">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link to="/accessories" className="hover:text-red-600 transition-colors">
                  Accessories Shop
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-600 transition-colors">
                  Mod Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-red-600 transition-colors">
                  Build Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-600 transition-colors">
                  Our Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 oswald">
              Follow Us
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="https://wa.me/918627868153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-600 transition-colors"
                >
                  <FaWhatsapp className="text-xl text-green-500" />
                  <span>WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-600 transition-colors"
                >
                  <FaInstagram className="text-xl text-pink-500" />
                  <span>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-600 transition-colors"
                >
                  <FaFacebookF className="text-xl text-blue-500" />
                  <span>Facebook</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-600 transition-colors"
                >
                  <FaYoutube className="text-xl text-red-500" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>


          {/* Workshop */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 oswald">
              Workshop
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-red-600">📍</span>
                <span>
                  Fatehpur (Dharamshala), Kangra District, Himachal Pradesh
                </span>
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

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Veloce Mods. All Rights Reserved. Built for speed.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
