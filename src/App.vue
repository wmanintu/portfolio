<template>
  <div id="app">
    <div class="container is-fluid">
      <Navbar />
      <div>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Menlo, Consolas, DejaVu Sans Mono, monospace;
  font-size: 14px;
  user-select: none;
}
.green-text {
  color: #77bc6a;
  font-size: 40px;
}
.btest {
  border: 1px solid white;
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
