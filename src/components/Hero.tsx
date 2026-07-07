import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/919515181311?text=Hi%20T7%20Fitness%2C%20I%27m%20interested%20in%20joining!";

  const handleJoinClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("membership");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stagger parameters for heading text animation
  const titleWords = "BUILD THE PHYSIQUE YOU'RE PROUD OF".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Container with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1.02, 1.1, 1.02],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: "linear-gradient(rgba(13, 13, 13, 0.4), rgba(13, 13, 13, 0.85)), url('https://images.unsplash.com/photo-1578762560072-46cf15e59490?auto=format&fit=crop&q=80&w=1600')",
            backgroundPosition: "center 30%",
          }}
          className="w-full h-full bg-cover bg-no-repeat filter brightness-75 contrast-125"
        />
        {/* Subtle red ambient light overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-red-900/10 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Over-header Tag */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block text-xs sm:text-sm font-black tracking-[0.25em] text-red-500 uppercase mb-4 sm:mb-6 border border-[#E63946]/30 px-5 py-2 bg-red-950/25 backdrop-blur-sm rounded-full italic"
        >
          Welcome to T7 Fitness
        </motion.span>

        {/* Dynamic Heavy Staggered Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none max-w-4xl text-center font-sans mb-6"
        >
          {titleWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className={`inline-block mr-2 sm:mr-4 last:mr-0 ${
                word === "PHYSIQUE" ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-extrabold" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide leading-relaxed mb-8 sm:mb-10"
        >
          Unleash elite physique genetics with heavy-resistance programming, bespoke nutrition systems, and dedicated competitive-level guidance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Join Now */}
          <button
            onClick={handleJoinClick}
            className="group relative flex items-center justify-center bg-gradient-to-r from-[#E63946] to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-sm sm:text-base uppercase px-8 py-4 rounded-xl tracking-widest shadow-xl hover:shadow-red-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Join Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          {/* Chat on WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-zinc-900/80 hover:bg-zinc-800 border border-white/5 hover:border-white/10 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-xl tracking-wider transition-all duration-200 active:scale-95"
          >
            <Phone className="w-4 h-4 mr-2 text-[#25D366] fill-[#25D366]/20" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Hero Section bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent z-20" />
    </section>
  );
}
