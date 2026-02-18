"use client";

import React from "react";
import { DocSection, Table, CodeBlock, Callout } from "./DocComponents";

export function getDocContentA(id: string): React.ReactNode | null {
  switch (id) {

    // ── GETTING STARTED ──────────────────────────────────────────────────────
    case "overview":
      return (
        <DocSection title="Overview" badge="Getting Started" badgeColor="#7c3aed">
          <p className="text-[#e8e8f0]/80 leading-relaxed mb-4">
            <strong className="text-white">Cortex</strong> is a native Unreal Engine 5 editor plugin that connects your UE5 editor to large language models via API and translates natural language instructions into real editor operations. Unlike external tools, Cortex runs entirely inside UE5 as a native Slate panel.
          </p>
          <h3 className="text-base font-bold text-white mt-5 mb-3">What Cortex Can Do</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm">
            {[
              "Create and modify Blueprint actors, components, variables, functions, and node graphs",
              "Build UMG widget hierarchies with properties and slot configuration",
              "Generate PCG biome graphs for landscape scatter",
              "Create User Defined Structs, Enums, and DataTables",
              "Set up Enhanced Input Actions and Input Mapping Contexts",
              "Create and modify Materials with node graphs",
              "Spawn, destroy, and configure actors in the current level",
              "Query, duplicate, rename, and delete project assets",
              "Analyze and explain existing Blueprints in Analyst mode",
              "Refactor and optimize Blueprint graphs in Optimizer mode",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#7c3aed] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <h3 className="text-base font-bold text-white mt-5 mb-3">Supported AI Providers</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#7c3aed] mt-2 flex-shrink-0" />
              <span><strong className="text-white">Anthropic Claude</strong> — Strongly recommended. claude-opus-4-6 and claude-sonnet-4-6 deliver the best results.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#4ade80] mt-2 flex-shrink-0" />
              <span><strong className="text-white">OpenAI GPT</strong> — GPT-4o and later supported.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
              <span><strong className="text-white">Custom Endpoint</strong> — Any OpenAI-compatible API (LM Studio, Ollama, etc.).</span>
            </li>
          </ul>
        </DocSection>
      );

    case "requirements":
      return (
        <DocSection title="Requirements" badge="Getting Started" badgeColor="#7c3aed">
          <Table
            headers={["Requirement", "Details"]}
            rows={[
              ["Unreal Engine", "5.7 or later"],
              ["Platform", "Windows 64-bit"],
              ["API Key", "Anthropic or OpenAI account required"],
              ["PCG Plugin", "Optional — required for Biome mode only"],
            ]}
          />
          <Callout type="info">The PCG Plugin is optional. If not enabled, Biome mode will be unavailable but all other features work normally.</Callout>
        </DocSection>
      );

    case "installation":
      return (
        <DocSection title="Installation" badge="Getting Started" badgeColor="#7c3aed">
          <h3 className="text-base font-bold text-white mt-4 mb-2">Step 1 — Purchase on Fab</h3>
          <p className="text-[#e8e8f0]/70 text-sm mb-2">Purchase Cortex on the Fab marketplace. Once purchased, it installs directly through the Epic Games Launcher — no manual file copying required.</p>
          <CodeBlock>{`fab.com → Search "Cortex" → Purchase → Install to Engine via Epic Games Launcher`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Step 2 — Enable the Cortex Plugin</h3>
          <CodeBlock>{`Edit → Plugins → Search "Cortex" (or "LLM Assistant") → ✓ Enable → Restart Now`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Step 3 — Enable PCG Plugin (Optional)</h3>
          <p className="text-[#e8e8f0]/70 text-sm mb-2">Required only for Biome mode:</p>
          <CodeBlock>{`Edit → Plugins → Search "Procedural Content Generation" → ✓ Enable → Restart Now`}</CodeBlock>
          <Callout type="info">Skip Step 3 if you don&apos;t need PCG biome generation. All other features work without it.</Callout>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Step 4 — Open Cortex</h3>
          <CodeBlock>{`Window → LLM Assistant\n— or —\nToolbar → Cortex button\n— or —\nCtrl + Shift + L  (default hotkey)`}</CodeBlock>
        </DocSection>
      );

    case "first-steps":
      return (
        <DocSection title="First Steps" badge="Getting Started" badgeColor="#7c3aed">
          <h3 className="text-base font-bold text-white mt-4 mb-2">1. Enter Your API Key</h3>
          <p className="text-[#e8e8f0]/70 text-sm mb-2">Click the <strong className="text-white">⚙ Settings</strong> button (top right of the Cortex panel).</p>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm mb-4">
            {[
              "Select your Provider (Anthropic Claude recommended)",
              "Paste your API Key",
              "Select your model — claude-opus-4-6 or claude-sonnet-4-6 recommended",
              "Click anywhere outside the overlay to close and save",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#7c3aed] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <Callout type="tip">Settings are saved automatically to your project&apos;s <code className="text-[#7c3aed]">Saved/</code> directory and persist between sessions.</Callout>
          <h3 className="text-base font-bold text-white mt-5 mb-2">2. Send Your First Message</h3>
          <CodeBlock>{`Create a Blueprint actor called BP_FloatingPickup that rotates slowly and plays a sound when the player overlaps it`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">3. Iterate</h3>
          <CodeBlock>{`Add a point light component to BP_FloatingPickup with a yellow color and radius of 300`}</CodeBlock>
        </DocSection>
      );

    // ── INTERFACE ────────────────────────────────────────────────────────────
    case "interface-overview":
      return (
        <DocSection title="Interface Overview" badge="Chat Interface" badgeColor="#38bdf8">
          <ul className="space-y-2 text-[#e8e8f0]/70 text-sm">
            {[
              ["Tab Bar", "Multiple independent conversation tabs"],
              ["Toolbar", "Settings gear and Clear button"],
              ["Mode Pills", "Switch between Chat, Optimizer, Analyst, and Biome modes"],
              ["Message Stream", "Unified chat display with color-coded message types"],
              ["Input Bar", "Text input with @ search, image attach, and Grab BP"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#38bdf8] mt-2 flex-shrink-0" />
                <span><strong className="text-white">{k}</strong> — {v}</span>
              </li>
            ))}
          </ul>
        </DocSection>
      );

    case "tabs":
      return (
        <DocSection title="Conversation Tabs" badge="Chat Interface" badgeColor="#38bdf8">
          <p className="text-[#e8e8f0]/70 text-sm mb-4">Each tab maintains its own independent conversation history. Use separate tabs for separate tasks to keep the AI&apos;s context clean.</p>
          <Table
            headers={["Control", "Action"]}
            rows={[
              ["+ button", "Opens a new conversation tab"],
              ["Click tab", "Switch to that conversation"],
              ["× on tab", "Close that conversation"],
              ["Tab name", "Taken from the first message sent"],
            ]}
          />
          <Callout type="tip">Use separate tabs for separate tasks — one for a character Blueprint, another for UI work.</Callout>
        </DocSection>
      );

    case "input-bar":
      return (
        <DocSection title="Input Bar Features" badge="Chat Interface" badgeColor="#38bdf8">
          <Table
            headers={["Feature", "How to Use"]}
            rows={[
              ["Type and send", "Press Enter or click the arrow button"],
              ["@ Asset Search", "Type @ followed by an asset name to search your project"],
              ["Drag & Drop", "Drag any asset from the Content Browser into the input area"],
              ["📎 Image Attach", "Attach a screenshot or image (PNG, JPG, GIF, WEBP) for visual context"],
              ["Grab BP", "Captures the currently open Blueprint editor's context automatically"],
            ]}
          />
        </DocSection>
      );

    case "message-types":
      return (
        <DocSection title="Message Types" badge="Chat Interface" badgeColor="#38bdf8">
          <Table
            headers={["Dot", "Type", "Description"]}
            rows={[
              ["🔵 Blue", "You", "Your messages"],
              ["🟣 Purple", "Cortex", "AI responses"],
              ["🟢 Green", "Tool", "Results from executed commands, shown inline"],
              ["⚪ Gray", "System", "Status and error messages"],
            ]}
          />
        </DocSection>
      );

    // ── MODES ────────────────────────────────────────────────────────────────
    case "chat-mode":
      return (
        <DocSection title="Chat Mode" badge="Operating Modes" badgeColor="#f97316">
          <p className="text-[#e8e8f0]/70 text-sm mb-4"><strong className="text-white">💬 Chat Mode</strong> is the default mode. Best for creating new Blueprints, asking questions, and general asset work.</p>
          <CodeBlock>{`Create BP_Enemy that extends Character, add a Health float variable defaulting to 100,\nand wire up BeginPlay to print "Enemy spawned" to the screen`}</CodeBlock>
          <CodeBlock>{`Add a sphere collision component to BP_Pickup and on overlap with the player,\ndestroy the actor and add 10 to the player's score`}</CodeBlock>
        </DocSection>
      );

    case "optimizer-mode":
      return (
        <DocSection title="Optimizer Mode" badge="Operating Modes" badgeColor="#f97316">
          <p className="text-[#e8e8f0]/70 text-sm mb-4"><strong className="text-white">🔧 Optimizer Mode</strong> is focused on improving existing Blueprint graphs. Select a Blueprint from the dropdown, then use the action buttons.</p>
          <Table
            headers={["Button", "What It Does"]}
            rows={[
              ["Refactor to Function", "Suggests extracting selected nodes into a reusable function"],
              ["Optimize Graph", "Analyzes the selected BP for performance improvements"],
              ["Optimize Selected", "Sends the currently selected nodes for targeted optimization"],
              ["Find Unused Variables", "Scans for variables that are declared but never read"],
            ]}
          />
          <Callout type="tip">The Optimizer reads the full Blueprint structure automatically — no manual copy-pasting required.</Callout>
        </DocSection>
      );

    case "analyst-mode":
      return (
        <DocSection title="Analyst Mode" badge="Operating Modes" badgeColor="#f97316">
          <p className="text-[#e8e8f0]/70 text-sm mb-4"><strong className="text-white">🔍 Analyst Mode</strong> provides deep analysis and explanation of Blueprint logic.</p>
          <Table
            headers={["Button", "What It Does"]}
            rows={[
              ["Explain Blueprint", "Full plain-English walkthrough of what the BP does"],
              ["Explain Selection", "Explains only the currently selected nodes"],
              ["Performance Audit", "Scans all project BPs for Tick usage, node count, and complexity issues"],
              ["Complexity Analysis", "Rates the selected BP's complexity and suggests simplifications"],
            ]}
          />
          <Callout type="tip">Use Analyst mode before Optimizer mode to understand what the Blueprint does before making changes.</Callout>
        </DocSection>
      );

    case "biome-mode":
      return (
        <DocSection title="Biome Mode" badge="Operating Modes" badgeColor="#f97316">
          <p className="text-[#e8e8f0]/70 text-sm mb-4"><strong className="text-white">🌿 Biome Mode</strong> provides AI-assisted PCG biome generation. Requires the PCG Plugin to be enabled.</p>
          <ol className="space-y-1.5 text-[#e8e8f0]/70 text-sm list-decimal list-inside mb-4">
            <li>Select a preset (Forest, Desert, Tundra, Grassland, Swamp, Alpine, Tropical, Savanna)</li>
            <li>Optionally scan your project for meshes and select which to include</li>
            <li>Configure radius, points per m², seed, and cell size</li>
            <li>Click <strong className="text-white">Generate Biome</strong></li>
          </ol>
          <CodeBlock>{`Input (Landscape) → Surface Sampler → Self Pruning → [per layer:]\n  Density Filter → Transform Points → Static Mesh Spawner → Output`}</CodeBlock>
          <Callout type="warning">Biome mode requires a Landscape actor in your level. The PCG Surface Sampler needs a landscape to scatter meshes on.</Callout>
        </DocSection>
      );

    default:
      return null;
  }
}
