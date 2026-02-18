"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ToggleRight, TreePine, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    color: "#7c3aed",
    title: "Purchase on Fab",
    description: "Buy Cortex on the Fab marketplace. Once purchased, it installs directly through Epic Games Launcher — no manual file copying required.",
    code: `fab.com → Search "Cortex" → Purchase → Install to Engine`,
  },
  {
    number: "02",
    icon: ToggleRight,
    color: "#38bdf8",
    title: "Enable Cortex Plugin",
    description: "Open your UE5 project, go to Edit → Plugins, search for \"Cortex\" or \"LLM Assistant\", enable it, and restart the editor when prompted.",
    code: `Edit → Plugins → Search "Cortex" → ✓ Enable → Restart Now`,
  },
  {
    number: "03",
    icon: TreePine,
    color: "#4ade80",
    title: "Enable PCG Plugin (Optional)",
    description: "For Biome mode, also enable the Procedural Content Generation plugin. If you don't need PCG biomes, skip this step.",
    code: `Edit → Plugins → Search "Procedural Content Generation" → ✓ Enable → Restart`,
  },
  {
    number: "04",
    icon: Rocket,
    color: "#f97316",
    title: "Open & Configure",
    description: "Open Cortex via Window → LLM Assistant (or the toolbar button). Click ⚙ Settings, select your AI provider, paste your API key, and start chatting.",
    code: `Window → LLM Assistant\n⚙ Settings → Select Provider → Paste API Key → Done`,
  },
];

export default function InstallSection() {
  return (
    <section id="install" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 ue-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(124,58,237,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#38bdf8] border border-[#38bdf8]/30 rounded-full mb-4">
            Installation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Up and Running in 4 Steps
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            No build steps, no configuration files. Just drop the plugin in and go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-lg p-5 relative overflow-hidden group"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                style={{ background: `radial-gradient(ellipse at top left, ${step.color}10 0%, transparent 60%)` }}
              />

              {/* Icon + number */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <span
                  className="text-3xl font-black"
                  style={{ color: `${step.color}30` }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-2 relative z-10">{step.title}</h3>
              <p className="text-xs text-[#6b6b8a] leading-relaxed mb-3 relative z-10">
                {step.description}
              </p>

              {step.code && (
                <pre
                  className="text-xs font-mono leading-relaxed rounded p-3 relative z-10 whitespace-pre-wrap"
                  style={{
                    background: "#08080f",
                    border: "1px solid #1e1e30",
                    color: `${step.color}cc`,
                  }}
                >
                  {step.code}
                </pre>
              )}
            </motion.div>
          ))}
        </div>

        {/* Requirements table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-lg overflow-hidden"
        >
          <div className="px-5 py-3 border-b border-[#1e1e30] bg-[#13131f]">
            <p className="text-xs text-[#6b6b8a] uppercase tracking-widest">Requirements</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1e1e30]">
            {[
              { label: "Unreal Engine", value: "5.7 or later", color: "#7c3aed" },
              { label: "Platform", value: "Windows 64-bit", color: "#38bdf8" },
              { label: "API Key", value: "Anthropic or OpenAI", color: "#f97316" },
              { label: "PCG Plugin", value: "Optional (Biome mode)", color: "#4ade80" },
            ].map((req) => (
              <div key={req.label} className="px-5 py-4">
                <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-1">{req.label}</p>
                <p className="text-sm font-semibold" style={{ color: req.color }}>{req.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engine plugin option */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 glass rounded-lg px-6 py-4 flex items-start gap-3"
        >
          <span className="text-[#38bdf8] text-lg">💡</span>
          <p className="text-sm text-[#6b6b8a]">
            <span className="text-white font-semibold">Engine-wide install:</span> Copy the plugin to{" "}
            <code className="text-[#7c3aed] text-xs">
              C:\Program Files\Epic Games\UE_5.7\Engine\Plugins\Marketplace\
            </code>{" "}
            to make Cortex available in all your UE5.7 projects automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
