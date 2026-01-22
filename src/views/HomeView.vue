<script setup lang="ts">
import {ref} from "vue";
import {type EventResponse, fetchEvents} from "@/api/EventController";
import {type AlbumResponse, fetchGallery} from "@/api/GalleryController";

// Události
const events = ref<EventResponse[]>()
fetchEvents().then(e => events.value = e)

// Galerie
const albums = ref<AlbumResponse[]>()
fetchGallery().then(g => albums.value = g)

import { ref, onMounted, onUnmounted } from 'vue';
// ... tvé importy (EventController, GalleryController atd.) ...

// --- LIGHTBOX LOGIKA ---
const isLightboxOpen = ref(false);
const currentPhotos = ref<string[]>([]); // Pole fotek aktuálně otevřeného alba
const activePhotoIndex = ref(0); // Index právě zobrazené fotky

// Otevře galerii
const openGallery = (album: AlbumResponse) => {
				if (!album.photos || album.photos.length === 0) return; // Ochrana proti prázdnému albu

				currentPhotos.value = album.photos;
				activePhotoIndex.value = 0;
				isLightboxOpen.value = true;
				document.body.style.overflow = 'hidden'; // Zabrání scrollování stránky na pozadí
};

// Zavře galerii
const closeGallery = () => {
				isLightboxOpen.value = false;
				document.body.style.overflow = ''; // Obnoví scrollování
				currentPhotos.value = [];
};

// Další fotka (cyklicky)
const nextPhoto = () => {
				if (activePhotoIndex.value < currentPhotos.value.length - 1) {
								activePhotoIndex.value++;
				} else {
								activePhotoIndex.value = 0; // Skočí na začátek
				}
};

// Předchozí fotka (cyklicky)
const prevPhoto = () => {
				if (activePhotoIndex.value > 0) {
								activePhotoIndex.value--;
				} else {
								activePhotoIndex.value = currentPhotos.value.length - 1; // Skočí na konec
				}
};

