# Galvei

Self-hosting, simplified. One install, one dashboard, everything just works.

Galvei is a modern self-hosting platform that gives you a clean GUI to deploy, manage, and monitor Docker containers — no terminal needed. Think of it as your personal cloud, running on your own hardware.

## What is Galvei?

- **Docker Native** — Deploy, manage, and monitor containers from a clean UI
- **Dashboard** — One screen to see everything: CPU, RAM, disk, network, running services
- **App Store** — Jellyfin, Nextcloud, Vaultwarden — one click to install, auto-configured
- **Secure by Default** — Auto SSL, reverse proxy, auth built in

## Tech Stack

| Layer    | Technology        |
|----------|-------------------|
| Backend  | Go                |
| Frontend | Svelte 5 + SvelteKit |
| Database | SQLite            |
| Runtime  | Docker            |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Development

```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build

```sh
# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte              # Global styles, fonts
│   └── +page.svelte                # Page composition
└── lib/
    └── components/
        ├── Hero.svelte             # Hero section + waitlist
        ├── Roadmap.svelte          # Timeline roadmap
        ├── Features.svelte         # Features grid
        ├── Footer.svelte           # Footer
        ├── PaperGrain.svelte       # Paper grain texture overlay
        └── LetterMatrix.svelte     # Interactive canvas background
```

## Roadmap

| Phase | Name                      | Timeline    |
|-------|---------------------------|-------------|
| 00    | Startup                   | Month 0-1   |
| 01    | Foundation                | Month 1-2   |
| 02    | Core Dashboard            | Month 2-3   |
| 03    | App Store & Files         | Month 3-4   |
| 04    | Networking & Security     | Month 5-6   |
| 05    | Multi-User & Backups      | Month 6-8   |
| 06    | API & Mobile              | Month 8-10  |
| 07    | Enterprise & Compliance   | Month 10-14 |
| 08    | Analytics & Optimization  | Month 14-18 |
| 09    | Platform Ecosystem        | Month 18+   |

## Hardware Requirements

Any Linux machine — a Raspberry Pi 4, an old laptop, a VPS, or a dedicated server. 2GB RAM minimum.

## License

[Business Source License 1.1](LICENSE) — free for personal use, non-profits, education, and small businesses (<3 employees or <$45k revenue). Commercial license required for all other production use. Converts to Apache 2.0 on 2030-02-20.

## Author

Made in Europe by [Jessie](https://jessimka.com)
