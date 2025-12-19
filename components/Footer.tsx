import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO, WA_MESSAGES } from '../constants';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WA_MESSAGES.general)}`;

  return (
    <>
      <footer className="bg-lemongrass-dark text-white pt-16 pb-32 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gold mb-6">LEMONGRASS</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                A sanctuary blending professional Asian healing arts with a high-end business relaxation experience.
              </p>
              <div className="flex items-center space-x-2 text-gold">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span className="text-sm tracking-widest uppercase">Kuala Lumpur</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white/80 text-sm hover:text-gold transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{CONTACT_INFO.hours}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Corporate Packages</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Lemongrass Wellness Center. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Call-to-Action */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden grid grid-cols-2 bg-lemongrass-dark shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center bg-lemongrass-light py-4 text-white font-bold text-sm tracking-wide active:bg-green-700"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gold py-4 text-lemongrass-dark font-bold text-sm tracking-wide active:bg-yellow-600"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default Footer;