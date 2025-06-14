<template>
  <div class="playlist-page">
    <div class="background-hearts" :style="{ backgroundImage: `url(${backgroundHeart})` }"></div>
    <!-- Floating Photo Background -->
    <div class="photo-tiles">
      <div
        v-for="(img, index) in fixedImages"
        :key="img"
        class="photo-tile-wrapper"
      >
        <transition name="fade-image" mode="out-in">
          <img
            v-if="visibleIndexes.includes(index)"
            :src="img"
            class="photo-tile"
            :style="{
              '--float-speed': Math.random().toFixed(2),
              '--float-delay': Math.floor(Math.random() * 4)
            }"
          />
        </transition>
      </div>
    </div>

    <!-- Central Spotify Playlist -->
    <div class="playlist-container">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6Ri13V8b1E0iXVrma1zDJw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
import heartSvg from '@/assets/heart.svg?url';
const images = import.meta.glob('@/assets/photos/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

export default {
  name: 'PlaylistPage',
  data() {
    return {
      allImages: Object.values(images),
      fixedImages: [],
      visibleIndexes: [],
      maxVisible: 6,
      interval: null,
      playlistUrl: 'https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID_HERE',
      backgroundHeart: heartSvg
    };
  },
  mounted() {
    this.fixedImages = [...this.allImages].slice(0, 12);
    this.shuffleTiles();
    this.interval = setInterval(this.shuffleTiles, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    shuffleTiles() {
      const total = this.fixedImages.length;
      const indexes = Array.from({ length: total }, (_, i) => i);
      this.visibleIndexes = indexes.sort(() => 0.5 - Math.random()).slice(0, this.maxVisible);
    }
  }
};
</script>

<style scoped>
.playlist-page {
  position: relative;
  min-height: 100vh;
  background-color: #fdf6f9;
  overflow: hidden;
}

.photo-tiles {
  position: absolute;
  inset: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  z-index: 1;
  pointer-events: none;
}

.photo-tile-wrapper {
  width: 240px;
  height: 240px;
  position: relative;
}

.photo-tile {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  opacity: 0.75;
  transition: opacity 1s ease-in-out, transform 2s ease-in-out;
  animation: float ease-in-out infinite;
  animation-duration: calc(4s + 3s * var(--float-speed));
  animation-delay: calc(1s * var(--float-delay));
}

@keyframes float {
  0% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(5px) translateX(-5px);
  }
  75% {
    transform: translateY(-8px) translateX(8px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-image-enter-active,
.fade-image-leave-active {
  transition: opacity 1s ease;
}
.fade-image-enter-from,
.fade-image-leave-to {
  opacity: 0;
}

.playlist-container {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 10vh;
  text-align: center;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
}
</style>

<style scoped>
.background-hearts {
  position: absolute;
  inset: 0;
  background-repeat: repeat;
  background-size: 100px;
  opacity: 0.05;
  animation: drift 30s linear infinite;
  z-index: 0;
  pointer-events: none;
}

@keyframes drift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200px 200px;
  }
}
</style>