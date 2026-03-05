import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Home from './pages/Home';
import Artists from './pages/Artists';
import Services from './pages/Services';
import About from './pages/About';
import Apply from './pages/Apply';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [displayedPage, setDisplayedPage] = useState('home');
  const [blinkPhase, setBlinkPhase] = useState('idle'); // idle, closing, holding, opening
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    if (page === currentPage || blinkPhase !== 'idle') return;
    setIsMobileNavOpen(false);
    setBlinkPhase('closing');
    setCurrentPage(page);
    
    setTimeout(() => {
      setBlinkPhase('holding');
      setDisplayedPage(page);
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        setBlinkPhase('opening');
        
        setTimeout(() => {
          setBlinkPhase('idle');
        }, 350);
      }, 150);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-source selection:bg-[#E8391E] selection:text-white flex flex-col">
      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => navigate('home')} className="w-9 h-9 bg-[#E8391E] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.47715 0 0 7 0 7C0 7 4.47715 14 10 14C15.5228 14 20 7 20 7C20 7 15.5228 0 10 0ZM10 11.2C7.6804 11.2 5.8 9.3196 5.8 7C5.8 4.6804 7.6804 2.8 10 2.8C12.3196 2.8 14.2 4.6804 14.2 7C14.2 9.3196 12.3196 11.2 10 11.2ZM10 4.9C8.8402 4.9 7.9 5.8402 7.9 7C7.9 8.1598 8.8402 9.1 10 9.1C11.1598 9.1 12.1 8.1598 12.1 7C12.1 5.8402 11.1598 4.9 10 4.9Z" fill="white"/>
            </svg>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-[12px] tracking-[0.15em] uppercase">
            {['home', 'artists', 'services', 'about', 'apply'].map((page) => (
              <button 
                key={page} 
                onClick={() => navigate(page)}
                className={`hover:text-[#E8391E] transition-colors ${currentPage === page ? 'text-[#E8391E]' : 'text-[#999999]'}`}
              >
                {page}
              </button>
            ))}
          </div>
          
          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-[#E8391E]" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            {isMobileNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8">
          {['home', 'artists', 'services', 'about', 'apply'].map((page) => (
            <button 
              key={page} 
              onClick={() => {
                setIsMobileNavOpen(false);
                navigate(page);
              }}
              className={`text-2xl tracking-[0.15em] uppercase font-spartan font-bold ${currentPage === page ? 'text-[#E8391E]' : 'text-white'}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* Blink Transition */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {/* Top Eyelid */}
        <svg 
          className="absolute top-0 left-0 w-full h-[55vh]" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
          style={{
            transform: blinkPhase === 'idle' ? 'translateY(-100%)' :
                       blinkPhase === 'closing' ? 'translateY(0)' :
                       blinkPhase === 'holding' ? 'translateY(0)' :
                       blinkPhase === 'opening' ? 'translateY(-100%)' : 'translateY(-100%)',
            transition: blinkPhase === 'closing' ? 'transform 250ms cubic-bezier(0.4, 0, 1, 1)' :
                        blinkPhase === 'opening' ? 'transform 350ms cubic-bezier(0, 0, 0.2, 1)' : 'none'
          }}
        >
          <path d="M0,0 L100,0 L100,80 Q50,120 0,80 Z" fill="#0A0A0A" />
        </svg>
        
        {/* Bottom Eyelid */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-[55vh]" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
          style={{
            transform: blinkPhase === 'idle' ? 'translateY(100%)' :
                       blinkPhase === 'closing' ? 'translateY(0)' :
                       blinkPhase === 'holding' ? 'translateY(0)' :
                       blinkPhase === 'opening' ? 'translateY(100%)' : 'translateY(100%)',
            transition: blinkPhase === 'closing' ? 'transform 250ms cubic-bezier(0.4, 0, 1, 1)' :
                        blinkPhase === 'opening' ? 'transform 350ms cubic-bezier(0, 0, 0.2, 1)' : 'none'
          }}
        >
          <path d="M0,100 L100,100 L100,20 Q50,-20 0,20 Z" fill="#0A0A0A" />
        </svg>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {displayedPage === 'home' && <Home navigate={navigate} />}
        {displayedPage === 'artists' && <Artists navigate={navigate} />}
        {displayedPage === 'services' && <Services navigate={navigate} />}
        {displayedPage === 'about' && <About />}
        {displayedPage === 'apply' && <Apply />}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-9 h-9 bg-[#E8391E] flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.47715 0 0 7 0 7C0 7 4.47715 14 10 14C15.5228 14 20 7 20 7C20 7 15.5228 0 10 0ZM10 11.2C7.6804 11.2 5.8 9.3196 5.8 7C5.8 4.6804 7.6804 2.8 10 2.8C12.3196 2.8 14.2 4.6804 14.2 7C14.2 9.3196 12.3196 11.2 10 11.2ZM10 4.9C8.8402 4.9 7.9 5.8402 7.9 7C7.9 8.1598 8.8402 9.1 10 9.1C11.1598 9.1 12.1 8.1598 12.1 7C12.1 5.8402 11.1598 4.9 10 4.9Z" fill="white"/>
                </svg>
              </div>
              <span className="font-spartan font-bold text-xl tracking-wider">IMMIGRATION RECORDS</span>
            </div>
            <p className="font-source text-[11px] text-[#666666] uppercase tracking-wider">Est. 2018 · Miami, FL</p>
          </div>
          
          {/* Center */}
          <div className="flex flex-col gap-3 text-[12px] text-[#999999] tracking-[0.15em] uppercase">
            {['home', 'artists', 'services', 'about', 'apply'].map((page) => (
              <button key={page} onClick={() => navigate(page)} className="text-left hover:text-[#E8391E] transition-colors w-fit">
                {page}
              </button>
            ))}
          </div>
          
          {/* Right */}
          <div className="flex flex-col gap-3 text-[12px] text-[#999999] tracking-[0.15em] uppercase">
            <a href="#" className="hover:text-[#E8391E] transition-colors w-fit">Instagram</a>
            <a href="#" className="hover:text-[#E8391E] transition-colors w-fit">Spotify</a>
            <a href="#" className="hover:text-[#E8391E] transition-colors w-fit">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
