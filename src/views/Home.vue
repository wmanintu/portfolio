<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths-desktop is-10-tablet is-full-mobile">
        <div class="wrapper">
          <div class="item1">
            <ProfileCard />
          </div>
          <div class="item2"><DarkModeCard /></div>
          <div class="item3"></div>
          <div class="item4"></div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script setup>
import DarkModeCard from "../components/DarkModeCard.vue";
import ProfileCard from "../components/ProfileCard.vue";

function openUrl(url) {
  window.open("https://github.com/wmanintu", "_blank");
}
</script>

<style scoped>
/* desktop */
@media screen and (min-width: 701px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
    grid-template-areas:
      "a a b ."
      "a a . .";
  }
}
/* mobile */
@media screen and (max-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
    grid-template-areas:
      "a a"
      "b .";
  }
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
</style>
