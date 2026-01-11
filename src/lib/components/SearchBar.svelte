<script>
  import { Search } from "lucide-svelte";
</script>

<div class="search-bar">
  <input type="text" placeholder="Search note..." />
  <button class="search-btn" aria-label="Search"> <Search /> </button>
</div>

<style lang="scss">
  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;

    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 1rem;
    }

    .search-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 1.25rem;
        height: 1.25rem;
        color: #666;
      }
    }
  }
</style>
