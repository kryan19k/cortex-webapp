"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    color: "#4ade80",
    badge: null,
    description: "Full plugin, no restrictions. Bring your own API key.",
    cta: "Get on Fab",
    ctaHref: "https://www.fab.com",
    features: [
      "All Blueprint creation & editing",
      "UMG Widget Builder",
      "PCG Biome Builder",
      "Data Structures (Structs, Enums, DataTables)",
      "Enhanced Input setup",
      "Asset Management",
      "Level & World commands",
      "Chat, Optimizer, Analyst, Biome modes",
      "Multiple conversation tabs",
      "Claude, GPT, Custom endpoint support",
      "Auto-retry on compile errors",
    ],
    note: "You only pay for your AI API usage (Anthropic or OpenAI).",
  },
];

const apiCosts = [
  {
    provider: "Anthropic Claude",
    model: "claude-sonnet-4-5",
    color: "#7c3aed",
    input: "$3 / 1M tokens",
    output: "$15 / 1M tokens",
    typical: "~$0.01–0.05 per request",
  },
  {
    provider: "OpenAI GPT",
    model: "gpt-4o",
    color: "#4ade80",
    input: "$2.50 / 1M tokens",
    output: "$10 / 1M tokens",
    typical: "~$0.01–0.04 per request",
  },
  {
    provider: "Custom Endpoint",
    model: "Self-hosted",
    color: "#f97316",
    input: "Free",
    output: "Free",
    typical: "Hardware cost only",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 ue-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(124,58,237,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#4ade80] border border-[#4ade80]/30 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The Plugin is Free.
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Cortex is free to download and use. You only pay for the AI API calls you make —
            directly to Anthropic or OpenAI, at their standard rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Plugin card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 gradient-border rounded-lg overflow-hidden animate-pulse-glow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-[#6b6b8a] uppercase tracking-widest mb-1">Cortex Plugin</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-white">$0</span>
                    <span className="text-[#6b6b8a] mb-1">/ forever</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#4ade80]/20 text-[#4ade80] text-xs font-bold rounded-full border border-[#4ade80]/30">
                  FREE
                </span>
              </div>

              <p className="text-sm text-[#6b6b8a] mb-6 leading-relaxed">
                {tiers[0].description}
              </p>

              <motion.a
                href={tiers[0].ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#7c3aed] text-white font-bold rounded hover:bg-[#6d28d9] transition-colors mb-6"
              >
                Get on Fab
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <ul className="space-y-2.5">
                {tiers[0].features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#e8e8f0]/80">
                    <Check className="w-4 h-4 text-[#4ade80] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-[#6b6b8a] border-t border-[#1e1e30] pt-4">
                {tiers[0].note}
              </p>
            </div>
          </motion.div>

          {/* API costs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="glass rounded-lg px-5 py-4 mb-2">
              <p className="text-sm font-bold text-white mb-1">How API billing works</p>
              <p className="text-sm text-[#6b6b8a] leading-relaxed">
                Each message you send to Cortex makes one API call to your chosen AI provider.
                You&apos;re billed directly by Anthropic or OpenAI — Cortex never touches your payment.
                A typical Blueprint creation request costs a fraction of a cent.
              </p>
            </div>

            {apiCosts.map((api, i) => (
              <motion.div
                key={api.provider}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="glass rounded-lg overflow-hidden"
              >
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ borderBottom: `1px solid ${api.color}20`, background: `${api.color}06` }}
                >
                  <div>
                    <span className="text-sm font-bold text-white">{api.provider}</span>
                    <span
                      className="ml-2 text-xs font-mono px-2 py-0.5 rounded"
                      style={{ background: `${api.color}15`, color: api.color }}
                    >
                      {api.model}
                    </span>
                  </div>
                </div>
                <div className="px-5 py-3 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-[#6b6b8a] mb-1">Input</p>
                    <p className="text-sm font-mono text-[#e8e8f0]">{api.input}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6b6b8a] mb-1">Output</p>
                    <p className="text-sm font-mono text-[#e8e8f0]">{api.output}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6b6b8a] mb-1">Typical / request</p>
                    <p className="text-sm font-semibold" style={{ color: api.color }}>
                      {api.typical}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="glass rounded-lg px-5 py-4"
            >
              <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-2">Tips to minimize API cost</p>
              <ul className="space-y-1.5">
                {[
                  "Use separate tabs for separate tasks to keep context short",
                  "Reduce Max Context Messages in Settings for simpler requests",
                  "Use claude-haiku or gpt-4o-mini for quick iterative changes",
                  "Self-host with Ollama + Custom Endpoint for zero API cost",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-xs text-[#e8e8f0]/60">
                    <span className="w-1 h-1 rounded-full bg-[#7c3aed] mt-1.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
