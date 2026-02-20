"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: seededRandom(i * 5 + 1) * 3 + 1,
  x: seededRandom(i * 9 + 2) * 100,
  delay: seededRandom(i * 13 + 3) * 6,
  duration: seededRandom(i * 17 + 4) * 10 + 8,
}));

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 ue-grid opacity-30" />

      {/* Big radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(124,58,237,0.15)_0%,transparent_70%)]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#7c3aed]"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, bottom: "-5%" }}
          animate={{ y: [0, -700], opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#7c3aed]/40 text-[#7c3aed] text-xs tracking-[0.25em] uppercase rounded-full bg-[#7c3aed]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
            Available Now on Fab
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight"
        >
          Build Faster.<br />
          <span className="text-glow-purple text-[#7c3aed]">Ship Smarter.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#6b6b8a] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop context-switching between docs, Stack Overflow, and your editor.
          Cortex brings 18 AI-powered builders directly into UE5 — no subscription, no setup, just results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://www.fab.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(124,58,237,0.5)" }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-2 px-10 py-4 bg-[#7c3aed] text-white font-bold text-base rounded overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Cortex on Fab — $79
              <ExternalLink className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-8 py-4 border border-[#7c3aed]/40 text-[#7c3aed] font-bold text-base rounded hover:bg-[#7c3aed]/10 transition-colors duration-200"
          >
            Explore Features
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6b6b8a]"
        >
          {[
            "✓ One-time purchase",
            "✓ No subscription needed",
            "✓ UE5.7+ compatible",
            "✓ Windows 64-bit",
            "✓ Your API key, your data",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-1">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-12 left-8 w-16 h-16 corner-tl border-[#7c3aed]/20" />
      <div className="absolute top-12 right-8 w-16 h-16 corner-tr border-[#7c3aed]/20" />
      <div className="absolute bottom-12 left-8 w-16 h-16 corner-bl border-[#7c3aed]/20" />
      <div className="absolute bottom-12 right-8 w-16 h-16 corner-br border-[#7c3aed]/20" />
    </section>
  );
}
