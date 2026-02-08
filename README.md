# OpenDash ⚡

Personal command center for tracking markets, projects, and ideas.

![OpenDash](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)

## Features

- 📈 **Market Tracker** - Monitor positions and watchlist with notes
- 🚀 **Projects Board** - Track project status (MVP, Building, Idea)
- 🧠 **Memory** - Store key decisions and insights
- 📅 **Scheduled Reports** - Automated morning briefings setup
- 🎬 **Content Ideas** - TikTok/YouTube content pipeline

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/io-benjamin/OpenDash)

## Structure

```
src/
├── app/
│   ├── globals.css     # Tailwind + theme variables
│   ├── layout.tsx      # Root layout (dark mode)
│   └── page.tsx        # Main dashboard
├── components/
│   ├── dashboard/      # Dashboard sections
│   │   ├── market-tracker.tsx
│   │   ├── projects-board.tsx
│   │   ├── notes-memory.tsx
│   │   ├── scheduled-reports.tsx
│   │   └── content-ideas.tsx
│   └── ui/             # shadcn/ui components
└── lib/
    └── utils.ts        # Utility functions
```

## Customization

Edit the data arrays in each component to customize:
- `positions` in `market-tracker.tsx`
- `projects` in `projects-board.tsx`
- `notes` in `notes-memory.tsx`
- `schedules` in `scheduled-reports.tsx`
- `ideas` in `content-ideas.tsx`

---

Built with ❤️ using Next.js + shadcn/ui
