<template>
  <div class="empty-layout">
    <nuxt></nuxt>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
};
</script>

<style scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  padding-top: 5rem;
}
</style>
