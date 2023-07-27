<template>
	<div class="card">
		<div class="card-content has-text-centered">
			<font-awesome-icon icon="fa-brands fa-github " size="7x" />
			<br />
		</div>
		<div class="">
			<a class="expand-container">
				<p class="expand-title">GitHub</p>
				<div class="expand-icon">
					<font-awesome-icon class="icon" icon="fa-brands fa-github " />
				</div>
			</a>
		</div>
	</div>
</template>

<script setup></script>

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
}
.expand-container:hover {
	width: 100px;
	cursor: pointer;
}
.expand-title {
	margin: 0px 36px 0px 16px;
	font-size: 14px;
	font-family: "Silka Regular";
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
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	position: absolute;
	right: 0px;
}
.icon {
	transition: 0.3s;
}
</style>
