# LaundryOS — Build Task Tracker

## Phase 1: Scaffold & Infrastructure
- [x] Create task tracker
- [x] Initialize monorepo (pnpm workspaces + Turborepo)
- [x] Docker Compose (PostgreSQL + Redis)
- [x] Shared packages: types, ui

## Phase 2: Backend
- [x] Express + TypeScript server setup
- [x] Prisma schema + migrations
- [x] Auth service (Firebase OTP + JWT)
- [x] Auth routes + middleware
- [x] Order service (state machine)
- [x] Order routes
- [x] Payment service (mocked)
- [x] Payment routes
- [x] Notification service (BullMQ async)
- [x] Socket.IO real-time events
- [x] Admin routes

## Phase 3: Customer App
- [x] Vite + React + TypeScript setup
- [x] Login (OTP flow)
- [x] Home (service selection + outlet picker + slot)
- [x] Order summary + checkout
- [x] Track order (WebSocket real-time)
- [x] Order history

## Phase 4: Outlet Dashboard
- [x] Vite + React + TypeScript setup
- [x] Staff login
- [x] Dashboard (orders by status, one-click update)
- [x] Order detail view

## Phase 5: Admin Panel
- [x] Vite + React + TypeScript setup
- [x] Admin login
- [x] Overview (KPI + charts)
- [x] Outlet management
- [x] Orders (all outlets)
- [x] User management

## Phase 6: Polish & Verify
- [x] End-to-end smoke test (order lifecycle)
- [x] WebSocket real-time verification
- [x] README + run instructions
