<script lang="ts">
  import type { Todo } from "$lib/types";
  import AddButton from "./AddButton.svelte";
  import EmptyState from "./EmptyState.svelte";
  import TodoItem from "./TodoItem.svelte";

  let todos: Todo[] = $props();
</script>

<div class="todo-container">
  {#if todos.length === 0}
    <EmptyState text="Empty..." />
  {:else}
    <ul class="todo-list">
      {#each todos as todo (todo.id)}
        <TodoItem {...todo} />
      {/each}
    </ul>
    <div class="add-button-wrapper">
      <AddButton />
    </div>
  {/if}
</div>

<style lang="scss">
  .todo-container {
    position: relative;
    min-height: 400px;
  }

  .todo-list {
    list-style: none;
    padding: 0;
    margin: 6px 12px;
    padding-bottom: 80px;
  }

  .add-button-wrapper {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
</style>
