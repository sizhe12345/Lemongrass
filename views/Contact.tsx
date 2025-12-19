import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-wood-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-lemongrass-dark mb-6">Visit Our Sanctuary</h1>
          <p className="text-gray-600">Located in the heart of Kuala Lumpur's business district.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Contact Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lemongrass-dark mb-1">Address</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  <div className="mt-2 flex space-x-4">
                    <a href={CONTACT_INFO.wazeLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gold hover:text-lemongrass-dark uppercase tracking-wider flex items-center">
                      <Navigation className="w-3 h-3 mr-1" /> Waze
                    </a>
                    <a href={CONTACT_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gold hover:text-lemongrass-dark uppercase tracking-wider flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lemongrass-dark mb-1">Operating Hours</h3>
                  <p className="text-gray-600">{CONTACT_INFO.hours}</p>
                  <p className="text-xs text-gray-400 mt-1 italic">Late night appointments available upon request.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lemongrass-dark mb-1">Reservations</h3>
                  <p className="text-gray-600 mb-2">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-gold transition-colors">{CONTACT_INFO.phone}</a>
                  </p>
                  <p className="text-sm text-gray-500">
                    For fastest response, please use WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-lemongrass-dark/5 border border-lemongrass-dark/10 rounded-sm">
              <h4 className="font-bold text-lemongrass-dark mb-2">Parking Information</h4>
              <p className="text-sm text-gray-600">
                Complimentary valet parking is available at the main entrance. Alternatively, you may park at Level B1, Zone A (Reserved for Lemongrass Guests).
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[500px] bg-gray-200 shadow-xl rounded-sm overflow-hidden relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.791244799056!2d101.655767!3d3.149237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4950a2278061%3A0xe213000000000000!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1695000000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lemongrass Location Map"
             ></iframe>
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;