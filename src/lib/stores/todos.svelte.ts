import { v4 as uuidv4 } from "uuid";
import type { Todo } from "$lib/types";
import { STORAGE_KEYS } from "$lib/constants";

function createTodoStore() {
  let todos = $state<Todo[]>([]);
  let isLoaded = $state(false);

  // Load from localStorage
  function load() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEYS.TODOS);
      if (saved) {
        todos = JSON.parse(saved);
      }
      isLoaded = true;
    }
  }

  // Persist to localStorage
  function persist() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
    }
  }

  return {
    get todos() {
      return todos;
    },
    get isLoaded() {
      return isLoaded;
    },

    add(text: string) {
      if (!text.trim()) return;
      todos = [...todos, { id: uuidv4(), text: text.trim(), completed: false }];
      persist();
    },

    delete(id: string) {
      todos = todos.filter((t) => t.id !== id);
      persist();
    },

    toggle(id: string) {
      todos = todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
      persist();
    },

    update(id: string, text: string) {
      todos = todos.map((t) => (t.id === id ? { ...t, text } : t));
      persist();
    },

    load,
  };
}

export const todoStore = createTodoStore();
