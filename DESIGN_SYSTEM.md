# Design System Specification: "The Measured Trace"
## Personal Health-Tech Portfolio for Chidiogo Ozioma Anisiobi
**Target Domain:** `https://chidiogoanisiobi.github.io/`
**Version:** 1.0.0
**Status:** Implementation-Ready Design System Baseline

---

## 1. Design Rationale and Creative Direction

### 1.1 Visual Concept & Name
**Concept Name:** *The Measured Trace*
**Core Theme:** Bridging clinical laboratory rigor, specimen traceability, and health data technology through an editorial, ledger-inspired design system.

"The Measured Trace" rejects generic developer portfolio tropes (neon glowing dark modes, floaty glassmorphism, synthetic code terminals, and fake patient dashboards) in favor of an aesthetic rooted in real laboratory ledgers, specimen tracking tags, clinical observations, and structured data signals. The visual language conveys quiet authority, meticulous record-keeping, and human care.

### 1.2 Core Design Principles

| Principle | UI Impact & Implementation |
| :--- | :--- |
| **1. Grounded Integrity** | Every UI element reflects verified facts. Unverified work is never staged as finished; planned work is explicitly tagged as "Planned / In Progress". No fabricated metrics or fake patient charts. |
| **2. Measured Precision** | UI layout relies on defined grid lines, precise metadata tags, structured horizontal rules, and disciplined typography scale rather than floating cards or heavy drop shadows. |
| **3. Calm Human Warmth** | The palette balances deep clinical slate-teal with warm parchment and sand background tones, avoiding the cold, sterile, or overly corporate feel of traditional medical templates. |
| **4. Transparent Trajectory** | Clear visual hierarchy separates over 5 years of frontline healthcare experience from active learning (verified AI coursework) and emerging health data practice (SQL, Python, Power BI). |

### 1.3 Emotional Impression
For technical reviewers, clinical managers, and health-tech recruiters, the site should evoke:
- **Meticulous attention to detail:** Reflected in aligned metadata, precise spacing, and accessible typography.
- **Deep domain authenticity:** Grounded in real laboratory and hospital workflows rather than superficial tech jargon.
- **Thoughtful growth:** Communicating an active, rigorous transition into health data systems.

### 1.4 Visual Differentiation Strategy
Unlike typical developer portfolios that copy SaaS landing page templates, *The Measured Trace* uses:
- **Editorial Typography:** Serif display headings (`Lora` / `Georgia`) paired with clean functional sans-serif (`Inter` / `Plus Jakarta Sans`) and restrained monospaced metadata (`JetBrains Mono`).
- **Specimen Ledger Architecture:** Structured metadata headers (`[REF: EXP-01]`, `[STATUS: VERIFIED]`) that mirror LIMS specimen logs and clinical records.
- **Restrained Signal Lines:** Subtle hairline dividers and a custom SVG "Specimen Trace" device rather than glowing gradients or stock hero graphics.

### 1.5 Clichés Explicitly Avoided
1. **Neon Gradients & Glowing Blobs:** No cyber-teal glowing orbs or saturated purple-to-cyan gradients.
2. **Generic Code-Window Hero Art:** No fake VS Code mockups or terminal windows with `npm start` commands.
3. **Glassmorphism & Heavy Cards:** No blurry translucent card stacks with excessive drop shadows.
4. **Floating Pills & Tag Cloud Overload:** No unranked walls of floating tech badges.
5. **Stock Medical Photography:** No generic pictures of doctors holding tablets or stethoscope close-ups.
6. **Fake Dashboards & Simulated PHI:** No fake patient vitals, clinical graphs, or simulated patient records.

---

## 2. Brand Foundations

### 2.1 Brand Attributes
- **Careful:** Meticulous in handling records, data, and patient-centric information.
- **Curious:** Actively expanding capabilities in health data, AI ethics, and LIMS.
- **Humane:** Centered on patient care outcomes, safety, and healthcare team support.
- **Precise:** Exacting standards in laboratory documentation and structured data analysis.
- **Practical:** Focused on real-world clinical workflow efficiency and actionable data.

### 2.2 Voice and Tone

