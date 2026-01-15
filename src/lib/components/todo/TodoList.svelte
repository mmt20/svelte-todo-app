<script lang="ts">
  import { EMPTY_MESSAGES } from "$lib/constants";
  import type { EmptyReason, Todo } from "$lib/types";
  import { fade, fly, scale } from "svelte/transition";
  import EmptyState from "../ui/EmptyState.svelte";
  import TodoItem from "./TodoItem.svelte";

  interface TodoListProps {
    todos: Todo[];
    emptyReason?: EmptyReason;
  }
  let { todos, emptyReason = "empty" }: TodoListProps = $props();
</script>

<div class="todo-container">
  {#if todos.length === 0}
    <div class="empty-state" in:scale={{ duration: 600 }}>
      <EmptyState text={EMPTY_MESSAGES[emptyReason]} />
    </div>
  {:else}
    <ul class="todo-list" in:fly={{ y: -20, duration: 150 }} out:fade={{ duration: 200 }}>
      {#each todos as todo (todo.id)}
        <TodoItem {todo} />
      {/each}
    </ul>
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
  }
</style>
