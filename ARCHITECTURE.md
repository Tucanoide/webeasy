# Architecture: WebScale AI Landing Page

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API (for Configurator state)
- **Icons**: Lucide React
- **Fonts**: Inter (Sans-serif)

## Project Structure
```text
src/
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components
│   ├── configurator/     # Logic & UI for the pricing tool
│   ├── ui/               # Base design system components
│   └── sections/         # Main landing page sections (Hero, Bento, FAQ)
├── data/                 # JSON files for items/pricing
├── hooks/                # Custom hooks (e.g., useConfigurator)
├── lib/                  # Utilities (Prisma singleton, tailwind-merge)
└── context/              # Context Providers
```

## Performance Guidelines (Hostinger Optimization)
- **SSG**: All static sections are pre-rendered.
- **Client Components**: Isolated to the Configurator and Modal Form.
- **Images**: Next/Image with proper sizing.
- **Process Management**: Avoid heavy server-side processing. Use client-side logic for the configurator.

## Deployment
- **Target**: Hostinger Sites.
- **CI/CD**: TBD (Manual or GitHub Actions).
