# Todo App - Svelte 5

A modern, responsive todo list application built with **Svelte 5** , showcasing the latest features including **runes** for state management and **signal-based reactivity**.

## 🎨 Design

The UI/UX design for this project is available on Figma:

**[View Figma Design File →](https://www.figma.com/community/file/1287029163993360080/simple-todo-list-design)**

## 🚀 Features

- ✅ **Add, Edit, and Delete Todos** - Full CRUD operations
- 🔍 **Search Functionality** - Quickly find todos with real-time search
- 🎯 **Filter Controls** - View all, active, or completed todos
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Svelte 5 Runes** - Leveraging `$state`, `$derived`, and `$effect` for reactive state management
- 🎨 **Modern UI** - Clean and intuitive interface with smooth animations

## 🛠️ Tech Stack

- **[Svelte 5](https://svelte.dev/)** - Frontend framework with signal-based reactivity
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[SASS](https://sass-lang.com/)** - Advanced styling with nested rules and variables
- **[Lucide Svelte](https://lucide.dev/)** - Beautiful icon library
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server

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

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   │   ├── AddButton.svelte
│   │   ├── EmptyState.svelte
│   │   ├── FilterControls.svelte
│   │   ├── Modal.svelte
│   │   ├── SearchBar.svelte
│   │   ├── TodoItem.svelte
│   │   └── TodoList.svelte
│   ├── stores/              # Global state stores
│   │   └── theme.svelte.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   └── assets/              # Static assets (icons, images)
├── routes/
│   └── +page.svelte         # Main application page
└── app.html                 # HTML template
```

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
