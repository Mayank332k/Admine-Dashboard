# Admin Dashboard (Frontend)

A minimal **Admin Dashboard** built using **React + Vite**, focused on
**component-based architecture, state management, and UI-driven logic**.

This project is frontend-only and intentionally avoids backend complexity
to highlight real-world frontend development practices.

---

## 🔗 Demo

Live Demo:  
👉 https://mayank332k.github.io/Admine-Dashboard/

> Designed primarily for desktop view.

---

## 🚀 How to Use

1. Open the demo link.
2. Login using the default credentials:
# Admin ID: Admin
# Password: Admin123

3. Use the sidebar to navigate between:
- Dashboard
- Users
- Settings
4. In **Users**:
- Add new users
- Delete existing users
5. In **Settings**:
- Change Admin ID & Password
- Updated credentials apply on the **next login**

> All data is stored in React state only and resets on page refresh.

---

## ✨ Features

- State-based Admin Authentication
- Sidebar navigation using conditional rendering
- User Management
- Add users
- Delete users
- Card-based user layout
- Settings Panel
- Update Admin credentials
- Clean, minimal UI using inline styles

---

## 🛠️ Tech Stack

- React (Hooks)
- Vite
- JavaScript (ES6+)
- Inline CSS / Style Objects
- GitHub Pages (Deployment)

---

## 🧩 Component Design & Development Approach

- UI was first planned as **component skeletons** based on layout and UX intent.
- Component structure, data flow, and responsibilities were **designed manually**.
- **AI was used selectively** to speed up repetitive UI scaffolding and boilerplate.
- Generated UI code was **modified and tweaked** to match personal design taste.
- All **logic wiring, state management, conditional rendering, and debugging**
were implemented manually.

> AI was used as a productivity accelerator — not as a logic or architecture decision-maker.

---

## 🧠 Architecture Overview

- `App.jsx` acts as the central controller:
- Authentication state
- Active sidebar tab
- Admin credentials
- Users data
- `LoginPage` validates credentials against shared state
- `Settings` updates Admin ID & Password via lifted state
- Navigation is handled without React Router using conditional rendering
- User data is managed fully in-memory using React state

---

## 📌 Notes

- No backend or database is used
- No routing is implemented (admin panels are not URL-driven)
- Project focuses on **frontend logic, structure, and clarity**
