# LalaOps — Centralized Operations Task Tracker

> Built for **Lala Tech LLC** based on `lala-tech-product-resource.md` and the modern operations design system from `stitch_centralized_operations_task_tracker.zip`.

---

## 🌟 Quick Start

You can open the application immediately in any modern web browser:
1. Double-click or open [`index.html`](file:///d:/Krishna/index.html) in Google Chrome, Microsoft Edge, Brave, or Firefox.
2. No build steps, compile processes, or dependencies required!

---

## 🔄 The 6-Stage Request Lifecycle

The system now enforces the exact 6-stage operational pipeline:

$$\text{New Request} \longrightarrow \text{Needs Clarification} \longrightarrow \text{Ready to Assign} \longrightarrow \text{In Progress} \longrightarrow \text{Waiting on Client} \longrightarrow \text{Done}$$

1. **New Request**: Newly ingested from WhatsApp, email, or chat, awaiting triage.
2. **Needs Clarification**: Missing critical specs, tariff codes, or customer details.
3. **Ready to Assign**: Scoped and validated, ready for engineer or dispatcher assignment.
4. **In Progress**: Actively owned and being worked on by internal team members.
5. **Waiting on Client**: Parked on client response (signatures, documentation, or payment approval).
   > **Special SLA Policy**: Requests in **"Waiting on Client"** are explicitly protected — they are **never** treated as overdue or stale like forgotten internal tasks!
6. **Done**: Completed, verified, and audit-ready.

---

## 🎯 Manager Rapid Triage Views

Managers can instantly toggle between the **4 critical request buckets**:

1. **Waiting for us**: Internal requests requiring team action (`New Request`, `Needs Clarification`, `Ready to Assign`, `In Progress`).
2. **Waiting for the client**: Parked on external client dependencies with client follow-up indicators.
3. **Unassigned**: Requests sitting in the intake triage queue without an owner.
4. **Overdue**: Internal requests that have exceeded commitment deadlines (excluding tasks waiting on clients).

---

## 📂 Project Structure

```
d:\Krishna\
├── index.html                           # Master Single Page Application structure with 5 views
├── app.js                               # Reactive state engine, 6-stage lifecycle, router & parser
├── styles.css                           # Design System styling, status chips, client hold tokens
├── lala-tech-product-resource.md        # Original business discovery & MVP strategy document
├── stitch_centralized_operations_task_tracker.zip  # Design prototype archive
└── README.md                            # Project documentation
```

---

## 🛠️ How to Make Changes

- **Add or edit demo requests**: Open [`app.js`](file:///d:/Krishna/app.js) and modify the `DEFAULT_TASKS` array.
- **Change design tokens / colors**: Modify [`styles.css`](file:///d:/Krishna/styles.css) or the Tailwind configuration in the `<head>` of [`index.html`](file:///d:/Krishna/index.html).
- **Reset data**: Click the **"Reset Demo Pipeline"** button at the bottom-left of the sidebar at any time to return to the clean baseline.
