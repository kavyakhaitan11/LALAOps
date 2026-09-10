# LalaOps — Centralized Operations Task Tracker

> Built for **Lala Tech LLC** based on `lala-tech-product-resource.md` and the modern operations design system from `stitch_centralized_operations_task_tracker.zip`.

---

## 🌟 Quick Start

You can open the application immediately in any modern web browser:
1. Double-click or open [`index.html`](file:///d:/Krishna/index.html) in Google Chrome, Microsoft Edge, Brave, or Firefox.
2. **Zero build steps or dependencies required!** (Pure HTML5, Vanilla JavaScript, and Tailwind CSS).

---

## 🎯 The 6 Operational Essentials At A Glance

LalaOps directly addresses task loss across WhatsApp, email, and spreadsheets by making 6 things clear in one place:

| # | Question | Solution in LalaOps | Location |
|---|---|---|---|
| **1** | **What needs to be done** | Backlog with request scope, channel badges (`WhatsApp`, `Email`, `Spreadsheet`), and initial parameters. | Top Telemetry Strip • Column 1 |
| **2** | **Who is responsible for it** | Explicit assignee avatar & name, or purple **`Unassigned`** badge with 1-click `Assign Now`. | Top Telemetry Strip • Column 2 • Manager KPI |
| **3** | **What the priority is** | Standardized tiers: `[P0] Urgent` (red), `[P1] High` (amber), `[P2] Medium` (slate), `[P3] Low`. | Top Telemetry Strip • Column 3 • `[P0]` Filter Pill |
| **4** | **What the current status is** | Enforced 6-stage lifecycle *(see below)*. Requests on client hold are clearly separated and never penalized as overdue. | Top Telemetry Strip • Column 4 • 6 Kanban Columns |
| **5** | **What has already been done** | Completed archive with completion timestamp and audit verification. | Top Telemetry Strip • Column 6 • `Completed` Pill |
| **6** | **What needs a follow-up** | Automated engine tracking client pings ($\ge 1$ day), missing clarification, and internal SLA chases. | Top Telemetry Strip • Column 5 • `Needs Follow-up` Pill |

---

## 🔄 The 6-Stage Request Lifecycle

$$\text{New Request} \longrightarrow \text{Needs Clarification} \longrightarrow \text{Ready to Assign} \longrightarrow \text{In Progress} \longrightarrow \text{Waiting on Client} \longrightarrow \text{Done}$$

1. **New Request**: Newly ingested from WhatsApp, email, or chat, awaiting triage.
2. **Needs Clarification**: Missing critical specs, tariff codes, or customer details.
3. **Ready to Assign**: Scoped and validated, ready for engineer or dispatcher assignment.
4. **In Progress**: Actively owned and being worked on by internal team members.
5. **Waiting on Client**: Parked on client response (signatures, documentation, or payment approval).
   > **🛡️ Special SLA Policy**: Requests in **"Waiting on Client"** are explicitly protected — they are **never** treated as overdue or stale like forgotten internal tasks!
6. **Done**: Completed, verified, and audit-ready.

---

## 🔒 Manager Dashboard Password Lock & Passcode Management

The **Manager Operations Dashboard** is protected by an administrative lock screen to safeguard queue triage, team capacity distribution, and SLA escalations:

- **Default Passcode**: Factory default is `ops2026` (with `admin` as fallback).
- **Self-Service Passcode Change**: Click **"Change Passcode"** on the lock screen, inside the Manager Dashboard header, or directly in the **Sidebar Bottom Card** from any screen.
- **Active Passcode Indicator**: The modal clearly displays your currently active passcode in a live badge for instant visibility.
- **Pre-filled Current Passcode**: Current passcode is pre-filled for zero-friction updates.
- **Password Visibility Toggles**: Eye icon buttons on all inputs let you view or hide passcodes as you type.
- **Immediate Auto-Unlock**: Updating the passcode automatically authenticates and unlocks the Manager Dashboard so you can get right to work without retyping.
- **Persistent Storage**: Custom passcodes are securely persisted in your browser (`localStorage`), surviving browser restarts and page refreshes.
- **Dynamic Lock Screen Hint**: The lock screen automatically reflects your current active passcode.
- **1-Click Reset to Default**: Forgotten passcode? Simply click **"Reset to default (ops2026)"** inside the change modal to restore factory defaults.
- **Quick Fill & Unlock**: 1-click shortcut for rapid testing and demonstrations.
- **Security Feedback**: Incorrect passcode triggers a smooth shake animation (`.shake-error`).
- **Session Persistence**: Access remains active throughout the browsing session (`sessionStorage`).
- **Lock Console Button**: Easily re-lock the console at any time from the dashboard header.
- **Sidebar Lock Indicator**: Live status icon (`lock` when protected, `lock_open` with green accent when unlocked).

---

## 🎨 Spacious & Modern UI/UX Improvements

- **Dedicated 290px Kanban Columns**: Upgraded from squeezed grid columns into a spacious, horizontal flex track (`min-w-[290px]` per column) with smooth horizontal scrolling, ensuring cards, titles, badges, and SLAs never feel cramped.
- **Interactive Task Detail Modal**: Replaced basic browser alerts with a rich, two-column interactive modal displaying full raw inbound messages, client hold reasons, clarification notes, live stage switcher, owner reassignment, and SLA timing.
- **Clickable Cards Across All Views**: Click any card in the Kanban board, table row, manager triage list, or employee workspace to immediately inspect and edit task attributes.
- **Unified Operations Telemetry Strip**: A slim, persistent telemetry bar highlighting the 6 core operational questions with live counters and click-to-filter shortcuts.
- **Keyboard Shortcuts**: Use `⌘K / Ctrl+K` for instant global search, and `Escape` to dismiss any open modal.

---

## 📂 Project Structure

```
d:\Krishna\
├── index.html                           # Master Single Page Application structure with 5 views
├── app.js                               # Reactive state engine, 6-stage lifecycle, password lock & router
├── styles.css                           # Lala Tech design system tokens, status badges & lock animations
├── lala-tech-product-resource.md        # Original business discovery & MVP strategy document
├── stitch_centralized_operations_task_tracker/  # Design prototype archive & visual assets
├── .gitignore                           # Excludes local IDE binaries and archives
└── README.md                            # Complete documentation
```

---

## 🛠️ How to Make Changes
 
- **Change Manager Passcode**: Click **"Change Passcode"** on the dashboard header or lock screen to set a new passcode directly via the UI, or reset back to `ops2026` anytime.
- **Add or edit demo requests**: Modify the `DEFAULT_TASKS` array in `app.js`.
- **Change design tokens / colors**: Modify `styles.css` or the Tailwind configuration in `index.html`.
- **Reset data**: Click the **"Reset Demo Pipeline"** button at the bottom of the sidebar to reload clean initial data.
