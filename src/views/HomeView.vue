<script setup lang="ts">
import { ref } from "vue";
import { type EventResponse, fetchEvents } from "@/api/EventController";
import { type AlbumResponse, fetchGallery } from "@/api/GalleryController";

// Komponenty
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ConcertSection from "@/components/sections/ConcertSection.vue";
import GallerySection from "@/components/sections/GallerySection.vue";
import MusicSection from "@/components/sections/MusicSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import VideoSection from "@/components/sections/VideoSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

// Data
const events = ref<EventResponse[]>();
fetchEvents().then(e => events.value = e);

const albums = ref<AlbumResponse[]>();
fetchGallery().then(g => albums.value = g);
</script>

<template>
				<div class="main-wrapper text-light">
								<NavBar />
								<HeroSection />
								<AboutSection />
								<ConcertSection :events="events" />
								<MusicSection />
								<GallerySection :albums="albums" />
								<VideoSection />
								<ContactSection />
								<FooterSection />
				</div>
</template>
