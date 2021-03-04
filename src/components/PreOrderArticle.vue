<template>
  <div>
    <p class="title">PreOrder</p>
    <p class="subtitle">
      Provides preorder system to friends and co-worker, and keep tracks of who order what in real-time.
    </p>
    <div class="content">
      Vue - Firebase Auth - Firebase Firestore - Element.io
    </div>
    <i class="fas fa-globe-americas" @click="openUrl('https://preorder-8a6e9.firebaseapp.com')"></i>
    <i class="fab fa-github" @click="openUrl('https://github.com/wmanintu/preorder')"></i>
  </div>
</template>

<script>
export default {
  methods: {
    openUrl (url)  {
      window.open(url,'_blank')
    }
  }
}
</script>

<style scoped>
.fas, .fab {
  font-size: 30px;
  margin-right: 10px;
}
.fas:hover, .fab:hover {
  cursor: pointer;
  color: #9c9c9c
}
</style>
