import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919515181311?text=Hi%20T7%20Fitness%2C%20I%27m%20interested%20in%20joining!";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#20ba56] transition-colors duration-300"
      id="whatsapp-floating-btn"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -8, 0]
      }}
      transition={{
        scale: { type: "spring", stiffness: 260, damping: 20 },
        opacity: { duration: 0.2 },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <Phone className="w-6 h-6 fill-white stroke-[#25D366]" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </motion.a>
  );
}
