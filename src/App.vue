<template>
  <div id="app">
    <Navigation class="nav"/>
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
.nav {
  margin: 10px 10px;
}
.link-orange:hover {
  cursor: pointer;
  color: #ca7242;
}
.link-purple:hover {
  cursor: pointer;
  color: #aa67d3;
}
.link-green:hover {
  cursor: pointer;
  color: #77bc6a;
}
.link-red:hover {
  cursor: pointer;
  color: #c95766;
}
.green-text {
  color: #77bc6a;
  font-size: 40px;
}
.btest {
  border: 1px solid white;
}
</style>
