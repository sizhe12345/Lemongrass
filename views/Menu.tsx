import React from 'react';
import { PRICE_LIST } from '../constants';

const Menu: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-wood-light min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 border border-lemongrass-dark/30 rounded-sm text-lemongrass-dark text-xs uppercase tracking-[0.2em] mb-4">
            Our Offerings
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-lemongrass-dark mb-6">Treatment Menu</h1>
          <p className="text-gray-600 max-w-xl mx-auto italic">
            "Prices are subject to change. Please confirm upon booking."
          </p>
        </div>

        <div className="space-y-12">
          {PRICE_LIST.map((section, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 shadow-lg rounded-sm border-t-4 border-gold">
              <h2 className="font-serif text-2xl font-bold text-lemongrass-dark mb-8 pb-4 border-b border-gray-100 flex items-center">
                <span className="w-2 h-2 bg-gold rotate-45 mr-3"></span>
                {section.category}
              </h2>
              
              <div className="grid gap-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col md:flex-row md:items-end justify-between group">
                    <div className="relative z-10 bg-white pr-4">
                      <h3 className="font-bold text-gray-800 text-lg group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-gray-500 text-sm font-light tracking-wide">
                        {item.duration}
                      </span>
                    </div>
                    
                    {/* Dots for visual connection on desktop */}
                    <div className="hidden md:block flex-grow border-b border-dashed border-gray-300 mb-2 mx-4"></div>
                    
                    <div className="relative z-10 bg-white pl-4 mt-2 md:mt-0">
                      <span className="font-serif text-xl font-bold text-lemongrass-dark">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <div className="inline-block p-6 border border-lemongrass-dark/20 rounded-sm bg-lemongrass-dark/5">
                <p className="text-sm text-gray-600 mb-2 font-bold uppercase tracking-widest">Note</p>
                <p className="text-sm text-gray-600">
                    All prices are in Malaysian Ringgit (MYR). <br/>
                    Please arrive 15 minutes prior to your appointment.
                </p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;