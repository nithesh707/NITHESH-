import { useEffect, useState, useRef } from "react";
import { STAT_ITEMS } from "../data";
import { motion } from "motion/react";

// Self-contained Animated Counter with Intersection Observer
function AnimatedCounter({ value, duration = 1500, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <div ref={elementRef} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
      {/* Absolute background visual details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.03),rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase"
          >
            By The Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight font-sans mt-2"
          >
            OUR TRACK RECORD OF EXCELLENCE
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-red-500 mx-auto mt-4"
          />
        </div>

        {/* Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="stats-grid-container">
          {STAT_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-[#141414] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-300 group shadow-lg"
            >
              {/* Animated Counter */}
              <div className="mb-2 group-hover:text-red-500 transition-colors">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              
              {/* Divider */}
              <div className="w-8 h-0.5 bg-zinc-800 group-hover:bg-red-500 my-3 transition-colors duration-300" />

              {/* Label */}
              <span className="text-zinc-400 group-hover:text-zinc-200 text-xs sm:text-sm font-black uppercase tracking-widest transition-colors duration-300 italic">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
