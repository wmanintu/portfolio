<template>
  <div class="content">
    <p class="title">Photo Gallery</p>
    <p class="subtitle">
      All my favorite photos I have taken when I travel around the world. I use
      a Canon Rebel T3i body, and I use various lens for different situation. My
      favorite lens are 50mm 1.8f and 70-200mm 4f. The countries I have been to
      are Thailand, Taiwan, Korea, and Georgia USA <br />
      Besides programming I love photography and I am self taught because it is
      fun.
    </p>
    <div class="content">React - Imgur - Bulma - Netlify</div>
    <i
      class="fas fa-globe-americas"
      @click="openUrl('https://photos.wutmanintu.me')"
    ></i>
    <i
      class="fab fa-github"
      @click="openUrl('https://github.com/wmanintu/my-photo-gallery')"
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
