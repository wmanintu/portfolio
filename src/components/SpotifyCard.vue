<template>
	<div class="card">
		<div class="card-content">
			<font-awesome-icon icon="fa-brands fa-spotify" size="2x" />
			<div v-if="currentSong">
				<h2>Current Song:</h2>
				<div>
					<img :src="currentSong.albumImage" :alt="currentSong.name" />
					<p>{{ currentSong.name }}</p>
					<p>{{ currentSong.artist }}</p>
				</div>
			</div>
			<div v-else>
				<p>Loading...</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue"
const currentSong = null

const getCurrentSong = async () => {
	try {
		// Make a request to your backend or directly to Spotify API using your Client ID and Client Secret
		const response = await fetch(
			"YOUR_BACKEND_API_ENDPOINT_OR_SPOTIFY_API_ENDPOINT",
			{
				headers: {
					Authorization: "Bearer YOUR_ACCESS_TOKEN",
				},
			}
		)

		if (response.ok) {
			const data = await response.json()
			currentSong.value = {
				name: data.name,
				artist: data.artists.map((artist) => artist.name).join(", "),
				albumImage: data.album.images[0].url,
			}
		} else {
			console.error("Error fetching current song data")
		}
	} catch (error) {
		console.error("Error fetching current song data", error)
	}
}

onMounted(getCurrentSong)
</script>

<style scoped>
.fa-spotify {
	color: #1db954;
}
</style>
