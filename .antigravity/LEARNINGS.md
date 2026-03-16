# LEARNINGS.md

## Issue: ChunkLoadError en Hostinger — archivos /_next/static/ retornan 404

**Root Cause:** Se usó `output: 'standalone'` en `next.config.mjs`, que genera un servidor Node.js. El `.htaccess` intentaba hacer proxy a `localhost:3000` con `mod_proxy` de Apache. Hostinger Shared Hosting **no soporta `mod_proxy`**, por lo tanto todos los assets estáticos bajo `/_next/static/` retornaban 404, causando `ChunkLoadError`.

**Solution:** Migrar a `output: 'export'` (SSG puro). El build genera una carpeta `/out/` con HTML/CSS/JS estáticos que se sirven directamente por Apache sin necesidad de Node.js o proxy. El `.htaccess` se reemplaza con reglas de routing estático simples.

**Date:** 2026-03-16

**Universal Rule:** Para Hostinger Shared Hosting, SIEMPRE usar `output: 'export'` en Next.js si el sitio es estático o SPA. NUNCA usar `output: 'standalone'` en Hostinger — requiere `mod_proxy` que no está disponible. El deploy debe ser el contenido de la carpeta `/out/` subido al `public_html/`.
