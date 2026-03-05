import React from 'react';

export default function Home({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-20 max-w-[1280px] mx-auto">
        {/* Gritty texture background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
        
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl">
            <h1 className="font-spartan font-black text-[40px] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-tight mb-6">
              <span className="block">EVERY GLOBAL SOUND</span>
              <span className="block">STARTS SOMEWHERE</span>
              <span className="block text-[#E8391E]">SPECIFIC.</span>
            </h1>
            <p className="font-source text-[14px] text-[#999999] mb-10 max-w-lg leading-[1.8]">
              Championing immigrant artists to soar above the mainstream noise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('artists')}
                className="bg-white text-[#0A0A0A] font-spartan font-semibold uppercase rounded-full py-[14px] px-[36px] hover:bg-[#E8391E] hover:text-white transition-all duration-250 text-center"
              >
                DISCOVER THE ROSTER
              </button>
              <button 
                onClick={() => navigate('apply')}
                className="bg-transparent border border-white text-white font-spartan font-semibold uppercase rounded-full py-[14px] px-[36px] hover:border-[#E8391E] hover:text-[#E8391E] transition-all duration-250 text-center"
              >
                APPLY NOW
              </button>
            </div>
          </div>
          
          {/* Decorative SVG Element */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="198" stroke="#E8391E" strokeWidth="2" strokeDasharray="4 8"/>
              <circle cx="200" cy="200" r="150" stroke="#E8391E" strokeWidth="1"/>
              <circle cx="200" cy="200" r="100" stroke="#E8391E" strokeWidth="1" strokeDasharray="2 4"/>
              <path d="M200 0V400" stroke="#E8391E" strokeWidth="1"/>
              <path d="M0 200H400" stroke="#E8391E" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ARTIST REEL */}
      <section className="bg-[#141414] py-12 overflow-hidden border-y border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 mb-8">
          <h2 className="font-source text-[11px] text-[#E8391E] tracking-[0.3em] uppercase">OUR ARTISTS</h2>
        </div>
        
        <div className="relative w-full overflow-hidden flex">
          <div className="flex animate-scroll-left w-max">
            {/* First set */}
            <div className="flex gap-6 px-3">
              {[
                { name: 'CANALES NACIONALES', genre: 'Latin Rock' },
                { name: 'CES', genre: 'Urban / Latin' },
                { name: 'MIMI LECLERCO', genre: 'Pop / R&B' },
                { name: 'MARÉH', genre: 'Latin Alternative' },
                { name: 'ARTIST NAME', genre: 'Genre' },
                { name: 'ARTIST NAME', genre: 'Genre' },
                { name: 'ARTIST NAME', genre: 'Genre' },
              ].map((artist, i) => (
                <div key={`artist-1-${i}`} className="w-[220px] border-l-[3px] border-[#E8391E] p-5 bg-transparent shrink-0">
                  <h3 className="font-spartan font-bold text-[28px] text-white leading-tight mb-2">{artist.name}</h3>
                  <p className="font-source text-[11px] text-[#E8391E] uppercase">{artist.genre}</p>
                </div>
              ))}
            </div>
            {/* Duplicate set for infinite scroll */}
            <div className="flex gap-6 px-3">
              {[
                { name: 'CANALES NACIONALES', genre: 'Latin Rock' },
                { name: 'CES', genre: 'Urban / Latin' },
                { name: 'MIMI LECLERCO', genre: 'Pop / R&B' },
                { name: 'MARÉH', genre: 'Latin Alternative' },
                { name: 'ARTIST NAME', genre: 'Genre' },
                { name: 'ARTIST NAME', genre: 'Genre' },
                { name: 'ARTIST NAME', genre: 'Genre' },
              ].map((artist, i) => (
                <div key={`artist-2-${i}`} className="w-[220px] border-l-[3px] border-[#E8391E] p-5 bg-transparent shrink-0">
                  <h3 className="font-spartan font-bold text-[28px] text-white leading-tight mb-2">{artist.name}</h3>
                  <p className="font-source text-[11px] text-[#E8391E] uppercase">{artist.genre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="bg-[#0A0A0A] py-[80px] md:py-[120px] px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-spartan font-bold text-[32px] md:text-[48px] text-white leading-[1.2] mb-8">
            "THE FUTURE OF MUSIC DOESN'T COME FROM ARTISTS ERASING WHERE THEY'RE FROM — IT COMES FROM THEM LEANING INTO IT."
          </h2>
          <p className="font-source text-[12px] text-[#666666] uppercase">
            — Immigration Records, Miami FL
          </p>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[#141414] py-[80px] md:py-[120px] px-6 md:px-20">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-source text-[11px] text-[#E8391E] tracking-[0.3em] uppercase mb-16 text-center md:text-left">WHAT WE DO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-12 h-12 mb-6 text-[#E8391E]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5H5a2 2 0 0 1 0-4h16v-4" />
                </svg>
              </div>
              <h3 className="font-spartan font-semibold text-[24px] text-white mb-4">DISTRIBUTION</h3>
              <p className="font-source text-[13px] text-[#999999] leading-[1.8]">
                White-glove digital distribution to all major platforms globally.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-12 h-12 mb-6 text-[#E8391E]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
              </div>
              <h3 className="font-spartan font-semibold text-[24px] text-white mb-4">MARKETING</h3>
              <p className="font-source text-[13px] text-[#999999] leading-[1.8]">
                Strategic digital marketing built around your cultural identity.
              </p>
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-12 h-12 mb-6 text-[#E8391E]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="font-spartan font-semibold text-[24px] text-white mb-4">LABEL SERVICES</h3>
              <p className="font-source text-[13px] text-[#999999] leading-[1.8]">
                Artist development, branding, booking, and beyond.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('services')}
              className="bg-transparent border border-white text-white font-spartan font-semibold uppercase rounded-full py-[14px] px-[36px] hover:border-[#E8391E] hover:text-[#E8391E] transition-all duration-250"
            >
              SEE ALL SERVICES →
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#E8391E] w-full py-16 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-spartan font-extrabold text-[32px] md:text-[40px] text-white mb-2">EST. 2018</h3>
            <p className="font-source text-[11px] text-white/80 uppercase tracking-wider">FOUNDED</p>
          </div>
          <div>
            <h3 className="font-spartan font-extrabold text-[32px] md:text-[40px] text-white mb-2">MIAMI, FL</h3>
            <p className="font-source text-[11px] text-white/80 uppercase tracking-wider">HEADQUARTERS</p>
          </div>
          <div>
            <h3 className="font-spartan font-extrabold text-[32px] md:text-[40px] text-white mb-2 leading-tight">MADE FOR IMMIGRANTS<br/>BY IMMIGRANTS</h3>
            <p className="font-source text-[11px] text-white/80 uppercase tracking-wider mt-2">OUR MISSION</p>
          </div>
        </div>
      </section>
    </div>
  );
}
