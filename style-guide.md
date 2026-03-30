# Avera Style Guide
*Extracted from: pinkskies.co — March 2026*

---

## 1. Design Philosophy

Warm, editorial, boutique. A cream-toned palette with black text and pink accents creates a sophisticated but approachable feel — like a curated magazine, not a SaaS dashboard. Minimal chrome, generous whitespace, serif headings for personality, sans-serif body for readability. No drop shadows. Flat surfaces with subtle borders. The design whispers confidence.

---

## 2. Target User + JTBD

- **Primary user:** Independent sponsors, boutique M&A advisors, small PE firms, corp dev teams
- **JTBD:** "When I'm managing multiple deals and prospects, I want a clear command center so I can focus on relationships and closing, not wrestling with tools."

---

## 3. Layout + Grid + Spacing

- **Spacing scale:** 4px base — 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64
- **Grid:** Sidebar fixed at 320px, main area fluid
- **Whitespace:** Generous — 24-28px padding inside cards, 40px main content padding. Sections separated by 24px+. Let content breathe.
- **Border radius:** 4px for cards/containers, 3px for inputs/buttons, 2px for pills. Nearly square — sharp and editorial.

---

## 4. Typography

- **Heading font:** `"Playfair Display", Georgia, serif` — elegant editorial serif
- **Body font:** `"Inter", -apple-system, sans-serif` — clean and modern
- **Sizes:**
  - h1: 28-36px / Playfair / weight 600 / line-height 1.2
  - h2: 22-28px / Playfair / weight 600 / line-height 1.3
  - h3: 16px / Playfair / weight 600 / line-height 1.4
  - Body: 14-15px / Inter / weight 400 / line-height 1.6
  - Small/caption: 13px / Inter / weight 500
  - Labels: 11px / Inter / weight 600 / uppercase / letter-spacing 0.1em
- **Usage:** Serif for headings creates warmth and personality. Sans-serif body stays functional. Uppercase labels with wide tracking for section dividers.

---

## 5. Colors

### Core Palette
| Role | Value | Usage |
|------|-------|-------|
| **Background** | `#f5f0e8` | Warm cream — the signature tone |
| **Surface** | `#faf6ef` | Cards, panels, sidebar |
| **Surface alt** | `#ede8df` | Hover states, secondary surfaces |
| **Border** | `#ddd7cb` | Subtle warm gray dividers |
| **Border hover** | `#c4bdb0` | Interactive borders |

### Text
| Role | Value |
|------|-------|
| **Primary** | `#1a1a1a` | Near-black |
| **Secondary** | `#6b635a` | Warm muted brown-gray |

### Accent
| Role | Value |
|------|-------|
| **Pink accent** | `#e8618c` | Pink highlighter — buttons, links, active states |
| **Accent light** | `#fce8ef` | Selected/active backgrounds |
| **Accent soft** | `rgba(232,97,140,0.08)` | Subtle tints |

### Status Colors
| Role | Value |
|------|-------|
| **Success** | `#4a8c6f` — muted forest green |
| **Warning** | `#c4943a` — warm amber |
| **Error** | `#c4453a` — muted red |

---

## 6. Components

### Buttons
- **Primary:** `background: #1a1a1a; color: #f5f0e8; border-radius: 3px; font-weight: 600;` Hover: `#333`
- **Secondary:** `background: transparent; border: 1px solid #ddd7cb; color: #1a1a1a;` Hover: `background: #ede8df`
- **Destructive:** `background: #c4453a; color: #f5f0e8;`
- No shadows on buttons. Sharp corners (3px radius).

### Inputs
- `border: 1px solid #ddd7cb; border-radius: 3px; background: #f5f0e8;`
- Focus: `border-color: #1a1a1a` — no glow, just a crisp dark border

### Cards
- `background: #faf6ef; border: 1px solid #ddd7cb; border-radius: 4px; padding: 28px;`
- No shadows. Flat and editorial.
- Section headers inside cards: underlined with a bottom border

### Status Pills
- `border-radius: 2px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em;`
- Square-ish — editorial, not bubbly

### Modals
- `background: #faf6ef; border: 1px solid #ddd7cb; border-radius: 4px;`
- Overlay: `rgba(0,0,0,0.4)` with backdrop blur

---

## 7. Content Style

- **Tone:** Warm, confident, refined. Not corporate. Not cute.
- **Labels:** Short, uppercase, widely tracked
- **Microcopy:** Direct and human — "Add prospect", "No meetings yet."
- **Error format:** Plain and helpful

---

## 8. Accessibility

- **Focus states:** Dark border on focus (no glow rings)
- **Contrast:** All text meets WCAG AA on cream backgrounds
- **Touch targets:** Minimum 44x44px

---

## 9. Do / Don't Examples

| Do | Don't |
|----|-------|
| Use cream/warm backgrounds throughout | Use pure white or cool grays |
| Use Playfair Display for headings only | Use serif font for body text or labels |
| Keep corners nearly square (3-4px radius) | Use rounded pill shapes or large border-radius |
| Use pink accent sparingly for key moments | Splash pink everywhere |
| Let whitespace do the work of separating sections | Add heavy borders and dividers between everything |
