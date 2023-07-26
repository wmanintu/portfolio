<template>
	<div>
		<div class="columns">
			<div class="column"></div>
			<div class="column is-four-fifths-touch is-three-fifths-desktop">
				<div class="wrapper">
					<div class="item1">
						<ProfileCard />
					</div>
					<div class="item2"><DarkModeCard /></div>
					<div class="item3 ></div> <div class=" item4></div>
				</div>
			</div>
			<div class="column"></div>
		</div>
	</div>
</template>

<script setup>
import DarkModeCard from "../components/DarkModeCard.vue"
import ProfileCard from "../components/ProfileCard.vue"

function openUrl(url) {
	window.open("https://github.com/wmanintu", "_blank")
}
</script>

<style scoped>
.green {
	background-color: green;
}
.wrapper {
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(6, auto);
	/* height: 100%; */
	/* width: 100%; */
	gap: 12px;
	grid-template-areas:
		"a a b c"
		"a a d e"
		"f f f f";
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
.item4 {
	grid-area: d;
}
</style>
