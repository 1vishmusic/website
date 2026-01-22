<template>
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
</template>

<style scoped>
.hero-section {
				min-height: 100vh;
				background: url('@/assets/image/header.jpg') no-repeat center center;
				background-size: cover;
				background-attachment: fixed;
}
.overlay-gradient {
				background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.8) 90%, #000 100%);
}
.text-shadow { text-shadow: 0 4px 15px rgba(0,0,0,0.9); }
</style>
