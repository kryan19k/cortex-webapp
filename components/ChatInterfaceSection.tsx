"use client";

import { motion } from "framer-motion";
import { Brain, Send, Paperclip, AtSign, Plus, X, Settings } from "lucide-react";

const chatMessages = [
  {
    role: "user",
    dot: "#38bdf8",
    label: "You",
    text: "Create a Blueprint actor called BP_CoinPickup. Add a StaticMesh component using the engine sphere mesh. On overlap with the player pawn, destroy this actor and print 'Coin collected!' for 3 seconds.",
  },
  {
    role: "cortex",
    dot: "#7c3aed",
    label: "Cortex",
    text: "Creating BP_CoinPickup with StaticMesh component and overlap logic...",
  },
  {
    role: "tool",
    dot: "#4ade80",
    label: "Tool",
    text: "✓ CREATE_BLUEPRINT — /Game/Blueprints/BP_CoinPickup\n✓ ADD_COMPONENT — StaticMeshComponent (SM_Sphere)\n✓ ADD_NODES — Event_ActorBeginOverlap → Cast to Pawn → PrintString + DestroyActor\n✓ COMPILE_BLUEPRINT — Success (0 errors)",
  },
  {
    role: "cortex",
    dot: "#7c3aed",
    label: "Cortex",
    text: "Done! BP_CoinPickup is ready. The sphere mesh is set, and when any Pawn overlaps it, it prints 'Coin collected!' for 3 seconds then destroys itself. Want me to add a particle effect or sound on pickup?",
  },
];

const tabs = ["BP_CoinPickup", "WBP_HUD", "PCG_Forest"];

export default function ChatInterfaceSection() {
  return (
    <section id="interface" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 ue-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(124,58,237,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#7c3aed] border border-[#7c3aed]/30 rounded-full mb-4">
              The Chat Interface
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              A Native Panel Inside UE5
            </h2>
            <p className="text-[#6b6b8a] text-base leading-relaxed mb-8">
              Cortex runs as a native Slate panel docked directly in the Unreal Engine editor.
              No browser tabs, no copy-pasting — just describe what you want and watch it happen.
            </p>

            <div className="space-y-4">
              {[
                {
                  color: "#7c3aed",
                  title: "Multiple Conversation Tabs",
                  desc: "Work on different tasks simultaneously. Each tab has its own independent conversation history.",
                },
                {
                  color: "#38bdf8",
                  title: "@ Asset Search",
                  desc: "Type @ to search your project and insert asset references directly into your message.",
                },
                {
                  color: "#f97316",
                  title: "Image Attach",
                  desc: "Attach screenshots or reference images. Claude and GPT-4o can use visual context.",
                },
                {
                  color: "#4ade80",
                  title: "Grab BP",
                  desc: "One click to capture the currently open Blueprint editor's full structure into your message.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <div>
                    <span className="text-sm font-semibold text-white">{item.title} — </span>
                    <span className="text-sm text-[#6b6b8a]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: mock chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Glow behind panel */}
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse,rgba(124,58,237,0.15)_0%,transparent_70%)] blur-2xl" />

            {/* Panel */}
            <div className="relative rounded-lg overflow-hidden border border-[#1e1e30] bg-[#0e0e1a]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#13131f] border-b border-[#1e1e30]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#f97316]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#4ade80]/60" />
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <Brain className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span className="text-xs text-[#6b6b8a] font-mono">LLM Assistant — Cortex</span>
                </div>
                <div className="ml-auto">
                  <Settings className="w-3.5 h-3.5 text-[#6b6b8a]" />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 px-3 py-2 bg-[#0e0e1a] border-b border-[#1e1e30] overflow-x-auto">
                {tabs.map((tab, i) => (
                  <div
                    key={tab}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs whitespace-nowrap ${
                      i === 0
                        ? "bg-[#7c3aed]/20 text-[#7c3aed] border border-[#7c3aed]/30"
                        : "text-[#6b6b8a] hover:text-white"
                    }`}
                  >
                    {tab}
                    {i === 0 && <X className="w-2.5 h-2.5" />}
                  </div>
                ))}
                <button className="ml-1 p-1 text-[#6b6b8a] hover:text-white">
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Mode pills */}
              <div className="flex gap-2 px-3 py-2 border-b border-[#1e1e30]">
                {[
                  { label: "💬 Chat", active: true, color: "#7c3aed" },
                  { label: "🔧 Optimizer", active: false, color: "#f97316" },
                  { label: "🔍 Analyst", active: false, color: "#38bdf8" },
                  { label: "🌿 Biome", active: false, color: "#4ade80" },
                ].map((m) => (
                  <span
                    key={m.label}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={
                      m.active
                        ? { background: `${m.color}25`, color: m.color, border: `1px solid ${m.color}40` }
                        : { color: "#6b6b8a", border: "1px solid #1e1e30" }
                    }
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 max-h-72 overflow-y-auto">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-2.5"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: msg.dot }}
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-[#6b6b8a] mr-2">{msg.label}</span>
                      <span
                        className={`text-xs leading-relaxed whitespace-pre-line ${
                          msg.role === "tool"
                            ? "text-[#4ade80]/80 font-mono"
                            : msg.role === "cortex"
                            ? "text-[#e8e8f0]/80"
                            : "text-[#e8e8f0]"
                        }`}
                      >
                        {msg.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-3 py-3 border-t border-[#1e1e30] bg-[#0e0e1a]">
                <div className="flex items-center gap-2 bg-[#13131f] border border-[#1e1e30] rounded px-3 py-2">
                  <AtSign className="w-3.5 h-3.5 text-[#6b6b8a]" />
                  <span className="flex-1 text-xs text-[#6b6b8a]">Message Cortex...</span>
                  <Paperclip className="w-3.5 h-3.5 text-[#6b6b8a]" />
                  <div className="w-px h-3 bg-[#1e1e30]" />
                  <Send className="w-3.5 h-3.5 text-[#7c3aed]" />
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] text-[#6b6b8a] border border-[#1e1e30] px-2 py-0.5 rounded">
                    Grab BP
                  </span>
                  <span className="text-[10px] text-[#6b6b8a] border border-[#1e1e30] px-2 py-0.5 rounded">
                    Clear
                  </span>
                  <span className="ml-auto text-[10px] text-[#4ade80]/60">
                    claude-sonnet-4-5
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
