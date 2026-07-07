import { Dumbbell, Flame, Utensils, Award } from "lucide-react";
import { PROGRAMS } from "../data";
import { motion } from "motion/react";

// Helper component to render icons based on string names
function ProgramIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Dumbbell":
      return <Dumbbell className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "Utensils":
      return <Utensils className={className} />;
    case "Award":
      return <Award className={className} />;
    default:
      return <Dumbbell className={className} />;
  }
}

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-900/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase"
          >
            Championship Systems
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-sans mt-2"
          >
            TRAINING CATEGORIES
          </motion.h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 font-light">
            Every program is engineered around modern athletic hypertrophy science and customized mechanical loading.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="programs-grid-container">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ 
                y: -6,
                borderColor: "rgba(230, 57, 70, 0.3)",
                boxShadow: "0 15px 35px -15px rgba(230, 57, 70, 0.15)"
              }}
              className="bg-[#141414] border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/60 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group"
            >
              {/* Icon Wrapper with glow */}
              <div className="bg-zinc-950 border border-white/10 p-4 rounded-xl text-red-500 group-hover:text-white group-hover:bg-[#E63946] group-hover:border-[#E63946] transition-all duration-300 flex-shrink-0 shadow-inner">
                <ProgramIcon name={program.iconName} className="w-8 h-8" />
              </div>

              {/* Text Info */}
              <div className="flex-grow">
                <h3 className="text-white text-xl font-black uppercase tracking-tight mb-3 group-hover:text-[#E63946] transition-colors duration-300 font-sans italic">
                  {program.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
