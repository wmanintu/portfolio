<template>
	<div class="nav">
		<div class="columns is-mobile">
			<div class="column">
				<div class="link-orange my-name" @click="redirect('home')">
					W U T <br />
					M A N I N T U
				</div>
			</div>
			<div class="column is-hidden-desktop has-text-right">
				<div class="contact" @click="mailTo">contact</div>
			</div>
			<div class="column is-hidden-touch">
				<div class="nav-option-container has-text-centered">
					<div :class="handleActiveHome()" @click="redirect('home')">Home</div>
					|
					<div :class="handleActivePoject()" @click="redirect('project')">
						Project
					</div>
				</div>
			</div>
			<div class="column has-text-right is-hidden-touch">
				<div class="contact" @click="mailTo">contact</div>
			</div>
		</div>
		<div class="column is-hidden-desktop">
			<div class="nav-option-container has-text-centered">
				<div :class="handleActiveHome()" @click="redirect('home')">Home</div>
				|
				<div :class="handleActivePoject()" @click="redirect('project')">
					Project
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: "home",
		}
	},
	methods: {
		redirect(routeName) {
			this.activeName = routeName
			this.$router.push({ name: routeName })
		},
		handleActiveHome() {
			if (this.$route.name === "home") {
				return "option-name link-purple purple"
			} else {
				return "option-name link-purple"
			}
		},
		handleActivePoject() {
			if (this.$route.name === "project") {
				return "option-name link-green green"
			} else {
				return "option-name link-green"
			}
		},
		mailTo() {
			window.location.href = "mailto:manintu.wut@gmail.com"
		},
	},
}
</script>

<style scoped>
.link-orange {
	display: inline-block;
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
	padding: 50px 30px 30px 30px;
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
	color: #ca7242;
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
</style>
