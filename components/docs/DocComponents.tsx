"use client";

import React from "react";

export function DocSection({
  title,
  badge,
  badgeColor,
  children,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="prose-cortex">
      <div className="mb-6">
        <span
          className="inline-block px-2.5 py-0.5 text-xs tracking-widest uppercase rounded-full mb-3 font-medium"
          style={{ background: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}30` }}
        >
          {badge}
        </span>
        <h1 className="text-3xl font-black text-white mb-0">{title}</h1>
      </div>
      <div className="doc-content">{children}</div>
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-5 rounded-lg border border-[#1e1e30]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#13131f] border-b border-[#1e1e30]">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-left text-xs font-bold text-[#6b6b8a] uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1e1e30]">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[#13131f]/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-mono text-[#7c3aed] text-xs" : "text-[#e8e8f0]/80 text-sm"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-4 p-4 rounded-lg text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap"
      style={{ background: "#08080f", border: "1px solid #1e1e30", color: "#a78bfa" }}>
      {children}
    </pre>
  );
}

export function Callout({ type, children }: { type: "info" | "tip" | "warning"; children: React.ReactNode }) {
  const styles = {
    info:    { bg: "#38bdf808", border: "#38bdf830", icon: "ℹ", color: "#38bdf8" },
    tip:     { bg: "#4ade8008", border: "#4ade8030", icon: "✦", color: "#4ade80" },
    warning: { bg: "#f9731608", border: "#f9731630", icon: "⚠", color: "#f97316" },
  };
  const s = styles[type];
  return (
    <div className="my-4 flex gap-3 p-4 rounded-lg text-sm leading-relaxed"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <span className="text-base flex-shrink-0" style={{ color: s.color }}>{s.icon}</span>
      <div style={{ color: `${s.color}cc` }}>{children}</div>
    </div>
  );
}
