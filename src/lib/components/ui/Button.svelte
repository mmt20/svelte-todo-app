<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    onclick,
    variant = "primary",
    type = "button",
    disabled = false,
    children,
  }: {
    onclick?: () => void;
    variant?: "primary" | "outline" | "icon";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children: Snippet;
  } = $props();
</script>

<button class="btn {variant}" {type} {disabled} {onclick}>
  {@render children()}
</button>

<style lang="scss">
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition:
      background-color 0.2s ease,
      box-shadow 0.2s ease;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  /* PRIMARY */
  .primary {
    padding: 10px 24px;
    border-radius: 6px;
    background-color: var(--accent-primary);
    color: var(--text-white);

    &:hover {
      background-color: var(--accent-hover);
    }
  }

  /* OUTLINE (Cancel) */
  .outline {
    padding: 10px 20px;
    border-radius: 6px;
    background: transparent;
    border: 2px solid var(--accent-primary);
    color: var(--accent-primary);

    &:hover {
      background-color: var(--accent-hover);
      color: var(--text-white);
    }
  }

  /* ICON */
  .icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--accent-primary);
    color: var(--text-white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: var(--accent-hover);
      box-shadow: 0 4px 8px var(--accent-shadow);
    }
  }
</style>
