<script lang="ts">
  import { Trash, SquarePen } from "lucide-svelte";
  let completed: boolean = false;
  export let text: string = "NOTE #1  ";
</script>

<li class="todo-item" class:completed>
  <label class="checkbox-wrapper">
    <input
      type="checkbox"
      bind:checked={completed}
      aria-checked={completed}
      aria-label={`Mark "${text}" as completed`}
    />
    <span class="checkmark"></span>
    <span class="sr-only">{text}</span>
  </label>

  <span class="todo-text">{text}</span>

  <div class="actions">
    <button class="action-btn edit">
      <SquarePen />
    </button>
    <button class="action-btn delete">
      <Trash />
    </button>
  </div>
</li>

<style lang="scss">
  .todo-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 12px;
    margin-bottom: 12px;
    border-bottom: 2px solid var(--border);
    transition: border-color 0.2s ease;

    &:hover,
    &:focus-within {
      border-color: var(--accent);
    }

    &.completed {
      .todo-text {
        text-decoration: line-through;
        color: var(--muted);
      }

      .checkmark {
        background: var(--accent);
        border-color: var(--accent);

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
      border: 2px solid var(--border);
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
        border: solid #fff;
        border-width: 0 2.5px 2.5px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
    }

    &:hover .checkmark {
      border-color: var(--accent);
    }

    &:active .checkmark {
      transform: scale(0.95);
    }

    input:focus-visible ~ .checkmark {
      outline: 3px solid var(--accent);
      outline-offset: 2px;
      transform: scale(1.05);
    }
  }

  .todo-text {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--text);
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

    /* Show actions on hover or keyboard focus */
    .todo-item:hover &,
    .todo-item:focus-within & {
      opacity: 1;
    }
  }

  .action-btn {
    padding: 8px;
    background: transparent;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #666;

    &:hover,
    &:focus {
      outline: none;
    }

    &.edit:hover,
    &.edit:focus {
      color: #6c63ff;
      background: rgba(108, 99, 255, 0.1);
    }

    &.delete:hover,
    &.delete:focus {
      color: #ff6b6b;
      background: rgba(255, 107, 107, 0.1);
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

    .action-btn {
      padding: 6px;
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

    .action-btn {
      padding: 6px;

      :global(svg) {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
