<script lang="ts">
  import AddButton from "./AddButton.svelte";
  import TodoItem from "./TodoItem.svelte";
</script>

<ul class="todo-list">
  <TodoItem />
  <TodoItem />
  <TodoItem />
</ul>
<AddButton />

<style lang="scss">
  .todo-list {
    list-style: none;
    padding: 0;
    margin: 6px 12px;
  }
</style>
