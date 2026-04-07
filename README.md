# LaundryOS 

A complete, real-world workflow engine masquerading as a modern laundry application. This system prioritizes a robust state-machine order architecture alongside crisp, differentiated front-end experiences across 3 discrete Vite web apps.

## 🏗️ Architecture

- **Customer App (`apps/customer`)**: Port 3001. A fluid interface for placing and real-time tracking of orders.
- **Outlet Dashboard (`apps/outlet`)**: Port 3002. A control surface tailored for speed, allowing local staff to click-advance state transactions.
- **Admin Panel (`apps/admin`)**: Port 3003. A secure overview portal powered by Recharts, tracking top-line metrics.
- **Backend API (`apps/backend`)**: Port 4000. Node/Express + Prisma over Postgres. Responsible for strict State Machine logic, WebSockets, and background workers via BullMQ.
- **Shared UI (`packages/ui`)**: Unified design system tokens and rigid functional React components ensuring a modern, premium aesthetic without CSS bloat.
- **Typings (`packages/types`)**: Workspace-wide single-source of truth for payload typings and Enums (e.g., `OrderStatus`).

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- pnpm 8+
- Docker & Docker Compose

### Step 1: Start Infrastructure
Boot up the local PostgreSQL database and Redis instance:
```bash
docker-compose up -d
```

### Step 2: Database Setup
Apply Prisma migrations to configure your Postgres schemas:
```bash
cd apps/backend
npx prisma db push
```

### Step 3: Install Dependencies
Run from the root directory to leverage turborepo/pnpm linking:
```bash
pnpm install
```

### Step 4: Run the Monorepo
Start the entire stack (Backend + 3 Frontends) in parallel:
```bash
pnpm dev
```
*(This commands Turborepo to map and spin up the apps across `localhost:3001`, `localhost:3002`, `localhost:3003`, and `localhost:4000`)*

## 🔍 Validation & Workflows

**1. Creating an Order:** Go to the Customer app, navigate to your `/home` route, test the mock check-out interface.
**2. Track State:** The Customer app will drop into WebSocket tracking on `/track/:id`. 
**3. Ops Update:** In the Outlet app `/dashboard`, staff clicking "Advance Status" dispatches an update payload down the websocket tree, immediately rendering onto the Customer UI.
