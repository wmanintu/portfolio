<template>
	<div class="card">
		<div id="map"></div>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"
import { useDark } from "@vueuse/core"
import mapboxgl from "mapbox-gl"

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
const myMarkerPosition = [-84.550866, 33.997852]
let isDark = useDark()
let map = ref(null)
let zoomOut = ref(null)
let zoomIn = ref(null)
const zoomRange = ref([11, 5, 2])
let currentZoomRange = ref({ index: 0, range: 11 })

const initMapboxGLJS = () => {
	mapboxgl.accessToken = accessToken
	map = new mapboxgl.Map({
		container: "map", // container ID
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: getMapStyle(), // style URL
		center: myMarkerPosition, // starting position
		zoom: currentZoomRange.value.range, // starting zoom
		dragPan: false,
		scrollZoom: false,
		logoPosition: "top-left",
		attributionControl: false,
	})

	const marker = new mapboxgl.Marker().setLngLat(myMarkerPosition).addTo(map)

	// Setup Zoom in and out
	addZoomOutButtonToMapbox()
	// addZoomInButtonToMapbox()
}

onMounted(initMapboxGLJS)

// Handle zoom out button inside Mapbox

const handleZoomOut = () => {
	console.log("zoom-OUT:", map.getZoom())
	console.log(currentZoomRange.value.index)
	currentZoomRange.value.index++
	map.setZoom(zoomRange.value[currentZoomRange.value.index])
	currentZoomRange.value.range = map.getZoom()
}

const addZoomOutButtonToMapbox = () => {
	zoomOut = new MapboxGLButtonControl({
		className: "zoom-out",
		eventHandler: handleZoomOut,
	})
	map.addControl(zoomOut, "bottom-left")
}

// Handle zoom in button inside Mapbox

const handleZoomIn = () => {
	console.log("zoom-IN", map.getZoom())
	currentZoomRange.value.index--
	map.setZoom(zoomRange.value[currentZoomRange.value.index])
	currentZoomRange.value.range = map.getZoom()
}

const addZoomInButtonToMapbox = () => {
	zoomIn = new MapboxGLButtonControl({
		className: "zoom-in",
		eventHandler: handleZoomIn,
	})
	map.addControl(zoomIn, "bottom-right")
}

watch(currentZoomRange.value, async (object) => {
	console.log("watch", object)
	if (object.range === 11) {
		map.hasControl(zoomIn) ? map.removeControl(zoomIn) : null
		map.hasControl(zoomOut) ? null : addZoomOutButtonToMapbox()
	} else if (object.range === 2) {
		map.hasControl(zoomIn) ? null : addZoomInButtonToMapbox()
		map.hasControl(zoomOut) ? map.removeControl(zoomOut) : null
	} else {
		map.hasControl(zoomIn) ? null : addZoomInButtonToMapbox()
		map.hasControl(zoomOut) ? null : addZoomOutButtonToMapbox()
	}
})

// Handle map style according to web theme

const getMapStyle = () => {
	return isDark.value
		? "mapbox://styles/mapbox/navigation-night-v1"
		: "mapbox://styles/mapbox/streets-v12"
}

watch(isDark, async (flag) => {
	return flag
		? map.setStyle("mapbox://styles/mapbox/navigation-night-v1")
		: map.setStyle("mapbox://styles/mapbox/streets-v12")
})

// Generate Custom Mapbox's Button

class MapboxGLButtonControl {
	constructor({ className = "", title = "", eventHandler = evtHndlr }) {
		this._className = className
		this._title = title
		this._eventHandler = eventHandler
	}

	onAdd(map) {
		this._btn = document.createElement("button")
		this._btn.className = "mapboxgl-ctrl-icon" + " " + this._className
		this._btn.type = "button"
		this._btn.title = this._title
		this._btn.onclick = this._eventHandler

		this._container = document.createElement("div")
		this._container.className = "mapboxgl-ctrl-group mapboxgl-ctrl"
		this._container.appendChild(this._btn)

		return this._container
	}

	onRemove() {
		this._container.parentNode.removeChild(this._container)
		this._map = undefined
	}
}
</script>

<style lang="scss" scoped>
#map {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	border-radius: inherit;
}
</style>
