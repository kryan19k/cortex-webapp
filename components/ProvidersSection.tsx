"use client";

import { motion } from "framer-motion";
import { Star, Zap, Server } from "lucide-react";

const providers = [
  {
    icon: Star,
    name: "Anthropic Claude",
    badge: "Recommended",
    badgeColor: "#7c3aed",
    color: "#7c3aed",
    models: ["claude-opus-4-6 ★ Best", "claude-sonnet-4-6 ★ Recommended", "claude-haiku-4"],
    description:
      "Claude is the strongly recommended provider. claude-opus-4-6 and claude-sonnet-4-6 deliver the best results for complex multi-step Blueprint construction, PCG biomes, and UMG widget creation.",
    pros: [
      "claude-opus-4-6 & claude-sonnet-4-6 recommended for best results",
      "Best instruction following for complex Blueprint tasks",
      "Large context window for long multi-step conversations",
      "Vision support for screenshot and image analysis",
    ],
    setup: [
      "Go to console.anthropic.com",
      "Create an API key",
      "Select Anthropic Claude in Cortex Settings",
      "Choose claude-opus-4-6 or claude-sonnet-4-6",
    ],
  },
  {
    icon: Zap,
    name: "OpenAI GPT",
    badge: "Supported",
    badgeColor: "#4ade80",
    color: "#4ade80",
    models: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo"],
    description:
      "Full OpenAI GPT support including vision. GPT-4o works well for Blueprint creation and supports image attachments for visual context.",
    pros: [
      "GPT-4o vision for screenshot analysis",
      "Fast response times",
      "Wide model selection",
      "Familiar API for existing users",
    ],
    setup: [
      "Go to platform.openai.com",
      "Create an API key",
      "Select OpenAI GPT in Cortex Settings",
      "Paste your key and select a model",
    ],
  },
  {
    icon: Server,
    name: "Custom Endpoint",
    badge: "Advanced",
    badgeColor: "#f97316",
    color: "#f97316",
    models: ["LM Studio", "Ollama (OpenAI adapter)", "Any OpenAI-compatible API"],
    description:
      "Connect to any OpenAI-compatible API — self-hosted models, LM Studio, Ollama, or private deployments. Local models work but produce less reliable results.",
    pros: [
      "Full privacy — no data leaves your machine",
      "Works with LM Studio and Ollama",
      "Any OpenAI-compatible endpoint",
      "Custom model names supported",
    ],
    setup: [
      "Select Custom Endpoint in Cortex Settings",
      "Enter your endpoint URL",
      "Enter API key (or any placeholder)",
      "Enter the model name your server expects",
    ],
  },
];

export default function ProvidersSection() {
  return (
    <section id="providers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 ue-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#f97316] border border-[#f97316]/30 rounded-full mb-4">
            AI Providers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Your AI, Your Choice
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Cortex works with Anthropic Claude, OpenAI GPT, and any OpenAI-compatible endpoint.
            Bring your own API key.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {providers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-start justify-between"
                style={{ borderBottom: `1px solid ${p.color}20`, background: `${p.color}06` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${p.color}20`, border: `1px solid ${p.color}30` }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{p.name}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${p.badgeColor}20`, color: p.badgeColor }}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <p className="text-sm text-[#6b6b8a] leading-relaxed">{p.description}</p>

                {/* Models */}
                <div>
                  <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-2">Models</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.models.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{ background: "#13131f", border: "1px solid #1e1e30", color: "#e8e8f0" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pros */}
                <div>
                  <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-2">Highlights</p>
                  <ul className="space-y-1.5">
                    {p.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-xs text-[#e8e8f0]/70">
                        <span
                          className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: p.color }}
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Setup steps */}
                <div>
                  <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-2">Quick Setup</p>
                  <ol className="space-y-1.5">
                    {p.setup.map((step, si) => (
                      <li key={step} className="flex items-start gap-2 text-xs text-[#e8e8f0]/70">
                        <span
                          className="text-[10px] font-bold w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${p.color}20`, color: p.color }}
                        >
                          {si + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 glass rounded-lg px-6 py-4 flex items-start gap-3"
        >
          <span className="text-[#f97316] text-lg">⚠</span>
          <p className="text-sm text-[#6b6b8a]">
            <span className="text-white font-semibold">API keys are stored locally</span> in your
            project&apos;s <code className="text-[#7c3aed] text-xs">Saved/</code> directory and never
            transmitted anywhere except directly to your chosen AI provider. Cortex does not have a
            backend server.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
