<template>
	<div class="tile is-ancestor">
		<div class="tile is-vertical is-6">
			<div class="tile">
				<div class="tile is-parent is-vertical">
					<article class="tile is-child notification is-primary">
						<PreOrderArticle />
					</article>
				</div>
			</div>
			<div class="tile is-parent">
				<article class="tile is-child notification is-danger">
					<YouTubeQueueArticle />
				</article>
			</div>
		</div>
		<div class="tile is-vertical is-6">
			<div class="tile">
				<div class="tile is-parent is-vertical">
					<article class="tile is-child notification is-success">
						<PhotoGalleryArticle />
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PreOrderArticle from "../components/PreOrderArticle.vue"
import YouTubeQueueArticle from "../components/YouTubeQueueArticle.vue"
import PhotoGalleryArticle from "../components/PhotoGalleryArticle.vue"

export default {
	components: {
		PreOrderArticle,
		YouTubeQueueArticle,
		PhotoGalleryArticle,
	},
}
</script>

<style scoped></style>
