<template>
	<div class="card">
		<div class="spotify-container">
			<font-awesome-icon icon="fa-brands fa-spotify" size="2x" />
			<div v-if="currentSong">
				<div class="spotify-info">
					<div class="spotify-now-playing">
						<div class="playing-indicator_container">
							<div class="playing-bar bar1"></div>
							<div class="playing-bar bar2"></div>
							<div class="playing-bar bar3"></div>
						</div>
						<span>last played</span>
					</div>
					<!-- <img :src="currentSong.albumImage" :alt="currentSong.name" /> -->
					<strong>{{ currentSong.name }}</strong>
					<p>{{ currentSong.artist }}</p>
				</div>
			</div>
			<div class="spotify-loading" v-else>
				<p>Loading...</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const currentSong = ref(null)
const accessToken = ref("")

const getAccessToken = async () => {
	try {
		let authOptions = {
			method: "POST",
			headers: {
				Authorization:
					"Basic " +
					btoa(
						import.meta.env.VITE_SPOTIFY_CLIENT_ID +
							":" +
							import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
					),
			},
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
			}),
		}
		let response = await fetch(
			"https://accounts.spotify.com/api/token",
			authOptions
		)
		let result = await response.json()
		accessToken.value = result.access_token
		await getCurrentSong()
	} catch (error) {
		console.log(error)
	}
}

const getCurrentSong = async () => {
	console.log(accessToken.value)
	try {
		const response = await fetch(
			"https://api.spotify.com/v1/me/player/recently-played?limit=1",
			{
				headers: {
					Authorization: "Bearer " + accessToken.value,
				},
			}
		)

		if (response.ok) {
			const data = await response.json()
			console.log("currentSong", data.items[0].track)
			let { name, artists, album } = data.items[0].track
			currentSong.value = {
				name: name,
				artist: artists.map((artist) => artist.name).join(", "),
				albumImage: album.images[0].url,
			}
		} else {
			console.error("Error fetching current song data", error)
		}
	} catch (error) {
		console.error("Error fetching current song data", error)
	}
}

onMounted(getAccessToken)
</script>

<style lang="scss" scoped>
$spotify-color: #1db954;

.spotify-now-playing {
	display: flex;
	color: $spotify-color;
}
.fa-spotify {
	color: $spotify-color;
	position: absolute;
	left: 25px;
	top: 25px;
}
.spotify-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 28px 32px;
}

.spotify-info,
.spotify-loading {
	position: absolute;
	bottom: 25px;
	left: 25px;
}

.playing-indicator_container {
	height: 20px;
	margin-right: 4px;
	position: relative;
	display: flex;
	align-items: center;

	.playing-bar {
		width: 3px;
		height: 3px;
		margin-right: 3px;
		background: $spotify-color;
		border-radius: 1.5px;
	}
}

.bar1 {
	animation: playing 0.85s infinite ease;
}
.bar2 {
	animation: playing 1.26s infinite ease;
}
.bar3 {
	animation: playing 0.62s infinite ease;
}

@keyframes playing {
	0% {
		height: 3px;
	}

	50% {
		height: 12px;
	}

	100% {
		height: 3px;
	}
}
</style>
