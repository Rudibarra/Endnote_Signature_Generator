📦 Product Summary — Email Signature Generator (MVP)
🎯 Core Problem

Employees cannot reliably create a professional email signature that works across email clients because current methods require technical knowledge and produce inconsistent results.

🧭 Product Goal

Allow users to generate and deploy a consistent email signature across devices without technical setup.

Success looks like:
👉 A user can create and install a working signature in under 5 minutes.

🧱 Core Principle

Speed over customization

This means:

Fixed template

Minimal fields

No design choices

❌ MVP Tradeoffs

We are NOT solving:

Team admin control

Multi-brand support

Outlook integrations

Design customization

Future improvements depend on:
👉 Completion rate > 85%

👥 Primary User

HR Manager
Low technical skill
High brand impact

Secondary users:

Developer (time-poor)

PM (simplicity-driven)

💡 Chosen Solution

A self-service web app where users:

Fill form → See preview → Generate → Copy → Follow instructions

With structured employee info input to ensure consistency.

🧪 Key User Needs

Users need:

One signature that works across devices

Confidence their contact info is correct

A way to create signatures without HTML knowledge

⚠️ Pain Points

Contact info becomes inconsistent

Outlook breaks formatting

Users resort to images or bad templates

✨ Opportunity

Enable users to generate a professional signature that works across email clients without technical setup.

📋 MVP Flow

Open app

Fill form

Live preview updates

Click Generate

Export panel appears

Copy HTML

Instructions modal appears

Instructions always accessible

Responsive:
Stacks on mobile:
Form → Preview → Generate → Export

🧩 MVP Features
MUST

Form with validation

Live preview

Generate action

Copy HTML

Download fallback

Instruction modal

Reopen instructions

SHOULD

Inline hints

Logo handling

Mobile-friendly layout

COULD

Presets

Greeting personalization

🛠 Non-Functional Requirements

Gmail + Outlook compatibility

Usable by non-technical users in ≤ 5 min

Simple required fields only

⚠️ Edge Cases

Multi-device mismatch

Image blocking

Outlook paste degradation

Long names / Ñ / accents

✅ Acceptance Criteria

Block invalid input before generation

Provide copyable HTML

Provide revisitable instructions

Responsive layout

🖥 UX Layout

Left:
Form

Right:
Live preview

Post-generate:
Copy + Instructions

Instructions modal available anytime

🎨 UX Intent

Familiar web form pattern

Fixed template ensures consistency

Live preview reduces fear

Clear primary vs secondary actions