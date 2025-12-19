import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PageView } from '../types';
import { CONTACT_INFO } from '../constants';

interface NavigationProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: PageView }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Menu', value: 'menu' },
    { label: 'Experience', value: 'experience' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled || isMobileMenuOpen ? 'bg-lemongrass-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mr-3 border border-gold">
               <span className="text-gold font-serif font-bold text-lg">L</span>
            </div>
            <span className={`font-serif text-2xl font-bold tracking-wider ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-lemongrass-dark'}`}>
              LEMONGRASS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${
                  currentPage === link.value ? 'text-gold font-bold' : (isScrolled ? 'text-white/90' : 'text-lemongrass-dark')
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('booking')}
              className="bg-gold hover:bg-gold-light text-lemongrass-dark px-6 py-2 rounded-sm font-bold text-sm transition-all uppercase tracking-wide"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-white' : 'text-lemongrass-dark'} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-lemongrass-dark/95 backdrop-blur-md border-t border-white/10 shadow-xl flex flex-col py-6">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`py-4 text-center text-sm tracking-widest uppercase ${
                  currentPage === link.value ? 'text-gold font-bold' : 'text-white/80'
                }`}
              >
                {link.label}
              </button>
            ))}
             <button
                onClick={() => handleNavClick('booking')}
                className="py-4 text-center text-sm tracking-widest uppercase text-gold font-bold border-t border-white/10 mt-2"
              >
                Book Appointment
              </button>
          </div>
        )}
      </nav>
      
      {/* Spacer for fixed header */}
      <div className="h-0 md:h-0"></div>
    </>
  );
};

export default Navigation;