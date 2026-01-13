<script lang="ts">
  import emptyImage from "$lib/assets/empty.svg";
  let { text } = $props();
</script>

<div class="empty-state">
  <img src={emptyImage} alt="No todos" />
  <p>{text}</p>
</div>

<style lang="scss">
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    opacity: 0.9;

    img {
      max-width: 240px;
      margin-bottom: 1rem;
    }

    p {
      color: var(--text);
    }
  }
</style>
