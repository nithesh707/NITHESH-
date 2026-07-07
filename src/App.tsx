/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Programs from "./components/Programs";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-sans selection:bg-red-500 selection:text-white antialiased overflow-x-hidden">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About / Founder Section */}
        <About />

        {/* 4. Experience / Stats Section */}
        <Experience />

        {/* 5. Programs / Training Section */}
        <Programs />

        {/* 6. Membership Plans Section */}
        <Membership />

        {/* 7. Transformation Gallery */}
        <Gallery />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Contact / Footer */}
        <Contact />
      </main>

      {/* Floating WhatsApp Integration */}
      <FloatingWhatsApp />
    </div>
  );
}

