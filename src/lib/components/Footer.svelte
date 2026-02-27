<footer class="footer">
	<div class="footer-inner">
		<div class="footer-grid">
			<div class="footer-col footer-brand-col">
				<span class="footer-logo">Galvei</span>
				<span class="footer-tagline">Self-hosting, simplified.</span>
			</div>
			<div class="footer-col">
				<span class="footer-col-title">Navigation</span>
				<a href="#features" class="footer-link">Features</a>
				<a href="#how-it-works" class="footer-link">How It Works</a>
				<a href="#roadmap" class="footer-link">Roadmap</a>
				<a href="#faq" class="footer-link">FAQ</a>
			</div>
			<div class="footer-col">
				<span class="footer-col-title">Community</span>
				<a href="https://discord.gg/galvei" class="footer-link" target="_blank" rel="noopener">Discord</a>
				<a href="https://github.com/galvei" class="footer-link" target="_blank" rel="noopener">GitHub</a>
				<a href="#support" class="footer-link">Support</a>
			</div>
			<div class="footer-col">
				<span class="footer-col-title">Legal</span>
				<a href="#privacy" class="footer-link">Privacy Policy</a>
				<a href="#terms" class="footer-link">Terms</a>
				<a href="#license" class="footer-link">License (BSL 1.1)</a>
			</div>
		</div>
		<div class="footer-bottom">
			<span class="footer-copy">
				<svg class="eu-flag" viewBox="0 0 810 540" width="16" height="11">
					<rect width="810" height="540" fill="#003399"/>
					<g fill="#FFCC00" transform="translate(405,270)">
						{#each Array(12) as _, i}
							<g transform="rotate({i * 30})">
								<polygon points="0,-160 5.9,-147.6 18.5,-147.6 8.3,-139.1 12.4,-126.8 0,-134 -12.4,-126.8 -8.3,-139.1 -18.5,-147.6 -5.9,-147.6" />
							</g>
						{/each}
					</g>
				</svg>
				Made in Europe by <a href="https://jessimka.com" class="footer-author" target="_blank" rel="noopener">Jessie</a>
			</span>
			<span class="footer-year">2025 Galvei. All rights reserved.</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		z-index: 3;
		border-top: 1px solid rgba(232, 224, 212, 0.06);
		padding: 3.5rem 2rem 2rem;
	}

	.footer-inner {
		max-width: 900px;
		margin: 0 auto;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 1fr;
		gap: 2rem;
		margin-bottom: 2.5rem;
	}

	.footer-col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer-brand-col {
		gap: 0.3rem;
	}

	.footer-logo {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1.2rem;
		font-weight: 400;
		color: rgba(232, 224, 212, 0.7);
		letter-spacing: 0.02em;
	}

	.footer-tagline {
		font-family: 'Inter', sans-serif;
		font-size: 0.72rem;
		color: rgba(232, 224, 212, 0.25);
		letter-spacing: 0.05em;
	}

	.footer-col-title {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(232, 224, 212, 0.45);
		margin-bottom: 0.3rem;
	}

	.footer-link {
		font-family: 'Inter', sans-serif;
		font-size: 0.78rem;
		color: rgba(232, 224, 212, 0.4);
		text-decoration: none;
		letter-spacing: 0.02em;
		transition: color 0.25s ease;
	}

	.footer-link:hover { color: #c4724e; }

	.footer-bottom {
		padding-top: 1.5rem;
		border-top: 1px solid rgba(232, 224, 212, 0.06);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.footer-copy {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		color: rgba(232, 224, 212, 0.25);
		letter-spacing: 0.04em;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.eu-flag { border-radius: 2px; flex-shrink: 0; }

	.footer-author {
		color: rgba(196, 114, 78, 0.6);
		text-decoration: none;
		transition: color 0.25s ease;
	}

	.footer-author:hover { color: #c4724e; }

	.footer-year {
		font-family: 'Inter', sans-serif;
		font-size: 0.6rem;
		color: rgba(232, 224, 212, 0.2);
		letter-spacing: 0.04em;
	}

	@media (max-width: 640px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 1.5rem;
		}

		.footer-brand-col {
			grid-column: 1 / -1;
			text-align: center;
		}

		.footer-col {
			align-items: center;
			text-align: center;
		}

		.footer-bottom {
			justify-content: center;
			flex-direction: column;
			text-align: center;
		}
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.footer { border-top-color: rgba(44, 36, 24, 0.1); }
		.footer-logo { color: #2c2418; }
		.footer-tagline { color: rgba(44, 36, 24, 0.55); }
		.footer-col-title { color: rgba(44, 36, 24, 0.6); }
		.footer-link { color: rgba(44, 36, 24, 0.5); }
		.footer-link:hover { color: #993d1c; }
		.footer-bottom { border-top-color: rgba(44, 36, 24, 0.1); }
		.footer-copy { color: rgba(44, 36, 24, 0.55); }
		.footer-author { color: #993d1c; }
		.footer-author:hover { color: #7a3015; }
		.footer-year { color: rgba(44, 36, 24, 0.4); }
	}
</style>
