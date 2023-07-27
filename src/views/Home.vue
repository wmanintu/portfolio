<template>
	<div>
		<div class="flex-container">
			<div class="wrapper">
				<div class="item1">
					<ProfileCard />
				</div>
				<div class="item2"><DarkModeCard /></div>
				<div class="item3"><GitHubCard /></div>
				<div class="item4"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import DarkModeCard from "../components/DarkModeCard.vue"
import ProfileCard from "../components/ProfileCard.vue"
import GitHubCard from "../components/GitHubCard.vue"

function openUrl(url) {
	window.open("https://github.com/wmanintu", "_blank")
}
</script>

<style scoped>
/*  1024px --> desktop */
@media screen and (min-width: 1024px) {
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
		grid-template-areas:
			"a a b c"
			". . . .";
	}
	.flex-container {
		padding: 0px 15%;
	}
}
/* table <-- 1023px */
@media screen and (max-width: 1023px) {
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
		grid-template-areas:
			"a a b c"
			". . . .";
	}
	.flex-container {
		padding: 0px 10%;
	}
}

/* mobile <-- 768px */
@media screen and (max-width: 768px) {
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
		grid-template-areas:
			"a a "
			"b c ";
	}
	.flex-container {
		padding: 0px 10px;
	}
}

.flex-container {
	display: flex;
	justify-content: center;
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
