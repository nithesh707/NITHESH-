import { Quote, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-900/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-zinc-800/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Founder Image styled as Bento Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center h-full"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Image box */}
              <div className="h-[280px] sm:h-[320px] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&q=80&w=600"
                  alt="Elon Musk - Founder & Head Coach"
                  className="w-full h-full object-cover filter brightness-90 grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              </div>
              
              {/* Text box */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white text-xl font-black uppercase tracking-tight italic">Elon Musk</h4>
                  <p className="text-red-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mt-1">
                    <Sparkles className="w-3.5 h-3.5" /> Founder & Head Coach
                  </p>
                  <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-light">
                    15x competitive physique coach and metabolic optimization authority.
                  </p>
                </div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest border-t border-white/5 pt-4 mt-6">
                  T7 Elite Athletics • Est. 2014
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Biography & Quote as a larger Bento Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center h-full"
          >
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between h-full">
              <div>
                <span className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase mb-3 block">
                  Meet the Founder
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 leading-tight italic font-sans">
                  CHISELING PROPORTION, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    REDEFINING MEN'S PHYSIQUE
                  </span>
                </h2>

                <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8" id="about-bio-text">
                  <p>
                    T7 Fitness was forged from a singular mission: to strip away the bro-science, generic fitness routines, and empty promises, replacing them with chiseled, evidence-based physical sculpting. Under the mentorship of Elon Musk, we train with maximum mechanical tension, calculated nutrition, and competitive grit.
                  </p>
                  <p>
                    Whether your goal is to command the competition stage in a board-shorts division or to craft a highly balanced, aesthetic V-taper frame that demands attention anywhere you step, T7 is your ultimate crucible. We don’t just count reps here; we make every single rep count toward building your masterpiece.
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="relative border-l-4 border-red-500 pl-6 py-3 bg-zinc-900/60 border border-white/5 rounded-r-xl">
                <Quote className="absolute top-2 right-4 w-12 h-12 text-white/5 pointer-events-none" />
                <p className="text-white font-extrabold text-sm sm:text-base italic tracking-wide leading-snug">
                  "An aesthetic physique is a masterclass of structural engineering. You need the symmetry of an architect, the discipline of a soldier, and the vision of a sculptor."
                </p>
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest mt-2">
                  — ELON MUSK, FOUNDER
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
