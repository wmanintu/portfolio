<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Menlo, Consolas, DejaVu Sans Mono, monospace;
  /* font-family: "Maison Neue", Helvetica Neue, Helvetica, Arial, sans-serif; */
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
</style>
