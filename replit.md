# Psicóloga Juliana Mendes - Professional Website

## Overview

This is a professional website for a clinical psychologist (Psicóloga Juliana Mendes) based in Vitória, ES, Brazil. The site serves as a marketing and informational platform for her psychology practice, specializing in Cognitive Behavioral Therapy (CBT), anxiety, depression, and related mental health services. The website offers both in-person consultations at her office in Enseada do Suá and online therapy sessions for clients throughout Brazil.

The project is a static single-page application (SPA) built with React and TypeScript, designed with SEO optimization for local search visibility in the Vitória/Espírito Santo region.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM for client-side navigation (single page with anchor links for sections)
- **State Management**: TanStack React Query for server state (minimal usage in current static site)

### Styling System
- **CSS Framework**: Tailwind CSS with custom design tokens
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Typography**: Custom font families (Playfair Display for headings, Lato for body text)
- **Design Tokens**: HSL-based CSS variables for theming (sage green, cream, warm gray palette)
- **Responsive Design**: Mobile-first approach with container queries

### Component Architecture
- **UI Components**: Located in `src/components/ui/` - reusable shadcn/ui components
- **Section Components**: Located in `src/components/sections/` - page sections (Hero, About, FAQ, etc.)
- **Layout Components**: Header and Footer in `src/components/`
- **Pattern**: Functional components with TypeScript, using forwardRef for UI primitives

### SEO & Structured Data
- **Meta Tags**: Comprehensive SEO, GEO, OpenGraph, and Twitter meta tags in index.html
- **Schema.org**: JSON-LD structured data for LocalBusiness and healthcare services
- **Local SEO**: GEO tags targeting Vitória, ES region with coordinates
- **Robots.txt**: Configured to allow all major search engine crawlers

### Path Aliasing
- `@/*` maps to `./src/*` for clean imports

## External Dependencies

### UI Component Libraries
- **Radix UI**: Full suite of accessible primitives (accordion, dialog, popover, tabs, etc.)
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Variant-based component styling
- **cmdk**: Command menu component

### Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation schema integration

### Utilities
- **date-fns**: Date manipulation
- **clsx/tailwind-merge**: Conditional class name handling
- **embla-carousel-react**: Carousel functionality
- **next-themes**: Theme switching support
- **sonner**: Toast notifications
- **vaul**: Drawer component

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type checking with relaxed settings (noImplicitAny: false)
- **ESLint**: Code linting with React-specific plugins
- **PostCSS/Autoprefixer**: CSS processing

### External Services (Planned/Referenced)
- **WhatsApp Business**: Contact integration via wa.me links
- **Google Maps**: Embedded map for office location
- **Google Business Profile**: Referenced for reviews and local SEO