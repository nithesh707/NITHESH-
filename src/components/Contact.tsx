import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertTriangle, Instagram, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/919515181311?text=Hi%20T7%20Fitness%2C%20I%27m%20interested%20in%20joining!";

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "physique",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required.";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Please include a message for Coach Elon.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API database submittal with instant UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        program: "physique",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#0D0D0D] relative overflow-hidden pt-24 pb-12 border-t border-zinc-900">
      {/* Background ambient red accent */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-950/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-sans mt-2">
            START YOUR TRANSFORMATION
          </h2>
          <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500 w-12 mx-auto mt-4" />
        </div>

        {/* Info & Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Column: Contact & Gym details - Bento Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 bg-zinc-900/30 border border-white/5 p-8 rounded-2xl">
            
            {/* Gym Info list */}
            <div className="space-y-8">
              <h3 className="text-white text-xl font-black uppercase tracking-wide border-b border-white/5 pb-3 font-sans italic">
                T7 HEADQUARTERS
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 border border-white/10 rounded-xl text-red-500 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-none">Location</h4>
                  <p className="text-white text-sm sm:text-base font-light mt-2 leading-relaxed">
                    T7 Fitness Elite, opp Hyatt Place, Eluru Road, Vijayawada 520008.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 border border-white/10 rounded-xl text-red-500 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-none">Working Hours</h4>
                  <div className="text-white text-sm sm:text-base font-light mt-2 space-y-1">
                    <p className="flex justify-between gap-6"><span>Mon – Fri:</span> <span className="font-semibold text-zinc-300">5:00 AM – 10:00 PM</span></p>
                    <p className="flex justify-between gap-6"><span>Saturday:</span> <span className="font-semibold text-zinc-300">6:00 AM – 8:00 PM</span></p>
                    <p className="flex justify-between gap-6"><span>Sunday:</span> <span className="font-semibold text-red-400">8:00 AM – 2:00 PM</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media connections & WhatsApp button */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <h4 className="text-zinc-500 text-xs font-extrabold uppercase tracking-widest leading-none">
                Connect Directly
              </h4>

              {/* Direct WhatsApp button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-xl w-full transition-colors duration-300 shadow-md shadow-[#25D366]/5 active:scale-95"
                id="contact-whatsapp-btn"
              >
                <Phone className="w-4 h-4 fill-white stroke-[#25D366]" />
                Instant WhatsApp Chat
              </a>

              {/* Social Icons list */}
              <div className="flex items-center gap-4 justify-start mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-400 hover:text-red-500 hover:border-red-500/30 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-400 hover:text-red-500 hover:border-red-500/30 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-400 hover:text-red-500 hover:border-red-500/30 transition-all duration-300"
                  aria-label="Youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form - Bento Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-8 rounded-2xl relative">
            <h3 className="text-white text-xl font-black uppercase tracking-wide border-b border-white/5 pb-3 mb-6 font-sans italic">
              SUBMIT INQUIRY
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-zinc-400 text-xs font-bold uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full bg-zinc-950 text-white text-sm px-4 py-3.5 border rounded-xl focus:outline-none transition-colors ${
                    errors.fullName ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#E63946]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Grid: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-zinc-400 text-xs font-bold uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 95151 81311"
                    className={`w-full bg-zinc-950 text-white text-sm px-4 py-3.5 border rounded-xl focus:outline-none transition-colors ${
                      errors.phone ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#E63946]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-zinc-400 text-xs font-bold uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full bg-zinc-950 text-white text-sm px-4 py-3.5 border rounded-xl focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#E63946]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Program Choice Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="program" className="block text-zinc-400 text-xs font-bold uppercase tracking-wide">
                  Target Program
                </label>
                <div className="relative">
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 text-white text-sm px-4 py-3.5 border border-white/10 rounded-xl focus:border-[#E63946] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="physique">Men's Physique sculpt (V-Taper focus)</option>
                    <option value="hypertrophy">Heavy Strength & Hypertrophy</option>
                    <option value="nutrition">Elite Nutrition & Macros Blueprint</option>
                    <option value="oneonone">1-on-1 VIP Prep & Coaching</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-zinc-400 text-xs font-bold uppercase tracking-wide">
                  Inquiry Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share details about your goals, training experience, or preferred program..."
                  className={`w-full bg-zinc-950 text-white text-sm px-4 py-3.5 border rounded-xl focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#E63946]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E63946] hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-500/5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Locking Reps...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>

            </form>

            {/* Success Overlay Dialog */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center p-8 text-center rounded-2xl z-30 border border-red-500/30"
                >
                  <CheckCircle2 className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
                  <h4 className="text-white text-2xl font-black uppercase tracking-tight font-sans">
                    INQUIRY RECEIVED!
                  </h4>
                  <p className="text-zinc-400 text-sm max-w-sm mt-3 font-light leading-relaxed">
                    Welcome to the team. Head Coach Elon and our advisors are reviewing your physical metrics now and will reach out within 12 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 border border-zinc-800 hover:border-red-500/30 bg-zinc-900 text-zinc-300 hover:text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Return to Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Note */}
        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 pb-4">
          <div>
            <p className="text-white font-bold tracking-wider text-lg uppercase">
              T7 <span className="text-red-500">FITNESS</span>
            </p>
            <p className="text-zinc-500 text-xs font-light mt-1 uppercase tracking-widest">
              © 2026 T7 Fitness. Built for Elite Aesthetics. All Rights Reserved.
            </p>
          </div>
          
          <p className="text-zinc-600 text-[10px] font-semibold uppercase tracking-[0.2em]">
            Heavy Metal • Pure Science • Extreme Discipline
          </p>
        </div>

      </div>
    </section>
  );
}
