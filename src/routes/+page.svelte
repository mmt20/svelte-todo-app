<script lang="ts">
  import AddNewNoteModal from "$lib/components/AddNewNoteModal.svelte";
  import FilterControls from "$lib/components/FilterControls.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import TodoList from "$lib/components/TodoList.svelte";
  import { theme } from "$lib/theme/theme.svelte";
  import type { EmptyReason, Todo } from "$lib/types";
  import { onMount } from "svelte";
  import { v4 as uuidv4 } from "uuid";

  // Load theme from localStorage on mount
  onMount(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      theme.darkMode = savedTheme === "true";
    }
    window.document.body.classList.toggle("dark", theme.darkMode);
  });
  // mock data
  let todos = $state<Todo[]>([
    { id: uuidv4(), text: "NOTE #1", completed: false },
    { id: uuidv4(), text: "NOTE #2", completed: true },
    { id: uuidv4(), text: "NOTE #3", completed: false },
  ]);

  let filteredTodos = $state<Todo[]>([]);
  let searchQuery = $state("");

  // Determine empty reason
  let emptyReason = $derived<EmptyReason>(todos.length === 0 ? "empty" : searchQuery.trim() ? "search" : "filter");

  let showModal = $state(false);
  let newNoteText = $state("");

  function openModal() {
    showModal = true;
    newNoteText = "";
  }

  function closeModal() {
    showModal = false;
    newNoteText = "";
  }

  function addNote() {
    if (newNoteText.trim() === "") return;
    todos = [...todos, { id: uuidv4(), text: newNoteText.trim(), completed: false }];

    closeModal();
  }

  function deleteTodo(id: string) {
    todos = todos.filter((t) => t.id !== id);
  }

  function toggleTodo(id: string) {
    todos = todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
  }
</script>

<div class="app">
  <main class="container">
    <header class="header">
      <h1>TODO LIST</h1>
    </header>

    <section class="controls">
      <div class="search-wrapper">
        <SearchBar bind:searchQuery />
      </div>
      <div class="filter-wrapper">
        <FilterControls {todos} bind:filteredTodos {searchQuery} />
      </div>
    </section>

    <section class="todo-list">
      <TodoList bind:todos={filteredTodos} {openModal} {deleteTodo} {toggleTodo} {emptyReason} />
    </section>
  </main>
  {#if showModal}
    <AddNewNoteModal {closeModal} {addNote} bind:value={newNoteText} />
  {/if}
</div>

<style lang="scss">
  .app {
    background-color: var(--bg);
    padding: 32px 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

  .header {
    padding: 32px;
    text-align: center;

    h1 {
      margin: 0;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--text);
    }
  }

  .controls {
    display: flex;
    gap: 16px;

    .search-wrapper {
      flex: 1;
      min-width: 0;
    }
  }

  @media (max-width: 768px) {
    .app {
      padding: 16px 12px;
    }

    .container {
      max-width: 100%;
    }

    .header {
      padding: 20px 16px;

      h1 {
        font-size: 24px;
        letter-spacing: 1px;
      }
    }

    .controls {
      flex-direction: column;
      gap: 12px;

      .search-wrapper,
      .filter-wrapper {
        width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    .app {
      padding: 12px 8px;
    }

    .header {
      padding: 16px 12px;

      h1 {
        font-size: 20px;
      }
    }

    .controls {
      gap: 10px;
    }
  }
</style>
