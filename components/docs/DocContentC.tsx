"use client";

import React from "react";
import { DocSection, Table, CodeBlock, Callout } from "./DocComponents";

export function getDocContentC(id: string): React.ReactNode | null {
  switch (id) {

    // ── AI PROVIDERS ─────────────────────────────────────────────────────────
    case "anthropic":
      return (
        <DocSection title="Anthropic Claude" badge="AI Providers" badgeColor="#fb923c">
          <Callout type="tip">
            <strong>Claude is the strongly recommended provider.</strong> claude-opus-4-6 and claude-sonnet-4-6 deliver the best results for complex Blueprint construction, PCG biomes, and UMG widget creation.
          </Callout>
          <Table
            headers={["Model", "Best For"]}
            rows={[
              ["claude-opus-4-6", "Most complex tasks, best instruction following, highest quality"],
              ["claude-sonnet-4-6", "Great balance of quality and speed — recommended for daily use"],
              ["claude-haiku-4", "Quick iterative changes, lower API cost"],
            ]}
          />
          <h3 className="text-base font-bold text-white mt-5 mb-2">Setup</h3>
          <ol className="space-y-1.5 text-[#e8e8f0]/70 text-sm list-decimal list-inside">
            <li>Go to <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] hover:underline">console.anthropic.com</a> and create an account</li>
            <li>Navigate to API Keys and create a new key</li>
            <li>In Cortex Settings, select <strong className="text-white">Anthropic Claude</strong> as the provider</li>
            <li>Paste your API key and select <strong className="text-white">claude-opus-4-6</strong> or <strong className="text-white">claude-sonnet-4-6</strong></li>
          </ol>
          <Callout type="info">Your API key is stored locally in your project&apos;s <code className="text-[#7c3aed]">Saved/</code> directory and is never sent anywhere except directly to Anthropic.</Callout>
        </DocSection>
      );

    case "openai":
      return (
        <DocSection title="OpenAI GPT" badge="AI Providers" badgeColor="#fb923c">
          <Table
            headers={["Model", "Notes"]}
            rows={[
              ["gpt-4o", "Recommended — supports vision for screenshot analysis"],
              ["gpt-4o-mini", "Faster and cheaper, good for simple tasks"],
              ["gpt-4-turbo", "Large context window"],
            ]}
          />
          <h3 className="text-base font-bold text-white mt-5 mb-2">Setup</h3>
          <ol className="space-y-1.5 text-[#e8e8f0]/70 text-sm list-decimal list-inside">
            <li>Go to <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] hover:underline">platform.openai.com</a> and create an account</li>
            <li>Navigate to API Keys and create a new key</li>
            <li>In Cortex Settings, select <strong className="text-white">OpenAI GPT</strong> as the provider</li>
            <li>Paste your API key and select your preferred model</li>
          </ol>
        </DocSection>
      );

    case "custom-endpoint":
      return (
        <DocSection title="Custom Endpoint" badge="AI Providers" badgeColor="#fb923c">
          <p className="text-[#e8e8f0]/70 text-sm mb-4">Connect to any OpenAI-compatible API — LM Studio, Ollama with OpenAI adapter, or private deployments. Local models work but produce less reliable results for complex tasks.</p>
          <h3 className="text-base font-bold text-white mt-4 mb-2">Setup</h3>
          <ol className="space-y-1.5 text-[#e8e8f0]/70 text-sm list-decimal list-inside mb-4">
            <li>In Cortex Settings, select <strong className="text-white">Custom Endpoint</strong> as the provider</li>
            <li>Enter your endpoint URL (e.g. <code className="text-[#7c3aed]">http://localhost:1234/v1</code>)</li>
            <li>Enter your API key (or any placeholder if not required)</li>
            <li>Enter the model name your server expects</li>
          </ol>
          <Callout type="tip">LM Studio exposes an OpenAI-compatible server on <code className="text-[#4ade80]">http://localhost:1234/v1</code> by default.</Callout>
          <Callout type="warning">Local models are supported but produce significantly less reliable results for complex multi-step Blueprint tasks. Claude or GPT-4o are strongly preferred.</Callout>
        </DocSection>
      );

    // ── TIPS & BEST PRACTICES ─────────────────────────────────────────────────
    case "best-practices":
      return (
        <DocSection title="Best Practices" badge="Tips & Troubleshooting" badgeColor="#f43f5e">
          <h3 className="text-base font-bold text-white mt-4 mb-2">Writing Good Prompts</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm mb-4">
            {[
              "Be specific about asset names — use the exact Blueprint name you want created",
              "Specify parent classes explicitly (e.g. 'extends Character', 'extends Actor')",
              "Break complex requests into steps — create the Blueprint first, then add components, then wire logic",
              "Use @ mentions to reference existing assets (e.g. @BP_Player) for context",
              "Attach screenshots when working on UI or visual tasks",
              "Use Analyst mode to understand a Blueprint before asking Optimizer to change it",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#f43f5e] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Managing API Costs</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm mb-4">
            {[
              "Use claude-sonnet-4-6 for most tasks — it's significantly cheaper than claude-opus-4-6 with excellent results",
              "Use claude-haiku-4 for quick, simple changes like adding a single variable or component",
              "Keep conversations focused — start a new tab for unrelated tasks to avoid sending unnecessary context",
              "Use the Clear button to reset a conversation when starting a new topic",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#f43f5e] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Workflow Tips</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm">
            {[
              "Use multiple tabs to work on multiple Blueprints simultaneously without losing context",
              "The Grab BP button automatically injects the current Blueprint's structure — use it before asking for modifications",
              "For PCG biomes, scan your project for meshes first so Cortex can use your actual assets",
              "Compile after each major change to catch errors early",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#f43f5e] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </DocSection>
      );

    case "troubleshooting":
      return (
        <DocSection title="Troubleshooting" badge="Tips & Troubleshooting" badgeColor="#f43f5e">
          <h3 className="text-base font-bold text-white mt-4 mb-2">Common Issues</h3>
          <Table
            headers={["Issue", "Solution"]}
            rows={[
              ["Cortex panel not visible", "Window → LLM Assistant, or check that the plugin is enabled in Edit → Plugins"],
              ["API key not saving", "Make sure you click outside the settings overlay to save. Check your Saved/ directory for LLMSettings.json"],
              ["Blueprint fails to compile", "Cortex auto-retries up to 2 times. If it still fails, try rephrasing your request with more detail"],
              ["[MISSING NODE] comment placed", "The node type could not be found. Use GET_NODE_INFO or SEARCH_NODES to find the correct name"],
              ["Biome mode unavailable", "Enable the PCG Plugin: Edit → Plugins → Procedural Content Generation → Enable → Restart"],
              ["Slow responses", "Large Blueprints with many nodes take longer to process. Try breaking requests into smaller steps"],
              ["Rate limit errors (429)", "Cortex automatically retries with exponential backoff. Wait a moment and try again"],
            ]}
          />
          <h3 className="text-base font-bold text-white mt-5 mb-2">Blueprint Compile Errors</h3>
          <p className="text-[#e8e8f0]/70 text-sm mb-3">When a Blueprint fails to compile, Cortex automatically sends the full error details back to the AI for self-correction. You can watch this happen in the chat stream — green Tool messages show exactly what was executed and what errors were encountered.</p>
          <Callout type="tip">If auto-retry fails, copy the error message from the Tool response and paste it into a new message asking Cortex to fix it specifically.</Callout>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Getting Help</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#f43f5e] mt-2 flex-shrink-0" />
              <span>Join the <strong className="text-white">Discord server</strong> for community support and feature requests</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#f43f5e] mt-2 flex-shrink-0" />
              <span>Email <strong className="text-white">support@cortex-plugin.com</strong> for direct support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#f43f5e] mt-2 flex-shrink-0" />
              <span>Check the <strong className="text-white">GitHub Issues</strong> page for known bugs and workarounds</span>
            </li>
          </ul>
        </DocSection>
      );

    // ── ARCHITECTURE ──────────────────────────────────────────────────────────
    case "architecture":
      return (
        <DocSection title="Architecture Overview" badge="Architecture" badgeColor="#64748b">
          <p className="text-[#e8e8f0]/70 text-sm mb-4">Cortex is a native UE5 editor plugin built entirely in C++. It has no backend server — all communication goes directly from your editor to the AI provider API.</p>
          <Table
            headers={["Component", "Description"]}
            rows={[
              ["LLMChatWidget", "Slate UI panel — chat interface, tabs, mode pills, input bar"],
              ["LLMService", "HTTP client — sends requests to AI APIs, handles streaming, rate limiting"],
              ["LLMCommandExecutor", "JSON parser — reads AI responses and dispatches commands"],
              ["BlueprintBuilder", "Blueprint engine — creates/modifies BP assets, nodes, pins, variables"],
              ["WidgetBuilder", "UMG engine — creates/modifies Widget Blueprint hierarchies"],
              ["NodeCatalog", "Node registry — scans FBlueprintActionDatabase, generates node reference"],
            ]}
          />
          <h3 className="text-base font-bold text-white mt-5 mb-2">Request Flow</h3>
          <CodeBlock>{`User types message\n  → LLMChatWidget sends to LLMService\n  → LLMService POSTs to AI API (Anthropic / OpenAI / Custom)\n  → AI responds with JSON commands\n  → LLMCommandExecutor parses and dispatches\n  → BlueprintBuilder / WidgetBuilder / etc. execute in UE5 editor\n  → Results streamed back to chat as Tool messages`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Node Resolution Pipeline</h3>
          <CodeBlock>{`Stage 1: Hardcoded fast-path (~100 common nodes)\nStage 2: 14 common engine classes (Actor, Pawn, Character, etc.)\nStage 3: Blueprint's own class hierarchy\nStage 4: FBlueprintActionDatabase fuzzy search (11,000+ actions)\nStage 5: All loaded native classes (final fallback)\n\nIf not found → Comment node with [MISSING NODE]`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Data Storage</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm">
            {[
              "API keys stored in ProjectRoot/Saved/LLMSettings.json",
              "Conversation history is in-memory only — not persisted between editor sessions",
              "No telemetry, no analytics, no data sent to Cortex servers (there are none)",
              "All AI communication goes directly from your editor to your chosen provider",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#64748b] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </DocSection>
      );

    case "security":
      return (
        <DocSection title="Security & Privacy" badge="Architecture" badgeColor="#64748b">
          <Callout type="tip">Cortex has no backend server. Your API keys and conversations never pass through any Cortex-controlled infrastructure.</Callout>
          <Table
            headers={["Data", "Where It Goes"]}
            rows={[
              ["API Key", "Stored locally in Saved/LLMSettings.json — never transmitted to Cortex"],
              ["Your messages", "Sent directly to Anthropic or OpenAI — subject to their privacy policies"],
              ["Blueprint context", "Included in API requests to help the AI understand your project"],
              ["Images", "Sent directly to the AI provider as base64 in the API request"],
              ["Conversation history", "In-memory only — cleared when you close the editor"],
            ]}
          />
          <h3 className="text-base font-bold text-white mt-5 mb-2">Recommendations</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm">
            {[
              "Review Anthropic's and OpenAI's data usage policies before using their APIs",
              "For sensitive projects, use a Custom Endpoint with a self-hosted model for full privacy",
              "Rotate your API keys periodically via your provider's dashboard",
              "The Saved/ directory should be in your .gitignore to avoid committing API keys",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#64748b] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </DocSection>
      );

    default:
      return null;
  }
}
