<script setup lang="ts">

import {ref} from "vue";
import {type EventResponse, fetchEvents} from "@/api/EventController";
import ConcertRow from "@/components/ConcertRow.vue";
import {type AlbumResponse, fetchGallery} from "@/api/GalleryController";
import Gallery from "@/components/Gallery.vue";

// Události
const events = ref<EventResponse[]>()
fetchEvents()
				.then(e => events.value = e)

// Galerie
const albums = ref<AlbumResponse[]>()
fetchGallery()
				.then(g => albums.value = g)

// Animation
const homepageClasses = ref(['homepage', 'is-preload'])
setTimeout(() => {
				homepageClasses.value = ['homepage']
}, 100)

const overlay = ref(false)
</script>

<style>
</style>

<template>
				<main :class="homepageClasses">
								<div id="page-wrapper">

												<!-- Header -->
												<div id="header">
																<!-- Inner -->
																<div class="inner">
																				<header>
																								<h1><a href="index.html" id="logo">1VISH</a></h1>
																								<hr/>
																								<p>Oficiální stránky kapely 1VISH</p>
																				</header>
																				<footer>
																								<a href="#main" class="button circled scrolly"><i class="fas fa-caret-down"></i></a>
																				</footer>
																</div>

																<!-- Nav -->
																<nav id="nav">
																				<ul>
																								<li><a href="#about">O kapele</a></li>
																								<li><a href="#concerts">Koncerty</a></li>
																								<li>
																												<RouterLink to="/pro-poradatele">Pro pořadatele</RouterLink>
																								</li>
																								<li><a href="#footer">Kontakt</a></li>
																				</ul>
																</nav>
												</div>

												<!-- Concerts -->
												<div id="main" class="wrapper style2">
																<article id="about" class="container special">
																				<header>
																								<h2><a href="#about">O kapele</a></h2>
																								<p></p>
																				</header>

																				<div class="row">
																								<div class="col-6 col-12-mobile">
																												<img style="max-width: 100%" src="@/assets/image/band.jpg" alt="preview">
																								</div>
																								<div class="col-6 col-12-mobile">
																												<p>
																																Jsme česká rocková kapela 1VISH pocházející z Příbrami a jejího okolí,
																																na scéně působíme teprve od začátku roku 2022. Za tu dobu už jsme ale stačili odehrát
																																několik koncertů a vypustit videoklipy k singlům Time To Love a Turn you on,
																																vyhrát příbramskou hudební soutěž Souboj kapel a zahrát si před známějšími kapelami
																																české
																																hudební scény.
																												</p>
																												<p>
																																Na koncertech vystupujeme ve složení 2 kytary, bicí a basa. Zaměřujeme se na vlastní
																																tvorbu,
																																přičemž někdy do setu přidáme i nějaké covery.
																												</p>
																												<p>
																																Kdy a kde hrajem se dozvíte níže v sekci <a href="#concerts"
																																																																												class="scrolly">Koncerty</a>, kterou
																																pravidelně
																																aktualizujeme.
																												</p>
																								</div>
																				</div>
																</article>

																<article id="concerts" class="container special">
																				<header>
																								<h2><a href="#concerts">Koncerty</a></h2>
																								<p>
																												Měl(a) bys zájem o náš koncert? Napiš nám na mail, nebo na sociální sítě.
																								</p>
																				</header>

																				<div class="concerts">
																								<table class="concerts-table">
																												<ConcertRow v-for="e in events" :event="e"/>
																								</table>
																				</div>
																</article>

																<article id="gallery" class="container special">
																				<header>
																								<h2><a href="#gallery">Fotky</a></h2>
																								<p>Máš nějaký fotky z koncertu který tu chybí? Pošli nám je do DM a my je sem přihodíme!</p>
																				</header>
																				<div class="gallery">
																								<div class="gallery-grid">
																												<Gallery v-for="album in albums" @on-overlay-open="overlay = true" @on-overlay-close="overlay = false" :album="album" />
																								</div>
																				</div>
																</article>
												</div>

												<!-- Footer -->
												<div id="footer">
																<div class="row">
																				<div class="col-12">
																								<!-- Contact -->
																								<section class="contact">
																												<header>
																																<h3>Kontakty a sociální sítě</h3>
																												</header>
																												<p>Doporučujeme sledovat úplně všechno aby ti nic neuniklo</p>

																												<ul class="icons">
																																<li>
																																				<a href="https://www.instagram.com/1vishmusic"
																																							class="icon brands fa-instagram"><span class="label">Instagram</span></a>
																																</li>
																																<li>
																																				<a href="https://www.youtube.com/1vishmusic" class="icon brands fa-youtube"><span
																																								class="label">YouTube</span></a>
																																</li>
																																<li>
																																				<a href="https://www.facebook.com/1vishmusic"
																																							class="icon brands fa-facebook-f"><span class="label">Facebook</span></a>
																																</li>
																																<li>
																																				<a href="https://open.spotify.com/artist/1jUYsvetpW9TQWZ51bj3fu"
																																							class="icon brands fa-spotify"><span class="label">Spotify</span></a>
																																</li>
																																<li>
																																				<a href="https://tiktok.com/@1vishmusic/" class="icon brands fa-tiktok"><span
																																								class="label">TikTok</span></a>
																																</li>
																																<li>
																																				<a href="https://twitter.com/1VISHArtist" class="icon brands fa-twitter"><span
																																								class="label">Twitter</span></a>
																																</li>
																												</ul>
																								</section>

																								<!-- Copyright -->
																								<div class="copyright">
																												<ul class="menu">
																																<li>&copy; 1VISH. All rights reserved.</li>
																												</ul>
																								</div>
																				</div>
																</div>
												</div>
								</div>
								<div id="navPanel">
												<nav><a class="link depth-0" href="#about" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span
																class="indent-0"></span>O kapele</a><a class="link depth-0" href="#concerts"
																																																							style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span
																class="indent-0"></span>Koncerty</a>
																<RouterLink class="link depth-0" to="/pro-poradatele"
																												style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span
																				class="indent-0"></span>Pro pořadatele
																</RouterLink>
																<a class="link depth-0" href="#footer"
																			style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span
																				class="indent-0"></span>Kontakt</a></nav>
								</div>
								<div v-if="!overlay" id="navButton"><a href="#navPanel" class="toggle" @click="() => {
										homepageClasses = homepageClasses.length === 1 ? ['homepage', 'navPanel-visible'] : ['homepage']
						}"></a></div>
				</main>
</template>
