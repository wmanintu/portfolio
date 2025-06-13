<template>
  <div class="app">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.vue";
import { useTheme } from "./composables/useTheme.js";

// Initialize theme system
const { initTheme } = useTheme();
initTheme();
</script>

<style lang="scss">
.app {
  // Font family is handled by individual components via CSS custom properties
  font-size: 14px;
  user-select: none;
}

.green-text {
  color: #77bc6a;
  font-size: 40px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
