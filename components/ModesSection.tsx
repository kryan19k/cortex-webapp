"use client";

import { motion } from "framer-motion";
import { MessageSquare, Wrench, Search, TreePine } from "lucide-react";

const modes = [
  {
    id: "chat",
    icon: MessageSquare,
    pill: "💬 Chat Mode",
    title: "General Purpose Creation",
    color: "#7c3aed",
    badge: "Default",
    description:
      "The default mode for creating and modifying any asset type. The AI responds to free-form requests and executes commands automatically. Best for creating new Blueprints, asking questions, and general asset work.",
    actions: [
      "Create Blueprint actors from scratch",
      "Add components, variables, and functions",
      "Wire node graphs with natural language",
      "Reference assets with @ mentions",
      "Attach screenshots for visual context",
      "Drag & drop assets from Content Browser",
    ],
    example: {
      prompt: "Create BP_FloatingPickup that rotates slowly and plays a sound when the player overlaps it",
      response: "✓ Blueprint created\n✓ RotatingMovement component added\n✓ AudioComponent added\n✓ OnActorBeginOverlap event wired\n✓ Compiled successfully",
    },
  },
  {
    id: "optimizer",
    icon: Wrench,
    pill: "🔧 Optimizer Mode",
    title: "Blueprint Refactoring",
    color: "#f97316",
    badge: "Advanced",
    description:
      "Focused on improving existing Blueprint graphs. Select a Blueprint from the dropdown, then use the action buttons to refactor, optimize, and clean up your graphs.",
    actions: [
      "Refactor nodes into reusable functions",
      "Optimize graph for performance",
      "Target-optimize selected nodes only",
      "Find unused variables",
      "Reads full BP structure automatically",
      "No manual copy-pasting required",
    ],
    example: {
      prompt: "Find unused variables in BP_Character",
      response: "Found 3 unused variables:\n• bWasJumping (bool) — never read\n• LastDamageTime (float) — never read\n• TempVector (Vector) — never read",
    },
  },
  {
    id: "analyst",
    icon: Search,
    pill: "🔍 Analyst Mode",
    title: "Deep Blueprint Analysis",
    color: "#38bdf8",
    badge: "Insight",
    description:
      "Deep analysis and plain-English explanation of Blueprint logic. Falls back to the currently open Blueprint editor if no BP is selected in the dropdown.",
    actions: [
      "Full plain-English walkthrough of any BP",
      "Explain only selected nodes",
      "Performance audit across all project BPs",
      "Complexity rating and simplification tips",
      "Tick usage and node count analysis",
      "Identify bottlenecks before optimizing",
    ],
    example: {
      prompt: "Explain BP_EnemyAI",
      response: "BP_EnemyAI is a Character Blueprint that implements a patrol-and-chase AI. On BeginPlay it caches the PlayerCharacter reference. On Tick it checks distance to player — if within 800 units it enters Chase state...",
    },
  },
  {
    id: "biome",
    icon: TreePine,
    pill: "🌿 Biome Mode",
    title: "PCG Landscape Generation",
    color: "#4ade80",
    badge: "PCG Required",
    description:
      "AI-assisted PCG biome generation. Select a preset, configure parameters, and let Cortex design and spawn a complete PCG graph in your level. Requires the PCG Plugin.",
    actions: [
      "8 biome presets (Forest, Desert, Tundra…)",
      "Scan project for meshes to include",
      "Configure radius, density, seed, cell size",
      "Full PCG pipeline auto-generated",
      "Per-layer scatter configuration",
      "Automatic landscape detection",
    ],
    example: {
      prompt: "Dense boreal forest with pine trees, fallen logs, and mossy rocks",
      response: "✓ PCG Graph created: PCG_BorealForest\n✓ 3 scatter layers configured\n✓ Surface Sampler → Self Pruning → Density Filter\n✓ Volume spawned at world origin",
    },
  },
];

export default function ModesSection() {
  return (
    <section id="modes" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 ue-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(124,58,237,0.06)_0%,transparent_70%)]" />

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
            Operating Modes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The Right Tool for Every Task
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Switch between specialized modes with a single click. Each mode configures the AI's
            behavior and provides targeted quick-action buttons.
          </p>
        </motion.div>

        {/* Mode cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-lg overflow-hidden"
            >
              {/* Top bar */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderBottom: `1px solid ${mode.color}20`, background: `${mode.color}08` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center"
                    style={{ background: `${mode.color}20` }}
                  >
                    <mode.icon className="w-4 h-4" style={{ color: mode.color }} />
                  </div>
                  <span className="text-sm font-bold text-white">{mode.pill}</span>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: `${mode.color}20`, color: mode.color }}
                >
                  {mode.badge}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{mode.title}</h3>
                <p className="text-sm text-[#6b6b8a] leading-relaxed mb-5">{mode.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Actions */}
                  <div>
                    <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-2">Capabilities</p>
                    <ul className="space-y-1.5">
                      {mode.actions.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-[#e8e8f0]/70">
                          <span
                            className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: mode.color }}
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example */}
                  <div>
                    <p className="text-xs text-[#6b6b8a] uppercase tracking-wider mb-2">Example</p>
                    <div
                      className="rounded p-3 text-xs mb-2"
                      style={{ background: "#13131f", border: "1px solid #1e1e30" }}
                    >
                      <span className="text-[#6b6b8a]">You: </span>
                      <span className="text-[#e8e8f0]/80 italic">{mode.example.prompt}</span>
                    </div>
                    <div
                      className="rounded p-3 text-xs font-mono whitespace-pre-line"
                      style={{
                        background: `${mode.color}08`,
                        border: `1px solid ${mode.color}20`,
                        color: `${mode.color}cc`,
                      }}
                    >
                      {mode.example.response}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
