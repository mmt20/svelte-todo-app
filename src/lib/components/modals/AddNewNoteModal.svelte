<script lang="ts">
  import Modal from "$lib/components/ui/Modal.svelte";
  import Button from "$lib/components/ui/Button.svelte";

  let {
    closeModal,
    addNote,
    value = $bindable(""),
  }: {
    closeModal: () => void;
    addNote: () => void;
    value: string;
  } = $props();
</script>

<Modal onClose={closeModal}>
  {#snippet header()}
    <h2 class="title">Add New Note</h2>
  {/snippet}

  {#snippet body()}
    <input type="text" placeholder="Input your note..." bind:value />
  {/snippet}

  {#snippet footer()}
    <Button variant="outline" onclick={closeModal}>Cancel</Button>

    <Button variant="default" onclick={addNote}>Apply</Button>
  {/snippet}
</Modal>

<style lang="scss">
  .title {
    margin: 0 0 16px;
    font-size: 24px;
    color: var(--text-primary);
    text-align: center;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  input[type="text"] {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid var(--border-primary);
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 3px var(--accent-shadow);
    }
  }
</style>
