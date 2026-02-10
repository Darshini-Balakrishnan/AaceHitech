# Replit Agent Guide

## Overview

This is a corporate website for **Aace Hitech Engineering Private Limited**, an industrial manufacturing company based in Coimbatore, India. The company specializes in precision-Machined Components like clevises, knuckle eyes, bolts, rod ends, and other industrial fasteners. The website serves as a product catalog and company information portal with a contact form for inquiries.

The application follows a full-stack TypeScript architecture with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project uses a three-folder monorepo pattern:
- **`client/`** — React SPA frontend
- **`server/`** — Express API backend
- **`shared/`** — Shared types, schemas, and API route contracts used by both client and server

### Frontend (client/)
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library (new-york style)
- **State/Data Fetching**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Animations**: Framer Motion for page transitions and entry animations
- **Icons**: Lucide React
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

Key pages: Home, About, Products (catalog with filtering), ProductDetail, Contact (form submission), 404

**Note**: The Products and ProductDetail pages currently use hardcoded data from `client/src/lib/data.ts` instead of fetching from the API. Custom hooks (`use-products.ts`, `use-contact.ts`) exist for API integration but aren't fully wired up in all pages yet.

### Backend (server/)
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript, run with `tsx` in development
- **Database**: PostgreSQL via `pg` (node-postgres) pool
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod (shared between client and server via `drizzle-zod`)
- **Dev Server**: Vite middleware serves the frontend in development; static files in production
- **Build**: Custom build script using esbuild for server bundle + Vite for client bundle

### Shared Contract Layer (shared/)
- **`shared/schema.ts`**: Drizzle table definitions and Zod insert schemas for `products` and `contactMessages` tables
- **`shared/routes.ts`**: API contract object defining all endpoints, HTTP methods, paths, input schemas, and response schemas — used by both client hooks and server route handlers to maintain type safety

### Database Schema
Two tables in PostgreSQL:
1. **`products`** — id (serial PK), name, category, series, description, specifications (JSONB), imageUrl
2. **`contact_messages`** — id (serial PK), name, email, phone, message, createdAt (timestamp)

Database migrations are managed via `drizzle-kit push` (schema-push approach, no migration files needed for development).

### Storage Pattern
The server uses a storage interface (`IStorage`) with a `DatabaseStorage` implementation, making it possible to swap storage backends. Currently uses direct Drizzle ORM queries against PostgreSQL.

### Build & Deployment
- **Dev**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Build**: `npm run build` — Vite builds client to `dist/public/`, esbuild bundles server to `dist/index.cjs`
- **Production**: `npm start` — serves the built bundle with static file serving
- **DB Push**: `npm run db:push` — pushes schema to database

### Design System
- Industrial/professional theme with deep royal blue (#0056b3) primary color
- Fonts: Inter (body), Oswald (headings/display)
- Sharp corners and uppercase headings for industrial aesthetic
- CSS custom properties for theming via HSL values

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection via `DATABASE_URL` environment variable. Used with Drizzle ORM and node-postgres (`pg`) pool.

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and schema management
- **express** v5 — HTTP server
- **@tanstack/react-query** — Client-side data fetching and caching
- **shadcn/ui** — Pre-built accessible UI components (Radix UI primitives)
- **framer-motion** — Animation library
- **zod** + **drizzle-zod** — Runtime validation shared across client/server
- **wouter** — Client-side routing
- **connect-pg-simple** — Session storage (available but not currently used for auth)

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)

### External Services
- **Google Fonts** — Inter and Oswald font families loaded via CDN
- **Unsplash** — Placeholder images used for product photos and hero sections
- No authentication system is currently implemented
- No payment processing is currently implemented