"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Zap, Code2, Layers, Cpu } from "lucide-react";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  size: seededRandom(i * 3 + 1) * 3 + 1,
  x: seededRandom(i * 7 + 2) * 100,
  delay: seededRandom(i * 11 + 3) * 8,
  duration: seededRandom(i * 13 + 4) * 12 + 10,
}));

const stats = [
  { icon: Code2, label: "Node Types", value: "11,000+" },
  { icon: Layers, label: "Commands", value: "50+" },
  { icon: Cpu, label: "AI Providers", value: "3" },
  { icon: Zap, label: "Builders", value: "18" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#08080f]" />

      {/* UE grid */}
      <div className="absolute inset-0 ue-grid opacity-60" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(124,58,237,0.12)_0%,transparent_70%)]" />

      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/60 to-transparent" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#7c3aed]"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, bottom: "-5%" }}
          animate={{ y: [0, -900], opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Blueprint node decorations */}
      <div className="absolute top-1/4 left-8 hidden xl:block opacity-20">
        <div className="w-48 h-28 border border-[#7c3aed]/40 rounded bg-[#0e0e1a]/60 p-3">
          <div className="h-2 w-20 bg-[#7c3aed]/60 rounded mb-2" />
          <div className="h-px bg-[#1e1e30] mb-2" />
          <div className="flex gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#f97316]" />
            <div className="h-2 w-16 bg-[#1e1e30] rounded" />
          </div>
          <div className="flex gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <div className="h-2 w-12 bg-[#1e1e30] rounded" />
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
            <div className="h-2 w-14 bg-[#1e1e30] rounded" />
          </div>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-[#7c3aed]/40 to-transparent mx-auto" />
      </div>

      <div className="absolute top-1/3 right-8 hidden xl:block opacity-20">
        <div className="w-44 h-24 border border-[#38bdf8]/40 rounded bg-[#0e0e1a]/60 p-3">
          <div className="h-2 w-16 bg-[#38bdf8]/60 rounded mb-2" />
          <div className="h-px bg-[#1e1e30] mb-2" />
          <div className="flex gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#f97316]" />
            <div className="h-2 w-14 bg-[#1e1e30] rounded" />
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <div className="h-2 w-10 bg-[#1e1e30] rounded" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#7c3aed]/40 text-[#7c3aed] text-xs tracking-[0.25em] uppercase rounded-full bg-[#7c3aed]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
            Native UE5 Editor Plugin
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-4 leading-none"
        >
          <span className="text-glow-purple">CORTEX</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#6b6b8a] tracking-widest uppercase mb-6 font-light"
        >
          AI Assistant for Unreal Engine 5
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base md:text-lg text-[#e8e8f0]/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Chat with{" "}
          <span className="text-[#7c3aed] font-semibold">Claude</span> or{" "}
          <span className="text-[#38bdf8] font-semibold">GPT</span> to create Blueprints,
          build widgets, generate VFX, animate characters, design sounds, and more —{" "}
          <span className="text-white font-semibold">18 builders, all inside the editor.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="https://www.fab.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}
            whileTap={{ scale: 0.96 }}
            className="group relative px-8 py-3.5 bg-[#7c3aed] text-white font-bold text-base rounded overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get on Fab — $79
            </span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 border border-[#7c3aed]/40 text-[#7c3aed] font-bold text-base rounded hover:bg-[#7c3aed]/10 transition-colors duration-200"
          >
            See Features
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center group"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#7c3aed] group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-[#6b6b8a] uppercase tracking-wider mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-20 h-20 corner-tl border-[#7c3aed]/20" />
      <div className="absolute top-24 right-6 w-20 h-20 corner-tr border-[#7c3aed]/20" />
      <div className="absolute bottom-16 left-6 w-20 h-20 corner-bl border-[#7c3aed]/20" />
      <div className="absolute bottom-16 right-6 w-20 h-20 corner-br border-[#7c3aed]/20" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-[#6b6b8a]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[#7c3aed]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
