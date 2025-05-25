# **Todo App (Next.js + FSD Architecture)**

🚀 **A modern Todo application built with Next.js, TypeScript, and Feature-Sliced Design (FSD) architecture.**

---

## **📌 Features**

-   ✅ Add, edit, delete, comment, and mark todos as complete
-   🎨 Responsive UI with SCSS MODULES
-   🧩 Structured with **FSD (Feature-Sliced Design)**
-   🔍 Full TypeScript support
-   🏗️ State management with **Redux Toolkit**

---

## **📂 Project Structure (FSD)**

```bash
src/
├── app/                  # Next.js app router (pages/layouts)
├── widgets/              # Reusable UI blocks (e.g., todo list)
├── features/             # Business features (e.g., todo management)
├── entities/             # Core business entities (e.g., Todo type)
├── shared/               # Shared utilities & components
└── styles/               # Global styles
```

---

## **🛠️ Tech Stack**

-   **Framework**: Next.js (App Router)
-   **State Management**: Zustand (or Jotai)
-   **Styling**: Tailwind CSS + CSS Modules
-   **Linting**: ESLint + Prettier
-   **Architecture**: FSD (Feature-Sliced Design)

---

## **🚀 Getting Started**

### **1. Install dependencies**

```bash
npm install
# or
yarn install
```

### **2. Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### **3. Build for production**

```bash
npm run build
# or
yarn build
```

---

## **🔗 FSD Principles Applied**

-   **Features** encapsulate business logic.
-   **Widgets** compose features into reusable sections.
-   **Entities** define core data models.
-   **Shared** contains cross-cutting concerns.

---

✨ **Happy coding!** Let’s build scalable apps with FSD!
