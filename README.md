# TradeLog Pro 📈

A premium SaaS trading journal — Next.js 15, TypeScript, Tailwind CSS, Supabase, Recharts, Claude AI.

## Quick Start

```bash
npm install
cp .env.local .env.local.example  # fill in your keys
npm run dev
```

## Environment Variables (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
ANTHROPIC_API_KEY=sk-ant-...
```

## Database Setup

Paste `supabase/schema.sql` into Supabase SQL Editor and run it.

## Deploy to Vercel

```bash
npx vercel
# Add env vars in Vercel Dashboard
```

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, API routes)
├── components/       # Sidebar, Topbar, Card, AddTradeModal
├── features/         # Dashboard, Journal, Analytics, AICoach, RiskTools
├── store/            # React Context + useReducer global state
├── lib/              # mockData, supabase client, utils
└── types/            # TypeScript interfaces
supabase/
└── schema.sql        # Full PostgreSQL schema + RLS + views + functions
```

## Features

- Dashboard — equity curve, win/loss, streak, KPIs, recent trades
- Journal — full CRUD, search, filter, sort
- Analytics — Monthly P&L, Weekly P&L, pairs, heatmap, psychology
- AI Coach — Claude-powered chat with trade context
- Risk Tools — position size calculator, R:R calculator, daily monitor
