<template>
  <div class="grid-container mb-6">
    <div class="wrapper">
      <PreOrderArticle class="preorder-article" />

      <PhotoGalleryArticle class="photo-article" />

      <YouTubeQueueArticle class="youtube-article" />
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
  .photo-article {
    grid-row: 1 span;
  }
}
.photo-article {
  grid-column: 2 span;
  grid-row: 2 span;
  height: 100%;
}
.preorder-article {
  grid-column: 2 span;
  height: 100%;
}
.youtube-article {
  grid-column: 2 span;
  height: 100%;
}
</style>
