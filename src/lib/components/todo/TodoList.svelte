<script lang="ts">
  import { EMPTY_MESSAGES } from "$lib/constants";
  import type { EmptyReason, Todo } from "$lib/types";
  import AddButton from "../AddButton.svelte";
  import EmptyState from "../ui/EmptyState.svelte";
  import TodoItem from "./TodoItem.svelte";

  interface TodoListProps {
    todos: Todo[];
    openModal: () => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    emptyReason?: EmptyReason;
  }
  let { todos = $bindable(), openModal, deleteTodo, toggleTodo, emptyReason = "empty" }: TodoListProps = $props();
</script>

<div class="todo-container">
  {#if todos.length === 0}
    <EmptyState text={EMPTY_MESSAGES[emptyReason]} />
  {:else}
    <ul class="todo-list">
      {#each todos as todo, i (todo.id)}
        <TodoItem bind:todo={todos[i]} {deleteTodo} {toggleTodo} />
      {/each}
    </ul>
  {/if}
  <div class="add-button-wrapper">
    <AddButton onclick={openModal} />
  </div>
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
