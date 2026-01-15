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
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-backdrop" onclick={onClose} transition:fade={{ duration: 200 }}>
  <div class="modal" onclick={(e) => e.stopPropagation()} transition:scale={{ duration: 300, start: 0.9, opacity: 0 }}>
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
