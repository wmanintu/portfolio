<template lang="html">
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-6">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <PreOrderArticle/>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <YouTubeQueueArticle/>
        </article>
      </div>
    </div>
    <div class="tile is-vertical is-6">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-success">
            <PhotoGalleryArticle />
          </article>
        </div>
      </div>
      <!-- <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <YouTubeQueueArticle/>
        </article>
      </div>
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Spotify API</p>
              <p class="subtitle">my person favorites</p>
              <div class="content">
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <YouTubeQueueArticle/>
          </article>
        </div>
      </div> -->
    </div>
  </div>

</template>

<script>
import PreOrderArticle from '../components/PreOrderArticle'
import YouTubeQueueArticle from '../components/YouTubeQueueArticle'
import PhotoGalleryArticle from '../components/PhotoGalleryArticle'

export default {
  components: {
    PreOrderArticle,
    YouTubeQueueArticle,
    PhotoGalleryArticle
  }
}
</script>

<style lang="css" scoped>
</style>
