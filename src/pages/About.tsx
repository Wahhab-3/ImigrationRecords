import React from 'react';

export default function About() {
  return (
    <div className="w-full">
      {/* FOUNDER SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-20 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <p className="font-source text-[11px] text-[#E8391E] tracking-[0.3em] uppercase mb-6">FOUNDER & CEO</p>
            <h1 className="font-spartan font-black text-[56px] md:text-[72px] text-white leading-[0.9] mb-4">JULIÁN DUQUE</h1>
            <p className="font-source text-[14px] text-[#999999] mb-10">Colombia → Miami</p>
            
            <div className="font-source text-[14px] text-[#999999] leading-[1.9] space-y-6 mb-12">
              <p>
                Julián Duque is the founder of Immigration Records and UNSIN Music Conference & Festival, with over 15 years of experience at the intersection of Latin music, live events, digital distribution, and music technology.
              </p>
              <p>
                Born in Colombia, Julián built Immigration Records to be the label he wished had existed when immigrant artists were trying to break through — one that celebrates cultural identity rather than asking artists to erase it.
              </p>
              <p>
                He has represented the Colombian diaspora at Billboard Latin Music Week, BIME PRO in Bilbao, and Ritmos de Miami, and has worked alongside some of the biggest names in Latin music.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                'Billboard Latin Music Week Speaker',
                'BIME PRO Bilbao Representative',
                'Ritmos de Miami Panelist',
                '15+ Years in the Music Industry'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 font-source text-[12px] text-white">
                  <span className="text-[#E8391E] mt-1">—</span>
                  <span className="leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/5] bg-[#1A1A1A]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#E8391E]/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="font-source text-[11px] text-white tracking-wider">JULIÁN DUQUE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LABEL STORY SECTION */}
      <section className="bg-[#141414] py-[80px] md:py-[120px] px-6 text-center border-b border-[#1A1A1A]">
        <div className="max-w-[800px] mx-auto">
          <p className="font-source text-[11px] text-[#E8391E] tracking-[0.3em] uppercase mb-6">OUR STORY</p>
          <h2 className="font-spartan font-bold text-[40px] md:text-[56px] text-white leading-[1.1] mb-10">
            CHAMPIONING IMMIGRANT ARTISTS SINCE 2018
          </h2>
          <p className="font-source text-[15px] text-[#999999] leading-[1.9]">
            Immigration Records was built on one simple belief: the music industry is better when immigrant voices are amplified, not diluted. We are 100% remote, artist-first, and built by people who understand what it means to create from the margins.
          </p>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="bg-[#0A0A0A] py-[80px] md:py-[120px] px-6 md:px-20 border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-10 h-10 mb-6 text-[#E8391E]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="font-spartan font-semibold text-[24px] text-white mb-4">INDEPENDENCE</h3>
            <p className="font-source text-[13px] text-[#999999] leading-[1.8]">
              You own your art. Always.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-10 h-10 mb-6 text-[#E8391E]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-spartan font-semibold text-[24px] text-white mb-4">AUTHENTICITY</h3>
            <p className="font-source text-[13px] text-[#999999] leading-[1.8]">
              Your roots are your sound.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-10 h-10 mb-6 text-[#E8391E]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-spartan font-semibold text-[24px] text-white mb-4">COMMUNITY</h3>
            <p className="font-source text-[13px] text-[#999999] leading-[1.8]">
              We grow together.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-[#141414] py-[80px] md:py-[120px] px-6 md:px-20">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-source text-[11px] text-[#E8391E] tracking-[0.3em] uppercase mb-12 text-center md:text-left">THE TEAM</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'JULIÁN DUQUE', role: 'Founder & CEO' },
              { name: 'ALICIA PEÑA', role: 'Project Manager & Legal/HR' },
              { name: 'TEAM MEMBER', role: 'Role' },
              { name: 'TEAM MEMBER', role: 'Role' }
            ].map((member, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
                <h3 className="font-spartan font-bold text-[20px] text-white mb-2">{member.name}</h3>
                <p className="font-source text-[12px] text-[#999999]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
