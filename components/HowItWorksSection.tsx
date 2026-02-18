"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Describe What You Want",
    color: "#7c3aed",
    description:
      "Type a natural language request in the Cortex chat panel inside UE5. Reference existing assets with @ mentions or drag them from the Content Browser.",
    example: `"Create BP_Enemy that extends Character, add a Health float variable defaulting to 100, and wire up BeginPlay to print 'Enemy spawned'"`,
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Generates Commands",
    color: "#38bdf8",
    description:
      "Cortex sends your message to Claude or GPT with full Unreal Engine context — node catalog, Blueprint structures, and conversation history.",
    example: `The AI responds with structured JSON commands: CREATE_BLUEPRINT, ADD_VARIABLE, ADD_NODES, COMPILE_BLUEPRINT`,
  },
  {
    number: "03",
    icon: Wrench,
    title: "Commands Execute in Editor",
    color: "#f97316",
    description:
      "The LLMCommandExecutor parses the AI's response and dispatches each command to the appropriate builder — BlueprintBuilder, WidgetBuilder, BiomeBuilder, and more.",
    example: `Blueprint created → variable added → nodes wired → compiled. All in seconds.`,
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Results Shown Inline",
    color: "#4ade80",
    description:
      "Results appear in the chat stream as green Tool messages. If compilation fails, Cortex automatically retries — sending error details back to the AI for self-correction.",
    example: `✓ Blueprint compiled successfully. 3 nodes added, 2 connections made.`,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
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
          <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-[#38bdf8] border border-[#38bdf8]/30 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            From Chat to Blueprint in Seconds
          </h2>
          <p className="text-[#6b6b8a] text-lg max-w-2xl mx-auto">
            Cortex bridges natural language and Unreal Engine's internal APIs through a
            structured command pipeline.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e30] to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <div
                    className="relative w-14 h-14 rounded-lg flex items-center justify-center mb-4 z-10"
                    style={{
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}20`,
                    }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    <span
                      className="absolute -top-2 -right-2 text-xs font-black px-1.5 py-0.5 rounded"
                      style={{ background: step.color, color: "#fff" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="glass rounded-lg p-5">
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6b6b8a] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div
                    className="rounded p-3 text-xs font-mono leading-relaxed"
                    style={{
                      background: `${step.color}08`,
                      border: `1px solid ${step.color}20`,
                      color: `${step.color}cc`,
                    }}
                  >
                    {step.example}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-lg p-6"
        >
          <p className="text-xs text-[#6b6b8a] uppercase tracking-widest mb-4 text-center">
            5-Stage Node Resolution Pipeline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            {[
              { label: "Fast-path", sub: "~100 hardcoded nodes", color: "#7c3aed" },
              { label: "Common Classes", sub: "14 engine classes", color: "#38bdf8" },
              { label: "BP Hierarchy", sub: "own class members", color: "#4ade80" },
              { label: "Action Database", sub: "11,000+ actions", color: "#f97316" },
              { label: "Dynamic Search", sub: "all native classes", color: "#f43f5e" },
            ].map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-2">
                <div
                  className="px-3 py-2 rounded text-center min-w-[100px]"
                  style={{
                    background: `${stage.color}12`,
                    border: `1px solid ${stage.color}30`,
                  }}
                >
                  <div style={{ color: stage.color }} className="font-bold">
                    {stage.label}
                  </div>
                  <div className="text-[#6b6b8a] text-[10px] mt-0.5">{stage.sub}</div>
                </div>
                {i < 4 && (
                  <span className="text-[#1e1e30] text-lg font-bold hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
