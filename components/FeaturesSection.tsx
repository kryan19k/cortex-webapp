"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Layout,
  TreePine,
  Database,
  Gamepad2,
  FolderOpen,
  Globe,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Blueprint Creation & Editing",
    color: "#7c3aed",
    description:
      "Create complete Blueprint actors from scratch or modify existing ones. 5-stage node resolution pipeline searches 11,000+ engine actions with fuzzy matching.",
    bullets: [
      "Add components, variables, functions, and node graphs",
      "Auto pin-type coercion (Vector↔Transform, Int↔Float)",
      "Auto-retry on compile errors with AI self-correction",
      "Comment nodes placed for any unresolvable node",
    ],
  },
  {
    icon: Layout,
    title: "UMG Widget Builder",
    color: "#38bdf8",
    description:
      "Create complete UMG Widget Blueprints with nested widget hierarchies, slot configuration, and full property support.",
    bullets: [
      "30+ widget types: CanvasPanel, VerticalBox, TextBlock, Button…",
      "Set text, color, font size, alignment, padding, visibility",
      "Configure slot properties (HAlign, VAlign, Size rules)",
      "Add, remove, and modify widgets after creation",
    ],
  },
  {
    icon: TreePine,
    title: "PCG Biome Builder",
    color: "#4ade80",
    description:
      "AI-assisted Procedural Content Generation graph creation for landscape-based scatter. Requires the PCG Plugin.",
    bullets: [
      "8 biome presets: Forest, Desert, Tundra, Swamp, Alpine…",
      "Full pipeline: Sampler → Pruning → Filter → Transform → Spawner",
      "Per-layer density, scale, yaw, slope, and height filters",
      "Automatic landscape detection and volume positioning",
    ],
  },
  {
    icon: Database,
    title: "Data Structures",
    color: "#f97316",
    description:
      "Create User Defined Structs, Enums, and DataTables directly from chat with full field type support.",
    bullets: [
      "Structs with bool, int, float, vector, softobject, and more",
      "Enums with any number of named entries",
      "DataTables with typed rows from any struct",
      "Read back definitions for context injection",
    ],
  },
  {
    icon: Gamepad2,
    title: "Enhanced Input",
    color: "#f43f5e",
    description:
      "Set up complete Enhanced Input systems including Input Actions and Input Mapping Contexts.",
    bullets: [
      "Input Actions: bool, float, vector2d, vector3d value types",
      "Trigger types: pressed, released, hold, tap, pulse, chorded",
      "Modifiers: negate, swizzle, scalar, deadzone, smooth…",
      "Bind multiple keys per action including gamepad",
    ],
  },
  {
    icon: FolderOpen,
    title: "Asset Management",
    color: "#a78bfa",
    description:
      "Query and manage project assets, create materials with node graphs, and handle files — all from the chat panel.",
    bullets: [
      "Search assets by type, name, or path",
      "Create materials with Constant, VectorParam, TextureSample nodes",
      "Delete, duplicate, rename, and import assets",
      "@ mention autocomplete for asset references",
    ],
  },
  {
    icon: Globe,
    title: "Level & World Commands",
    color: "#34d399",
    description:
      "Manage actors in the currently open level — spawn, destroy, move, and configure from natural language.",
    bullets: [
      "Spawn any Blueprint or native class in the level",
      "Set actor transform (location, rotation, scale)",
      "List and query actors by class or name",
      "Set actor properties and get level summaries",
    ],
  },
  {
    icon: RefreshCw,
    title: "Analyst & Optimizer Modes",
    color: "#fb923c",
    description:
      "Deep analysis and optimization of existing Blueprints. Reads full graph structure automatically — no copy-pasting.",
    bullets: [
      "Explain Blueprint logic in plain English",
      "Performance audit across all project Blueprints",
      "Refactor nodes into reusable functions",
      "Find unused variables and complexity issues",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute inset-0 ue-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(124,58,237,0.08)_0%,transparent_70%)]" />

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
            Full Feature Set
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything You Need to Build Faster
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Cortex covers the full Unreal Engine 5 workflow — from Blueprint logic to UI,
            world building to data structures.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative glass rounded-lg p-5 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                style={{
                  background: `radial-gradient(ellipse at top left, ${feature.color}10 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4 relative z-10"
                style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
              >
                <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-white mb-2 relative z-10">{feature.title}</h3>

              {/* Description */}
              <p className="text-xs text-[#6b6b8a] mb-3 leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 relative z-10">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[#e8e8f0]/60">
                    <span
                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: feature.color }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
