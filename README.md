# Todo App - Svelte 5

A modern, responsive todo list application built with **Svelte 5**, showcasing the latest features including **runes** for state management and **signal-based reactivity**.

## 🎨 Design

The UI/UX design for this project is available on Figma:

**[View Figma Design File →](https://www.figma.com/community/file/1287029163993360080/simple-todo-list-design)**

## 🚀 Features

- ✅ **Add, Edit, and Delete Todos** - Full CRUD operations with instant updates
- 🔍 **Debounced Search** - Optimized real-time search with 300ms debounce to reduce unnecessary re-renders
- 🎯 **Smart Filter Controls** - View all, active, or completed todos using `$derived` for computed state
- 🌓 **Dark Mode with FOUC Prevention** - Seamless theme switching with Flash of Unstyled Content prevention via inline script in `app.html`
- 💾 **LocalStorage Persistence** - Todos automatically saved and restored across sessions
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Svelte 5 Runes** - Leveraging `$state`, `$derived`, and `$effect` for reactive state management
- 🎨 **Modern UI** - Clean and intuitive interface with smooth animations

## 🛠️ Tech Stack

- **[Svelte 5](https://svelte.dev/)** - Frontend framework with signal-based reactivity
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience
- **[SASS](https://sass-lang.com/)** - Advanced styling with nested rules and variables
- **[Lucide Svelte](https://lucide.dev/)** - Beautiful, consistent icon library
- **[UUID](https://www.npmjs.com/package/uuid)** - Unique ID generation for todos

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 Available Scripts

## 📁 Project Structure

The project follows a **feature-based architecture** for better scalability and maintainability:

```
src/
├── lib/
│   ├── components/          # Feature-organized components
│   │   ├── modals/          # Modal components
│   │   │   └── AddNewNoteModal.svelte
│   │   ├── todo/            # Todo-specific components
│   │   │   ├── TodoItem.svelte
│   │   │   └── TodoList.svelte
│   │   ├── ui/              # Reusable UI components
│   │   │   └── EmptyState.svelte
│   │   ├── AddButton.svelte
│   │   ├── FilterControls.svelte
│   │   └── SearchBar.svelte
│   ├── stores/              # Svelte 5 state stores
│   │   └── todos.svelte.ts  # Todo state with localStorage persistence
│   ├── theme/               # Theme management
│   │   └── theme.svelte.ts  # Dark mode store with FOUC prevention
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── constants/           # App-wide constants
│   │   └── index.ts         # Storage keys and other constants
│   └── assets/              # Static assets (icons, images)
├── util/                    # Utility functions
│   └── debounce.ts          # Debounce utility for search optimization
├── routes/
│   └── +page.svelte         # Main application page
├── app.html                 # HTML template with FOUC prevention
└── app.scss                 # Global styles
```

## 🔧 Technical Implementation

### State Management

The app uses **Svelte 5 runes** for reactive state management:

### FOUC Prevention

Dark mode is applied immediately via an inline script in `app.html` before the page renders, preventing any flash of light mode:

```javascript
const darkMode = localStorage.getItem("darkMode") === "true";
if (darkMode) document.body.classList.add("dark");
```

### LocalStorage Persistence

Todos are automatically persisted to localStorage on every change and restored on app initialization, ensuring data survives page refreshes.

### Debounced Search

Search input uses a custom debounce utility (300ms delay) to optimize performance and reduce unnecessary filtering operations during typing.

### Loading State

A loading spinner is displayed during hydration to prevent the flash of empty state before todos are loaded from localStorage.

## 🔮 Future Enhancements

This project is currently using **mock data** for demonstration purposes. The following features are planned for future releases:

### 🔄 API Integration

- Replace mock todos with **RESTful API endpoints**
- Implement data persistence with a backend database

### 🔐 Authentication

- **User login and registration** system
- **Logout functionality** with session management
- User-specific todo lists
- Secure authentication with JWT or session-based auth

### 📊 Additional Features (Planned)

- Todo categories and tags
- Due dates
- Priority levels

## 🎓 Learning Objectives

This project demonstrates:

- **Svelte 5 Runes** (`$state`, `$derived`, `$effect`)
- **Component composition** and reusability
- **TypeScript** integration with Svelte
- **Reactive state management** without external libraries
- **Modern CSS** with SASS preprocessing
- **Responsive design** principles

---

**Built with ❤️ using Svelte 5**
