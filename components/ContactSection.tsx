"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ExternalLink, Clock, HelpCircle } from "lucide-react";

const channels = [
  {
    icon: MessageSquare,
    title: "Discord Community",
    color: "#7c3aed",
    badge: "Fastest Response",
    description: "Join the Cortex Discord server for real-time help, feature requests, and community discussions. This is the fastest way to get support.",
    action: "Join Discord",
    href: "https://discord.gg/cortex-ue5",
    detail: "Usually responds within a few hours",
  },
  {
    icon: Mail,
    title: "Email Support",
    color: "#38bdf8",
    badge: "Professional License",
    description: "For billing questions, license issues, or detailed technical support. Professional license holders receive priority email responses.",
    action: "Send Email",
    href: "mailto:support@cortexue5.com",
    detail: "support@cortexue5.com",
  },
];

const faqLinks = [
  { q: "How do I get my API key?", href: "#faq" },
  { q: "Why is Biome mode greyed out?", href: "#faq" },
  { q: "Blueprint compiles with errors", href: "#faq" },
  { q: "Rate limit errors (429)", href: "#faq" },
  { q: "Full documentation", href: "/docs" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 ue-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(56,189,248,0.05)_0%,transparent_70%)]" />

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
            Support & Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            We&apos;re Here to Help
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Have a question, found a bug, or need help getting started? Reach out through Discord
            or email — we respond fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {channels.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group glass rounded-lg overflow-hidden"
              >
                {/* Top bar */}
                <div
                  className="px-5 py-4 flex items-start justify-between"
                  style={{ borderBottom: `1px solid ${ch.color}20`, background: `${ch.color}06` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${ch.color}20`, border: `1px solid ${ch.color}30` }}
                    >
                      <ch.icon className="w-5 h-5" style={{ color: ch.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-white">{ch.title}</h3>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${ch.color}20`, color: ch.color }}
                  >
                    {ch.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-sm text-[#6b6b8a] leading-relaxed mb-4">{ch.description}</p>

                  <div className="flex items-center gap-2 mb-5 text-xs text-[#6b6b8a]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ch.detail}</span>
                  </div>

                  <motion.a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded font-semibold text-sm text-white transition-colors"
                    style={{ background: ch.color }}
                  >
                    {ch.action}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick help sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-lg overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-[#1e1e30] bg-[#13131f] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#7c3aed]" />
              <p className="text-sm font-bold text-white">Quick Help</p>
            </div>
            <div className="p-5">
              <p className="text-xs text-[#6b6b8a] mb-4 leading-relaxed">
                Before reaching out, check if your question is already answered:
              </p>
              <ul className="space-y-2">
                {faqLinks.map((link) => (
                  <li key={link.q}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between text-sm text-[#e8e8f0]/70 hover:text-[#7c3aed] transition-colors group py-1.5 border-b border-[#1e1e30] last:border-0"
                    >
                      <span>{link.q}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0 ml-2" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#1e1e30]">
                <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-3">Response Times</p>
                <div className="space-y-2">
                  {[
                    { label: "Discord", time: "~2–4 hours", color: "#7c3aed" },
                    { label: "Email (Pro)", time: "~24 hours", color: "#38bdf8" },
                    { label: "Email (Standard)", time: "~48 hours", color: "#6b6b8a" },
                  ].map((rt) => (
                    <div key={rt.label} className="flex items-center justify-between text-xs">
                      <span className="text-[#6b6b8a]">{rt.label}</span>
                      <span style={{ color: rt.color }}>{rt.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
