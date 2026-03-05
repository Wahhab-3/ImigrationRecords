import React from 'react';

export default function Artists({ navigate }: { navigate: (page: string) => void }) {
  const artists = [
    { name: 'CANALES NACIONALES', genre: 'Latin Rock', origin: '🇨🇴 Colombia' },
    { name: 'CES', genre: 'Urban / Latin', origin: '🌎 Miami, FL' },
    { name: 'MIMI LECLERCO', genre: 'Pop / R&B', origin: '🌍 International' },
    { name: 'MARÉH', genre: 'Latin Alternative', origin: '🇪🇸 Spain / Miami' },
    { name: 'ARTIST NAME', genre: 'Genre', origin: 'Origin' },
    { name: 'ARTIST NAME', genre: 'Genre', origin: 'Origin' },
    { name: 'ARTIST NAME', genre: 'Genre', origin: 'Origin' },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 md:px-20 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        {/* Subtle red grid background */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          backgroundImage: 'linear-gradient(rgba(232,57,30,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,57,30,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h1 className="font-spartan font-black text-[60px] md:text-[96px] text-white leading-[0.9] mb-6">THE ROSTER</h1>
          <p className="font-source text-[14px] text-[#999999] max-w-2xl mx-auto leading-[1.8]">
            Artists whose sound carries where they come from, wherever it's going next.
          </p>
        </div>
      </section>

      {/* ARTIST GRID */}
      <section className="bg-[#141414] py-[80px] md:py-[120px] px-6 md:px-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {artists.map((artist, i) => (
            <div 
              key={i} 
              className="group relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,57,30,0.15)] border-2 border-transparent hover:border-[#E8391E]"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-[#1A1A1A] transition-all duration-300 group-hover:brightness-110"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-start">
                <p className="font-source text-[12px] text-[#E8391E] uppercase mb-2 tracking-wider">{artist.genre}</p>
                <h2 className="font-spartan font-extrabold text-[32px] md:text-[36px] text-white leading-tight mb-4">{artist.name}</h2>
                <p className="font-source text-[13px] text-white/80 mb-8">{artist.origin}</p>
                
                <button className="bg-transparent border border-white text-white font-spartan font-semibold uppercase rounded-full py-[12px] px-[28px] group-hover:border-[#E8391E] group-hover:text-[#E8391E] transition-all duration-250 text-[14px]">
                  LISTEN →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#0A0A0A] py-[100px] md:py-[160px] px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-spartan font-bold text-[36px] md:text-[48px] text-white mb-6 leading-tight">ARE YOU AN IMMIGRANT ARTIST?</h2>
          <p className="font-source text-[14px] text-[#999999] mb-10">We want to hear from you.</p>
          <button 
            onClick={() => navigate('apply')}
            className="bg-white text-[#0A0A0A] font-spartan font-semibold uppercase rounded-full py-[14px] px-[36px] hover:bg-[#E8391E] hover:text-white transition-all duration-250"
          >
            APPLY TO THE ROSTER
          </button>
        </div>
      </section>
    </div>
  );
}
