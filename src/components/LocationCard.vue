<template>
  <div class="card">
    <div class="card-content">
      <div class="map-container">
        <div id="map" :class="{ dark: isDark }"></div>
        <div
          v-show="button.isZoomOut"
          class="zoom-button zoom-out"
          @click="handleZoomOut()"
        >
          <font-awesome-icon icon="fa-solid fa-minus" />
        </div>
        <div
          v-show="button.isZoomIn"
          class="zoom-button zoom-in"
          @click="handleZoomIn()"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, watch } from "vue";
import { useTheme } from "../composables/useTheme.js";
import mapboxgl from "mapbox-gl";

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const myMarkerPosition = [-84.550866, 33.997852];
const { isDark } = useTheme();
let map = ref(null);
let button = ref({ isZoomOut: true, isZoomIn: false });
const zoomRange = ref([11, 5, 2]);
let currentZoomRange = ref({ index: 0, range: 11 });

const initMapboxGLJS = () => {
  mapboxgl.accessToken = accessToken;
  map = new mapboxgl.Map({
    container: "map", // container ID
    style: getMapStyle(), // style URL
    center: myMarkerPosition, // starting position
    zoom: currentZoomRange.value.range, // starting zoom
    dragPan: false,
    scrollZoom: false,
    doubleClickZoom: false,
    keyboard: false,
    logoPosition: "top-left",
    attributionControl: false,
  });

  const marker = new mapboxgl.Marker().setLngLat(myMarkerPosition).addTo(map);

  // Ensure map resizes properly when component mounts
  setTimeout(() => {
    map.resize();
  }, 100);

  // Add resize observer to handle dynamic resizing
  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    const mapContainer = document.getElementById("map");
    if (mapContainer) {
      resizeObserver.observe(mapContainer);
    }
  }
};
onBeforeMount(() => {});
onMounted(initMapboxGLJS);

// Handle zoom out button inside Mapbox

const handleZoomOut = () => {
  map.resize();
  currentZoomRange.value.index++;
  map.zoomTo(zoomRange.value[currentZoomRange.value.index], {
    duration: 2000,
  });
  currentZoomRange.value.range = zoomRange.value[currentZoomRange.value.index];
  setZoomVisibility();
};

// Handle zoom in button inside Mapbox

const handleZoomIn = () => {
  currentZoomRange.value.index--;
  map.zoomTo(zoomRange.value[currentZoomRange.value.index], {
    duration: 2000,
  });
  currentZoomRange.value.range = zoomRange.value[currentZoomRange.value.index];
  setZoomVisibility();
};

const setZoomVisibility = () => {
  if (currentZoomRange.value.index === 0) {
    button.value.isZoomIn ? (button.value.isZoomIn = false) : null;
    button.value.isZoomOut ? null : (button.value.isZoomOut = true);
  } else if (currentZoomRange.value.index === 2) {
    button.value.isZoomIn ? null : (button.value.isZoomIn = true);
    button.value.isZoomOut ? (button.value.isZoomOut = false) : null;
  } else {
    button.value.isZoomIn ? null : (button.value.isZoomIn = true);
    button.value.isZoomOut ? null : (button.value.isZoomOut = true);
  }
};

// Handle map style according to web theme

const getMapStyle = () => {
  return isDark.value
    ? "mapbox://styles/mapbox/navigation-night-v1"
    : "mapbox://styles/mapbox/streets-v12";
};

watch(isDark, async (flag) => {
  return flag
    ? map.setStyle("mapbox://styles/mapbox/navigation-night-v1")
    : map.setStyle("mapbox://styles/mapbox/streets-v12");
});
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
}

.card-content {
  padding: 0;
  height: 100%;
  position: relative;
}

.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  border-radius: inherit;
  overflow: hidden;
}

#map {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.zoom-button {
  opacity: 1;
  transform: none;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  position: absolute;
  bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease 0s;
  will-change: transform;
  z-index: 1;
  background-color: var(--card-bg-color, #fff);
  color: var(--card-text-color, #333);
  border-color: var(--card-border-color, #ddd);
}

.zoom-button:hover {
  box-shadow: var(--box-shadow-hover-color, #ccc) 0px 0px 0px 3px;
}

.zoom-button.zoom-out {
  left: 14px;
}

.zoom-button.zoom-in {
  right: 14px;
}
</style>