// Ovládání klávesnicí
const handleKeydown = (e: KeyboardEvent) => {
				if (!isLightboxOpen.value) return;

				if (e.key === 'Escape') closeGallery();
				if (e.key === 'ArrowRight') nextPhoto();
				if (e.key === 'ArrowLeft') prevPhoto();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

// Animation (ponecháno)
const homepageClasses = ref(['homepage', 'is-preload'])
setTimeout(() => {
				homepageClasses.value = ['homepage']
}, 100)
</script>

<template>
				<div class="main-wrapper text-light">

								<nav class="navbar navbar-expand-lg navbar-dark fixed-top border-bottom border-secondary border-opacity-25" style="background: rgba(0,0,0,0.8); backdrop-filter: blur(10px);">
												<div class="container-fluid p-2 w-75">
																<a class="navbar-brand tracking-wide fw-bold" href="#">1VISH</a>
																<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
																				<span class="navbar-toggler-icon"></span>
																</button>
																<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
																				<ul class="navbar-nav fw-light text-uppercase small ls-2">
																								<li class="nav-item"><a class="nav-link" href="#o-kapele">O kapele</a></li>
																								<li class="nav-item"><a class="nav-link" href="#koncerty">Koncerty</a></li>
																								<li class="nav-item"><a class="nav-link" href="#hudba">Hudba</a></li>
																								<li class="nav-item"><a class="nav-link" href="#galerie">Fotogalerie</a></li>
																								<li class="nav-item"><a class="nav-link" href="#kontakt">Kontakt</a></li>
																				</ul>
																</div>
												</div>
								</nav>

								<div class="hero-section d-flex align-items-center justify-content-center text-center position-relative">
												<div class="overlay-gradient position-absolute w-100 h-100"></div>

												<div class="container position-relative z-2 hero-content">
																<h1 class="display-1 fw-black text-uppercase mb-3 text-shadow">1VISH</h1>
																<p class="lead fw-light ls-3 text-uppercase mb-5 text-shadow">Oficiální stránky příbramské rockové kapely</p>
																<a href="#koncerty" class="btn btn-outline-light rounded-0 px-5 py-3 text-uppercase ls-2 fw-bold box-shadow">
																				Nejbližší akce
																</a>
												</div>
								</div>

								<div id="o-kapele" class="py-5 bg-black">
												<div class="container py-5">
																<div class="row align-items-center g-5">
																				<div class="col-lg-6">
																								<div class="ratio ratio-4x3 shadow-lg position-relative overflow-hidden">
																												<img src="@/assets/image/band.jpg"
																																	class="object-fit-cover rounded-1 grayscale-hover slow-transition" alt="Kapela 1VISH">
																								</div>
																				</div>
																				<div class="col-lg-6">
																								<h2 class="display-4 text-uppercase mb-4">O kapele</h2>
																								<p class="fw-light fs-5 text-secondary text-start">
																												Jsme česká rocková kapela 1VISH pocházející z Příbrami a jejího okolí, na scéně působíme
																												teprve od začátku roku 2022. Za tu dobu už jsme ale stačili odehrát několik koncertů a
																												vypustit videoklipy k singlům Time To Love a Turn you on.
																								</p>
																								<p class="fw-light fs-5 text-secondary text-start">
																												Na koncertech vystupujeme ve složení 2 kytary, bicí a basa. Zaměřujeme se na vlastní tvorbu,
																												přičemž někdy do setu přidáme i nějaké covery.
																								</p>
																				</div>
																</div>
												</div>
								</div>

								<div id="koncerty" class="py-5 bg-darker">
												<div class="container py-5">
																<h2 class="display-5 text-uppercase text-center mb-5">Koncerty</h2>

																<div class="row justify-content-center">
																				<div class="col-lg-10">
																								<h4 class="text-uppercase fw-bold text-white mb-4 border-bottom border-secondary pb-2">
																												Nadcházející
																								</h4>

																								<div v-if="events && events.length > 0">
																												<div v-for="gig in events" :key="gig.id"
																																	class="event-row d-md-flex align-items-center justify-content-between bg-dark mb-3 p-4 rounded-1 shadow-sm border-start border-4 border-danger hover-lift">

																																<div class="event-date text-center text-md-start mb-3 mb-md-0 me-md-5 min-w-date">
																																				<span class="d-block h4 fw-bold text-danger mb-0">{{ gig.date }}</span>
																																</div>

																																<div class="event-info flex-grow-1 text-center text-md-start mb-3 mb-md-0 border-start-md ps-md-4 border-secondary border-opacity-25">
																																				<h4 class="h5 fw-bold text-uppercase text-white mb-1">{{ gig.name }}</h4>

																																				<div class="text-secondary small">
																																								<i class="bi bi-geo-alt me-1 text-danger"></i>
																																								<a v-if="gig.placeWeb" :href="gig.placeWeb" target="_blank" class="text-decoration-none text-secondary hover-white">
																																												{{ gig.place }}
																																								</a>
																																								<span v-else>{{ gig.place }}</span>
																																				</div>
																																</div>

																																<div class="event-action text-center min-w-action">
																																				<a v-if="gig.webpage" :href="gig.webpage" target="_blank"
																																							class="btn btn-outline-light rounded-pill btn-sm px-4 text-uppercase fw-bold">
																																								<i class="bi bi-ticket-perforated me-1"></i> Událost
																																				</a>
																																				<span v-else class="badge bg-secondary text-dark opacity-50">Info brzy</span>
																																</div>
																												</div>
																								</div>

																								<div v-else class="text-center text-secondary py-5 border border-secondary border-opacity-25 rounded bg-dark">
																												<i class="bi bi-calendar-x fs-1 mb-3 d-block"></i>
																												<p class="mb-0">Momentálně neplánujeme žádné nové akce.</p>
																												<small>Sledujte nás na sociálních sítích!</small>
																								</div>
																				</div>
																</div>
												</div>
								</div>

								<div id="hudba" class="py-5 bg-black">
												<div class="container text-center">
																<h2 class="display-5 text-uppercase text-center mb-5">Hudba</h2>
																<div class="row justify-content-center">
																				<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1jUYsvetpW9TQWZ51bj3fu?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
																</div>
												</div>
								</div>

								<div id="galerie" class="py-5 bg-darker">
												<div class="container py-5">
																<h2 class="display-5 text-uppercase text-center mb-4">Fotogalerie</h2>

																<div class="row g-4">
																				<div v-for="(album, index) in albums" :key="index" class="col-md-6 col-lg-4">
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

																<div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeGallery">

																				<button class="btn-close-custom" @click="closeGallery">
																								<i class="bi bi-x-lg"></i>
																				</button>

																				<button class="nav-btn prev" @click.stop="prevPhoto">
																								<i class="bi bi-chevron-left"></i>
																				</button>

																				<div class="lightbox-content">
																								<img :src="currentPhotos[activePhotoIndex]" class="lightbox-img" alt="Gallery photo">
																								<div class="photo-counter">
																												{{ activePhotoIndex + 1 }} / {{ currentPhotos.length }}
																								</div>
																				</div>

																				<button class="nav-btn next" @click.stop="nextPhoto">
																								<i class="bi bi-chevron-right"></i>
																				</button>
																</div>

												</div>
								</div>

								<div id="video" class="py-5 bg-black">
												<div class="container text-center">
																<h2 class="display-5 text-uppercase text-center mb-5">Videoklipy</h2>
																<div class="row justify-content-center g-4">
																				<div class="col-lg-6">
																								<div class="ratio ratio-16x9 shadow-lg border border-secondary border-opacity-25">
																												<iframe src="https://www.youtube.com/embed/oaptkfD6qro" title="Society" allowfullscreen></iframe>
																								</div>
																				</div>
																				<div class="col-lg-6">
																								<div class="ratio ratio-16x9 shadow-lg border border-secondary border-opacity-25">
																												<iframe src="https://www.youtube.com/embed/d7V32Ut3lyQ" title="Turn you on" allowfullscreen></iframe>
																								</div>
																				</div>
																</div>
												</div>
								</div>

								<div id="kontakt" class="py-5 bg-darker border-top border-secondary border-opacity-25 text-center">
												<div class="container">
																<h3 class="text-uppercase mb-4">Sledujte nás</h3>
																<div class="d-flex justify-content-center flex-wrap gap-4 mb-5 social-icons-wrapper">
																				<a href="https://www.facebook.com/1vishmusic" target="_blank" class="social-icon facebook"><i class="bi bi-facebook"></i></a>
																				<a href="https://www.instagram.com/1vish_music/" target="_blank" class="social-icon instagram"><i class="bi bi-instagram"></i></a>
																				<a href="#" target="_blank" class="social-icon spotify"><i class="bi bi-spotify"></i></a>
																				<a href="https://www.youtube.com/@1vish_music" target="_blank" class="social-icon youtube"><i class="bi bi-youtube"></i></a>
																				<a href="mailto:kapela@1vish.com" class="social-icon email"><i class="bi bi-envelope-fill"></i></a>
																</div>
																<p class="text-secondary fw-light fs-6 mb-0">© {{ new Date().getFullYear() }} 1VISH</p>
												</div>
								</div>

				</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700;900&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

:root {
				--bg-darker: #121212;
				--brand-red: #dc3545;
}

body {
				font-family: 'Montserrat', sans-serif;
				background-color: #000;
				color: #fff;
}

.bg-darker { background-color: var(--bg-darker); }
.ls-2 { letter-spacing: 2px; }
.ls-3 { letter-spacing: 3px; }

/* --- HERO SECTION UPDATES --- */
.hero-section {
				min-height: 100vh;
				background: url('@/assets/image/header.jpg') no-repeat center center;
				background-size: cover;
				background-attachment: fixed;
}

/* Gradient místo šedé barvy */
.overlay-gradient {
				background: linear-gradient(to bottom,
				rgba(0,0,0,0) 0%,
				rgba(0,0,0,0.1) 50%,
				rgba(0,0,0,0.8) 90%,
				#000 100%);
}

/* Stíny pro lepší čitelnost textu na Hero */
.text-shadow {
				text-shadow: 0 4px 15px rgba(0,0,0,0.9);
}

/* --- O KAPELE UPDATES --- */
.grayscale-hover {
				filter: grayscale(100%);
				/* Tady nastavujeme délku přechodu - 1.5 sekundy */
				transition: filter 1.5s ease-in-out, transform 1.5s ease;
}
.grayscale-hover:hover {
				filter: grayscale(0%);
				transform: scale(1.02); /* Jemný zoom */
}

/* --- CONCERT ROW UPDATES --- */
.hover-lift { transition: transform 0.3s ease, background-color 0.3s; }
.hover-lift:hover {
				transform: translateY(-5px);
				background-color: #2c2c2c !important; /* Mírné zesvětlení pozadí při hoveru */
}

.hover-white:hover { color: #fff !important; }

/* Responzivní čáry pro koncerty */
@media (min-width: 768px) {
				.border-start-md { border-left: 1px solid rgba(255,255,255,0.2) !important; }
				.min-w-date { min-width: 120px; }
				.min-w-action { min-width: 150px; }
}

/* --- GALLERY --- */
.hover-scale img { transition: transform 0.6s ease; }
.hover-scale:hover img { transform: scale(1.1); }

/* --- GALLERY & LIGHTBOX STYLES --- */

/* Kurzor pro karty alb */
.cursor-pointer {
				cursor: pointer;
}

/* Hlavní kontejner Lightboxu */
.lightbox-overlay {
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background-color: rgba(0, 0, 0, 0.95); /* Téměř černá neprůhlednost */
				z-index: 9999; /* Musí být nad vším (i nad navigací) */
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(5px);
}

/* Samotný obrázek */
.lightbox-img {
				max-width: 90vw;
				max-height: 85vh;
				object-fit: contain;
				box-shadow: 0 0 20px rgba(0,0,0,0.5);
				border: 1px solid #333;
				animation: fadeIn 0.3s ease;
}

/* Počítadlo fotek (1 / 50) */
.photo-counter {
				position: absolute;
				bottom: -40px;
				left: 50%;
				transform: translateX(-50%);
				color: #888;
				font-size: 0.9rem;
				font-family: 'Montserrat', sans-serif;
}

.lightbox-content {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
}

/* Tlačítko zavřít (X) */
.btn-close-custom {
				position: absolute;
				top: 20px;
				right: 30px;
				background: none;
				border: none;
				color: #fff;
				font-size: 2rem;
				cursor: pointer;
				transition: transform 0.2s, color 0.2s;
				z-index: 10000;
}
.btn-close-custom:hover {
				color: var(--brand-red, #dc3545);
				transform: scale(1.1);
}

/* Navigační šipky */
.nav-btn {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				background: rgba(255, 255, 255, 0.05);
				border: none;
				color: #fff;
				font-size: 2rem;
				padding: 10px 15px;
				cursor: pointer;
				border-radius: 5px;
				transition: all 0.2s;
				z-index: 10000;
}
.nav-btn:hover {
				background: rgba(255, 255, 255, 0.2);
				color: var(--brand-red, #dc3545);
}
.nav-btn.prev { left: 20px; }
.nav-btn.next { right: 20px; }

/* Animace načtení obrázku */
@keyframes fadeIn {
				from { opacity: 0; transform: scale(0.95); }
				to { opacity: 1; transform: scale(1); }
}

/* Skrytí šipek na mobilech, pokud chceš spoléhat jen na swipe (volitelné)
   Zde necháváme šipky, protože swipe se musí programovat složitěji
*/

/* --- SOCIAL ICONS --- */
.social-icon {
				display: flex; align-items: center; justify-content: center;
				width: 60px; height: 60px; font-size: 1.8rem;
				border-radius: 50%; background-color: #1a1a1a; color: #fff;
				transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
				text-decoration: none;
}
.social-icon:hover { transform: scale(1.2); color: #fff; }
.social-icon.facebook:hover { background-color: #1877F2; box-shadow: 0 0 15px rgba(24, 119, 242, 0.6); }
.social-icon.instagram:hover { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); box-shadow: 0 0 15px rgba(214, 36, 159, 0.6); }
.social-icon.spotify:hover { background-color: #1DB954; box-shadow: 0 0 15px rgba(29, 185, 84, 0.6); }
.social-icon.youtube:hover { background-color: #FF0000; box-shadow: 0 0 15px rgba(255, 0, 0, 0.6); }
.social-icon.email:hover { background-color: #ffffff; color: #000; box-shadow: 0 0 15px rgba(255, 255, 255, 0.6); }

</style>
