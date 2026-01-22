<script setup lang="ts">
import { type EventResponse } from "@/api/EventController";
import SectionTitle from "@/components/SectionTitle.vue";

defineProps<{
				events?: EventResponse[]
}>();
</script>

<template>
				<div id="koncerty" class="py-5 bg-darker">
								<div class="container">
												<SectionTitle>Koncerty</SectionTitle>

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
</template>

<style scoped>
.hover-white:hover { color: #fff !important; }

@media (min-width: 768px) {
				.border-start-md { border-left: 1px solid rgba(255,255,255,0.2) !important; }
				.min-w-date { min-width: 120px; }
				.min-w-action { min-width: 150px; }
}
</style>
