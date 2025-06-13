<template>
  <div class="card">
    <div class="github-container">
      <font-awesome-icon icon="fa-brands fa-github " size="7x" />
      <br />
    </div>
    <ExpandableLink
      text="GitHub"
      url="https://github.com/wmanintu"
      icon="fa-solid fa-arrow-right"
    />
  </div>
</template>

<script setup>
import ExpandableLink from "./ExpandableLink.vue";
</script>

<style lang="scss" scoped>
.github-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
