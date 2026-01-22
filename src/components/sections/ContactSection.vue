<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import SectionTitle from "@/components/SectionTitle.vue";

// --- LOGIKA MODÁLNÍHO OKNA ---
const isPromoterModalOpen = ref(false);

const openPromoterModal = () => {
				isPromoterModalOpen.value = true;
				document.body.style.overflow = 'hidden'; // Zamezí scrollování pozadí
};

const closePromoterModal = () => {
				isPromoterModalOpen.value = false;
				document.body.style.overflow = '';
};

// Zavření klávesou ESC
const handleKeydown = (e: KeyboardEvent) => {
				if (e.key === 'Escape' && isPromoterModalOpen.value) closePromoterModal();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
				<div id="kontakt" class="py-5 bg-darker position-relative overflow-hidden">
								<div class="background-glow"></div>

								<div class="container py-5 position-relative z-2 text-center">
												<SectionTitle>Kontakt & Booking</SectionTitle>

												<div class="row justify-content-center">
																<div class="col-lg-8">
																				<p class="fs-5 text-secondary fw-light mb-5">
																								Máte zájem o koncert, spolupráci nebo se chcete jen na něco zeptat?<br>
																								Jsme otevřeni všem nabídkám.
																				</p>

																				<div class="d-flex justify-content-center mb-4">
																								<a href="mailto:band@1vishmusic.com" class="booking-card">
																												<div class="icon-box">
																																<i class="bi bi-envelope-fill"></i>
																												</div>
																												<div class="text-box">
																																<span class="d-block text-uppercase small fw-bold text-secondary ls-2 mb-1">Booking & Info</span>
																																<span class="email-address">band@1vishmusic.com</span>
																												</div>
																												<div class="arrow-box">
																																<i class="bi bi-arrow-right"></i>
																												</div>
																								</a>
																				</div>

																				<button @click="openPromoterModal" class="btn btn-link text-secondary text-decoration-none hover-white small text-uppercase ls-2">
																								<i class="bi bi-gear-fill me-2"></i> Technické info pro pořadatele
																				</button>
																</div>
												</div>
								</div>

								<div v-if="isPromoterModalOpen" class="modal-overlay" @click.self="closePromoterModal">
												<div class="modal-content animate-slide-up">

																<div class="modal-header d-flex justify-content-between align-items-center mb-4">
																				<h3 class="text-uppercase fw-bold m-0 text-white">Pro pořadatele</h3>
																				<button class="btn-close-custom" @click="closePromoterModal">
																								<i class="bi bi-x-lg"></i>
																				</button>
																</div>

																<div class="modal-body text-start">

																				<h5 class="text-secondary text-uppercase fs-6 ls-2 mb-3">Ke stažení</h5>
																				<div class="row g-3 mb-5">
																								<div class="col-md-6">
																												<a href="/documents/Stage_Plan_v2.pdf" target="_blank" class="download-card">
																																<i class="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
																																<div>
																																				<span class="d-block fw-bold text-white">Stageplan 2026</span>
																																				<span class="small text-secondary">PDF Download</span>
																																</div>
																																<i class="bi bi-download ms-auto text-secondary"></i>
																												</a>
																								</div>
																								<div class="col-md-6">
																												<a href="//documents/Input_List.pdf" target="_blank" class="download-card">
																																<i class="bi bi-file-earmark-spreadsheet-fill text-success fs-3 me-3"></i>
																																<div>
																																				<span class="d-block fw-bold text-white">Input List</span>
																																				<span class="small text-secondary">PDF Download</span>
																																</div>
																																<i class="bi bi-download ms-auto text-secondary"></i>
																												</a>
																								</div>
																				</div>

																				<h5 class="text-secondary text-uppercase fs-6 ls-2 mb-3">Technické zajištění</h5>
																				<div class="pa-info-box p-4 rounded-3 border border-secondary border-opacity-25 bg-darker">
																								<div class="d-flex align-items-start">
																												<i class="bi bi-speaker-fill fs-2 text-white me-3 mt-1"></i>
																												<div>
																																<h5 class="fw-bold text-white">Vlastní ozvučení</h5>
																																<p class="text-secondary mb-0 small">
																																				Jsme schopni zajistit ozvučení akce na náklady organizátora.
																																				Tato možnost platí pouze pro menší stage a klubové akce
																																				<span class="text-white fw-semibold">(max. 100 osob)</span>.
																																</p>
																												</div>
																								</div>
																				</div>

																</div>
												</div>
								</div>

				</div>
</template>

<style scoped>
/* Původní styly pro Booking Card... */
.booking-card {
				display: flex; align-items: center; background: #1a1a1a;
				border: 1px solid rgba(255, 255, 255, 0.1); padding: 15px 25px;
				border-radius: 12px; text-decoration: none; color: #fff;
				transition: all 0.3s ease; max-width: 500px; width: 100%;
}
.booking-card:hover {
				background: #222; border-color: rgba(255, 255, 255, 0.3);
				transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.icon-box {
				width: 50px; height: 50px; background: var(--brand-red, #dc3545);
				border-radius: 50%; display: flex; align-items: center; justify-content: center;
				font-size: 1.5rem; margin-right: 20px; flex-shrink: 0;
}
.text-box { flex-grow: 1; text-align: left; }
.email-address { font-size: 1.2rem; font-weight: 700; }
.arrow-box { font-size: 1.5rem; color: #555; transition: transform 0.3s ease; }
.booking-card:hover .arrow-box { color: #fff; transform: translateX(5px); }
.background-glow {
				position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
				width: 600px; height: 600px; background: radial-gradient(circle, rgba(220, 53, 69, 0.05) 0%, rgba(0,0,0,0) 70%);
				pointer-events: none; z-index: 1;
}

/* --- MODAL STYLES --- */
.modal-overlay {
				position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
				background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
				z-index: 9999; display: flex; justify-content: center; align-items: center;
				padding: 20px;
}

.modal-content {
				background: #111;
				border: 1px solid rgba(255, 255, 255, 0.1);
				border-radius: 16px;
				padding: 40px;
				max-width: 700px;
				width: 100%;
				box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.btn-close-custom {
				background: none; border: none; color: #666; font-size: 1.5rem;
				cursor: pointer; transition: color 0.2s;
}
.btn-close-custom:hover { color: #fff; }

.download-card {
				display: flex; align-items: center;
				background: #1a1a1a;
				padding: 15px; border-radius: 8px;
				text-decoration: none;
				border: 1px solid rgba(255,255,255,0.05);
				transition: all 0.2s;
}
.download-card:hover {
				background: #252525;
				border-color: rgba(255,255,255,0.2);
}

.hover-white:hover { color: #fff !important; }

/* Animace příletu okna */
.animate-slide-up {
				animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
				from { opacity: 0; transform: translateY(20px) scale(0.95); }
				to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
