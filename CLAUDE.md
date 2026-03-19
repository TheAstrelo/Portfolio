# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page portfolio website built with React 19, Vite 8, and Framer Motion. JavaScript (JSX), not TypeScript. No routing library — navigation uses smooth-scroll anchors (`#about`, `#projects`, etc.).

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (output to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint (v9 flat config)

No test framework is configured.

## Architecture

**Entry flow:** `index.html` → `src/main.jsx` → `App.jsx` (wrapped in `ThemeProvider`)

**App layout (top-down):** ScrollProgress → Navbar → Hero → About → Projects → Skills → Contact

**Key directories:**
- `src/components/` — All UI components, with barrel export via `index.jsx`
- `src/context/` — ThemeContext for light/dark mode (Context API + `useEffect` for DOM `data-theme` attribute)
- `src/hooks/` — Custom hooks: `useLocalStorage`, `useMousePosition`, `useReducedMotion`, `useScrollProgress`
- `src/data/content.js` — All portfolio content (personal info, projects, tech stack, nav links). Edit this file to change site content without touching components.

**Animation system:** Framer Motion is used extensively. `AnimatedSection` provides stagger animation wrappers. `FadeIn` uses Intersection Observer for scroll-triggered animations. `ProjectCard` has 3D tilt via `useMousePosition`. `MagneticButton` pulls toward cursor on hover. `ScrollProgress` uses spring physics.

**Theming:** CSS custom properties defined in `src/index.css` (light default, dark via `[data-theme="dark"]`). ThemeContext toggles the attribute and persists preference via `useLocalStorage`. Two font families: DM Serif Display (headings) and Outfit (body), loaded from Google Fonts in `index.html`.

**Styling:** All component styles live in `src/App.css`, global/theme styles in `src/index.css`. Responsive breakpoints at 1024px, 768px, and 480px. `prefers-reduced-motion` is respected throughout (also exposed via `useReducedMotion` hook).

## ESLint Config

Flat config in `eslint.config.js`. Targets `.js`/`.jsx`. Unused variables starting with uppercase are allowed (component imports). React Refresh plugin enforced.
