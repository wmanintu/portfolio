<template>
  <div class="grid-container">
    <div class="wrapper">
      <div class="two-column">
        <ProfileCard />
      </div>
      <div><LocationCard /></div>
      <div><DarkModeCard /></div>
      <div><GitHubCard /></div>
      <div><SpotifyCard /></div>
      <div class="two-column"><TimeCard /></div>
    </div>
  </div>
</template>

<script setup>
import DarkModeCard from "../components/DarkModeCard";
import ProfileCard from "../components/ProfileCard";
import GitHubCard from "../components/GitHubCard";
import TimeCard from "../components/TimeCard";
import SpotifyCard from "../components/SpotifyCard";
import LocationCard from "../components/LocationCard";
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 70%;
}
.grid-container {
  display: grid;
  place-items: center;
}

.two-column {
  grid-column: 2 span;
}
/* <-- 1024px */
@media screen and (max-width: 1400px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }
}

/* <-- 1023px */
@media screen and (max-width: 1023px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }
}

/* <-- 768px */
@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
}

/* iPhone SE */
@media screen and (max-width: 380px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
  .two-column {
    grid-column: 1 span;
  }
}
</style>
