<template lang="html">
  <div class="home-container">
    <div class="columns">
      <div class="column is-12-mobile is-3-tablet is-4-desktop my-avatar-container">
        <img src="https://i.ibb.co/Cb6grB5/IMG-4494-3.jpg" alt="IMG-4494-3" border="0" class="my-face"/>
      </div>
      <div class="column is-12-mobile is-9-tablet is-8-desktop">
        <div class="green-text">
          Hello! my name is Wut.<br>I am a Full Stack Web Application Developer.
        </div>
        <i class="fab fa-github" @click="openUrl('https://github.com/wmanintu')"></i>
        <i class="fas fa-envelope" @click="mailTo('mailto:manintu.wut@gmail.com')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mailTo (email) {
      window.location.href = email
    },
    openUrl (url)  {
      window.open(url,'_blank')
    }
  }
}
</script>

<style lang="css" scoped>
.my-face {
  border-radius: 400px;
  width: 200px;
}
.my-avatar-container {
  text-align: center;
}
.fab, .fas {
  margin: 15px;
  font-size: 30px;
}
.fab:hover, .fas:hover {
  cursor: pointer;
}
@media (min-width: 740px) {
  .home-container {
    margin-top: 200px;
  }
}
</style>
