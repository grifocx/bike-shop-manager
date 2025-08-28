# Bike Shop Service Manager

A modern web application for managing bike shop service tickets using Lean manufacturing principles and Kanban board interface.

## Features

- 🚴 Kanban board for service ticket management
- ⏱️ Cycle time tracking
- 📊 WIP (Work In Progress) limits
- 📱 Responsive design
- 🔒 User authentication
- 📈 Reporting and analytics

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- UI: Tailwind CSS
- State Management: React Query
- Drag and Drop: react-beautiful-dnd

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
bike-shop-manager/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable UI components
│   ├── features/       # Feature-based modules
│   ├── lib/            # Utility functions
│   ├── models/         # Data models
│   ├── pages/          # Next.js pages
│   ├── services/       # API services
│   └── types/          # TypeScript type definitions
└── styles/             # Global styles
```
