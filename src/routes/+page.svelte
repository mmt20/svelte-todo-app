<script>
  import AddButton from "$lib/components/AddButton.svelte";
  import FilterControls from "$lib/components/FilterControls.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import TodoList from "$lib/components/TodoList.svelte";
</script>

<div class="app">
  <main class="container">
    <header class="header">
      <h1>TODO LIST</h1>
    </header>

    <section class="controls">
      <SearchBar />
      <FilterControls />
    </section>

    <section class="todo-list">
      <TodoList />
    </section>
    <AddButton />
  </main>
</div>

<style lang="scss">
  :global(body) {
    box-sizing: border-box;
    margin: 0;
    font-family: "Segoe UI", Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
  }

  .app {
    background-color: var(--bg);
    padding: 32px 16px;
    min-height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }

  .header {
    padding: 32px;
    text-align: center;

    h1 {
      margin: 0;
      letter-spacing: 2px;
      color: var(--text);
    }
  }

  .controls {
    display: flex;
    gap: 16px;
  }
</style>
