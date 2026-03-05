import React from 'react';

export default function Apply() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="pt-40 pb-16 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="font-spartan font-black text-[60px] md:text-[96px] text-white leading-[0.9] mb-6">JOIN THE ROSTER</h1>
          <p className="font-source text-[14px] text-[#999999] max-w-2xl mx-auto leading-[1.8]">
            We're looking for immigrant artists ready to take their sound to the world.
          </p>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="bg-[#0A0A0A] py-12 px-6 pb-[120px]">
        <div className="max-w-[680px] mx-auto">
          <form action="https://tally.so/r/w2aj69" method="GET" target="_blank" className="space-y-10">
            
            <div className="flex flex-col">
              <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Artist / Band Name</label>
              <input 
                type="text" 
                name="artist_name"
                className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Primary Genre</label>
                <input 
                  type="text" 
                  name="genre"
                  className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Country of Origin</label>
                <input 
                  type="text" 
                  name="origin"
                  className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">City You're Based In</label>
              <input 
                type="text" 
                name="city"
                className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Spotify / Apple Music / Streaming Link</label>
              <input 
                type="url" 
                name="streaming_link"
                className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Instagram Handle</label>
              <input 
                type="text" 
                name="instagram"
                className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-source text-[12px] text-[#E8391E] uppercase tracking-wider mb-2">Tell us about yourself and your music</label>
              <textarea 
                name="about"
                rows={6}
                className="bg-transparent border-b border-[#333333] text-white font-source text-[14px] py-4 focus:border-[#E8391E] focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>
            
            <div className="pt-6">
              <button 
                type="submit"
                className="w-full bg-[#E8391E] text-white font-spartan font-bold uppercase rounded-[4px] py-5 hover:bg-[#FF4422] transition-colors text-[16px] tracking-wide"
              >
                SUBMIT APPLICATION →
              </button>
              <p className="font-source text-[12px] text-[#666666] text-center mt-6">
                Applications are reviewed within 2 weeks. We respond to every submission.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* BOTTOM MANIFESTO */}
      <section className="bg-[#E8391E] py-[100px] px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-spartan font-black text-[40px] md:text-[64px] text-white leading-[1.1] mb-6">
            YOUR SOUND CARRIES WHERE YOU'RE FROM.
          </h2>
          <p className="font-source text-[14px] text-white/70 uppercase tracking-wider">
            Immigration Records — Miami, FL — Est. 2018
          </p>
        </div>
      </section>
    </div>
  );
}
