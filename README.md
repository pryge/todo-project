# 🚀 Premium Todo Application

A modern, full-stack Task Management application built with best practices, high performance, and an exceptional User Experience in mind.

## 🛠️ Technology Stack

**Frontend:**
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Shadcn UI
- **State Management:** Zustand (Global State) + TanStack React Query (Server State)
- **Forms & Validation:** React Hook Form + Zod
- **Animations:** @formkit/auto-animate

**Backend:**
- **Framework:** NestJS
- **Database ORM:** Prisma
- **Database:** SQLite (with `better-sqlite3` and Prisma 7 driver adapters)
- **Authentication:** Passport.js + JWT (JSON Web Tokens)
- **Validation:** class-validator

## 📂 Architecture

The frontend strictly follows the **Feature-Sliced Design (FSD)** methodology, making the codebase highly scalable and maintainable.

```text
client/src/
├── app/                  # Next.js App Router (pages and layouts)
├── components/           # Shared global components (UI kits, layout headers, spinners)
├── features/             # Feature-based modules
│   ├── auth/             # Authentication logic (Login/Register forms, API calls, Types)
│   └── tasks/            # Task management (Task lists, Modals, Cards, API calls)
├── lib/                  # Utility functions (Axios instance, Tailwind cn)
└── store/                # Global state stores (Zustand Auth Store)

server/src/
├── auth/                 # JWT Authentication, logic, Passport strategies, Auth Guards
├── prisma/               # Prisma database connection service
└── tasks/                # Tasks CRUD controllers and services
```

## ✨ Features
- **Secure Authentication:** JWT-based login and registration with Bcrypt password hashing.
- **Persistent Sessions:** User sessions persist seamlessly using Zustand's `persist` middleware.
- **Task Management:** Full CRUD operations for Tasks (Create, Read, Update, Delete).
- **Smooth UI/UX:** 
  - Dynamic status filtering (To Do, In Progress, Done).
  - Silky smooth 60 FPS layout transitions using AutoAnimate.
  - Interactive Task Cards (1-click status toggling on the icon).
- **Optimistic Updates:** React Query handles background fetching and cache invalidation.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pryge/todo-project.git
   cd Todo-project
   ```

2. **Backend Setup:**
   ```bash
   cd server
   npm install
   # Create a .env file with DATABASE_URL="file:./dev.db" and JWT_SECRET="your-secret"
   npx prisma db push
   npm run start:dev
   ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:3000` to see the application!
