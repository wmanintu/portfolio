<template>
	<div :class="{ app: true, dark: isDark }">
		<Navbar />
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script setup>
import Navbar from "./components/Navbar"
import { useDark } from "@vueuse/core"

const isDark = useDark()
</script>

<style lang="scss">
.app {
	font-family: Menlo, Consolas, DejaVu Sans Mono, monospace;
	font-size: 14px;
	user-select: none;
}

.green-text {
	color: #77bc6a;
	font-size: 40px;
}

.container {
	margin-left: auto;
	margin-right: auto;
	width: 90%;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
