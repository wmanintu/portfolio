<template lang="html">
  <div class="about-container container">
    <div class="columns is-mobile">
      <div class="column is-offset-1 is-one-quarter">
        <img src="https://i.ibb.co/Cb6grB5/IMG-4494-3.jpg" alt="IMG-4494-3" border="0" class="my-face"/>
      </div>
      <div class="column">
        <div class="green-text">
          Hello! my name is Wut. I am a web application developer, and I live in Marietta, Georgia.
        </div>
        <i class="fab fa-github" @click="openInNewTab('https://github.com/wmanintu')"></i>
        <i class="fab fa-instagram" @click="openInNewTab('https://www.instagram.com/wohmgram/')"></i>
        <i class="fab fa-facebook" @click="openInNewTab('https://www.facebook.com/wutmanintu')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openInNewTab (url) {
      window.open(url,'_blank')
    }
  }
}
</script>

<style lang="css" scoped>
.my-face {
  border-radius: 400px;
  width: 200px;
  margin: 5%;
}
.about-container {
  margin: 100px 0px;
}
.fab {
  margin: 5px;
  font-size: 30px;
}
.fab:hover {
  cursor: pointer;
}
</style>
