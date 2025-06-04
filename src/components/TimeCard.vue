<template>
  <div class="card">
    <div class="card-content">
      <p>My current time</p>
      <p class="clock">{{ currentTime }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentTime = ref("");

const updateTime = () => {
  const date = new Date();
  // Format the time as per your preference
  currentTime.value = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/New_York",
  });
};

let timer;

onMounted(() => {
  // Update the time initially
  updateTime();
  // Update the time every second (adjust this interval as needed)
  timer = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
  // Clear the interval when the component is about to be destroyed
  clearInterval(timer);
});
</script>

<style scoped>
.clock {
  font-size: 50px;
}
</style>
