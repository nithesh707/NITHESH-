import { useState } from "react";
import { TRANSFORMATIONS } from "../data";
import { motion } from "motion/react";
import { Sparkles, Calendar, TrendingUp } from "lucide-react";

export default function Gallery() {
  const [selectedID, setSelectedID] = useState(TRANSFORMATIONS[0].id);

  const selectedTrans = TRANSFORMATIONS.find((t) => t.id === selectedID) || TRANSFORMATIONS[0];

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-950/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zinc-900/40 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase"
          >
            Real Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-sans mt-2"
          >
            TRANSFORMATION GALLERY
          </motion.h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 font-light">
            No filters, no tricks. Witness the jaw-dropping results of strict structural loading and chiseled bodybuilding nutrition.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"
          />
        </div>

        {/* Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Spotlight Left Selection Column - Bento Card */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 bg-zinc-900/30 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-white text-xs font-black uppercase tracking-widest mb-2 border-b border-white/5 pb-3 italic">
              Select Client Journey
            </h3>
            {TRANSFORMATIONS.map((trans) => (
              <button
                key={trans.id}
                onClick={() => setSelectedID(trans.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  selectedID === trans.id
                    ? "bg-[#141414] border-[#E63946] shadow-lg shadow-red-500/5"
                    : "bg-[#141414]/40 border-white/5 hover:border-white/15"
                }`}
              >
                <div>
                  <p className="text-white font-extrabold text-sm uppercase tracking-wide">
                    {trans.name}
                  </p>
                  <p className="text-zinc-400 text-xs mt-1 font-light">
                    {trans.achievement}
                  </p>
                </div>
                <div className={`text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider ${
                  selectedID === trans.id ? "bg-[#E63946] text-white" : "bg-zinc-800 text-zinc-400"
                }`}>
                  {trans.duration}
                </div>
              </button>
            ))}
          </div>

          {/* Spotlight Right Display Window - Bento Card */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-[#141414] border border-white/10 p-6 md:p-8 rounded-2xl">
            
            {/* Before After Side-by-Side Comparison Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Before Block */}
              <div className="relative group overflow-hidden rounded-xl border border-white/5 bg-zinc-900">
                <div className="absolute top-3 left-3 bg-zinc-950/80 border border-white/10 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 z-10 rounded-md">
                  Before
                </div>
                <motion.img
                  key={`before-${selectedTrans.id}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={selectedTrans.beforeImg}
                  alt={`${selectedTrans.name} before`}
                  className="w-full h-[320px] sm:h-[380px] object-cover filter brightness-90 grayscale contrast-115 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* After Block */}
              <div className="relative group overflow-hidden rounded-xl border border-[#E63946]/20 bg-zinc-900">
                <div className="absolute top-3 left-3 bg-[#E63946] text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 z-10 flex items-center gap-1 shadow-md rounded-md">
                  <Sparkles className="w-3 h-3" /> After
                </div>
                <motion.img
                  key={`after-${selectedTrans.id}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={selectedTrans.afterImg}
                  alt={`${selectedTrans.name} after`}
                  className="w-full h-[320px] sm:h-[380px] object-cover filter brightness-100 contrast-125 transition-all duration-500 group-hover:scale-105"
                />
              </div>

            </div>

            {/* Journey Stats Footer */}
            <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                  Athlete Transformation Spotlight
                </span>
                <h4 className="text-white text-xl font-black uppercase tracking-tight mt-1 italic">
                  {selectedTrans.name}
                </h4>
                <p className="text-zinc-400 text-sm mt-1 font-light">
                  Accomplishment: <span className="text-red-500 font-semibold">{selectedTrans.achievement}</span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-zinc-900/60 border border-white/5 px-4 py-2.5 rounded-xl">
                  <Calendar className="w-4 h-4 text-red-500" />
                  <div className="text-left">
                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider leading-none">Duration</p>
                    <p className="text-white text-xs font-extrabold uppercase mt-1">{selectedTrans.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-zinc-900/60 border border-white/5 px-4 py-2.5 rounded-xl">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <div className="text-left">
                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider leading-none">Result</p>
                    <p className="text-white text-xs font-extrabold uppercase mt-1">100% Client Success</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
