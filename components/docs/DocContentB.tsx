"use client";

import React from "react";
import { DocSection, Table, CodeBlock, Callout } from "./DocComponents";

export function getDocContentB(id: string): React.ReactNode | null {
  switch (id) {

    // ── FEATURES ─────────────────────────────────────────────────────────────
    case "blueprints":
      return (
        <DocSection title="Blueprint Creation & Editing" badge="Features" badgeColor="#4ade80">
          <p className="text-[#e8e8f0]/70 text-sm mb-4">Cortex uses a <strong className="text-white">5-stage node resolution pipeline</strong> to find and place any node you ask for.</p>
          <Table
            headers={["Stage", "Description", "Coverage"]}
            rows={[
              ["1. Fast-path", "Hardcoded common nodes", "~100 nodes"],
              ["2. Common Classes", "14 standard engine classes", "Actor, Pawn, Character, etc."],
              ["3. BP Hierarchy", "Blueprint's own class members", "Custom functions"],
              ["4. Action Database", "FBlueprintActionDatabase fuzzy search", "11,000+ actions"],
              ["5. Dynamic Search", "All loaded native classes", "Final fallback"],
            ]}
          />
          <Callout type="info">If a node truly cannot be found, a Comment node with <code className="text-[#7c3aed]">[MISSING NODE]</code> is placed so you can identify and fix it manually.</Callout>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Supported Operations</h3>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm mb-4">
            {[
              "Create Blueprint actors with any parent class",
              "Add/remove components (StaticMesh, Collision, Audio, Camera, etc.)",
              "Add/remove variables with full type support (bool, int, float, vector, rotator, transform, object refs, arrays, maps)",
              "Create function graphs with typed input/output parameters",
              "Add nodes to any graph (EventGraph, custom functions, construction script)",
              "Wire nodes with automatic pin type coercion (Vector↔Transform, Int↔Float)",
              "Compile and validate Blueprints with error feedback",
              "Auto-retry on compile errors — sends error details back to AI for self-correction",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#4ade80] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <CodeBlock>{`Create BP_Enemy that extends Character, add a Health float variable defaulting to 100,\nand wire up BeginPlay to print "Enemy spawned" to the screen`}</CodeBlock>
        </DocSection>
      );

    case "widgets":
      return (
        <DocSection title="UMG Widget Builder" badge="Features" badgeColor="#4ade80">
          <p className="text-[#e8e8f0]/70 text-sm mb-3">
            <strong className="text-white">Panels:</strong> CanvasPanel, VerticalBox, HorizontalBox, Overlay, GridPanel, UniformGridPanel, WrapBox, ScrollBox, ScaleBox, SizeBox, Border, WidgetSwitcher, BackgroundBlur, ExpandableArea
          </p>
          <p className="text-[#e8e8f0]/70 text-sm mb-4">
            <strong className="text-white">Leaf Widgets:</strong> TextBlock, Image, Button, CheckBox, Slider, ProgressBar, EditableTextBox, MultiLineEditableTextBox, ComboBoxString, SpinBox, Spacer, RichTextBlock, CircularThrobber, Throbber
          </p>
          <Table
            headers={["Slot Type", "Properties"]}
            rows={[
              ["CanvasPanelSlot", "Position, Size, Anchors, AnchorPreset, Offset, Alignment, AutoSize, ZOrder"],
              ["VerticalBoxSlot / HorizontalBoxSlot", "HAlign, VAlign, Padding, Size=Auto|Fill|number"],
              ["OverlaySlot", "HAlign, VAlign, Padding"],
              ["GridSlot / UniformGridSlot", "Row, Column, RowSpan, ColumnSpan, HAlign, VAlign"],
            ]}
          />
          <CodeBlock>{`Create a WBP_HUD widget with a CanvasPanel root, add a VerticalBox in the top-left\nwith a TextBlock showing "Health: 100" and a ProgressBar below it`}</CodeBlock>
        </DocSection>
      );

    case "pcg":
      return (
        <DocSection title="PCG Biome Builder" badge="Features" badgeColor="#4ade80">
          <p className="text-[#e8e8f0]/70 text-sm mb-3"><strong className="text-white">Biome Presets:</strong> Forest, Desert, Tundra, Grassland, Swamp, Alpine, Tropical, Savanna</p>
          <ul className="space-y-1.5 text-[#e8e8f0]/70 text-sm mb-4">
            {[
              "Mesh paths and per-mesh weights",
              "Density min/max filter range",
              "Scale range (min/max)",
              "Random yaw and tilt",
              "Minimum spacing (self-pruning distance)",
              "Slope and height filters",
              "Surface alignment",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#4ade80] mt-2 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <CodeBlock>{`Design a dense boreal forest biome with pine trees, fallen logs, and mossy rocks.\nUse high density for ground cover and sparse placement for large trees.`}</CodeBlock>
        </DocSection>
      );

    case "data-structures":
      return (
        <DocSection title="Data Structures" badge="Features" badgeColor="#4ade80">
          <h3 className="text-base font-bold text-white mt-4 mb-2">Structs</h3>
          <p className="text-[#e8e8f0]/70 text-sm mb-2">
            <strong className="text-white">Field types:</strong> bool, int, float, string, name, text, vector, rotator, transform, color, gameplay_tag, object, class, softobject
          </p>
          <CodeBlock>{`Create a struct called FItemData with fields: ItemName (string), ItemValue (int),\nbIsStackable (bool), and MeshReference (softobject)`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">Enums</h3>
          <CodeBlock>{`Create an enum called EWeaponType with entries: Sword, Bow, Staff, Dagger, Shield`}</CodeBlock>
          <h3 className="text-base font-bold text-white mt-5 mb-2">DataTables</h3>
          <CodeBlock>{`Create a DataTable called DT_Items using the FItemData struct,\nadd rows for Sword (value 50), Health Potion (value 20), and Magic Staff (value 150)`}</CodeBlock>
        </DocSection>
      );

    case "enhanced-input":
      return (
        <DocSection title="Enhanced Input" badge="Features" badgeColor="#4ade80">
          <Table
            headers={["Property", "Options"]}
            rows={[
              ["Value Types", "bool, float, vector2d, vector3d"],
              ["Trigger Types", "pressed, released, hold, tap, pulse, chorded"],
              ["Modifier Types", "negate, swizzle, scalar, deadzone, smooth, fov_scaling, response_curve"],
            ]}
          />
          <CodeBlock>{`Create an Input Action IA_Jump with bool value type and a pressed trigger.\nThen create an Input Mapping Context IMC_Player that binds IA_Jump to SpaceBar\nand Gamepad_FaceButton_Bottom`}</CodeBlock>
        </DocSection>
      );

    case "asset-management":
      return (
        <DocSection title="Asset Management" badge="Features" badgeColor="#4ade80">
          <Table
            headers={["Operation", "Description"]}
            rows={[
              ["Query assets", "Search by type, name, or path"],
              ["Create material", "Material with node graph (Constant, VectorParameter, TextureSample, etc.)"],
              ["Modify property", "Set properties on any asset"],
              ["Delete asset", "Remove asset from project"],
              ["Duplicate asset", "Copy asset to a new path"],
              ["Rename asset", "Rename asset in place"],
              ["Import asset", "Import external files"],
            ]}
          />
        </DocSection>
      );

    case "level-commands":
      return (
        <DocSection title="Level & World Commands" badge="Features" badgeColor="#4ade80">
          <Table
            headers={["Operation", "Description"]}
            rows={[
              ["Spawn actor", "Place any Blueprint or native class in the level"],
              ["Destroy actor", "Remove an actor by name"],
              ["List actors", "Query actors in the level by class or name"],
              ["Set transform", "Move, rotate, or scale an actor"],
              ["Set property", "Modify any actor property"],
              ["Get level info", "Summary of current level contents"],
            ]}
          />
        </DocSection>
      );

    // ── COMMAND REFERENCE ────────────────────────────────────────────────────
    case "blueprint-commands":
      return (
        <DocSection title="Blueprint Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Callout type="info">You do not need to write commands manually. Describe what you want in plain English and Cortex generates and executes them automatically.</Callout>
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["CREATE_BLUEPRINT", "Create a new Blueprint asset"],
              ["MODIFY_BLUEPRINT", "Modify an existing Blueprint"],
              ["READ_BLUEPRINT", "Read Blueprint structure as context"],
              ["ADD_COMPONENT", "Add a component to a Blueprint"],
              ["REMOVE_COMPONENT", "Remove a component"],
              ["ADD_VARIABLE", "Add a variable"],
              ["REMOVE_VARIABLE", "Remove a variable"],
              ["ADD_FUNCTION", "Create a function graph"],
              ["ADD_NODES", "Add nodes to a graph"],
              ["COMPILE_BLUEPRINT", "Compile and validate"],
              ["EXPORT_BLUEPRINT", "Export to JSON"],
            ]}
          />
        </DocSection>
      );

    case "widget-commands":
      return (
        <DocSection title="Widget Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["CREATE_WIDGET", "Create a Widget Blueprint"],
              ["ADD_WIDGET_CHILD", "Add a child widget"],
              ["MODIFY_WIDGET", "Modify widget properties"],
              ["REMOVE_WIDGET", "Remove a widget"],
              ["READ_WIDGET", "Read widget structure"],
              ["COMPILE_WIDGET", "Compile widget blueprint"],
            ]}
          />
        </DocSection>
      );

    case "asset-commands":
      return (
        <DocSection title="Asset Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["QUERY_ASSETS", "Search project assets"],
              ["CREATE_MATERIAL", "Create a material"],
              ["MODIFY_PROPERTY", "Set asset properties"],
              ["DELETE_ASSET", "Delete an asset"],
              ["DUPLICATE_ASSET", "Duplicate an asset"],
              ["RENAME_ASSET", "Rename an asset"],
              ["IMPORT_ASSET", "Import an external file"],
            ]}
          />
        </DocSection>
      );

    case "level-commands-ref":
      return (
        <DocSection title="Level Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["SPAWN_ACTOR", "Spawn an actor in the level"],
              ["DESTROY_ACTOR", "Remove an actor"],
              ["LIST_ACTORS", "List level actors"],
              ["SET_ACTOR_TRANSFORM", "Move/rotate/scale an actor"],
              ["SET_ACTOR_PROPERTY", "Set an actor property"],
              ["GET_LEVEL_INFO", "Get level summary"],
            ]}
          />
        </DocSection>
      );

    case "data-commands":
      return (
        <DocSection title="Data Structure Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["CREATE_STRUCT", "Create a User Defined Struct"],
              ["READ_STRUCT", "Read struct definition"],
              ["CREATE_ENUM", "Create a User Defined Enum"],
              ["READ_ENUM", "Read enum definition"],
              ["CREATE_DATATABLE", "Create a DataTable with rows"],
              ["READ_DATATABLE", "Read DataTable contents"],
            ]}
          />
        </DocSection>
      );

    case "input-commands":
      return (
        <DocSection title="Enhanced Input Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["CREATE_INPUT_ACTION", "Create an Input Action asset"],
              ["READ_INPUT_ACTION", "Read Input Action definition"],
              ["CREATE_INPUT_MAPPING_CONTEXT", "Create an Input Mapping Context"],
              ["READ_INPUT_MAPPING_CONTEXT", "Read IMC definition"],
            ]}
          />
        </DocSection>
      );

    case "biome-commands":
      return (
        <DocSection title="Biome Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["CREATE_BIOME", "Generate a PCG biome graph and spawn it"],
              ["CREATE_PCG_GRAPH", "Create a custom PCG graph from node definitions"],
              ["READ_PCG_GRAPH", "Read a PCG graph's structure"],
            ]}
          />
        </DocSection>
      );

    case "utility-commands":
      return (
        <DocSection title="Utility Commands" badge="Command Reference" badgeColor="#a78bfa">
          <Table
            headers={["Command", "Description"]}
            rows={[
              ["VALIDATE_ASSET", "Validate an asset for errors"],
              ["LIST_PROJECT_CLASSES", "List available classes"],
              ["READ_SOURCE_FILE", "Read a C++ source file for context"],
              ["GET_NODE_INFO", "Get pin details for a specific node type"],
              ["SEARCH_NODES", "Search the node catalog"],
            ]}
          />
        </DocSection>
      );

    default:
      return null;
  }
}