| Interface Context | Tone | Writing Guidance & Example Microcopy |
| :--- | :--- | :--- |
| **Headings & Hero** | Direct, grounded, story-driven | *"Building at the intersection of healthcare and technology."* (Avoid buzzwords like "Revolutionizing" or "Disrupting"). |
| **Body Narrative** | Professional, concise, evidence-based | *"Over 5 years of healthcare operations experience in laboratory specimen tracking, EHR documentation, and patient care support..."* |
| **Project Statuses** | Transparent, unambiguous | `[PLANNED]` "Data analysis case study currently in preparation." |
| **Credentials & Certificates** | Exact, qualified | *"Certificate of Achievement issued as proof of learning; does not constitute a formal academic degree or clinical licence."* |
| **Empty / Pending States** | Helpful, welcoming | *"No public repositories are published yet. View upcoming health-data projects on GitHub."* |
| **Error / Action States** | Clear, actionable | *"Unable to open mail client. Please copy email address: emilyhealthtech@gmail.com"* |

### 2.3 Microcopy & Naming Rules
- **Candidate Name:** Chidiogo Ozioma Anisiobi (Full name in page headers/title; "Chidiogo Anisiobi" in concise UI layouts).
- **Headline:** *"Building at the intersection of healthcare and technology."*
- **Supporting Narrative:** *"Bridging clinical laboratory operations, specimen management, and electronic health records with health data analytics and AI concepts."*

### 2.4 Iconography & Illustration Policy
- **Icon Set:** Clean line icons (Lucide / Heroicons style), `1.5px` stroke weight, single color matching local body or primary token.
- **Usage Rule:** Icons are functional indicators only (e.g., external link arrow `↗`, download icon `↓`, checkmark `✓`, status dot `•`).
- **Prohibition:** No decorative medical clipart, syringe icons, or decorative DNA helices.

### 2.5 Photography & Imagery Policy
- **Default:** Zero stock photography across the entire application.
- **Candidate Portrait (When Provided):**
  - **Aspect Ratio:** 1:1 square or 4:5 vertical crop.
  - **Treatment:** Natural lighting, muted neutral background, light border (`1px solid var(--color-border-subtle)`), zero rounded circular clip masks (prefer subtle `4px` corner radius).
  - **Fallback:** High-legibility typographic initials avatar (`CA`) rendered on a warm subtle surface.

### 2.6 Credential & Certificate Display Rules
For the verified FutureLearn certificate:
- **Title:** *How Artificial Intelligence Can Support Healthcare*
- **Issuing Bodies:** University of Groningen, University of Tartu, OneVision Healthcare, and UMCG.
- **Issue Date:** October 5, 2026
- **Transcript Score:** 88% overall
- **Credential URL:** `https://www.futurelearn.com/certificates/0lq64xd`
- **Mandatory Disclaimer:** Must accompany every display of the certificate to prevent false claims of clinical or AI engineering licensure.

---

## 3. Colour System

### 3.1 Palette Rationale
The palette pairs a deep, focused **Clinical Slate Teal** (`#1E4D4F`) with a warm **Sand/Parchment** background (`#F8F6F0`) and an accent **Warm Terracotta** (`#B85A3A`). This combination evokes archival medical records, laboratory logbooks, and modern data interfaces.

### 3.2 Semantic Token Map & Palette Table

