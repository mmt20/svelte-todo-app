<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
</script>

<ul class="todo-list">
  <TodoItem />
  <TodoItem />
  <TodoItem />
</ul>

<style lang="scss">
  .todo-list {
    list-style: none;
  }
</style>
