import React, { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Programs", href: "#programs" },
    { name: "Membership", href: "#membership" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/5 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-white font-black tracking-wider text-xl sm:text-2xl italic"
            onClick={(e) => handleScrollTo(e, "#home")}
            id="navbar-logo"
          >
            <Dumbbell className="w-6 h-6 text-red-500 fill-red-500/10" />
            <span>
              T7 <span className="text-red-500">FITNESS</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-red-500 text-xs font-black tracking-widest uppercase transition-colors duration-200 italic"
                onClick={(e) => handleScrollTo(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Join Now Button */}
          <div className="hidden lg:block">
            <a
              href="#membership"
              className="bg-[#E63946] hover:bg-red-600 text-white font-black text-xs uppercase px-5 py-2.5 rounded-xl tracking-wider shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300"
              onClick={(e) => handleScrollTo(e, "#membership")}
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-4 right-4 bg-zinc-950/95 backdrop-blur-md border border-white/5 z-30 lg:hidden shadow-2xl py-6 px-6 rounded-2xl"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-red-500 text-sm font-black tracking-wider uppercase py-2 border-b border-white/5 last:border-b-0 transition-colors italic"
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#membership"
                  className="block w-full bg-[#E63946] hover:bg-red-600 text-white font-black text-xs uppercase py-4 rounded-xl tracking-widest transition-colors shadow-lg shadow-red-500/10"
                  onClick={(e) => handleScrollTo(e, "#membership")}
                >
                  Join Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
