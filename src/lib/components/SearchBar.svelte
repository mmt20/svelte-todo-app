<script>
  import { Search } from "lucide-svelte";
</script>

<form class="search-bar" role="search">
  <input id="search" type="search" placeholder="Search notes…" />
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
      border: 2px solid var(--border);
      border-radius: 8px;
      appearance: none;
      background-color: var(--white-text);
      color: var(--text);
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
      &:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 0 3px var(--shadow-prim);
      }
    }

    .search-btn {
      position: absolute;
      right: 8px;
      background: none;
      border: none;
      padding: 8px;
      color: var(--border);
      cursor: pointer;

      &:hover {
        color: var(--accent);
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
