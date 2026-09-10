---
name: Lala Modern Operations
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#444651'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#003120'
  on-tertiary: '#ffffff'
  tertiary-container: '#004a32'
  on-tertiary-container: '#4ac08f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  layout-margin-mobile: 1rem
  layout-margin-tablet: 1.5rem
  layout-margin-desktop: 2rem
  gutter-default: 1rem
---

## Brand & Style

This design system is engineered for mid-market operations teams navigating high-velocity cross-functional execution. Blending the deliberate kinetic efficiency of Linear with the malleable modularity of Notion, it balances technical precision with day-to-day utilitarian comfort. 

The aesthetic is **Modern Minimalist Utility**:
- **Clarity over Ornamentation:** Visual noise is eliminated; UI framing remains secondary to actual operational state and data.
- **High-Density Legibility:** Compact vertical rhythms and explicit table/list structures let operations leads scan 50+ line items without cognitive strain.
- **Decisive State Encoding:** Color is reserved strictly for interactive affordances, structural focus, and critical status indicators (Blocked, Overdue, In Progress, Done). 
- **Tactile Micro-Interactions:** Snappy transitions (100–150ms cubic-bezier curves), 1px structural micro-borders, and disciplined elevations evoke the feel of a precision flight instrument.

## Colors

The palette employs a slate-tinted neutral foundation paired with a deep authoritative navy primary and unambiguous operational status tokens. 

### Palette Architecture
- **Primary (`#1E3A8A` / Deep Enterprise Navy):** Anchors primary actions, active navigational states, and high-priority filters.
- **Secondary (`#0284C7` / Sky Blue):** Designates active progress, informational callouts, and inline interactive links.
- **Tertiary (`#059669` / Emerald):** Signifies completion, operational success, and verified health states.
- **Neutral Core (`#0F172A` / Slate Base):** Establishes contrast tiers:
  - Base canvas: `#F8FAFC` (Slate 50)
  - Elevated surfaces: `#FFFFFF`
  - Subtle borders: `#E2E8F0` (Slate 200)
  - Muted text: `#64748B` (Slate 500)
  - Body text: `#334155` (Slate 700)
  - Primary text & headlines: `#0F172A` (Slate 900)

### Status Tokens (Zero-Ambiguity Monitoring)
- **Blocked / Warning:** `#D97706` (Amber 600) with surface `#FEF3C7` (Amber 100).
- **Overdue / Critical Alert:** `#DC2626` (Red 600) with surface `#FEE2E2` (Red 100).
- **In Progress:** `#0284C7` (Sky 600) with surface `#E0F2FE` (Sky 100).
- **Done / Verified:** `#059669` (Emerald 600) with surface `#D1FAE5` (Emerald 100).
- **Backlog / Draft:** `#64748B` (Slate 500) with surface `#F1F5F9` (Slate 100).

## Typography

Inter serves as the primary typographic engine across all levels, configured with subtle negative tracking on headers to mimic the crisp density of operational desktop software. JetBrains Mono is assigned for tabular task identifiers, telemetry readouts, timestamp logs, and keyboard shortcuts.

- **Tabular Numerals:** Apply `font-feature-settings: "tnum" on, "cv05" on, "cv11" on` globally across tables, lists, and counters to maintain aligned metrics.
- **Hierarchy Rules:** 
  - Section headers must pair with uppercase tracking labels (`label-sm`) for category context (e.g., `PIPELINE OVERVIEW`, `INCIDENTS`).
  - Body copy defaults strictly to `body-md` (14px/20px) for standard UI controls, data grids, and forms to maximize information density without sacrificing optical legibility.

## Layout & Spacing

The layout is built on a high-density, multi-panel layout model optimized for multi-pane workflows (e.g., side navigation, primary operational queue, and right-side contextual detail blade).

### Grid & Density
- **Base Grid:** Strictly based on an 8pt system, using a half-step 4pt unit (`space-xs`) for micro-alignments, pill tags, and table row heights.
- **Table Row Densities:**
  - Compact: `32px` height (dense triage).
  - Default: `40px` height (standard tracking).
  - Expanded: `52px` height (multi-line context / attachments).
