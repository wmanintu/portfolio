<template>
  <div>
    <p class="title">Youtube Queue</p>
    <p class="subtitle">
      Search and create music queue locally, and will implement realtime next.
      The purpose was to teach myself React and Redux.
    </p>
    <div class="content">React - Redux - Youtube API - Bootstrap</div>
    <i
      class="fas fa-globe-americas"
      @click="openUrl('https://music.wutmanintu.me')"
    ></i>
    <i
      class="fab fa-github"
      @click="openUrl('https://github.com/wmanintu/youtube-queue')"
    ></i>
  </div>
</template>

<script>
export default {
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.fas,
.fab {
  font-size: 30px;
  margin-right: 10px;
}
.fas:hover,
.fab:hover {
  cursor: pointer;
  color: #9c9c9c;
}
</style>
