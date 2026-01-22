<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<template>
				<div id="o-kapele" class="py-5 bg-black">
								<div class="container py-5">
												<div class="row align-items-center g-5">
																<div class="col-lg-6">
																				<div class="ratio ratio-4x3 shadow-lg position-relative overflow-hidden">
																								<img src="@/assets/image/band.jpg" class="object-fit-cover rounded-1 grayscale-hover slow-transition" alt="Kapela 1VISH">
																				</div>
																</div>
																<div class="col-lg-6">
																				<SectionTitle class="text-lg-start text-center mb-4">O kapele</SectionTitle>
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
</template>

<style scoped>
.grayscale-hover {
				filter: grayscale(100%);
				transition: filter 1.5s ease-in-out, transform 1.5s ease;
}
.grayscale-hover:hover {
				filter: grayscale(0%);
				transform: scale(1.02);
}
</style>
