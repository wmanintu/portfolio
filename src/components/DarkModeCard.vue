<template>
	<div class="card box">
		<div class="card-content">
			<input
				type="checkbox"
				id="switch"
				@click="toggleDark()"
				:checked="isDark"
			/><label for="switch">Toggle</label>
		</div>
	</div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 100px;
	height: 50px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
	margin: auto;
}

label:after {
	content: "";
	position: absolute;
	top: 5px;
	left: 5px;
	width: 40px;
	height: 40px;
	background: #fff;
	border-radius: 90px;
	transition: 0.05s;
}

input:checked + label {
	background: black;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 90px;
}
</style>
