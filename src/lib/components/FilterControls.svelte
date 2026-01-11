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
</style>