- **Breakpoints:**
  - `Mobile (< 768px):` Single column fluid flow; sidebar collapses into a slide-over sheet; inspection pane becomes a stacked modal. Margins: `16px`.
  - `Tablet (768px - 1024px):` Fixed sidebar (collapsed icon mode `56px`), fluid main workspace. Margins: `24px`.
  - `Desktop (> 1024px):` Full panel ergonomics: permanent collapsible sidebar (`240px`), fluid table or board workspace, optional contextual slide-out sheet (`440px` to `600px` fixed width). Margins: `32px`.

## Elevation & Depth

Visual hierarchy is established using **low-contrast micro-borders** complemented by subtle, multi-layered neutral ambient shadows. This keeps the interface light, modern, and free of heavy skeuomorphic clutter.

- **Level 0 (Base Canvas):** Background color `#F8FAFC`. Zero elevation, zero shadows.
- **Level 1 (Panels & Cards):** Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`. Used for board cards, inline data modules, and table containers.
- **Level 2 (Hover & Active Drag):** Border `1px solid #CBD5E1`, shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Popovers, Dropdowns & Menus):** Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow: `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`.
- **Level 4 (Modals & Command Bar):** Border `1px solid #E2E8F0`, shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`. Accompanied by a 20% slate overlay blur (`backdrop-filter: blur(2px)`).

## Shapes

The design system maintains a **Soft (`1`)** shape language to reflect enterprise precision and structural discipline:

- **Controls & Chips:** `4px` radius (`rounded-sm`) for badges, command tags, status indicators, and inputs.
- **Cards & Surfaces:** `6px` radius (`rounded-md`) to `8px` (`rounded-lg`) for workspace cards, modal frames, and floating drawers.
- **Avatars & Filter Toggles:** Circular (`9999px`) only for personal user avatars; filter pills remain tightly squared (`4px` radius) to prevent consumer-social connotations.
- **Outlines:** Consistent `1px` inner borders for structured delineation without adding visual thickness.

## Components

### Buttons
- **Primary:** Background `#1E3A8A`, text `#FFFFFF`, hover `#172554`, border `1px solid transparent`. Active: slight inset scale (`scale(0.99)`).
- **Secondary / Outline:** Background `#FFFFFF`, text `#334155`, border `1px solid #E2E8F0`, hover background `#F8FAFC`, hover border `#CBD5E1`.
- **Ghost:** Text `#64748B`, transparent background. Hover: text `#0F172A`, background `#F1F5F9`.
- **Height & Padding:** Compact 32px height for tables/toolbars (`px-2.5 py-1 text-xs`), standard 36px height for forms (`px-3.5 py-1.5 text-sm`).

### Status Chips & Priority Badges
- **Status Badges:** Composed of a `6px` solid status circle dot, `label-sm` text, and a matched tint background (e.g., Red 50 `#FEF2F2` background, Red 700 `#B91C1C` text for Overdue).
- **Priority Indicator:** Minimalist 3-bar vertical equalizer or single-letter mono tag (`[P0]` in Red, `[P1]` in Amber, `[P2]` in Slate).

### Data Tables & Row Lists
- **Structure:** Clean rows bordered with `1px solid #F1F5F9`. Header row styled with uppercase `label-sm` font, slate-400 color, and background `#F8FAFC`.
- **Interactions:** Subtle highlight on hover (`bg-slate-50/70`). Selected rows feature a persistent left accent border (`2px solid #1E3A8A`) and `#F0F7FF` tint.

### Inputs & Fast-Intake Form Fields
- **Default State:** Height 36px, border `1px solid #CBD5E1`, background `#FFFFFF`, text `#0F172A`, placeholder `#94A3B8`.
- **Focus State:** Border `#1E3A8A`, box-shadow `0 0 0 2px rgba(30, 58, 138, 0.15)`. No loud default browser outlines.
- **Inline Fast Intake:** Borderless minimal variant (`bg-transparent hover:bg-slate-100 focus:bg-white focus:border-slate-300`) for rapid inline task creation.

### Checkboxes & Selection Controls
- **Style:** Compact 16x16px boxes with `3px` corner radius.
- **States:** Unchecked: border `1.5px solid #CBD5E1`, background white. Checked: background `#1E3A8A`, border `#1E3A8A`, crisp white SVG check icon.

### Operational Command Palette (Linear-inspired)
- Centered overlay modal (`max-w-xl`), deep elevation Level 4, keyboard navigation focus with highlighted item in `#F1F5F9`, keycap shortcuts rendered with `JetBrains Mono` inside a styled `kbd` element (`border border-slate-200 bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-500`).