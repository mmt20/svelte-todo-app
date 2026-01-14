<script lang="ts">
  import type { Todo } from "$lib/types";
  import { todoStore } from "$lib/stores";
  import { Trash, SquarePen, Check, X } from "lucide-svelte";
  import Button from "../ui/Button.svelte";

  interface TodoProps {
    todo: Todo;
  }
  let { todo }: TodoProps = $props();

  let isEditing = $state(false);
  let editText = $state("");

  function startEditing() {
    isEditing = true;
    editText = todo.text;
  }

  function saveEdit() {
    if (editText.trim()) {
      todoStore.update(todo.id, editText.trim());
    }
    isEditing = false;
  }

  function cancelEdit() {
    isEditing = false;
    editText = "";
  }
</script>

<li class="todo-item" class:completed={todo.completed}>
  <label class="checkbox-wrapper">
    <input
      type="checkbox"
      checked={todo.completed}
      onchange={() => todoStore.toggle(todo.id)}
      aria-checked={todo.completed}
      aria-label={`Mark ${todo.text} as completed`}
    />
    <span class="checkmark"></span>
    <span class="sr-only">{todo.text}</span>
  </label>

  {#if isEditing}
    <input
      type="text"
      class="edit-input"
      bind:value={editText}
      onkeydown={(e) => {
        if (e.key === "Enter") saveEdit();
        if (e.key === "Escape") cancelEdit();
      }}
    />
  {:else}
    <span class="todo-text">{todo.text}</span>
  {/if}

  <div class="actions">
    {#if isEditing}
      <Button variant="success" size="icon" rounded="rounded-md" onclick={saveEdit} aria-label="Save">
        <Check />
      </Button>
      <Button variant="cancel" size="icon" rounded="rounded-md" onclick={cancelEdit} aria-label="Cancel">
        <X />
      </Button>
    {:else}
      <Button variant="ghost" size="icon" rounded="rounded-md" onclick={startEditing} aria-label="Edit">
        <SquarePen />
      </Button>
      <Button
        variant="cancel"
        size="icon"
        rounded="rounded-md"
        onclick={() => todoStore.delete(todo.id)}
        aria-label="Delete"
      >
        <Trash />
      </Button>
    {/if}
  </div>
</li>

<style lang="scss">
  .todo-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 12px;

    border-bottom: 2px solid var(--border-primary);
    transition: border-color 0.2s ease;
    &:last-child {
      border-bottom: none;
    }
    &:hover,
    &:focus-within {
      border-color: var(--accent-primary);
    }

    &.completed {
      .todo-text {
        text-decoration: line-through;
        color: var(--text-secondary);
      }

      .checkmark {
        background: var(--accent-primary);
        border-color: var(--accent-primary);

        &::after {
          opacity: 1;
        }
      }
    }
  }

  .checkbox-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    cursor: pointer;
    flex-shrink: 0;

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    input {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      width: 22px;
      height: 22px;
      border: 2px solid var(--border-primary);
      background: transparent;
      position: relative;
      transition:
        background 0.4s ease,
        border-color 0.1s ease,
        transform 0.1s ease;

      &::after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 12px;
        border: solid var(--text-white);
        border-width: 0 2.5px 2.5px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
    }

    &:hover .checkmark {
      border-color: var(--accent-primary);
    }

    &:active .checkmark {
      transform: scale(0.95);
    }

    input:focus-visible ~ .checkmark {
      outline: 3px solid var(--accent-primary);
      outline-offset: 2px;
      transform: scale(1.05);
    }
  }

  .todo-text {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--text-primary);
    word-break: break-word;
    transition:
      color 0.2s ease,
      text-decoration 0.2s ease;
  }

  .actions {
    display: flex;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;

    .todo-item:hover &,
    .todo-item:focus-within & {
      opacity: 1;
    }
  }
  .edit-input {
    flex: 1;
    padding: 8px;
    border: 2px solid var(--accent-primary);
    border-radius: 6px;
    font-size: 16px;
    background: var(--bg-input);
    color: var(--text-input);

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--accent-shadow);
    }
  }

  @media (max-width: 768px) {
    .todo-item {
      gap: 12px;
      padding: 12px 10px;
    }

    .todo-text {
      font-size: 15px;
    }

    .actions {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    .todo-item {
      gap: 10px;
      padding: 10px 8px;
    }

    .todo-text {
      font-size: 14px;
    }

    .checkbox-wrapper {
      padding: 4px;

      .checkmark {
        width: 20px;
        height: 20px;

        &::after {
          left: 5px;
          top: 2px;
          width: 5px;
          height: 10px;
        }
      }
    }
  }
</style>
