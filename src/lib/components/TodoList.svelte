<script lang="ts">
  import type { Todo } from "$lib/types";
  import AddButton from "./AddButton.svelte";
  import TodoItem from "./TodoItem.svelte";

  let todos: Todo[] = $props();
  console.log(todos);
</script>

<ul class="todo-list">
  {#each todos as todo (todo.id)}
    <TodoItem {...todo} />
  {/each}
</ul>
<AddButton />

<style lang="scss">
  .todo-list {
    list-style: none;
    padding: 0;
    margin: 6px 12px;
  }
</style>
