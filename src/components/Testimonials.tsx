import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTest = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
            Athlete Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans mt-2">
            MEMBER TESTIMONIALS
          </h2>
          <div className="h-1 bg-red-500 w-12 mx-auto mt-4" />
        </div>

        {/* Carousel Window - Bento Box */}
        <div className="relative min-h-[350px] flex items-center justify-center px-4 sm:px-12 bg-[#141414] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl" id="testimonial-carousel-window">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTest.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full flex flex-col items-center"
            >
              <Quote className="w-12 h-12 text-[#E63946]/15 mb-6" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(activeTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Quote Block */}
              <blockquote className="text-zinc-200 text-base sm:text-lg md:text-xl font-light italic leading-relaxed max-w-3xl mb-8">
                "{activeTest.quote}"
              </blockquote>

              {/* Profile Avatar & Info */}
              <div className="flex items-center gap-4 text-left">
                <img
                  src={activeTest.image}
                  alt={activeTest.name}
                  className="w-14 h-14 object-cover rounded-full border-2 border-[#E63946]/40 shadow-md"
                />
                <div>
                  <h4 className="text-white font-black uppercase tracking-wider italic">
                    {activeTest.name}
                  </h4>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {activeTest.role}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Handles */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
            <button
              onClick={prevSlide}
              className="p-3 bg-zinc-900/60 border border-white/5 text-zinc-400 hover:text-white rounded-full hover:border-white/10 hover:bg-zinc-800 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
            <button
              onClick={nextSlide}
              className="p-3 bg-zinc-900/60 border border-white/5 text-zinc-400 hover:text-white rounded-full hover:border-white/10 hover:bg-zinc-800 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Sliding Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-350 cursor-pointer ${
                currentIndex === idx ? "w-8 bg-red-500" : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
