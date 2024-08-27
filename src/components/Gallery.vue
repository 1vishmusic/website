<script setup lang="ts">
import type {AlbumResponse} from "@/api/GalleryController";
import {ref} from "vue";

const props = defineProps<{
				album: AlbumResponse
}>()
const emit = defineEmits(['onOverlayOpen', 'onOverlayClose'])


const shown = ref(false)
const overlayClass = ref<string[]>(['gallery-overlay', 'hidden'])

const item = ref<number>(0)
const imageClass = ref<string[]>([])

const openOverlay = () => {
				shown.value = true
				setTimeout(() => overlayClass.value = ['gallery-overlay'], 0)

				document.getElementById("navButton")
								?.setAttribute("hidden", "true")

				emit('onOverlayOpen')
}
const closeOverlay = () => {
				overlayClass.value = ['gallery-overlay', 'hidden']
				setTimeout(() => shown.value = false, 500)

				emit('onOverlayClose')
}

const prevImage = () => {
				imageClass.value = ['image-hidden']
				setTimeout(() => {
								item.value = (item.value - 1 + props.album.photos.length) % props.album.photos.length
								imageClass.value = []
				}, 250)
}
const nextImage = () => {
				imageClass.value = ['image-hidden']
				setTimeout(() => {
								item.value = (item.value + 1) % props.album.photos.length
								imageClass.value = []
				}, 250)
}

</script>

<template>
<div class="gallery-item" :style="{ background: 'url(' + album.thumbnail + ')' }">
				<div class="gallery-item-inner" @click="openOverlay">
								<h3>{{ album.title }}</h3>
				</div>
				<div v-if="shown" :class="overlayClass">
								<div class="gallery-overlay-info-control">
												<p>{{ item + 1 }} / {{ album.photos.length }}</p>
								</div>
								<div class="gallery-overlay-close-control">
												<i class="fas fa-times" @click="closeOverlay"></i>
								</div>
								<div class="gallery-overlay-inner">
												<i class="fas fa-angle-left" @click="prevImage"></i>
												<img :src="album.photos[item]" alt="overlay-image" @click="nextImage" :class="imageClass"/>
												<i class="fas fa-angle-right" @click="nextImage"></i>
								</div>
				</div>
</div>
</template>

<style scoped>
.image-hidden {
				opacity: 0;
}

.gallery-overlay-info-control {
				position: fixed;
				bottom: 20px;
				right: 20px;

				p {
								color: white;
				}
}

.gallery-overlay-close-control {
				position: fixed;
				top: 20px;
				right: 20px;

				i {
								font-size: 2em;
								color: white;
				}
				i:hover {
								color: #b4b4b4;
				}
}

.gallery-overlay-inner {
				img {
								max-width: 90%;
								max-height: 90%;
								object-fit: cover;
								transition: ease-in-out 0.25s;
				}

				i {
								color: white;
								font-size: 40px;
								width: 80px;
				}

				i:hover {
								color: #b4b4b4;
				}

				p, h1, h2, h3 {
								color: white
				}
}

.hidden {
				opacity: 0;
}

.gallery-overlay-inner {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
}

.gallery-overlay {
				position: fixed;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.8);
				z-index: 1000;
				display: flex;
				transition: ease-in-out 0.5s;
}

.gallery-item-inner {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
}

.gallery-item-inner:hover {
				background-color: rgba(0, 0, 0, 0.5);
				transition: 0.5s;
}

.gallery-item-inner:hover h3 {
				color: white !important;
				transition: 2s;
}

.gallery-item-inner h3 {
				color: transparent;
				font-weight: 400;
}
</style>
