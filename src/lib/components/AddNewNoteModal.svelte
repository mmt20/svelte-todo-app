<script lang="ts">
  let {
    closeModal,
    addNote,
    value = $bindable(""),
  }: { closeModal: () => void; addNote: () => void; value: string } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-backdrop" onclick={closeModal}>
  <div class="modal" onclick={(e) => e.stopPropagation()}>
    <h2>NEW NOTE</h2>
    <input type="text" placeholder="Input your note..." bind:value />
    <div class="modal-actions">
      <button class="btn btn-cancel" onclick={closeModal}> CANCEL </button>
      <button class="btn btn-apply" onclick={addNote}> APPLY </button>
    </div>
  </div>
</div>

<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    display: flex;
    flex-direction: column;
    background-color: var(--surface);
    padding: 36px 32px 28px;
    border-radius: 20px;
    box-shadow: 0 10px 30px var(--shadow-prim);
    width: 90%;
    max-width: 420px;
    min-height: 360px;
    box-sizing: border-box;

    @media (max-width: 480px) {
      padding: 24px;
      width: 95%;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 24px;
    color: var(--text);
    text-align: center;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  input[type="text"] {
    width: 100%;
    padding: 14px 16px;
    margin-bottom: 24px;
    border: 2px solid var(--border);
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(var(--accent-hover-rgb), 0.1);
    }
  }

  .modal-actions {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.btn-cancel {
      background: transparent;
      border: 2px solid var(--accent);
      color: var(--accent);
      padding: 10px 20px;
      font-weight: 600;
      border-radius: 6px;
      &:hover {
        background-color: var(--accent-hover);
        color: var(--text);
      }
    }

    &.btn-apply {
      background-color: var(--accent);
      color: var(--white-text);
      padding: 10px 24px;
      font-weight: 600;
      border-radius: 6px;

      &:hover {
        background-color: var(--accent-hover);
      }
    }
  }
</style>
