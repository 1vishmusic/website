<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { type AlbumResponse } from "@/api/GalleryController";
import SectionTitle from "@/components/SectionTitle.vue";

const props = defineProps<{
				albums?: AlbumResponse[]
}>();

// --- LOGIKA ZOBRAZOVÁNÍ (SHOW MORE) ---
const INITIAL_COUNT = 6; // Kolik alb ukázat na začátku
const isExpanded = ref(false);

// Vypočítané pole alb, které se má právě zobrazit
const visibleAlbums = computed(() => {
				if (!props.albums) return [];
				if (isExpanded.value) return props.albums;
				return props.albums.slice(0, INITIAL_COUNT);
});

// Přepínač zobrazit více/méně
const toggleExpand = () => {
				isExpanded.value = !isExpanded.value;

				// Pokud zavíráme, posuneme se plynule zpět na nadpis galerie
				if (!isExpanded.value) {
								nextTick(() => {
												document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' });
								});
				}
};

// --- LIGHTBOX LOGIC (Původní) ---
const isLightboxOpen = ref(false);
const currentPhotos = ref<string[]>([]);
const activePhotoIndex = ref(0);

const openGallery = (album: AlbumResponse) => {
				if (!album.photos || album.photos.length === 0) return;
				currentPhotos.value = album.photos;
				activePhotoIndex.value = 0;
				isLightboxOpen.value = true;
				document.body.style.overflow = 'hidden';
};

const closeGallery = () => {
				isLightboxOpen.value = false;
				document.body.style.overflow = '';
				currentPhotos.value = [];
};

const nextPhoto = () => {
				if (activePhotoIndex.value < currentPhotos.value.length - 1) activePhotoIndex.value++;
				else activePhotoIndex.value = 0;
};

const prevPhoto = () => {
				if (activePhotoIndex.value > 0) activePhotoIndex.value--;
				else activePhotoIndex.value = currentPhotos.value.length - 1;
};

const handleKeydown = (e: KeyboardEvent) => {
				if (!isLightboxOpen.value) return;
				if (e.key === 'Escape') closeGallery();
				if (e.key === 'ArrowRight') nextPhoto();
				if (e.key === 'ArrowLeft') prevPhoto();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
				<div id="galerie" class="py-5 bg-darker">
								<div class="container">
												<SectionTitle>Fotogalerie</SectionTitle>

												<div class="row g-4 mb-5">
																<div v-for="(album, index) in visibleAlbums" :key="index" class="col-md-6 col-lg-4 animate-fade-in">
																				<div class="card bg-dark text-white border-0 h-100 shadow hover-scale overflow-hidden cursor-pointer"
																									@click="openGallery(album)">
																								<div class="ratio ratio-4x3">
																												<img :src="album.thumbnail" class="card-img-top object-fit-cover" :alt="album.title">
																								</div>
																								<div class="card-body bg-dark text-center position-relative z-2">
																												<h5 class="card-title fw-bold text-uppercase mb-0 fs-6">{{ album.title }}</h5>
																												<small class="text-secondary" v-if="album.photos">{{ album.photos.length }} fotek</small>
																								</div>
																				</div>
																</div>
												</div>

												<div v-if="albums && albums.length > INITIAL_COUNT" class="text-center">
																<div class="position-relative">
																				<div v-if="!isExpanded" class="fade-overlay"></div>

																				<button @click="toggleExpand" class="btn btn-outline-light rounded-pill px-5 py-2 text-uppercase fw-bold ls-2 position-relative z-2">
                        <span v-if="!isExpanded">
                            Zobrazit starší alba <i class="bi bi-chevron-down ms-2"></i>
                        </span>
																								<span v-else>
                            Zobrazit méně <i class="bi bi-chevron-up ms-2"></i>
                        </span>
																				</button>
																</div>
												</div>

												<div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeGallery">
																<button class="btn-close-custom" @click="closeGallery"><i class="bi bi-x-lg"></i></button>
																<button class="nav-btn prev" @click.stop="prevPhoto"><i class="bi bi-chevron-left"></i></button>

																<div class="lightbox-content">
																				<img :src="currentPhotos[activePhotoIndex]" class="lightbox-img" alt="Gallery photo">
																				<div class="photo-counter">{{ activePhotoIndex + 1 }} / {{ currentPhotos.length }}</div>
																</div>

																<button class="nav-btn next" @click.stop="nextPhoto"><i class="bi bi-chevron-right"></i></button>
												</div>
								</div>
				</div>
</template>

<style scoped>
/* --- SHOW MORE STYLES --- */

/* Efekt postupného mizení nad tlačítkem */
.fade-overlay {
				position: absolute;
				bottom: 100%;
				left: 0;
				width: 100%;
				height: 100px;
				background: linear-gradient(to bottom, transparent, var(--bg-darker));
				pointer-events: none;
				z-index: 1;
}

/* Animace pro nové prvky */
.animate-fade-in {
				animation: simpleFade 0.5s ease forwards;
}

@keyframes simpleFade {
				from { opacity: 0; transform: translateY(20px); }
				to { opacity: 1; transform: translateY(0); }
}

/* --- LIGHTBOX STYLES (Původní) --- */
.lightbox-overlay {
				position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
				background-color: rgba(0, 0, 0, 0.95); z-index: 9999;
				display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);
}
.lightbox-img {
				max-width: 90vw; max-height: 85vh; object-fit: contain;
				box-shadow: 0 0 20px rgba(0,0,0,0.5); border: 1px solid #333; animation: fadeIn 0.3s ease;
}
.photo-counter {
				position: absolute; bottom: -40px; left: 50%; transform: translateX(-50%);
				color: #888; font-size: 0.9rem;
}
.lightbox-content { position: relative; display: flex; flex-direction: column; align-items: center; }
.btn-close-custom {
				position: absolute; top: 20px; right: 30px; background: none; border: none;
				color: #fff; font-size: 2rem; cursor: pointer; transition: transform 0.2s, color 0.2s; z-index: 10000;
}
.btn-close-custom:hover { color: var(--brand-red, #dc3545); transform: scale(1.1); }
.nav-btn {
				position: absolute; top: 50%; transform: translateY(-50%);
				background: rgba(255, 255, 255, 0.05); border: none; color: #fff;
				font-size: 2rem; padding: 10px 15px; cursor: pointer; border-radius: 5px;
				transition: all 0.2s; z-index: 10000;
}
.nav-btn:hover { background: rgba(255, 255, 255, 0.2); color: var(--brand-red, #dc3545); }
.nav-btn.prev { left: 20px; }
.nav-btn.next { right: 20px; }
@keyframes fadeIn {
				from { opacity: 0; transform: scale(0.95); }
				to { opacity: 1; transform: scale(1); }
}
</style>
