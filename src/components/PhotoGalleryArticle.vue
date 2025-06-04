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

    <font-awesome-icon
      class="fas fa-globe-americas"
      icon="fa-solid fa-earth-americas"
      size="2x"
      @click="openUrl('https://photos.wutmanintu.me')"
    />

    <font-awesome-icon
      class="fab fa-github"
      icon="fa-brands fa-github"
      size="2x"
      @click="openUrl('https://photos.wutmanintu.me')"
    />
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
