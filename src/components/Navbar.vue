<template>
	<div class="nav">
		<div class="columns is-mobile">
			<div class="column">
				<div class="link-orange gradient-text" @click="redirect('home')">
					W U T
				</div>
			</div>
			<div class="column is-hidden-desktop contact-text">
				<div class="contact" @click="mailTo">contact</div>
			</div>
			<div class="column is-hidden-touch nav-options-centered">
				<div class="nav-option-container">
					<div :class="handleActiveHome()" @click="redirect('home')">Home</div>
					|
					<div :class="handleActivePoject()" @click="redirect('project')">
						Projects
					</div>
				</div>
			</div>
			<div class="column contact-text is-hidden-touch">
				<div class="contact" @click="mailTo">contact</div>
			</div>
		</div>
		<div class="column is-hidden-desktop nav-options-centered">
			<div class="nav-option-container">
				<div :class="handleActiveHome()" @click="redirect('home')">Home</div>
				|
				<div :class="handleActivePoject()" @click="redirect('project')">
					Projects
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()
let activeName = ref("home")

const redirect = (routeName) => {
	activeName.value = routeName
	router.push({ name: routeName })
}

const handleActiveHome = () => {
	if (route.name === "home") {
		return "option-name link-purple purple"
	} else {
		return "option-name link-purple"
	}
}

const handleActivePoject = () => {
	if (route.name === "project") {
		return "option-name link-green green"
	} else {
		return "option-name link-green"
	}
}

const mailTo = () => {
	window.location.href = "mailto:manintu.wut@gmail.com"
}
</script>

<style scoped>
.link-orange {
	display: inline-block;
}
.contact-text {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.nav-options-centered {
	display: flex;
	align-items: center;
	justify-content: center;
}
.contact {
	display: inline-block;
	text-align: right;
}
.contact:hover {
	color: #485fc7;
	cursor: pointer;
}
.nav {
	padding: 10px 30px 30px 30px;
}
.option-name {
	margin: 0px 10px 0px 10px;
	font-weight: bold;
	display: inline-block;
}
.purple {
	cursor: pointer;
	color: #aa67d3;
}
.green {
	cursor: pointer;
	color: #77bc6a;
}
.link-orange:hover {
	cursor: pointer;
}
.link-purple:hover {
	cursor: pointer;
	color: #aa67d3;
}
.link-green:hover {
	cursor: pointer;
	color: #77bc6a;
}
.link-red:hover {
	cursor: pointer;
	color: #c95766;
}

@media (min-width: 740px) {
	.nav-option-container {
		text-align: right;
	}
}

.gradient-text {
	--bg-size: 400%;
	--color-one: hsl(0deg 95% 55%);
	--color-two: hsl(111.82deg 68.62% 53.02%);
	--color-three: hsl(237.94deg 95% 55%);
	font-family: sans-serif;
	font-weight: bold;
	font-size: clamp(3rem, 25vmin, 1rem);
	background: linear-gradient(
			90deg,
			var(--color-one),
			var(--color-two),
			var(--color-three)
		)
		0 0 / var(--bg-size) 100%;
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
}

.gradient-text:hover {
	cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
	.gradient-text {
		animation: move-bg 8s linear infinite;
	}
	@keyframes move-bg {
		to {
			background-position: var(--bg-size) 0;
		}
	}
}

/* iPhone SE */
@media screen and (max-width: 380px) {
	.gradient-text {
		font-size: 2.3rem;
	}
}
</style>
