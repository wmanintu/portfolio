<template lang="html">
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-6">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <PreOrderArticle/>
          </article>
          <!-- <article class="tile is-child notification is-warning">
            <p class="title">...tiles</p>
            <p class="subtitle">Bottom tile</p>
          </article> -->
        </div>
        <!-- <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
          </article>
        </div> -->
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Youtube Queue</p>
          <p class="subtitle">Aligned with the right tile</p>
          <div class="content">
            <!-- Content -->
          </div>
        </article>
      </div>
    </div>
    <!-- <div class="tile is-parent">
      <article class="tile is-child notification is-success">
        <div class="content">
          <p class="title">Spotify API</p>
          <p class="subtitle">my person favorites</p>
          <div class="content">
          </div>
        </div>
      </article>
    </div> -->
  </div>

</template>

<script>
import PreOrderArticle from '../components/PreOrderArticle'
export default {
  components: {
    PreOrderArticle
  }
}
</script>

<style lang="css" scoped>
</style>
