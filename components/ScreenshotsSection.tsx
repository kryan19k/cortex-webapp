"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/cortex-ui.png",
    title: "The Cortex Panel",
    description: "Native Slate panel docked directly inside UE5. Chat, Optimizer, Analyst, and Biome modes accessible with one click.",
    color: "#7c3aed",
  },
  {
    src: "/bp-prompt.png",
    title: "Blueprint Generation",
    description: "Describe any Blueprint in plain English. Cortex generates the full JSON command set and executes it instantly.",
    color: "#38bdf8",
  },
  {
    src: "/ui.png",
    title: "One-Shot UMG Widgets",
    description: "\"Create a beautiful game menu UI widget\" — Cortex builds the full nested widget hierarchy with one prompt.",
    color: "#a78bfa",
  },
  {
    src: "/bbefore.png",
    title: "PCG Biome — Before",
    description: "Start with an empty landscape. One prompt is all it takes to design a complete PCG scatter graph.",
    color: "#f97316",
  },
  {
    src: "/cortextSS1.png",
    title: "PCG Biome — After",
    description: "A dense forest biome with trees, bushes, ground cover, and rocks — generated from a single natural language prompt.",
    color: "#4ade80",
  },
];

export default function ScreenshotsSection() {
  return (
    <section id="screenshots" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 ue-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,58,237,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#a78bfa] border border-[#a78bfa]/30 rounded-full mb-4">
            See It In Action
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Real Results, Real Projects
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Every screenshot below was produced inside Unreal Engine 5 using Cortex — no external tools, no leaving the editor.
          </p>
        </motion.div>

        {/* Featured large screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 group relative rounded-lg overflow-hidden border border-[#1e1e30] hover:border-[#7c3aed]/40 transition-colors duration-300"
        >
          <div className="relative w-full aspect-video">
            <Image
              src="/cortextSS1.png"
              alt="Cortex PCG Biome Generation"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-2 py-0.5 text-xs font-mono rounded mb-2" style={{ background: "#4ade8020", color: "#4ade80", border: "1px solid #4ade8030" }}>
                PCG Biome Builder
              </span>
              <h3 className="text-xl font-bold text-white mb-1">Create Custom Biomes with One Prompt</h3>
              <p className="text-sm text-[#6b6b8a] max-w-2xl">
                A dense forest with trees, bushes, ground cover, and rocks — generated from a single natural language description. Full PCG pipeline created automatically.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid of smaller screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: "/cortex-ui.png", title: "Cortex Chat Panel", tag: "UI", color: "#7c3aed" },
            { src: "/bp-prompt.png", title: "Blueprint Generation", tag: "Blueprints", color: "#38bdf8" },
            { src: "/ui.png", title: "One-Shot UMG Widgets", tag: "UMG", color: "#a78bfa" },
            { src: "/bbefore.png", title: "PCG Before", tag: "PCG", color: "#f97316" },
          ].map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-lg overflow-hidden border border-[#1e1e30] hover:border-[#7c3aed]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span
                    className="inline-block px-1.5 py-0.5 text-[10px] font-mono rounded mb-1"
                    style={{ background: `${shot.color}20`, color: shot.color, border: `1px solid ${shot.color}30` }}
                  >
                    {shot.tag}
                  </span>
                  <p className="text-xs font-semibold text-white">{shot.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
