<template>
  <div class="card">
    <div class="card-content">
      <article class="media">
        <figure class="media-left">
          <p class="image is-96x96" :class="{ 'is-skeleton': isLoading }">
            <img
              class="is-96x96"
              src="https://i.ibb.co/Cb6grB5/IMG-4494-3.jpg"
              alt="Profile avatar"
              :style="{ opacity: isLoading ? 0 : 1 }"
              @load="handleImageLoad"
              @error="handleImageError"
            />
          </p>
        </figure>
        <div class="media-content">
          <p class="greeting">
            Hey there! 👋 I'm <strong>Wut</strong>, a passionate frontend
            developer based in Marietta, GA.
          </p>
          <p class="description">
            I create beautiful, responsive web applications using Vue.js and
            modern web technologies. I love turning creative ideas into
            interactive digital experiences.
          </p>
          <p class="current-focus">
            Always learning and excited to take on new challenges!
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(true);

const handleImageLoad = () => {
  // Add a delay to ensure loading state is visible for testing
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

const handleImageError = () => {
  isLoading.value = false;
  console.warn("Failed to load profile image");
};
</script>

<style lang="scss" scoped>
// Smooth transition for image appearance
img {
  transition: opacity 0.3s ease-in-out;
  border-radius: 6px; // Match skeleton border radius
}

.content {
  .greeting {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.75rem;
    opacity: 0.9;
  }

  .current-focus {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0;
    opacity: 0.8;
    font-style: italic;
  }

  strong {
    font-weight: 700;
    color: inherit;
  }

  p {
    margin-bottom: 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
