import React from 'react';
import { Wifi, VolumeX, Coffee, Award } from 'lucide-react';
import { CONTACT_INFO, WA_MESSAGES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-lemongrass-dark mb-6">The Business Class Experience</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We understand that for our clients, relaxation is a necessity, not just a luxury. Every detail at Lemongrass is engineered for privacy, comfort, and productivity.
        </p>
      </section>

      {/* Features Grid */}
      <section className="bg-wood-light py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center rounded-sm shadow-md">
              <div className="w-16 h-16 bg-lemongrass-dark text-gold mx-auto rounded-full flex items-center justify-center mb-6">
                <VolumeX size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Soundproof Privacy</h3>
              <p className="text-gray-600 text-sm">Solid walls and acoustic paneling ensure your conversations remain confidential.</p>
            </div>
            <div className="bg-white p-8 text-center rounded-sm shadow-md">
              <div className="w-16 h-16 bg-lemongrass-dark text-gold mx-auto rounded-full flex items-center justify-center mb-6">
                <Wifi size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">High-Speed Wi-Fi</h3>
              <p className="text-gray-600 text-sm">Dedicated business-grade fiber connection in all VIP suites.</p>
            </div>
            <div className="bg-white p-8 text-center rounded-sm shadow-md">
              <div className="w-16 h-16 bg-lemongrass-dark text-gold mx-auto rounded-full flex items-center justify-center mb-6">
                <Coffee size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Premium Tea Bar</h3>
              <p className="text-gray-600 text-sm">Complimentary premium organic teas served before and after your session.</p>
            </div>
            <div className="bg-white p-8 text-center rounded-sm shadow-md">
              <div className="w-16 h-16 bg-lemongrass-dark text-gold mx-auto rounded-full flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Senior Therapists</h3>
              <p className="text-gray-600 text-sm">We only hire therapists with a minimum of 10 years verified experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
                alt="VIP Massage Suite Interior" 
                className="w-full rounded-sm shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-lemongrass-dark mb-6">The VIP Suite</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Designed for the discerning executive, our VIP Suites are more than just massage rooms. They are private sanctuaries equipped with en-suite showers, comfortable seating areas for casual meetings, and adjustable ambient lighting.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need to decompress after a long flight or discuss a deal in a relaxed setting, our suites provide the perfect environment.
              </p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WA_MESSAGES.booking)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-lemongrass-dark px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest transition-all"
              >
                Reserve Suite
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;