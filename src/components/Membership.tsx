import { useState } from "react";
import { Check, Edit3, Save, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PLANS } from "../data";

export default function Membership() {
  // State for editable pricing placeholders
  const [prices, setPrices] = useState({
    "plan-1": { amount: "₹1,999", period: "month" },
    "plan-2": { amount: "₹4,999", period: "quarter" },
    "plan-3": { amount: "₹14,999", period: "year" },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempPrices, setTempPrices] = useState({ ...prices });
  const [successMessage, setSuccessMessage] = useState("");

  const handlePriceChange = (id: "plan-1" | "plan-2" | "plan-3", field: "amount" | "period", value: string) => {
    setTempPrices((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    setPrices({ ...tempPrices });
    setIsEditing(false);
    setSuccessMessage("Prices updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleCancel = () => {
    setTempPrices({ ...prices });
    setIsEditing(false);
  };

  return (
    <section id="membership" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-900/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase"
          >
            Invest In Yourself
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-sans mt-2"
          >
            MEMBERSHIP PLANS
          </motion.h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 font-light">
            Select the training tier that matches your genetic ambition. No hidden sign-up fees, pure physique development.
          </p>

          {/* Price Customizer Toggle */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <button
              onClick={() => {
                setIsEditing(!isEditing);
                setTempPrices({ ...prices });
              }}
              className="flex items-center gap-2 text-zinc-400 hover:text-red-500 text-xs font-semibold uppercase tracking-wider border border-zinc-800 hover:border-red-500/30 px-4 py-2 bg-zinc-900/40 rounded-sm transition-colors duration-200"
              id="edit-prices-toggle"
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isEditing ? "Close Customizer" : "Customize Placeholder Prices"}
            </button>

            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-emerald-400 text-xs font-bold uppercase tracking-wider"
                >
                  {successMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Pricing Editor Panel */}
        <AnimatePresence>
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-12 max-w-2xl mx-auto bg-zinc-900/80 border border-zinc-800 p-6 rounded-sm shadow-2xl overflow-hidden"
              id="price-editor-panel"
            >
              <h3 className="text-white text-sm font-extrabold uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3">
                <HelpCircle className="w-4 h-4 text-red-500" />
                Customize Plan Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {PLANS.map((plan) => {
                  const id = plan.id as "plan-1" | "plan-2" | "plan-3";
                  return (
                    <div key={plan.id} className="space-y-3">
                      <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wide">
                        {plan.name}
                      </label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={tempPrices[id].amount}
                          onChange={(e) => handlePriceChange(id, "amount", e.target.value)}
                          placeholder="Price (e.g. ₹1,999)"
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 text-white text-xs px-3 py-2 rounded-sm focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          value={tempPrices[id].period}
                          onChange={(e) => handlePriceChange(id, "period", e.target.value)}
                          placeholder="Period (e.g. month)"
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 text-white text-xs px-3 py-2 rounded-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end gap-3 border-t border-zinc-800 pt-4">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" /> Save Changes
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch" id="pricing-cards-container">
          {PLANS.map((plan, idx) => {
            const id = plan.id as "plan-1" | "plan-2" | "plan-3";
            const currentPrice = prices[id];

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -8,
                  borderColor: plan.isPopular ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.15)",
                  boxShadow: plan.isPopular 
                    ? "0 25px 50px -12px rgba(230, 57, 70, 0.4)"
                    : "0 20px 40px -15px rgba(0, 0, 0, 0.6)"
                }}
                className={`relative flex flex-col p-8 md:p-10 rounded-2xl transition-all duration-300 border ${
                  plan.isPopular
                    ? "bg-[#E63946] border-white/20 lg:scale-[1.03] lg:-translate-y-2 z-10 shadow-2xl text-white"
                    : "bg-[#141414] border-white/5 z-0 text-zinc-300"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-zinc-950 text-[#E63946] text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/10 shadow-md">
                    Most Popular Choice
                  </span>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-xs font-extrabold uppercase tracking-widest mb-2 ${
                    plan.isPopular ? "text-white/80" : "text-zinc-500"
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className={`text-4xl md:text-5xl font-black tracking-tight ${
                      plan.isPopular ? "text-white" : "text-white"
                    }`}>
                      {currentPrice.amount}
                    </span>
                    <span className={`text-sm font-semibold ml-2 uppercase tracking-wider ${
                      plan.isPopular ? "text-white/70" : "text-zinc-500"
                    }`}>
                      / {currentPrice.period}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-[1px] w-full mb-8 ${
                  plan.isPopular ? "bg-white/10" : "bg-white/5"
                }`} />

                {/* Feature List */}
                <ul className="space-y-4 flex-grow mb-8 text-sm">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <Check className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.isPopular ? "text-zinc-950" : "text-red-500"
                      }`} />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Choose Plan Action Button */}
                <button
                  onClick={() => {
                    // Smooth scroll to contact form with prepopulated message or focus
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                      // Find contact message and set it
                      const msgInput = document.getElementById("contact-message") as HTMLTextAreaElement;
                      if (msgInput) {
                        msgInput.value = `Hi T7 Fitness! I am highly interested in signing up for the "${plan.name}" plan. Please guide me on next steps.`;
                      }
                    }
                  }}
                  className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? "bg-zinc-950 hover:bg-zinc-900 text-white shadow-xl active:scale-95 border border-white/5"
                      : "bg-zinc-850 hover:bg-zinc-800 text-white border border-zinc-700/30 hover:border-zinc-600 active:scale-95"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
