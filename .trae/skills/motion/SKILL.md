---
name: "motion"
description: "Designs premium motion/visual polish (SVG, framer-motion, CSS). Invoke when a section’s visuals feel weak or the user asks for advanced animation/elevation."
---

# Motion Design Skill

This skill provides patterns and snippets to elevate visuals with premium motion while preserving performance and accessibility. Use it to add animated connectors, orbit paths, gradient halos, soft particle flows, and parallax glows across sections/components.

## Goals

- Add sophisticated motion without heavy dependencies
- Maintain performance (GPU-friendly transforms, minimal layout thrash)
- Respect accessibility (prefers-reduced-motion, clear focus states)

## Prerequisites

- React 18
- Tailwind/tokens for colors
- framer-motion available in the project

## Principles

- Motion supports meaning: show sequencing, gravity, or data flow
- Keep transitions short and well-eased
- Defer heavy effects behind reduced motion preference
- Use SVG for paths; transforms for orbit; gradients for halos

## Patterns

### 1) Connector Path Animation (Pipeline)

Animate path-length on an SVG path and a small “particle” that travels the route:

```tsx
import { motion } from "framer-motion";

<motion.svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-40">
  <defs>
    <linearGradient id="pipeGrad" x1="0" x2="1">
      <stop offset="0%" stopColor="rgba(61,196,126,0.25)" />
      <stop offset="100%" stopColor="rgba(59,130,246,0.25)" />
    </linearGradient>
  </defs>
  <motion.path
    d="M5,15 C15,5 35,5 45,15 S65,25 75,15 S90,5 95,15"
    stroke="url(#pipeGrad)"
    strokeWidth="0.9"
    strokeDasharray="3 3"
    fill="none"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    transition={{ duration: 1.6, ease: "easeInOut" }}
  />
</motion.svg>
<motion.div
  className="absolute w-2 h-2 rounded-full bg-accent"
  animate={{ left: ["10%", "45%", "75%", "90%"], top: ["40%", "50%", "40%", "45%"] }}
  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
/>
```

### 2) Orbit Rings (Radial Map)

Ring fade-in plus a dot orbiting the core:

```tsx
<motion.svg viewBox="0 0 100 50" className="w-full h-full">
  <defs>
    <linearGradient id="orbitGrad" x1="0" x2="1">
      <stop offset="0%" stopColor="rgba(61,196,126,0.25)" />
      <stop offset="100%" stopColor="rgba(59,130,246,0.25)" />
    </linearGradient>
  </defs>
  <motion.circle cx="50" cy="25" r="18" stroke="url(#orbitGrad)" strokeWidth="0.6" fill="none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} />
  <motion.circle cx="50" cy="25" r="28" stroke="url(#orbitGrad)" strokeWidth="0.6" fill="none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} />
</motion.svg>
<motion.div className="absolute w-2 h-2 rounded-full bg-accent" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} style={{ transformOrigin: "50% 50%" }} />
```

### 3) Layered Funnel (Systems Diagram)

Animated funnel height with gradient slab accents:

```tsx
<motion.div className="h-6 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} />
<motion.div className="w-2 bg-gradient-to-b from-transparent to-primary/40 rounded-b-lg" animate={{ height: ["8px", "40px", "20px"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
```

### 4) Accent Halos & Gradient Outlines

Use a blurred gradient background on hover:

```tsx
<div className="group relative rounded-2xl overflow-hidden">
  <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, rgba(61,196,126,0.25), rgba(59,130,246,0.25))", filter: "blur(14px)" }} />
  {/* card content */}
</div>
```

### 5) Icon Plates (Rounded Rectangle)

Neutral/accent plates:

```tsx
<div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
  <Icon className="w-8 h-8 text-accent" />
</div>
```

## Performance & Accessibility

- Prefer transforms and opacity; avoid layout thrash
- Limit reflow: animate SVG pathLength and strokeDash offsets
- Honor reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .motion-loop { animation: none; transition: none; }
}
```

## When to Invoke

- The user says a section’s visuals look weak and requests elevation
- You’re implementing animated connectors, orbit maps, layered funnels
- You need premium motion polish while maintaining accessibility and performance

## Implementation Flow

1. Identify the narrative (sequence, gravity, or layers)
2. Choose the pattern (pipeline, orbit, or layered)
3. Apply card halos, icon plates, and CTA styling
4. Add subtle motion (path, orbit, funnel); gate under reduced motion
5. Validate keyboard focus and contrast
