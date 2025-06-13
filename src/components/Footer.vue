<template>
  <footer class="footer">
    <div class="content">
      <p class="is-size-7 has-text-grey">
        © {{ currentYear }} Wut Manintu. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>
