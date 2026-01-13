<script lang="ts">
  interface TodoListSkeletonProps {
    count?: number;
  }
  let { count = 2 }: TodoListSkeletonProps = $props();
</script>

<div class="todo-container">
  <ul class="todo-list">
    {#each Array(count) as _, i (i)}
      <li class="skeleton-item"></li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .todo-container {
    margin-top: 24px;
  }

  .todo-list {
    list-style: none;
    padding: 0;
    margin: 6px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .skeleton-item {
    height: 48px;
    width: 100%;
    padding: 8px 12px;
    background: linear-gradient(90deg, var(--neutral-bg) 25%, var(--border-primary) 50%, var(--neutral-bg) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite ease-in-out;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @media (max-width: 768px) {
    .todo-list {
      margin: 6px 8px;
      gap: 10px;
    }

    .skeleton-item {
      height: 52px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .todo-container {
      margin-top: 16px;
    }

    .todo-list {
      margin: 4px 6px;
      gap: 8px;
    }

    .skeleton-item {
      height: 48px;
      padding: 8px;
    }
  }
</style>
