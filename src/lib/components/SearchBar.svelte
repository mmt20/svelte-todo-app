<script lang="ts">
  import { Search } from "lucide-svelte";
  import debounce from "../../util";

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
  <button type="submit" class="search-btn" aria-label="Search">
    <Search />
  </button>
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
      padding: 12px 16px 12px 12px;
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

    .search-btn {
      position: absolute;
      right: 8px;
      background: none;
      border: none;
      padding: 8px;
      color: var(--border-primary);
      cursor: pointer;

      &:hover {
        color: var(--accent-primary);
      }
    }
  }
  @media (max-width: 600px) {
    .search-bar {
      input {
        padding: 10px 40px 10px 10px;
      }

      .search-btn {
        padding: 6px;
      }
    }
  }
</style>
