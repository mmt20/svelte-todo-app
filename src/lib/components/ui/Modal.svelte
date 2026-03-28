<script lang="ts">
  import type { Snippet } from "svelte";
  import { fade, scale } from "svelte/transition";

  let {
    onClose,
    header,
    body,
    footer,
  }: {
    onClose: () => void;
    header?: Snippet;
    body?: Snippet;
    footer?: Snippet;
  } = $props();

  let modalEl: HTMLDivElement | null = null;

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleBackdropKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClose();
    }
  }

  function handleEscape(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  // Svelte 5 lifecycle
  $effect(() => {
    modalEl?.focus();

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
</script>

<div
  class="modal-backdrop"
  role="button"
  tabindex="0"
  aria-label="Close modal"
  onclick={handleBackdropClick}
  onkeydown={handleBackdropKeydown}
  transition:fade={{ duration: 200 }}
>
  <div
    bind:this={modalEl}
    class="modal"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={(e) => e.stopPropagation()}
    onkeydown={(e) => e.stopPropagation()}
    transition:scale={{ duration: 300, start: 0.9, opacity: 0 }}
  >
    {#if header}
      <div class="modal-header">
        {@render header()}
      </div>
    {/if}

    {#if body}
      <div class="modal-body">
        {@render body()}
      </div>
    {/if}

    {#if footer}
      <div class="modal-footer">
        {@render footer()}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    outline: none;
  }

  .modal {
    display: flex;
    flex-direction: column;
    background: var(--bg-surface);
    padding: 32px;
    border-radius: 20px;
    width: 90%;
    max-width: 420px;
    min-height: 300px;
    outline: none;
  }

  .modal-header {
    margin-bottom: 16px;
    text-align: center;
  }

  .modal-body {
    flex: 1;
  }

  .modal-footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
</style>
