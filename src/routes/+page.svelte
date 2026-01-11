<script>
  import AddButton from "$lib/components/AddButton.svelte";
  import FilterControls from "$lib/components/FilterControls.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import TodoList from "$lib/components/TodoList.svelte";
</script>

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
    <AddButton />
  </section>
</main>

<style lang="scss">
  :global(body) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Roboto, sans-serif;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    &.dark {
      background: #1e1e1e;
      color: #e8eef5;
    }
  }
</style>
