<script>
  import { Moon } from "lucide-svelte";
</script>

<div class="filter-group">
  <select class="filter-select">
    <option value="ALL">ALL</option>
    <option value="ACTIVE">ACTIVE</option>
    <option value="COMPLETED">COMPLETED</option>
  </select>

  <button class="theme-toggle" aria-label="Toggle theme">
    <Moon />
  </button>
</div>

<style lang="scss">
  .filter-group {
    display: flex;
    gap: 8px;
  }

  .filter-select {
    padding: 8px 12px;
    border: 2px solid var(--accent);
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--text);
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: var(--accent);
    color: var(--surface);

    &:hover {
      border-color: var(--accent);
      background-color: var(--bg);
      color: var(--text);
    }

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
    }
  }
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border: 2px solid var(--border);
    border-radius: 8px;
    background-color: var(--accent);
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--surface);
    &:hover {
      border-color: var(--accent);
      background-color: var(--bg);
      color: var(--text);
    }

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
    }
  }
</style>
