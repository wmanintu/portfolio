<template>
  <a class="expand-container" @click.stop.prevent="handleClick">
    <p class="expand-title">{{ text }}</p>
    <div class="expand-icon">
      <font-awesome-icon :icon="icon" />
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: [String, Array],
    default: "fa-solid fa-arrow-right",
  },
  target: {
    type: String,
    default: "_blank",
  },
});

function handleClick() {
  window.open(props.url, props.target);
}
</script>

<style lang="scss" scoped>
.expand-container {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  position: absolute;
  bottom: 14px;
  left: 14px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s;
  border: none;
  text-decoration: none;
  color: inherit;
}

.expand-container:hover {
  width: 100px;
  cursor: pointer;
}

.expand-title {
  margin: 0px 36px 0px 16px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.3px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  transform: translateX(-12px) translateZ(0px);
}

.expand-container:hover .expand-title {
  opacity: 1;
  transform: none;
}

.expand-icon {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  transition: 0.3s;
}
</style>
