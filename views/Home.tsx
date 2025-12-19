import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { PageView, ServiceItem, FaqItem } from '../types';
import { SERVICES, FAQS, WA_MESSAGES, CONTACT_INFO } from '../constants';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80" 
            alt="Private luxury massage suite" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-lemongrass-dark/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left pt-20">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-gold/50 rounded-sm text-gold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
              Kuala Lumpur's Hidden Gem
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Hidden <span className="text-gold italic">Business Sanctuary</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
              Where professional Asian healing arts meet high-end business privacy. Experience our signature Neck Traction Therapy in soundproof luxury.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <button 
                onClick={() => onNavigate('booking')}
                className="bg-gold hover:bg-gold-light text-lemongrass-dark px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all text-center flex items-center justify-center md:justify-start"
              >
                Book VIP Suite
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all"
              >
                View Treatments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Address (The Hook) */}
      <section className="py-20 bg-wood-light relative -mt-20 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-xl border-t-4 border-lemongrass-dark transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-lemongrass-dark/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-lemongrass-dark w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Text Neck & Stiffness</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Suffering from chronic neck pain due to screen time? Our signature Traction Bed releases deep spinal tension instantly.
              </p>
              <button onClick={() => onNavigate('services')} className="text-gold font-bold text-sm uppercase tracking-wider hover:text-lemongrass-dark transition-colors flex items-center">
                Discover Relief <ArrowRight className="ml-1 w-3 h-3" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 shadow-xl border-t-4 border-gold transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-gold w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Business Fatigue</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Exhausted from travel or meetings? Restore your vitality with Authentic Thai & Balinese deep tissue therapy.
              </p>
              <button onClick={() => onNavigate('services')} className="text-gold font-bold text-sm uppercase tracking-wider hover:text-lemongrass-dark transition-colors flex items-center">
                Restore Energy <ArrowRight className="ml-1 w-3 h-3" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 shadow-xl border-t-4 border-lemongrass-dark transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-lemongrass-dark/10 rounded-full flex items-center justify-center mb-6">
                <Star className="text-lemongrass-dark w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Private Discussions</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Need a quiet place to think or talk? Our soundproof VIP suites offer the perfect environment for relaxed business discussions.
              </p>
              <button onClick={() => onNavigate('experience')} className="text-gold font-bold text-sm uppercase tracking-wider hover:text-lemongrass-dark transition-colors flex items-center">
                View Suites <ArrowRight className="ml-1 w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-lemongrass-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-4">The Lemongrass Standard</h2>
            <div className="w-24 h-1 bg-white/20 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-serif text-gold mb-4 opacity-80">10+</div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Years Experience</h4>
              <p className="text-white/60 text-sm max-w-xs mx-auto">Every senior therapist undergoes rigorous internal exams and has minimum 10 years of practice.</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-gold mb-4 opacity-80">18</div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Healing Herbs</h4>
              <p className="text-white/60 text-sm max-w-xs mx-auto">Our proprietary steam blend uses 18 authentic Asian herbs for maximum detoxification.</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-gold mb-4 opacity-80">100%</div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Medical Hygiene</h4>
              <p className="text-white/60 text-sm max-w-xs mx-auto">Hospital-grade sanitization for every suite and tool before every session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold -mt-4 -ml-4"></div>
              <img 
                src={SERVICES[0].image} 
                alt="Neck Traction Bed" 
                className="w-full shadow-2xl rounded-sm"
              />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold -mb-4 -mr-4"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-lemongrass-light uppercase tracking-widest font-bold text-sm mb-2">Signature Therapy</h4>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-6">Cervical Spine Rocking Traction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A revolutionary non-invasive therapy designed for the modern executive. Unlike traditional chiropractic adjustments, our Neck Bed uses rhythmic motion to gently decompress the spine, offering immediate relief from 'Text Neck' and shoulder stiffness without sudden movements.
            </p>
            <ul className="space-y-3 mb-8">
              {SERVICES[0].benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <CheckCircle className="text-gold w-5 h-5 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onNavigate('services')}
              className="bg-lemongrass-dark hover:bg-lemongrass-light text-white px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-wood-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common inquiries from our corporate clientele.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-serif font-bold text-lg text-gray-800">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;