| Token Name | HEX Value | Intended Usage | Contrast vs Background Token |
| :--- | :--- | :--- | :--- |
| `--color-brand-primary` | `#1E4D4F` | Primary buttons, active nav, main headers, key brand elements | **11.4:1** vs `--color-surface-page` (Passes WCAG AAA) |
| `--color-brand-primary-hover` | `#153738` | Hover state for primary actions | **13.8:1** vs `--color-surface-page` (Passes WCAG AAA) |
| `--color-brand-primary-active` | `#0E2425` | Active/pressed state for primary actions | **15.6:1** vs `--color-surface-page` (Passes WCAG AAA) |
| `--color-accent` | `#B85A3A` | Secondary accent, featured badge, visual signal dot | **4.8:1** vs `--color-surface-page` (Passes WCAG AA) |
| `--color-accent-hover` | `#96472D` | Hover state for accent controls | **6.6:1** vs `--color-surface-page` (Passes WCAG AAA) |
| `--color-surface-page` | `#F8F6F0` | Main canvas background (Warm Parchment) | Canvas baseline |
| `--color-surface-raised` | `#FFFFFF` | Cards, container surfaces, navigation bar background | **1.08:1** vs page (Requires `--color-border-subtle`) |
| `--color-surface-subtle` | `#EFECE4` | Metadata blocks, code snippets, subtle card backgrounds | **1.1:1** vs page |
| `--color-surface-overlay` | `rgba(24, 32, 33, 0.4)` | Backdrop overlay for mobile drawer/modals | N/A |
| `--color-text-primary` | `#182021` | Page title, H1-H3 headings, primary body text | **13.8:1** vs page, **14.9:1** vs raised (Passes AAA) |
| `--color-text-secondary` | `#425355` | Section eyebrows, secondary body, card descriptions | **6.2:1** vs page, **6.7:1** vs raised (Passes AAA) |
| `--color-text-muted` | `#607375` | Captions, metadata labels, timestamps, footer legal | **4.6:1** vs page (Passes WCAG AA) |
| `--color-text-inverse` | `#FFFFFF` | Text inside primary buttons, dark badges | **11.4:1** vs primary (Passes WCAG AAA) |
| `--color-border-default` | `#D8D3C5` | Card borders, section dividers, input borders | 1.3:1 contrast against surface |
| `--color-border-subtle` | `#E6E2D6` | Subtle dividers, subtle grid lines | 1.15:1 contrast against surface |
| `--color-focus-ring` | `#1E4D4F` | Keyboard focus indicator outline | High contrast 2px outline + 2px offset |
| `--color-state-success-text` | `#14522D` | Verified badges, completed project status text | **6.8:1** vs success surface |
| `--color-state-success-bg` | `#EAF4ED` | Verified status background badge | Surface |
| `--color-state-success-border`| `#B0D8B9` | Verified status border | Border |
| `--color-state-warning-text` | `#7A4300` | In-progress badge text, caution notes | **6.5:1** vs warning surface |
| `--color-state-warning-bg` | `#FFF8EB` | In-progress status background badge | Surface |
| `--color-state-warning-border`| `#F3D8A3` | In-progress status border | Border |
| `--color-state-info-text` | `#134063` | Planned project text, credential info text | **7.1:1** vs info surface |
| `--color-state-info-bg` | `#EEF6FC` | Planned project status background | Surface |
| `--color-state-info-border` | `#A8D2F0` | Planned project status border | Border |
| `--color-state-error-text` | `#8A1C14` | Error messaging, broken link warning | **7.4:1** vs error surface |
| `--color-state-error-bg` | `#FDF2F2` | Error state background surface | Surface |
| `--color-state-error-border` | `#F2B8B5` | Error state border | Border |

### 3.3 Dark Theme Token Strategy (Optional Secondary Surface)
While the warm parchment light theme is the primary design direction, a companion dark theme ("Dark Clinical Slate") is defined for low-light environments:

```css
[data-theme="dark"] {
  --color-brand-primary: #4FA3A8;
  --color-brand-primary-hover: #6BB5B9;
  --color-brand-primary-active: #88C7CA;
  --color-accent: #E07A5F;
  --color-surface-page: #121819;
  --color-surface-raised: #1A2324;
  --color-surface-subtle: #243032;
  --color-text-primary: #ECEFEF;
  --color-text-secondary: #B0C0C2;
  --color-text-muted: #7E9395;
  --color-text-inverse: #121819;
  --color-border-default: #2E3E40;
  --color-border-subtle: #222E30;
  --color-focus-ring: #4FA3A8;
}
```

### 3.4 Color Ratio and Usage Rules
- **70% Neutral Surfaces:** Canvas (`#F8F6F0`) and subtle container fills (`#EFECE4`) dominate to maintain readability.
- **20% High-Contrast Text & Structure:** Primary dark text (`#182021`) and subtle borders (`#D8D3C5`).
- **10% Brand & Accent Controls:** Deep Slate Teal (`#1E4D4F`) for primary actions/headers and Terracotta (`#B85A3A`) for signal accents.
- **Rule of Non-Reliance:** Color is never used as the sole conveyor of information. All status badges combine text labels (e.g., "VERIFIED", "PLANNED"), icons, and borders alongside background colors.

---

## 4. Typography System

### 4.1 Type Pairing Rationale
- **Display / Heading Font:** `Lora` (Fallback: `Georgia, "Times New Roman", serif`).
  *Rationale:* Provides a refined editorial tone that conveys clinical authority, scientific history, and thoughtful craftsmanship.
