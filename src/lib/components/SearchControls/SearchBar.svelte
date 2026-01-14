<script lang="ts">
  import { Search } from "lucide-svelte";
  import { debounce } from "../../../util";
  import Button from "../ui/Button.svelte";
  let { searchQuery = $bindable("") }: { searchQuery: string } = $props();
  let inputValue = $state(searchQuery);

  const debouncedUpdate = debounce((value: string) => {
    searchQuery = value;
  }, 300);

  function handleInput(e: Event) {
    inputValue = (e.target as HTMLInputElement).value;
    debouncedUpdate(inputValue);
  }
</script>

<form class="search-bar" role="search" onsubmit={(e) => e.preventDefault()}>
  <input id="search" type="search" placeholder="Search notes…" value={searchQuery} oninput={handleInput} />
  <Button type="submit" variant="ghost" size="icon-sm" class="search-btn">
    <Search />
  </Button>
</form>

<style lang="scss">
  .search-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      width: 100%;
      padding: 12px 40px 12px 12px;
      border: 2px solid var(--border-primary);
      border-radius: 8px;
      appearance: none;
      background-color: var(--text-white);
      color: var(--text-dark);
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
      &:focus {
        outline: none;
        border-color: var(--accent-primary);
        box-shadow: 0 0 0 3px var(--accent-shadow);
      }
    }

    :global(.search-btn) {
      position: absolute;
      right: 4px;
      color: var(--border-primary);

      &:global(:hover) {
        color: var(--accent-primary);
        background-color: transparent;
      }
    }
  }

  @media (max-width: 600px) {
    .search-bar {
      input {
        padding: 10px 40px 10px 10px;
      }
    }
  }
</style>
