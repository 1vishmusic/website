<script setup lang="ts">
import {ref} from "vue";

const homepageClasses = ref<string[]>([])
</script>

<template>
				<main :class="homepageClasses">
								<div id="page-wrapper">

												<!-- Header -->
												<div id="header">

																<!-- Inner -->
																<div class="inner">
																				<header>
																								<h1><a href="index.html" id="logo">Pro pořadatele</a></h1>
																				</header>
																</div>

																<!-- Nav -->
																<nav id="nav">
																				<ul>
																								<li>
																												<RouterLink to="/#about" class="scrolly">O kapele</RouterLink>
																								</li>
																								<li>
																												<RouterLink to="/#concerts" class="scrolly">Koncerty</RouterLink>
																								</li>
																								<li>
																												<RouterLink to="/pro-poradatele">Pro pořadatele</RouterLink>
																								</li>
																								<li>
																												<RouterLink to="/#footer" class="scrolly">Kontakt</RouterLink>
																								</li>
																				</ul>
																</nav>

												</div>

												<!-- Main -->
												<div class="wrapper style1">

																<div class="container">
																				<article id="docs" class="special">
																								<header>
																												<h2>Dokumenty pro pořadatele</h2>
																												<p>
																																O další případné dokumenty prosím zažádejte na naší mailové adrese.
																												</p>
																								</header>

																								<div class="row">
																												<div class="documents" style="text-align: center">
																																<a href="/documents/Stage_Plan_v2.pdf" class="button">Stage plan</a>
																																<a href="/documents/Input_List.pdf" class="button">Input list</a>
																												</div>
																								</div>
																				</article>
																				<hr/>
																				<article id="info" class="special">
																								<header>
																												<h2>Zvučení akcí</h2>
																								</header>

																								<p style="text-align: center">
																												Ozvučení menších a punkovějších akcí jsme schopni zařídit bez externího zvukaře po domluvě
																												zdarma.<br>
																												Pro větší akce se cena zvučení pohybuje v závislosti na konané akci.
																								</p>
																				</article>
																</div>

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
																																<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
																												</ul>
																								</div>
																				</div>
																</div>
												</div>
								</div>
								<div id="navPanel">
												<nav>
																<RouterLink class="link depth-0" to="/#about" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
																				<span class="indent-0"></span>O kapele
																</RouterLink>

																<RouterLink class="link depth-0" to="/#concerts" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
																				<span class="indent-0"></span>Koncerty
																</RouterLink>

																<RouterLink class="link depth-0" to="/pro-poradatele" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
																				<span class="indent-0"></span>Pro pořadatele
																</RouterLink>

																<RouterLink class="link depth-0" to="/#footer" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
																				<span class="indent-0"></span>Kontakt
																</RouterLink></nav>
								</div>
								<div id="navButton"><a href="#navPanel" class="toggle" @click="() => {
										homepageClasses = homepageClasses.length === 0 ? ['navPanel-visible'] : []
						}"></a></div>
				</main>
</template>

<style>

</style>
