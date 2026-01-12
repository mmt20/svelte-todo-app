<script lang="ts">
  import { Plus } from "lucide-svelte";

  let { onclick }: { onclick: () => void } = $props();
</script>

<button class="fab" aria-label="Add note" title="Add note" type="button" {onclick}>
  <Plus aria-hidden="true" focusable="false" />
</button>

<style>
  .fab {
    width: 56px;
    height: 56px;
    background-color: var(--accent);
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: var(--white-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      background-color: var(--accent-hover);
      box-shadow: 0 4px 8px var(--shadow-prim);
    }
  }
</style>
