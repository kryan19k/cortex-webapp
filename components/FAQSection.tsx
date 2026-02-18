"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does Cortex work with any Unreal Engine project?",
    a: "Yes. Cortex works with any UE5.7+ project on Windows 64-bit. It installs as a project plugin (recommended) or an engine plugin. The PCG Plugin is optional and only required for Biome mode — all other features work without it.",
  },
  {
    q: "Do I need to know how to code to use Cortex?",
    a: "No coding knowledge required. Cortex is designed for Blueprint developers and artists. You describe what you want in plain English and Cortex handles all the Blueprint node wiring, component setup, and compilation automatically.",
  },
  {
    q: "Which AI provider should I use?",
    a: "Anthropic Claude (claude-sonnet-4-6 or claude-opus-4-6) is strongly recommended. Its large context window and instruction-following make it the most reliable for complex multi-step Blueprint construction. OpenAI GPT-4o works well too. Local models via Custom Endpoint are supported but produce less reliable results for complex tasks.",
  },
  {
    q: "How much does it cost to use Cortex?",
    a: "Cortex is $99 (Standard) or $175 (Professional) — a one-time purchase on Fab. On top of that, you pay for the AI API calls you make directly to Anthropic or OpenAI at their standard rates. A typical Blueprint creation request costs $0.01–0.05 with claude-sonnet-4-6.",
  },
  {
    q: "Is my API key secure?",
    a: "Yes. Your API key is stored locally in your project's Saved/ directory and is never sent anywhere except directly to your chosen AI provider (Anthropic or OpenAI). Cortex has no backend server — all communication goes directly from your editor to the AI API.",
  },
  {
    q: "What happens if the Blueprint fails to compile?",
    a: "Cortex automatically retries up to 2 times. On each retry, it sends the full compile error details back to the AI for self-correction. You can watch this happen in the chat stream — green Tool messages show exactly what was executed and what errors were encountered.",
  },
  {
    q: "Can Cortex modify existing Blueprints, or only create new ones?",
    a: "Both. Cortex can create new Blueprint assets from scratch or modify existing ones. Use the MODIFY_BLUEPRINT command (or just describe the change in chat) to add/remove components, variables, functions, and nodes to any existing Blueprint.",
  },
  {
    q: "What is the 5-stage node resolution pipeline?",
    a: "When Cortex needs to place a Blueprint node, it searches through 5 stages: (1) ~100 hardcoded fast-path nodes, (2) 14 common engine classes, (3) the Blueprint's own class hierarchy, (4) all 11,000+ registered Blueprint actions via FBlueprintActionDatabase with fuzzy matching, and (5) all loaded native classes as a final fallback. If a node truly cannot be found, a Comment node with [MISSING NODE] is placed so you can identify it.",
  },
  {
    q: "Does Cortex support PCG (Procedural Content Generation)?",
    a: "Yes, via Biome mode. You need the PCG Plugin enabled in your project (Edit → Plugins → Procedural Content Generation). Cortex can generate complete PCG graph assets with full pipeline configuration — Surface Sampler, Self Pruning, Density Filter, Transform Points, and Static Mesh Spawner — and spawn them in your level.",
  },
  {
    q: "Can I use Cortex with multiple Blueprints at once?",
    a: "Yes. Use multiple conversation tabs — each tab maintains its own independent conversation history. You can have one tab working on a character Blueprint, another on UI, and another on a PCG biome, all without losing context.",
  },
  {
    q: "Does Cortex support vision / image input?",
    a: "Yes. Use the 📎 button in the input bar to attach a screenshot, reference image, or diagram (PNG, JPG, GIF, WEBP). Claude and GPT-4o can use this visual context to understand layouts, color schemes, or UI designs.",
  },
  {
    q: "What UE5 version is required?",
    a: "Unreal Engine 5.7 or later. Windows 64-bit only. Mac and Linux are not currently supported.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 ue-grid opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#7c3aed] border border-[#7c3aed]/30 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-xl mx-auto">
            Everything you need to know about Cortex.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className="text-sm font-semibold text-white group-hover:text-[#7c3aed] transition-colors pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-[#6b6b8a]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 border-t border-[#1e1e30]">
                      <p className="text-sm text-[#6b6b8a] leading-relaxed pt-3">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
