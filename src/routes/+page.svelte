<script lang="ts">
  import AddNewNoteModal from "$lib/components/modals/AddNewNoteModal.svelte";
  import TodoList from "$lib/components/todo/TodoList.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import FilterControls from "$lib/components/FilterControls.svelte";
  import { theme } from "$lib/theme/theme.svelte";
  import { todoStore } from "$lib/stores";
  import type { EmptyReason, Todo } from "$lib/types";
  import { onMount } from "svelte";
  import TodoListSkeleton from "$lib/components/todo/TodoListSkeleton.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import { Plus } from "lucide-svelte";

  // Initialize theme and load todos on mount
  onMount(() => {
    theme.init();
    todoStore.load();
  });

  let filteredTodos = $state<Todo[]>([]);
  let searchQuery = $state("");

  // Determine empty reason
  let emptyReason = $derived<EmptyReason>(
    todoStore.todos.length === 0 ? "empty" : searchQuery.trim() ? "search" : "filter"
  );

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
    todoStore.add(newNoteText);
    closeModal();
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
        <FilterControls todos={todoStore.todos} bind:filteredTodos {searchQuery} />
      </div>
    </section>
    <section class="todo-list">
      {#if todoStore.isLoaded === false}
        <TodoListSkeleton count={3} />
      {:else}
        <TodoList todos={filteredTodos} {emptyReason} />
      {/if}
      <div class="add-button-wrapper">
        <Button variant="icon" onclick={openModal}>
          <Plus aria-hidden="true" />
        </Button>
      </div>
    </section>
  </main>

  {#if showModal}
    <AddNewNoteModal {closeModal} {addNote} bind:value={newNoteText} />
  {/if}
</div>

<style lang="scss">
  .app {
    background-color: var(--bg-primary);
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
      color: var(--text-primary);
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

  .todo-list {
    position: relative;
    min-height: 400px;
    padding-bottom: 80px;
  }

  .add-button-wrapper {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
</style>
