<template>
	<div class="grid-container">
		<div class="wrapper">
			<div class="two-column">
				<ProfileCard />
			</div>
			<div><DarkModeCard /></div>
			<div><GitHubCard /></div>
			<div class="two-column"><TimeCard /></div>
		</div>
	</div>
</template>

<script setup>
import DarkModeCard from "../components/DarkModeCard"
import ProfileCard from "../components/ProfileCard"
import GitHubCard from "../components/GitHubCard"
import TimeCard from "../components/TimeCard.vue"
</script>

<style scoped>
.wrapper {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	gap: 1rem;
	width: 50%;
}
.grid-container {
	display: grid;
	place-items: center;
}
/* <-- 1024px */
@media screen and (max-width: 1400px) {
	.wrapper {
		width: 70%;
	}
}

/* <-- 1023px */
@media screen and (max-width: 1023px) {
	.wrapper {
		grid-template-columns: repeat(3, 1fr);
		width: 70%;
	}
}

/* <-- 768px */
@media screen and (max-width: 768px) {
	.wrapper {
		grid-template-columns: repeat(2, 1fr);
		width: 90%;
	}
}

.two-column {
	grid-column: 2 span;
}
</style>
