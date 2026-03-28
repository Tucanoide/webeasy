# LEARNINGS.md

## Issue: ChunkLoadError en Hostinger — archivos /_next/static/ retornan 404

**Root Cause:** Se usó `output: 'standalone'` en `next.config.mjs`, que genera un servidor Node.js. El `.htaccess` intentaba hacer proxy a `localhost:3000` con `mod_proxy` de Apache. Hostinger Shared Hosting **no soporta `mod_proxy`**, por lo tanto todos los assets estáticos bajo `/_next/static/` retornaban 404, causando `ChunkLoadError`.

**Solution:** Migrar a `output: 'export'` (SSG puro). El build genera una carpeta `/out/` con HTML/CSS/JS estáticos que se sirven directamente por Apache sin necesidad de Node.js o proxy. El `.htaccess` se reemplaza con reglas de routing estático simples.

**Date:** 2026-03-16

**Universal Rule:** Para Hostinger Shared Hosting, SIEMPRE usar `output: 'export'` en Next.js si el sitio es estático o SPA. NUNCA usar `output: 'standalone'` en Hostinger — requiere `mod_proxy` que no está disponible. El deploy debe ser el contenido de la carpeta `/out/` subido al `public_html/`.

## Issue: Test failures with Vitest and framer-motion components

**Root Cause:** Vitest (jsdom) fails to properly render or animate `framer-motion` components like `motion.div` or `AnimatePresence`. Additionally, responsive Tailwind classes (like `hidden sm:block`) cause elements to be hidden in the default small JSDOM window, and common browser APIs like `IntersectionObserver` are not available by default.

**Solution:** 
1. Create a `tests/setup.tsx` that mocks `framer-motion` components to render as basic HTML tags.
2. Manually mock `IntersectionObserver` using a class in `setup.tsx`.
3. Use `data-testid` for critical testing elements and avoid using `getByText` on elements that might be hidden by responsive classes in the test environment.
4. Use flexible regex (e.g., `/1.*800/`) for matching prices formatted with `toLocaleString()` to overlook locale differences (commas vs spaces).

**Date:** 2026-03-28

**Universal Rule:** For Next.js projects with Tailwind and Framer Motion, always mock `motion` components and browser APIs in `setup.tsx`. Prefer `data-testid` over text matching for elements with responsive visibility.
