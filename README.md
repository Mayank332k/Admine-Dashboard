# Admin Dashboard (Frontend)

A minimal **Admin Dashboard** built using **React + Vite**, focused on
**component-based architecture, state management, and UI-driven logic**.

This project intentionally avoids backend complexity to emphasize
**frontend logic, data flow, and real-world development practices**.

---

## ✨ Features

- 🔐 Admin Login (state-based authentication)
- 👥 User Management
  - Add users
  - Delete users
  - Card-based user listing
- ⚙️ Settings Panel
  - Update Admin ID & Password
  - Changes affect next login session
- 🧭 Sidebar-based navigation
- 🎨 Custom minimal UI using inline styles

---

## 🛠️ Tech Stack

- **React (Hooks)**
- **Vite**
- **JavaScript**
- **Inline CSS / Style Objects**

> No backend, no database — all logic handled via React state.

---

## 🧩 Component Design & Development Approach

This project follows a **practical, real-world component workflow**:

- Each major UI section (Login, Sidebar, Users, Settings) was first
  **designed as a component skeleton** based on layout and UX intent.
- The **component structure and UI layout decisions** were made manually
  (what components exist, what data they receive, and how they interact).
- **AI assistance was used to accelerate component boilerplate creation**
  and reduce repetitive UI-writing time.
- Generated UI code was **intentionally modified and tweaked**
  to match personal design taste and layout preferences.
- All **logic wiring, state management, data flow, and conditional rendering**
  were implemented and debugged manually.

> AI was used as a productivity tool — **not as a decision-maker**.

This approach significantly reduced development time while keeping
**architectural control and logic ownership fully human-driven**.

---

## 🧠 How It Works (Short Explanation)

- The **App component** acts as the central controller:
  - Authentication state
  - Active sidebar tab
  - Admin credentials
  - Users data
- `LoginPage` validates input against shared credential state
- `Settings` updates credentials via lifted state
- Navigation is handled using **conditional rendering** instead of routing
- User data is managed in-memory using React state

---

## 🔁 State Flow (Simplified)