"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import { getDocContentA } from "@/components/docs/DocContentA";
import { getDocContentB } from "@/components/docs/DocContentB";
import { getDocContentC } from "@/components/docs/DocContentC";

// ── Sidebar structure ────────────────────────────────────────────────────────
const NAV = [
  {
    group: "Getting Started",
    color: "#7c3aed",
    items: [
      { id: "overview", label: "Overview" },
      { id: "requirements", label: "Requirements" },
      { id: "installation", label: "Installation" },
      { id: "first-steps", label: "First Steps" },
    ],
  },
  {
    group: "Chat Interface",
    color: "#38bdf8",
    items: [
      { id: "interface-overview", label: "Interface Overview" },
      { id: "tabs", label: "Conversation Tabs" },
      { id: "input-bar", label: "Input Bar" },
      { id: "message-types", label: "Message Types" },
    ],
  },
  {
    group: "Operating Modes",
    color: "#f97316",
    items: [
      { id: "chat-mode", label: "Chat Mode" },
      { id: "optimizer-mode", label: "Optimizer Mode" },
      { id: "analyst-mode", label: "Analyst Mode" },
      { id: "biome-mode", label: "Biome Mode" },
    ],
  },
  {
    group: "Features",
    color: "#4ade80",
    items: [
      { id: "blueprints", label: "Blueprint Creation & Editing" },
      { id: "widgets", label: "UMG Widget Builder" },
      { id: "pcg", label: "PCG Biome Builder" },
      { id: "data-structures", label: "Data Structures" },
      { id: "enhanced-input", label: "Enhanced Input" },
      { id: "asset-management", label: "Asset Management" },
      { id: "level-commands", label: "Level & World Commands" },
    ],
  },
  {
    group: "Command Reference",
    color: "#a78bfa",
    items: [
      { id: "blueprint-commands", label: "Blueprint Commands" },
      { id: "widget-commands", label: "Widget Commands" },
      { id: "asset-commands", label: "Asset Commands" },
      { id: "level-commands-ref", label: "Level Commands" },
      { id: "data-commands", label: "Data Structure Commands" },
      { id: "input-commands", label: "Enhanced Input Commands" },
      { id: "biome-commands", label: "Biome Commands" },
      { id: "utility-commands", label: "Utility Commands" },
    ],
  },
  {
    group: "AI Providers",
    color: "#fb923c",
    items: [
      { id: "anthropic", label: "Anthropic Claude" },
      { id: "openai", label: "OpenAI GPT" },
      { id: "custom-endpoint", label: "Custom Endpoint" },
    ],
  },
  {
    group: "Tips & Troubleshooting",
    color: "#f43f5e",
    items: [
      { id: "best-practices", label: "Best Practices" },
      { id: "troubleshooting", label: "Troubleshooting" },
    ],
  },
  {
    group: "Architecture",
    color: "#64748b",
    items: [
      { id: "architecture", label: "Architecture Overview" },
      { id: "security", label: "Security & Privacy" },
    ],
  },
];

function getContent(id: string) {
  return getDocContentA(id) ?? getDocContentB(id) ?? getDocContentC(id);
}

// ── Sidebar group component ───────────────────────────────────────────────────
function SidebarGroup({
  group,
  color,
  items,
  activeId,
  onSelect,
}: {
  group: string;
  color: string;
  items: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState<boolean>(items.some((i) => i.id === activeId) || true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-left group"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color }}>
          {group}
        </span>
        <ChevronDown
          className="w-3 h-3 transition-transform"
          style={{ color, transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {items.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className="w-full text-left px-3 py-1.5 text-xs rounded-md transition-all flex items-center gap-2 mb-0.5"
                  style={{
                    background: active ? `${color}15` : "transparent",
                    color: active ? color : "#6b6b8a",
                    borderLeft: active ? `2px solid ${color}` : "2px solid transparent",
                  }}
                >
                  {active && <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color }} />}
                  <span className={active ? "font-semibold" : ""}>{item.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function DocsPage() {
  const [activeId, setActiveId] = useState("overview");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const content = getContent(activeId);

  const handleSelect = (id: string) => {
    setActiveId(id);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#08080f] text-white">
      {/* Top bar */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-4 h-14 border-b border-[#1e1e30]"
        style={{ background: "rgba(8,8,15,0.95)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-1.5 rounded text-[#6b6b8a] hover:text-white transition-colors"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#7c3aed] transition-colors">
            <div className="w-6 h-6 rounded bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-[#7c3aed]" />
            </div>
            Cortex
          </Link>
          <span className="text-[#1e1e30]">/</span>
          <span className="text-sm text-[#6b6b8a]">Documentation</span>
        </div>
        <Link
          href="https://www.fab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all"
          style={{ background: "#7c3aed20", color: "#7c3aed", border: "1px solid #7c3aed40" }}
        >
          Get on Fab →
        </Link>
      </div>

      <div className="flex">
        {/* ── Desktop sidebar ── */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-[#1e1e30] py-4 px-2">
          {NAV.map((section) => (
            <SidebarGroup
              key={section.group}
              group={section.group}
              color={section.color}
              items={section.items}
              activeId={activeId}
              onSelect={handleSelect}
            />
          ))}
        </aside>

        {/* ── Mobile sidebar overlay ── */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                onClick={() => setMobileSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-14 left-0 z-50 w-64 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-[#1e1e30] py-4 px-2 lg:hidden"
                style={{ background: "#08080f" }}
              >
                {NAV.map((section) => (
                  <SidebarGroup
                    key={section.group}
                    group={section.group}
                    color={section.color}
                    items={section.items}
                    activeId={activeId}
                    onSelect={handleSelect}
                  />
                ))}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ── Main content ── */}
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {content ?? (
                  <div className="text-[#6b6b8a] text-sm">Section not found.</div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next navigation */}
            <div className="mt-12 pt-6 border-t border-[#1e1e30] flex items-center justify-between gap-4">
              {(() => {
                const allItems = NAV.flatMap((s) => s.items);
                const idx = allItems.findIndex((i) => i.id === activeId);
                const prev = idx > 0 ? allItems[idx - 1] : null;
                const next = idx < allItems.length - 1 ? allItems[idx + 1] : null;
                return (
                  <>
                    {prev ? (
                      <button
                        onClick={() => handleSelect(prev.id)}
                        className="flex items-center gap-2 text-xs text-[#6b6b8a] hover:text-white transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180 group-hover:text-[#7c3aed]" />
                        <span>{prev.label}</span>
                      </button>
                    ) : <div />}
                    {next ? (
                      <button
                        onClick={() => handleSelect(next.id)}
                        className="flex items-center gap-2 text-xs text-[#6b6b8a] hover:text-white transition-colors group"
                      >
                        <span>{next.label}</span>
                        <ChevronRight className="w-4 h-4 group-hover:text-[#7c3aed]" />
                      </button>
                    ) : <div />}
                  </>
                );
              })()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
