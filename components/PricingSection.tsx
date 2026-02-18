"use client";

import { motion } from "framer-motion";
import { Check, Minus, ExternalLink, Zap, Crown } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    price: "$99",
    period: "one-time",
    color: "#7c3aed",
    badge: null,
    icon: Zap,
    description: "Everything you need to supercharge your UE5 workflow with AI.",
    cta: "Buy Standard",
    ctaHref: "https://www.fab.com",
    features: [
      { text: "All Blueprint creation & editing", included: true },
      { text: "UMG Widget Builder", included: true },
      { text: "PCG Biome Builder", included: true },
      { text: "Data Structures (Structs, Enums, DataTables)", included: true },
      { text: "Enhanced Input setup", included: true },
      { text: "Asset Management", included: true },
      { text: "Level & World commands", included: true },
      { text: "Chat, Optimizer, Analyst, Biome modes", included: true },
      { text: "Multiple conversation tabs", included: true },
      { text: "Claude, GPT, Custom endpoint support", included: true },
      { text: "Auto-retry on compile errors", included: true },
      { text: "Commercial use license", included: true },
      { text: "Priority support", included: false },
      { text: "Team / studio seat license", included: false },
    ],
  },
  {
    name: "Professional",
    price: "$175",
    period: "one-time",
    color: "#f97316",
    badge: "Best Value",
    icon: Crown,
    description: "For studios and professionals who need priority support and team licensing.",
    cta: "Buy Professional",
    ctaHref: "https://www.fab.com",
    features: [
      { text: "Everything in Standard", included: true },
      { text: "All Blueprint creation & editing", included: true },
      { text: "UMG Widget Builder", included: true },
      { text: "PCG Biome Builder", included: true },
      { text: "Data Structures (Structs, Enums, DataTables)", included: true },
      { text: "Enhanced Input setup", included: true },
      { text: "Asset Management", included: true },
      { text: "Level & World commands", included: true },
      { text: "Commercial use license", included: true },
      { text: "Priority support (Discord + email)", included: true },
      { text: "Team / studio seat license", included: true },
    ],
  },
];

const apiCosts = [
  {
    provider: "Anthropic Claude",
    model: "claude-opus-4-5",
    color: "#7c3aed",
    input: "$15 / 1M tokens",
    output: "$75 / 1M tokens",
    typical: "~$0.05–0.15 per request",
    recommended: true,
  },
  {
    provider: "Anthropic Claude",
    model: "claude-sonnet-4-5",
    color: "#a78bfa",
    input: "$3 / 1M tokens",
    output: "$15 / 1M tokens",
    typical: "~$0.01–0.05 per request",
    recommended: true,
  },
  {
    provider: "OpenAI GPT",
    model: "gpt-4o",
    color: "#4ade80",
    input: "$2.50 / 1M tokens",
    output: "$10 / 1M tokens",
    typical: "~$0.01–0.04 per request",
    recommended: false,
  },
  {
    provider: "Custom Endpoint",
    model: "Self-hosted",
    color: "#f97316",
    input: "Free",
    output: "Free",
    typical: "Hardware cost only",
    recommended: false,
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
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#7c3aed] border border-[#7c3aed]/30 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            One-Time Purchase. Yours Forever.
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            No subscriptions. Pay once, use forever. You only additionally pay for the AI API
            calls you make — directly to Anthropic or OpenAI.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-lg overflow-hidden ${tier.badge ? "gradient-border animate-pulse-glow" : "glass"}`}
            >
              {tier.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold"
                    style={{ background: `${tier.color}25`, color: tier.color, border: `1px solid ${tier.color}40` }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className="p-7">
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}30` }}
                  >
                    <tier.icon className="w-5 h-5" style={{ color: tier.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b6b8a] uppercase tracking-widest">Cortex</p>
                    <p className="text-sm font-bold text-white">{tier.name}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-white">{tier.price}</span>
                  <span className="text-[#6b6b8a] mb-1.5">/ {tier.period}</span>
                </div>
                <p className="text-sm text-[#6b6b8a] mb-6 leading-relaxed">{tier.description}</p>

                {/* CTA */}
                <motion.a
                  href={tier.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-3 font-bold rounded transition-colors mb-6 text-white"
                  style={{ background: tier.color }}
                >
                  {tier.cta}
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Features */}
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <Check className="w-4 h-4 text-[#4ade80] flex-shrink-0 mt-0.5" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#6b6b8a] flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? "text-[#e8e8f0]/80" : "text-[#6b6b8a]"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-lg overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-[#1e1e30] bg-[#13131f] flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">AI API Costs (separate from plugin)</p>
              <p className="text-xs text-[#6b6b8a] mt-0.5">Billed directly by Anthropic or OpenAI. Cortex never touches your payment.</p>
            </div>
          </div>
          <div className="divide-y divide-[#1e1e30]">
            {apiCosts.map((api, i) => (
              <motion.div
                key={`${api.provider}-${api.model}`}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                className="px-5 py-3 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: `${api.color}15`, color: api.color }}
                  >
                    {api.model}
                  </span>
                  {api.recommended && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#7c3aed]/20 text-[#7c3aed] font-bold">
                      REC
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[10px] text-[#6b6b8a] uppercase tracking-wider">Input</p>
                  <p className="text-xs font-mono text-[#e8e8f0]">{api.input}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#6b6b8a] uppercase tracking-wider">Output</p>
                  <p className="text-xs font-mono text-[#e8e8f0]">{api.output}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#6b6b8a] uppercase tracking-wider">Typical / request</p>
                  <p className="text-xs font-semibold" style={{ color: api.color }}>{api.typical}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
