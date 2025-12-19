import React from 'react';
import { SERVICES, CONTACT_INFO, WA_MESSAGES } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-wood-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-lemongrass-dark mb-6">Our Healing Arts</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Curated treatments designed to alleviate the specific physical and mental burdens of the modern business lifestyle.
          </p>
        </div>

        <div className="space-y-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white shadow-xl overflow-hidden rounded-sm`}>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">
                    Lemongrass Signature
                  </h3>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-lemongrass-dark text-sm uppercase mb-3 border-b border-gray-100 pb-2">Benefits</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <span className="text-gold mr-2">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-wood-light p-4 rounded-sm border border-gold/20 mb-8">
                    <p className="text-sm text-gray-800 italic">
                      <span className="font-bold not-italic text-lemongrass-dark">Recommended For:</span> {service.recommendedFor}
                    </p>
                  </div>

                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hi Lemongrass, I am interested in the ${service.title}.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lemongrass-dark font-bold uppercase tracking-wider text-sm hover:text-gold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book This Therapy
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;