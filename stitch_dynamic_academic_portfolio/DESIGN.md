# Design System Document: The Scholarly Spectrum

## 1. Overview & Creative North Star: "The Living Archive"
This design system is a sophisticated evolution of traditional academic aesthetics. It moves away from the static, "dusty library" feel of classic portfolios toward a **"Living Archive"**—a space that feels curated and authoritative, yet pulsing with intellectual energy. 

The Creative North Star is **The Digital Curator**. We treat the screen not as a flat canvas, but as an editorial spread. We break the "template" look by utilizing intentional asymmetry—where large serif headings might hang into the margin—and overlapping elements that mimic the way a scholar lays out reference materials on a desk. We eschew rigid grids in favor of "breathable" layouts that prioritize white space as a functional tool for focus.

---

## 2. Colors: Tonal Depth & Vibrancy
The palette is rooted in deep, scholarly tones (Indigo and Teal) but energized by a "Golden Hour" Amber.

### Palette Strategy
- **Primary (`#0b1a7d`):** The "Deep Indigo." Use this for authoritative actions and key brand moments.
- **Secondary (`#006a6a`):** The "Scholar’s Teal." Used for intellectual highlights and secondary navigation.
- **Tertiary (`#3b2600` / `#ffba38`):** The "Warm Amber." This is our "high-energy" accent, used sparingly to draw the eye to critical insights or "New" status indicators.
- **Surface & Background (`#f3faff`):** A cool, crisp base that feels more modern and "active" than a warm cream.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined through background color shifts. For example, a `surface-container-low` section sitting directly on a `surface` background creates a clear, sophisticated transition without the visual clutter of a "box."

### The "Glass & Gradient" Rule
To elevate the "Curated Thesis" vibe, interactive elements (like hovering cards or navigation bars) should utilize **Glassmorphism**. Use semi-transparent `surface` colors with a `backdrop-filter: blur(12px)`. 
- **Signature Gradient:** For Hero backgrounds or primary CTAs, use a subtle linear gradient transitioning from `primary` (#0b1a7d) to `primary_container` (#283593) at a 135-degree angle. This adds "soul" and depth that flat hex codes cannot provide.

---

## 3. Typography: The Editorial Voice
We pair the intellectual weight of a serif with the modern efficiency of a sans-serif.

- **Display & Headlines (Newsreader):** This serif is our "Voice of Authority." `display-lg` (3.5rem) should be used for core thesis statements or portfolio titles. Use tight letter-spacing (-0.02em) for a high-end editorial feel.
- **Body & Labels (Manrope):** Our "Functional Engine." Manrope provides a clean, neutral contrast to the expressive Newsreader. `body-lg` (1rem) is the standard for long-form reading to ensure maximum legibility.
- **Hierarchy as Identity:** Use a dramatic scale jump between `headline-lg` and `body-lg`. This "High-Contrast" typography is what prevents the design from looking like a generic template.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a feeling, not a shadow.

- **The Layering Principle:** Stack surfaces to create hierarchy. 
  - *Base:* `surface`
  - *Sectioning:* `surface-container-low`
  - *Interactive Cards:* `surface-container-lowest` (White) to make them "pop" against the tinted background.
- **Ambient Shadows:** Only use shadows on "floating" components (Modals, Dropdowns). Use the `on-surface` color at 5% opacity with a 32px blur and 8px Y-offset. It should feel like a soft glow, not a dark edge.
- **The "Ghost Border":** For accessibility on inputs, use `outline-variant` at **20% opacity**. It should be barely perceptible, serving only to guide the eye.
- **Backdrop Blur:** Use `backdrop-filter: blur(16px)` on any element using `surface-container-highest` with 80% alpha transparency to create the "frosted glass" effect.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on-primary` text. Use a `xl` (0.75rem) corner radius. On hover, apply the Signature Gradient.
- **Secondary:** Glass-style. `surface-container-high` at 60% opacity with a backdrop blur.
- **Tertiary:** Text-only in `primary` with a `title-sm` weight.

### Cards & Scholarly Lists
- **The Card Rule:** No borders. No dividers. 
- Use `surface-container-lowest` for the card body. 
- Separate list items using 24px of vertical white space and a subtle background shift on hover (`surface-container-high`).
- For "Thesis Chapters" or "Project Lists," use an asymmetrical layout: Image on the left (40% width), Typography on the right (60% width), bleeding off the grid edge.

### Chips (Research Tags)
- Use `secondary_container` for the background and `on_secondary_container` for text. 
- Shape: `full` (9999px) for a "pill" look that contrasts against the sharper `md` corners of cards.

### Input Fields
- Background: `surface-container-low`.
- Bottom-border only: 2px wide using `primary` at 10% opacity, becoming 100% opaque on focus. This mimics a "lined notebook" aesthetic.

---

## 6. Do’s and Don’ts

### Do:
- **Do** allow headlines to overlap image containers slightly (z-index manipulation) to create an "assembled" feel.
- **Do** use the `tertiary_fixed_dim` (Amber) for small, high-impact details like notification dots or "Key Insight" icons.
- **Do** utilize `surface_bright` for main content areas to keep the "Light Mode" feeling energetic and fresh.

### Don’t:
- **Don’t** use pure black (#000000) for text. Always use `on_surface` (#071e27) to maintain the sophisticated indigo-tinted depth.
- **Don’t** use standard 1px dividers. If you must separate content, use a 48px or 64px gap (Spacing Scale) instead.
- **Don’t** use "drop shadows" on every card. Rely on the "Surface Hierarchy" (Low vs. High containers) to define the layout.