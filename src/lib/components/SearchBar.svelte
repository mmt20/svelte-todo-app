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
      padding: 12px 16px 12px 42px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;

      &:focus {
        outline: none;
        border-color: #6c63ff;
        box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
      }
    }

    .search-btn {
      position: absolute;
      left: 8px;
      background: none;
      border: none;
      padding: 8px;
      color: #a0a0a0;
      cursor: pointer;

      &:hover {
        color: #6c63ff;
      }
    }
  }
</style>
