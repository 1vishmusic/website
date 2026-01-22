<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
				// Pokud vyscrollujeme o více než 50px, aktivujeme pozadí
				isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
				window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
				window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
				<nav
								class="navbar navbar-expand-lg navbar-dark fixed-top transition-navbar"
								:class="{ 'navbar-scrolled': isScrolled }"
				>
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
</template>

<style scoped>
/* Základní stav (navrchu - průhledný) */
.transition-navbar {
				background: transparent;
				border-bottom: 1px solid transparent !important;
				transition: all 0.4s ease-in-out;
				padding: 1.5rem 0; /* Trochu širší navrchu působí luxusněji */
}

/* Stav při scrollu */
.navbar-scrolled {
				background: rgba(0, 0, 0, 0.85) !important;
				backdrop-filter: blur(10px);
				border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
				padding: 0.8rem 0; /* Zúžení při scrollu pro moderní efekt */
}

/* ... předchozí styly ... */

.nav-link {
				/* Přidání stínu pro čitelnost na světlém podkladu */
				text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
				transition: all 0.3s ease;
}

.navbar-brand {
				/* Stín i pro logo */
				text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
				transition: transform 0.3s ease;
}

/* Volitelně: Když se navbar zbarví (scroll), můžeme stín zjemnit,
   protože už je tam tmavé pozadí */
.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-brand {
				text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Hover efekt - stín může při najetí zmizet nebo se změnit na záři */
.nav-link:hover {
				color: #fff !important;
				text-shadow: 0 0 10px rgba(220, 53, 69, 0.5); /* Jemná červená záře v barvě kapely */
}

/* ... zbytek stylů ... */

/* Fix pro mobilní menu - když je otevřené na mobilu, musí mít pozadí vždy */
@media (max-width: 991px) {
				.navbar-collapse {
								background: rgba(0, 0, 0, 0.95);
								margin: 10px -15px;
								padding: 20px;
								border-radius: 8px;
				}
}
</style>
