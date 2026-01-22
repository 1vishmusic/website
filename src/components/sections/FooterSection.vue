<template>
				<footer class="py-5 bg-black border-top border-secondary border-opacity-25 text-center">
								<div class="container">

												<h5 class="text-uppercase fw-bold text-white mb-4 ls-2">Sledujte nás</h5>

												<div class="d-flex justify-content-center flex-wrap gap-4 mb-5 social-icons-wrapper">
																<a href="https://www.facebook.com/1vishmusic" target="_blank" class="social-icon facebook" title="Facebook">
																				<i class="bi bi-facebook"></i>
																</a>
																<a href="https://www.instagram.com/1vishmusic/" target="_blank" class="social-icon instagram" title="Instagram">
																				<i class="bi bi-instagram"></i>
																</a>
																<a href="https://www.tiktok.com/@1vishmusic" target="_blank" class="social-icon tiktok" title="TikTok">
																				<i class="bi bi-tiktok"></i>
																</a>
																<a href="https://open.spotify.com/artist/1jUYsvetpW9TQWZ51bj3fu" target="_blank" class="social-icon spotify" title="Spotify">
																				<i class="bi bi-spotify"></i>
																</a>
																<a href="https://www.youtube.com/@1VISHmusic" target="_blank" class="social-icon youtube" title="YouTube">
																				<i class="bi bi-youtube"></i>
																</a>
												</div>

												<div class="pt-3 border-top border-secondary border-opacity-10 w-50 mx-auto">
																<p class="text-secondary fw-light fs-7 mb-0 opacity-50 small">
																				© {{ new Date().getFullYear() }} 1VISH, designed by Vojtěch Stehlík
																</p>
												</div>
								</div>
				</footer>
</template>

<style scoped>
.social-icon {
				display: flex; align-items: center; justify-content: center;
				width: 50px; height: 50px; font-size: 1.5rem;
				border-radius: 50%; background-color: #1a1a1a; color: #bbb;
				transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
				text-decoration: none;
				border: 1px solid rgba(255,255,255,0.05);
}

.social-icon:hover {
				transform: translateY(-5px) scale(1.1);
				color: #fff;
				border-color: transparent;
}

/* --- TIKTOK GLITCH EFFECT --- */
.social-icon.tiktok:hover {
				background-color: #000;
				box-shadow: -2px -2px 8px rgba(0, 242, 234, 0.6), 2px 2px 8px rgba(255, 0, 80, 0.6);
				color: #fff;
				animation: glitch-shake 0.3s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes glitch-shake {
				10%, 90% { transform: translate3d(-1px, 0, 0) scale(1.1); }
				20%, 80% { transform: translate3d(2px, 0, 0) scale(1.1); }
				30%, 50%, 70% { transform: translate3d(-2px, 0, 0) scale(1.1); }
				40%, 60% { transform: translate3d(2px, 0, 0) scale(1.1); }
}

/* Ostatní barvy */
.social-icon.facebook:hover { background-color: #1877F2; box-shadow: 0 0 15px rgba(24, 119, 242, 0.4); }
.social-icon.instagram:hover { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); box-shadow: 0 0 15px rgba(214, 36, 159, 0.4); }
.social-icon.spotify:hover { background-color: #1DB954; box-shadow: 0 0 15px rgba(29, 185, 84, 0.4); }
.social-icon.youtube:hover { background-color: #FF0000; box-shadow: 0 0 15px rgba(255, 0, 0, 0.4); }
</style>