- **Body / Interface Font:** `Inter` or `Plus Jakarta Sans` (Fallback: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
  *Rationale:* High legibility at small sizes, clear numerical differentiation, and neutral modern interface feel.
- **Data / Monospaced Font:** `JetBrains Mono` or `Fira Code` (Fallback: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`).
  *Rationale:* Used exclusively for metadata tags, specimen reference IDs (`[REF: CA-2026]`), code snippets, and structural labels.

### 4.2 Responsive Type Scale

| Scale Token | Font Family | Mobile Size / Line-Height | Desktop Size / Line-Height | Weight | Tracking / Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display` | Display (Serif) | 2.25rem (36px) / 1.15 | 3.50rem (56px) / 1.10 | 600 SemiBold | -0.02em |
| `--text-h1` | Display (Serif) | 1.875rem (30px) / 1.20 | 2.50rem (40px) / 1.15 | 600 SemiBold | -0.01em |
| `--text-h2` | Display (Serif) | 1.50rem (24px) / 1.25 | 1.875rem (30px) / 1.20 | 600 SemiBold | -0.01em |
| `--text-h3` | Display (Serif) | 1.25rem (20px) / 1.30 | 1.50rem (24px) / 1.25 | 600 SemiBold | normal |
| `--text-body-lg` | Body (Sans) | 1.125rem (18px) / 1.55 | 1.25rem (20px) / 1.50 | 400 Regular | normal |
| `--text-body` | Body (Sans) | 1.00rem (16px) / 1.50 | 1.00rem (16px) / 1.55 | 400 Regular | normal |
| `--text-small` | Body (Sans) | 0.875rem (14px) / 1.45 | 0.875rem (14px) / 1.45 | 400 Regular | +0.01em |
| `--text-caption` | Body (Sans) | 0.75rem (12px) / 1.40 | 0.75rem (12px) / 1.40 | 400 Regular | +0.02em |
| `--text-label` | Mono (Code) | 0.8125rem (13px) / 1.35 | 0.8125rem (13px) / 1.35 | 500 Medium | +0.04em (Uppercase) |
| `--text-code` | Mono (Code) | 0.875rem (14px) / 1.45 | 0.875rem (14px) / 1.45 | 400 Regular | normal |

### 4.3 Editorial & Wrapping Guidance
- **Max Paragraph Reading Width:** 65ch (characters) to ensure optimal reading comfort.
- **Heading Wrapping:** `text-wrap: balance;` applied to display, H1, and H2 elements to eliminate awkward single-word line wraps.
- **Numbers & Data:** Monospaced font variant digits (`font-variant-numeric: tabular-nums;`) used for dates, score percentages, and metadata numbers.
- **Performance Loading:** Font files loaded via preloaded web fonts with `font-display: swap;`. Fallback stacks match x-height to prevent Cumulative Layout Shift (CLS).

---

## 5. Layout, Grid, and Spacing

### 5.1 Breakpoint System

| Breakpoint Name | Target Devices | Min-Width | Max Content Container Width | Side Margin / Gutter |
| :--- | :--- | :--- | :--- | :--- |
| `sm` | Mobile (Portrait) | `320px` | `100%` | `1rem` (16px) |
| `md` | Mobile (Landscape) & Small Tablets | `640px` | `600px` | `1.5rem` (24px) |
| `lg` | Tablets & Small Laptops | `768px` | `720px` | `2.0rem` (32px) |
| `xl` | Desktop & Laptops | `1024px` | `960px` | `2.5rem` (40px) |
| `2xl` | Large Desktop / Workstations | `1280px` | `1140px` | `3.0rem` (48px) |

### 5.2 Grid & Column Architecture
- **Desktop (≥ 1024px):** 12-column grid, `24px` gutter width.
- **Tablet (768px – 1023px):** 8-column grid, `20px` gutter width.
- **Mobile (< 768px):** 4-column grid, `16px` gutter width.
- **Reading Column Width:** All body paragraphs and text-heavy sections capped at max width `680px` (`65ch`) centered or aligned with structural grid lines.

### 5.3 Spacing Scale (8px Base System with 4px Sub-Unit)

| Token Name | Rem Value | Pixel Equivalent | Primary Application |
| :--- | :--- | :--- | :--- |
| `--space-0-5` | `0.25rem` | 4px | Micro padding, badge internal gap, tight inline spacing |
| `--space-1` | `0.50rem` | 8px | Button internal padding-v, metadata list items gap |
| `--space-1-5` | `0.75rem` | 12px | Badge padding, small card gap |
| `--space-2` | `1.00rem` | 16px | Standard button padding-h, card internal padding (mobile) |
| `--space-3` | `1.50rem` | 24px | Card padding (desktop), stack spacing |
| `--space-4` | `2.00rem` | 32px | Section subtitle gap, component stack gap |
| `--space-6` | `3.00rem` | 48px | Sub-section vertical separation |
| `--space-8` | `4.00rem` | 64px | Major page section vertical padding (mobile) |
| `--space-12` | `6.00rem` | 96px | Major page section vertical padding (desktop) |
| `--space-16` | `8.00rem` | 128px | Hero section top/bottom padding |

---

## 6. Shape, Borders, Depth, and Motion

### 6.1 Corner Radius Scale

| Radius Token | Value | Applied UI Elements |
| :--- | :--- | :--- |
| `--radius-none` | `0px` | Crisp structural containers, ledger headers, full-width dividers |
| `--radius-sm` | `4px` | Buttons, status badges, code snippet blocks, input controls |
| `--radius-md` | `8px` | Container cards, experience blocks, certificate cards |
| `--radius-lg` | `12px` | Hero container, modal sheets, floating feedback banners |
| `--radius-full` | `9999px` | Circular status indicators, avatar fallback |

### 6.2 Elevation & Shadow System
Prefer defined borders and hairline strokes over fuzzy drop shadows. Shadows are reserved for floating navigation and active interactive elements:

```css
:root {
  --border-width-hairline: 1px;
  --border-width-thick: 2px;

  --shadow-none: none;
  --shadow-subtle: 0 1px 2px 0 rgba(24, 32, 33, 0.05);
  --shadow-raised: 0 4px 12px -2px rgba(24, 32, 33, 0.08);
  --shadow-overlay: 0 12px 32px -4px rgba(24, 32, 33, 0.16);
}
```

### 6.3 Focus, Interactive & Motion States
- **Focus Indicator:** All interactive elements (`<a>`, `<button>`, `<input>`) feature a high-contrast focus outline:
  `outline: 2px solid var(--color-focus-ring); outline-offset: 2px;`
- **Hover Transitions:** Crisp, understated transitions: `transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease, transform 150ms ease;`
- **Motion Durations & Easing:**
  - Fast feedback (button hover, click): `150ms cubic-bezier(0.16, 1, 0.3, 1)`
  - Transition (modal, accordion collapse): `250ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Reduced Motion Behavior:** When `@media (prefers-reduced-motion: reduce)` is active:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 7. Signature Visual Motif: "The Specimen Trace"

### 7.1 Concept and Construction
**Motif Name:** *The Specimen Trace*
**Meaning:** A subtle vector device representing a specimen signal line transitioning from a physical laboratory record mark (`[•]`) through a measured horizontal baseline into a discrete data pulse node (`[◆]`).

```
  (A) Sample Marker      (B) Measured Baseline       (C) Data Pulse
    [• Specimen ID] ───────┼───────────────[◆ Data Node]
```

### 7.2 Geometry and Construction Rules
- **Line Stroke Weight:** `1.5px` constant vector stroke.
- **Elements:**
  1. Left-hand circular anchor point (`r="3px"`).
  2. Horizontal hairline rule (`stroke-dasharray="4 2"` for subtle data grid effect or continuous `1px`).
  3. Center tick mark / crosshair (`height="8px"`).
  4. Right-hand diamond data node (`4px x 4px` rotated square).
- **Prohibited Locations:** Must NEVER be superimposed over patient photos, text copy, or used as a button background. Must NEVER be mistaken for a live clinical instrument waveform (e.g. ECG monitor).

### 7.3 SVG Implementation Code

```html
<!-- Specimen Trace Motif (Decorative) -->
<svg class="specimen-trace-motif" width="160" height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <!-- Anchor Dot -->
  <circle cx="8" cy="8" r="3" fill="var(--color-accent)" />
  <!-- Baseline -->
  <line x1="16" y1="8" x2="136" y2="8" stroke="var(--color-border-default)" stroke-width="1.5" stroke-dasharray="4 2" />
  <!-- Center Tick Mark -->
  <line x1="76" y1="4" x2="76" y2="12" stroke="var(--color-brand-primary)" stroke-width="1.5" />
  <!-- Diamond Data Node -->
  <rect x="142" y="5" width="6" height="6" transform="rotate(45 145 8)" fill="var(--color-brand-primary)" />
</svg>
```

---

## 8. Component Inventory and Specifications

### 8.1 Component 1: Global Page Shell & Navigation Bar
- **Purpose:** Sticky top navigation providing brand identifier, main section links, and quick CV action.
- **Anatomy:**
  1. Brand title (`Chidiogo Ozioma Anisiobi`).
  2. Domain subtitle badge (`HEALTH TECH & LAB OPERATIONS`).
  3. Nav links: `[ About ]`, `[ Skills ]`, `[ Experience ]`, `[ Projects ]`, `[ Credentials ]`, `[ Contact ]`.
  4. Action: `[ Download CV ↓ ]` button.
- **States:** Default, Scrolled (background turns `#FFFFFF` or `#F8F6F0` with hairline bottom border `#D8D3C5`), Mobile Drawer Open.
- **Accessibility:** Header wrapped in `<header role="banner">`, nav wrapped in `<nav aria-label="Main Navigation">`. Mobile hamburger button uses `aria-expanded="false|true"` and `aria-controls="mobile-nav-menu"`.

### 8.2 Component 2: Hero Section
- **Purpose:** Primary value proposition establishing healthcare experience bridging to health tech.
- **Anatomy:**
  1. Eyebrow badge: `[ DOMAIN: HEALTHCARE OPERATIONS & DATA SYSTEMS ]`
  2. Main Display H1: *"Building at the intersection of healthcare and technology."*
  3. Narrative paragraph: Max 2-3 sentences referencing laboratory operations, specimen tracking, EHR documentation, and data tools.
  4. Primary Action Group: `[ View Experience ↓ ]` (Primary), `[ Verified Credentials ]` (Secondary), `[ Contact Me ]` (Outline).
  5. Signature Motif divider.

### 8.3 Component 3: Project Preview Card & Empty State

#### Variant A: Planned / Proposed Project Card
- **Anatomy:**
  1. Header tag: `[STATUS: PLANNED]` (Info surface `#EEF6FC`, text `#134063`).
  2. Title: *LIMS Specimen Tracking Workflow Analysis*
  3. Summary: Proposed mapping of specimen turnaround time bottlenecks using SQL & Power BI.
  4. Domain context tag: `Synthetic Data / Workflow Model`.
  5. Action: `[ Repository Pending ↗ ]` (Disabled or informational action).

#### Variant B: Projects Empty State (MVP Baseline)
- **Anatomy:**
  1. Container surface: `--color-surface-subtle` (`#EFECE4`) with `--color-border-default` border.
  2. Specimen trace motif header.
  3. Title (H3): *Health Technology & Data Projects in Preparation*
  4. Body copy: *"Data analysis and health tech case studies are currently being documented and verified. Please check back soon or visit GitHub to view upcoming repositories."*
  5. CTA: `[ Visit GitHub Profile ↗ ]` (Opens `https://github.com/ChidiogoAnisiobi` in new tab).

### 8.4 Component 4: Verified Certification Entry (FutureLearn)
- **Purpose:** Present verified proof of AI & healthcare coursework without exaggerating qualifications.
- **Anatomy:**
  1. Header ledger: `[REF: CERT-2026-FL]` `[VERIFIED SCORE: 88%]`
  2. Course Title (H3): *How Artificial Intelligence Can Support Healthcare*
  3. Institutions list: University of Groningen, University of Tartu, OneVision Healthcare, UMCG.
  4. Key topics list: Trustworthy AI, ethics, bias mitigation, explainability, clinical workflow integration.
  5. Verification CTA: `[ Verify Credential on FutureLearn ↗ ]` pointing to `https://www.futurelearn.com/certificates/0lq64xd` (`target="_blank" rel="noopener noreferrer"`).
  6. Mandatory Disclaimer Callout: *"Proof of learning credential; does not constitute a formal academic degree or clinical licence."*

### 8.5 Component 5: Professional Experience Timeline
- **Purpose:** Reverse-chronological timeline of frontline healthcare and laboratory roles.
- **Anatomy:**
  1. Period / Date tag: `Aug 2024 – Present`
  2. Role Title: **Laboratory Assistant**
  3. Organization & Location: Kosy Medical Laboratory, Lagos, Nigeria
  4. Key responsibilities list (bulleted): Specimen handling, LIMS documentation, quality control support.
  5. Verification note badge: `[Needs confirmation]` for items pending candidate confirmation.

### 8.6 Component 6: Skill Category Matrix
- **Purpose:** Group technical and domain capabilities cleanly without deceptive progress bars.
- **Structure:**
  - *Group 1: Healthcare & Laboratory Operations* (Specimen Tracking, LIMS, EHR Documentation, Medical Record Management, Quality Control).
  - *Group 2: Data Analysis & Tools* (SQL, Python, Power BI, SPSS, Microsoft Excel).
  - *Group 3: Scientific Domain Knowledge* (Microbiology, Healthcare Workflows, Patient Care Support, Responsible Healthcare AI Concepts).

### 8.7 Component 7: Direct Contact Block
- **Purpose:** Direct access to candidate contact links.
- **Anatomy:**
  1. Title: *Initiate Professional Inquiry*
  2. Direct Email Action: `emilyhealthtech@gmail.com` with `mailto:` link.
  3. Profiles: LinkedIn (`https://www.linkedin.com/in/chidiogo-anisiobi-458557274`), GitHub (`https://github.com/ChidiogoAnisiobi`).
  4. Response Expectations Note: *"Open to discussions regarding Health Tech, Healthcare Data Analysis, LIMS, and Clinical Workflow opportunities."*

---

## 9. Page-Level Art Direction

### 9.1 Home / Hero
- **Structure:** Single column hero on warm parchment background (`#F8F6F0`). High-impact editorial serif H1 (`Lora`) with balanced text wrapping. Action group rendered as inline flex on desktop and stacked full-width on mobile.
- **Short/Missing State:** Hero narrative remains self-contained; primary CTAs scroll smoothly to `#experience`, `#certifications`, or open `mailto:`.

### 9.2 About
- **Structure:** Two-column grid on desktop (1/3 summary sidebar with education degree and key domain tags; 2/3 main narrative). Highlighting the bridge from B.Sc. Microbiology & laboratory operations to health data analytics.

### 9.3 Skills
- **Structure:** 3-column grid on desktop, 1-column stack on mobile. Each category card uses a ledger header (`[CAT: 01]`) with categorized pill lists. No numerical percentage bars.

### 9.4 Projects / Case Studies
- **Structure:** Centered section header followed by the respectful empty state container (or 2-column grid when case studies exist). Clearly differentiates completed vs. planned projects.

### 9.5 Experience Timeline
- **Structure:** Left-aligned vertical ledger timeline with hairline divider line (`#D8D3C5`). Role cards display dates in monospaced font, role title in serif/sans, and bullet points detailing verified duties.

### 9.6 Certifications & Continuous Learning
- **Structure:** Featured full-width card with high contrast border (`1px solid #1E4D4F`). Left accent border stroke (`4px solid #1E4D4F`). Includes transcript score, covered topics, verification link, and disclaimer callout.

### 9.7 Contact Section
- **Structure:** Contained footer block with clean typography, direct email mailto link, external profile buttons, and accessibility footer note.

---

## 10. Content and Visual Examples

### 10.1 Verified Copy Snippets
- **Hero Headline:** “Building at the intersection of healthcare and technology.”
- **Supporting Statement:** “I bring experience in laboratory operations, specimen tracking, patient support, and electronic health record documentation, alongside technical skills in SQL, Python, Power BI, and SPSS. I am dedicated to applying practical technology and data tools to streamline healthcare workflows and improve health systems.”
- **Certificate Title:** *How Artificial Intelligence Can Support Healthcare*
- **Credential URL:** `https://www.futurelearn.com/certificates/0lq64xd`
- **Projects Empty State Copy:** “Data analysis and health technology projects are currently being prepared and documented. Please check back soon or visit my GitHub profile to view upcoming repositories.”

---

## 11. Accessibility and Inclusive Design Checklist (WCAG 2.2 AA)

- [ ] **Contrast Verification:** All text meets or exceeds 4.5:1 for normal text and 3:1 for large text/controls.
- [ ] **Keyboard Navigability:** All interactive controls are reachable via `Tab` / `Shift+Tab` with a visible focus ring (`2px solid #1E4D4F`).
- [ ] **Semantic Landmarks:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- [ ] **Heading Order:** Single `<h1>` per page, sequential `<h2>` and `<h3>` headings without skipping levels.
- [ ] **Screen Reader Labels:** All external links clearly announce opening in a new tab (`aria-label="Verify Credential on FutureLearn (opens in new tab)"`).
- [ ] **Touch Target Size:** Minimum `44px x 44px` interactive area for buttons and links on mobile viewports.
- [ ] **Reduced Motion:** All CSS transitions and animations disabled when `prefers-reduced-motion: reduce` is active.
- [ ] **Color Independence:** Statuses combine text labels, borders, and icons with color.

---

## 12. Design Tokens and Developer Handoff

### 12.1 CSS Custom Properties Baseline (`styles.css`)

```css
:root {
  /* Brand & Color Tokens */
  --color-brand-primary: #1E4D4F;
  --color-brand-primary-hover: #153738;
  --color-brand-primary-active: #0E2425;
  --color-accent: #B85A3A;
  --color-accent-hover: #96472D;

  --color-surface-page: #F8F6F0;
  --color-surface-raised: #FFFFFF;
  --color-surface-subtle: #EFECE4;
  --color-surface-overlay: rgba(24, 32, 33, 0.4);

  --color-text-primary: #182021;
  --color-text-secondary: #425355;
  --color-text-muted: #607375;
  --color-text-inverse: #FFFFFF;

  --color-border-default: #D8D3C5;
  --color-border-subtle: #E6E2D6;
  --color-focus-ring: #1E4D4F;

  /* Typography Stack */
  --font-display: "Lora", Georgia, "Times New Roman", serif;
  --font-body: "Inter", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;

  /* Type Scale */
  --text-display: clamp(2.25rem, 5vw, 3.5rem);
  --text-h1: clamp(1.875rem, 4vw, 2.5rem);
  --text-h2: clamp(1.5rem, 3vw, 1.875rem);
  --text-h3: clamp(1.25rem, 2.5vw, 1.5rem);
  --text-body-lg: 1.125rem;
  --text-body: 1.0rem;
  --text-small: 0.875rem;
  --text-label: 0.8125rem;

  /* Spacing Scale */
  --space-1: 0.5rem;
  --space-2: 1.0rem;
  --space-3: 1.5rem;
  --space-4: 2.0rem;
  --space-6: 3.0rem;
  --space-8: 4.0rem;
  --space-12: 6.0rem;

  /* Corner Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

### 12.2 Implementation in Plain HTML/CSS (No Heavy Framework Required)
The design system can be directly implemented using vanilla HTML5, standard CSS variables, and clean vanilla JavaScript without requiring React or Tailwind dependencies.

---

## 13. Design QA and Acceptance Criteria

### 13.1 Acceptance Criteria Checklist
- [ ] **Fact Consistency:** 100% of claims match verified PRD facts; zero unverified job titles.
- [ ] **Responsive Fluidity:** Layout renders without horizontal overflow across 320px, 375px, 768px, 1024px, and 1440px viewports.
- [ ] **Credential Links:** FutureLearn link points directly to `https://www.futurelearn.com/certificates/0lq64xd` with `rel="noopener noreferrer"`.
- [ ] **Empty States:** Respectful empty state renders when no project repositories exist.
- [ ] **Focus Indicators:** Visible 2px focus ring present during keyboard navigation.

### 13.2 Visual QA Matrix

| Viewport Width | Key Component Inspected | Check Items |
| :--- | :--- | :--- |
| `320px` (Mobile) | Header & Navigation | Mobile menu toggle opens drawer smoothly; touch targets ≥ 44px. |
| `375px` (Mobile) | Hero & Buttons | Button stack fits screen without overflow; text wraps comfortably. |
| `768px` (Tablet) | Skills & Certificate | Skill matrix transitions to 2 columns; certificate card readable. |
| `1024px` (Desktop)| Grid & Typography | 12-column grid active; max paragraph width capped at 65ch. |

---

## 14. Decisions, Assumptions, and Next Steps

### 14.1 Design Decisions Made
1. **Name:** Selected "The Measured Trace" as the design direction.
2. **Palette:** Selected Clinical Slate Teal (`#1E4D4F`) with Warm Parchment (`#F8F6F0`) and Terracotta (`#B85A3A`).
3. **Typography:** Selected `Lora` (Serif display) paired with `Inter` (Sans body) and `JetBrains Mono` (Data labels).
4. **Project State:** Defaulted Projects section to an informative empty state component.

### 14.2 Needs Confirmation
1. **Public Email Selection:** Public email should be `emilyhealthtech@gmail.com`.
2. **Employment Status:** Confirm current status at Kosy Medical Laboratory (Aug 2024–Present).
3. **Location Display:** Confirm approval for displaying "Lagos, Nigeria".

### 14.3 Next Implementation Steps
1. Create `css/styles.css` containing all CSS custom properties and baseline typography reset.
2. Create `index.html` with semantic HTML5 structures adhering to section guidelines.
3. Add accessible JS logic for mobile navigation toggle.
4. Perform automated Lighthouse and axe-core accessibility checks.
