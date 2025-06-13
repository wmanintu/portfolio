<template>
  <article class="box">
    <div class="content is-flex-grow-1">
      <h1 class="title">
        <a
          href="https://photos.wutmanintu.me"
          target="_blank"
          rel="noopener noreferrer"
          class="has-text-link"
          title="Visit Photo Gallery"
        >
          Photo Gallery
        </a>
      </h1>
      <p class="subtitle">
        A curated collection of my favorite photographs captured during travels
        across the globe. Shot with a Canon Rebel T3i using primarily a 50mm
        f/1.8 for portraits and street photography, and a 70-200mm f/4 for
        landscapes and distant subjects.
        <br /><br />
        My photographic journey has taken me through Thailand's bustling
        markets, Taiwan's mountain landscapes, Korea's vibrant cities, and the
        scenic beauty of Georgia, USA. Each image tells a story of culture,
        adventure, and the moments that make travel unforgettable.
        <br /><br />
        Photography complements my passion for programming—both require
        attention to detail, creative problem-solving, and the pursuit of that
        perfect shot (whether it's a sunset or clean code).
      </p>
      <p class="is-size-7 has-text-grey is-italic mb-4">
        React - Imgur - Bulma - Netlify
      </p>
    </div>

    <footer>
      <a
        href="https://github.com/wutmanintu/photo-gallery"
        target="_blank"
        rel="noopener noreferrer"
        class="has-text-link is-flex is-align-items-center"
        title="Explore the source code on GitHub"
      >
        <span>Source Code</span>
        <span class="icon mr-2">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </span>
      </a>
    </footer>
  </article>
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
/* Minimal custom styles - most styling now handled by Bulma classes */
</style>
