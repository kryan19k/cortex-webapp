"use client";

import { motion } from "framer-motion";
import { Brain, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const links = {
  Plugin: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Operating Modes", href: "#modes" },
    { name: "Installation", href: "#install" },
    { name: "Pricing", href: "#pricing" },
  ],
  Documentation: [
    { name: "Getting Started", href: "#how-it-works" },
    { name: "Chat Interface", href: "#interface" },
    { name: "Blueprint Commands", href: "#docs" },
    { name: "AI Providers", href: "#providers" },
    { name: "FAQ", href: "#faq" },
  ],
  Resources: [
    { name: "Get on Fab", href: "https://www.fab.com", external: true },
    { name: "Anthropic Console", href: "https://console.anthropic.com", external: true },
    { name: "OpenAI Platform", href: "https://platform.openai.com", external: true },
    { name: "UE5 PCG Plugin", href: "https://docs.unrealengine.com/5.0/en-US/procedural-content-generation-overview/", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1e1e30] bg-[#08080f]">
      <div className="absolute inset-0 ue-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#7c3aed]/20 blur-lg rounded-full" />
                <Brain className="w-7 h-7 text-[#7c3aed] relative z-10" />
              </div>
              <span className="text-lg font-black tracking-widest text-white uppercase">Cortex</span>
            </Link>

            <p className="text-sm text-[#6b6b8a] leading-relaxed mb-5 max-w-xs">
              A native Unreal Engine 5 editor plugin that brings AI-powered assistance directly
              into your workflow. Chat with Claude or GPT to build Blueprints, UI, biomes, and more.
            </p>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/kryan19k/Cortex-plugin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 glass rounded flex items-center justify-center text-[#6b6b8a] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.fab.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#7c3aed]/20 border border-[#7c3aed]/30 text-[#7c3aed] text-xs font-semibold rounded hover:bg-[#7c3aed]/30 transition-colors"
              >
                Get on Fab
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.name}>
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#6b6b8a] hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {item.name}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-[#6b6b8a] hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e30] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6b8a]">
            © 2025 Cortex — AI Assistant for Unreal Engine 5. Built by{" "}
            <a
              href="https://github.com/kryan19k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c3aed] hover:text-white transition-colors"
            >
              Kory Ryan
            </a>
            .
          </p>
          <div className="flex items-center gap-4 text-xs text-[#6b6b8a]">
            <span>UE5.7+</span>
            <span className="w-px h-3 bg-[#1e1e30]" />
            <span>Windows 64-bit</span>
            <span className="w-px h-3 bg-[#1e1e30]" />
            <span>v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
