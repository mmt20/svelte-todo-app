<script lang="ts">
  import { theme } from "$lib/theme/theme.svelte";
  import type { Filter, Todo } from "$lib/types";
  import { Moon, Sun } from "lucide-svelte";
  import Button from "../ui/Button.svelte";

  function toggleTheme() {
    theme.toggle();
  }
  let {
    todos,
    filteredTodos = $bindable([]),
    searchQuery = "",
  }: { todos: Todo[]; filteredTodos: Todo[]; searchQuery: string } = $props();
  let filter = $state<Filter>("ALL");

  let computedFilteredTodos = $derived.by(() => {
    let result = todos;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((todo: Todo) => todo.text.toLowerCase().includes(query));
    }

    // Apply completion filter
    if (filter === "INCOMPLETE") {
      result = result.filter((todo: Todo) => !todo.completed);
    } else if (filter === "COMPLETE") {
      result = result.filter((todo: Todo) => todo.completed);
    }

    return result;
  });

  $effect(() => {
    filteredTodos = computedFilteredTodos;
  });
</script>

<div class="filter-group">
  <select class="filter-select" bind:value={filter}>
    <option value="ALL">All</option>
    <option value="COMPLETE">Complete</option>
    <option value="INCOMPLETE">Incomplete</option>
  </select>

  <Button onclick={toggleTheme} type="button" size="default" aria-label="Toggle Theme">
    {#if theme.darkMode}
      <Sun />
    {:else}
      <Moon />
    {/if}
  </Button>
</div>

<style lang="scss">
  .filter-group {
    display: flex;
    gap: 8px;
  }

  .filter-select {
    padding: 8px 12px;
    border: 2px solid var(--accent-primary);
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: var(--accent-primary);
    color: var(--text-white);

    option {
      background-color: var(--accent-primary);
      color: var(--text-white);
    }

    &:hover {
      background-color: var(--accent-hover);
    }

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
    }
  }

  @media (max-width: 768px) {
    .filter-group {
      width: 100%;
      justify-content: space-between;
    }

    .filter-select {
      flex: 1;
      font-size: 13px;
      max-width: calc(100% - 50px);

      option {
        font-size: 13px;
        padding: 6px 10px;
      }
    }
  }

  @media (max-width: 480px) {
    .filter-select {
      padding: 7px 10px;
      font-size: 12px;
      max-width: calc(100% - 45px);

      option {
        font-size: 12px;
        padding: 6px 8px;
      }
    }
  }

  @media (max-width: 360px) {
    .filter-select {
      padding: 6px 8px;
      font-size: 11px;
      max-width: calc(100% - 40px);

      option {
        font-size: 11px;
        padding: 5px 6px;
      }
    }
  }
</style>
