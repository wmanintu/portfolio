<template>
  <div class="card">
    <div class="card-content">
      <div class="spotify-container">
        <div class="spotify-header">
          <font-awesome-icon icon="fa-brands fa-spotify" size="2x" />
        </div>

        <div class="spotify-content">
          <div v-if="currentSong" class="spotify-info">
            <div class="spotify-now-playing">
              <div class="playing-indicator_container">
                <div class="playing-bar bar1"></div>
                <div class="playing-bar bar2"></div>
                <div class="playing-bar bar3"></div>
              </div>
              <span>last played</span>
            </div>
            <!-- <img :src="currentSong.albumImage" :alt="currentSong.name" /> -->
            <div class="track-info">
              <div
                class="track-name-container"
                :class="{ 'long-text': isLongSongName }"
              >
                <strong class="track-name" :title="currentSong.name">
                  <span class="track-text">{{ currentSong.name }}</span>
                </strong>
              </div>
              <button
                class="copy-button"
                @click="copySongName"
                :title="`Copy '${currentSong.name}' to clipboard`"
              >
                <font-awesome-icon :icon="copyIcon" size="sm" />
              </button>
            </div>
            <p class="artist-names" :title="currentSong.artist">
              {{ currentSong.artist }}
            </p>
          </div>

          <div class="spotify-loading" v-else>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const currentSong = ref(null);
const accessToken = ref("");
const copySuccess = ref(false);

// Computed property for copy icon
const copyIcon = computed(() => {
  return copySuccess.value ? "fa-solid fa-check" : "fa-solid fa-copy";
});

// Check if song name is longer than 15 characters
const isLongSongName = computed(() => {
  return currentSong.value?.name && currentSong.value.name.length > 15;
});

// Copy song name to clipboard
const copySongName = async () => {
  if (!currentSong.value?.name) return;

  try {
    await navigator.clipboard.writeText(currentSong.value.name);
    copySuccess.value = true;

    // Reset icon after 2 seconds
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (error) {
    console.error("Failed to copy song name:", error);
    // Fallback for older browsers
    fallbackCopy(currentSong.value.name);
  }
};

// Fallback copy method for older browsers
const fallbackCopy = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (error) {
    console.error("Fallback copy failed:", error);
  }

  document.body.removeChild(textArea);
};

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
    };
    let response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions
    );
    let result = await response.json();
    accessToken.value = result.access_token;
    await getCurrentSong();
  } catch (error) {
    console.log(error);
  }
};

const getCurrentSong = async () => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: "Bearer " + accessToken.value,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      let { name, artists, album } = data.items[0].track;
      currentSong.value = {
        name: name,
        artist: artists.map((artist) => artist.name).join(", "),
        albumImage: album.images[0].url,
      };
    } else {
      console.error("Error fetching current song data", error);
    }
  } catch (error) {
    console.error("Error fetching current song data", error);
  }
};

onMounted(getAccessToken);
</script>

<style lang="scss" scoped>
$spotify-color: #1db954;

.card-content {
  height: 100%;
  padding: 0;
}

.spotify-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.spotify-header {
  flex-shrink: 0;
  margin-bottom: auto;
}

.fa-spotify {
  color: $spotify-color;
}

.spotify-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 0; // Important for text ellipsis to work properly
}

.spotify-info,
.spotify-loading {
  width: 100%;
  min-width: 0; /* Important for text ellipsis in flex containers */
}

.spotify-now-playing {
  display: flex;
  align-items: center;
  color: $spotify-color;
  margin-bottom: 0.5rem;
}

.track-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-width: 0; /* Important for text ellipsis */
}

.track-name-container {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  position: relative;

  &:not(.long-text) .track-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.long-text {
    .track-name {
      white-space: nowrap;
      overflow: hidden;

      .track-text {
        display: inline-block;
        animation: none;
        transition: transform 0.3s ease;
      }
    }

    &:hover .track-name .track-text {
      animation: slide-text 8s linear infinite;
    }
  }
}

.track-name,
.artist-names {
  margin: 0;
  line-height: 1.4;
  display: block; /* Ensure block display for ellipsis */
}

.track-name {
  font-weight: 600;
  margin-bottom: 0;
  width: 100%;
  overflow: hidden;
}

@keyframes slide-text {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(calc(-100% + 200px));
  }
  100% {
    transform: translateX(calc(-100% + 200px));
  }
}

.copy-button {
  background: none;
  border: none;
  // color: $spotify-color;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  flex-shrink: 0;
  min-width: 24px;
  height: 24px;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }

  // Success state styling
  &.copied {
    color: #28a745;
  }
}

.artist-names {
  font-size: 0.9em;
  opacity: 0.8;
}

.playing-indicator_container {
  height: 20px;
  margin-right: 0.5rem;
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

.spotify-loading {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    opacity: 0.6;
  }
}
</style>
