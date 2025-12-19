import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './views/Home';
import Services from './views/Services';
import Menu from './views/Menu';
import Booking from './views/Booking';
import Experience from './views/Experience';
import Contact from './views/Contact';
import { PageView } from './types';
import { SCHEMA_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Inject Schema Markup for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(SCHEMA_DATA);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'menu':
        return <Menu />;
      case 'booking':
        return <Booking />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-wood-light">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;