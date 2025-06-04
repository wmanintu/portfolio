<template>
  <div class="grid-container">
    <div class="wrapper">
      <article class="notification is-primary">
        <PreOrderArticle />
      </article>

      <article class="notification is-success">
        <PhotoGalleryArticle />
      </article>

      <article class="notification is-danger">
        <YouTubeQueueArticle />
      </article>
    </div>
  </div>
</template>

<script>
import PreOrderArticle from "../components/PreOrderArticle";
import YouTubeQueueArticle from "../components/YouTubeQueueArticle";
import PhotoGalleryArticle from "../components/PhotoGalleryArticle";

export default {
  components: {
    PreOrderArticle,
    YouTubeQueueArticle,
    PhotoGalleryArticle,
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  place-items: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 80%;
}

@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
  .is-success {
    grid-row: 1 span;
  }
}
.is-success {
  grid-column: 2 span;
  grid-row: 2 span;
  height: 100%;
}
.is-primary {
  grid-column: 2 span;
  height: 100%;
}
.is-danger {
  grid-column: 2 span;
  height: 100%;
}
</style>
