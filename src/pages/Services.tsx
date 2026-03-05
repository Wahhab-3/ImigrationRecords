import React from 'react';

export default function Services({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="pt-40 pb-20 px-6 md:px-20 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="font-spartan font-black text-[60px] md:text-[96px] text-white leading-[0.9] mb-6">WHAT WE DO</h1>
          <p className="font-source text-[14px] text-[#999999] max-w-2xl mx-auto leading-[1.8]">
            Full-service label support built for independent immigrant artists.
          </p>
        </div>
      </section>

      {/* Section 1 - DISTRIBUTION */}
      <section className="bg-[#0A0A0A] py-[80px] md:py-[120px] px-6 md:px-20 border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          <div className="md:w-1/3">
            <span className="font-spartan font-black text-[120px] md:text-[180px] text-[#E8391E]/15 leading-none block -ml-2">01</span>
          </div>
          <div className="md:w-2/3 md:pt-10">
            <h2 className="font-spartan font-bold text-[40px] md:text-[48px] text-white mb-6 leading-tight">DISTRIBUTION</h2>
            <p className="font-source text-[15px] text-[#999999] leading-[1.8] mb-10 max-w-2xl">
              We get your music everywhere — Spotify, Apple Music, Tidal, Amazon, YouTube Music, and 150+ platforms globally. Unlike DIY aggregators, we actively pitch your releases and track your performance.
            </p>
            <ul className="space-y-4">
              {[
                'Global platform distribution',
                'Editorial playlist pitching',
                'Performance analytics & reporting',
                'Sync licensing support'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 font-source text-[13px] text-white">
                  <span className="text-[#E8391E] mt-1">—</span>
                  <span className="leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 - MARKETING & BRANDING */}
      <section className="bg-[#141414] py-[80px] md:py-[120px] px-6 md:px-20 border-b border-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          <div className="md:w-1/3">
            <span className="font-spartan font-black text-[120px] md:text-[180px] text-[#E8391E]/15 leading-none block -ml-2">02</span>
          </div>
          <div className="md:w-2/3 md:pt-10">
            <h2 className="font-spartan font-bold text-[40px] md:text-[48px] text-white mb-6 leading-tight">MARKETING & BRANDING</h2>
            <p className="font-source text-[15px] text-[#999999] leading-[1.8] mb-10 max-w-2xl">
              Your cultural identity is your superpower. We build campaigns that amplify where you're from, not erase it.
            </p>
            <ul className="space-y-4">
              {[
                'Social media strategy & content',
                'Press & PR outreach',
                'Brand identity development',
                'Visual content production'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 font-source text-[13px] text-white">
                  <span className="text-[#E8391E] mt-1">—</span>
                  <span className="leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 - LABEL SERVICES */}
      <section className="bg-[#0A0A0A] py-[80px] md:py-[120px] px-6 md:px-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          <div className="md:w-1/3">
            <span className="font-spartan font-black text-[120px] md:text-[180px] text-[#E8391E]/15 leading-none block -ml-2">03</span>
          </div>
          <div className="md:w-2/3 md:pt-10">
            <h2 className="font-spartan font-bold text-[40px] md:text-[48px] text-white mb-6 leading-tight">LABEL SERVICES</h2>
            <p className="font-source text-[15px] text-[#999999] leading-[1.8] mb-10 max-w-2xl">
              From your first release to your first arena show, we're with you every step.
            </p>
            <ul className="space-y-4">
              {[
                'Artist development & A&R',
                'Live booking & tour support',
                'Merchandise strategy',
                'Contract & legal guidance'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 font-source text-[13px] text-white">
                  <span className="text-[#E8391E] mt-1">—</span>
                  <span className="leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 - UNSIN CONFERENCE */}
      <section className="bg-[#1A3BFF] py-[100px] md:py-[140px] px-6 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-spartan font-black text-[48px] md:text-[72px] text-white leading-[1.1] mb-6">UNSIN MUSIC CONFERENCE & FESTIVAL</h2>
          <p className="font-source text-[14px] text-white/70 max-w-2xl mx-auto leading-[1.8] mb-12">
            Every April in Miami. Where the Latin music industry meets, connects, and grows.
          </p>
          <button className="bg-white text-[#1A3BFF] font-spartan font-semibold uppercase rounded-full py-[14px] px-[36px] hover:bg-[#0A0A0A] hover:text-white transition-all duration-250">
            LEARN MORE ABOUT UNSIN →
          </button>
        </div>
      </section>
    </div>
  );
}
