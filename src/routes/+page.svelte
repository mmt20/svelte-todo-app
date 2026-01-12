<script>
  import AddButton from "$lib/components/AddButton.svelte";
  import FilterControls from "$lib/components/FilterControls.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import TodoList from "$lib/components/TodoList.svelte";
</script>

<div class="app dark">
  <main class="container">
    <header class="header">
      <h1>TODO LIST</h1>
    </header>

    <section class="controls">
      <div class="search-wrapper">
        <SearchBar />
      </div>
      <div class="filter-wrapper">
        <FilterControls />
      </div>
    </section>

    <section class="todo-list">
      <TodoList />
    </section>
    <AddButton />
  </main>
</div>

<style lang="scss">
  .app {
    background-color: var(--bg);
    padding: 32px 16px;
    min-height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

  .header {
    padding: 32px;
    text-align: center;

    h1 {
      margin: 0;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--text);
    }
  }

  .controls {
    display: flex;
    gap: 16px;

    .search-wrapper {
      flex: 1;
      min-width: 0;
    }
  }
</style>
