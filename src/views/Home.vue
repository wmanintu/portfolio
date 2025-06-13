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
  grid-template-rows: repeat(3, minmax(200px, 1fr));
  gap: 1rem;
  width: 70%;
  min-height: 80vh;
}

.grid-container {
  display: grid;
  place-items: center;
  padding: 2rem 0;
}

/* Ensure grid items and their cards fill the available space */
.wrapper > div {
  display: flex;
  height: 100%;
}

.wrapper > div > * {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.two-column {
  grid-column: span 2;
}
/* <-- 1024px */
@media screen and (max-width: 1400px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(180px, 1fr));
    width: 80%;
  }
}

/* <-- 1023px */
@media screen and (max-width: 1023px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(160px, 1fr));
    width: 80%;
  }
}

/* <-- 768px */
@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, minmax(150px, 1fr));
    width: 90%;
  }
}

/* iPhone SE */
@media screen and (max-width: 380px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, minmax(140px, 1fr));
    min-height: auto;
  }
  .two-column {
    grid-column: span 1;
  }
}
</style>
