<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// 3D tilt on bento cards
		const cards = document.querySelectorAll<HTMLElement>('.bento-card');
		cards.forEach((card) => {
			card.addEventListener('mousemove', (e: MouseEvent) => {
				const rect = card.getBoundingClientRect();
				const x = (e.clientX - rect.left) / rect.width - 0.5;
				const y = (e.clientY - rect.top) / rect.height - 0.5;
				card.style.transition = 'none';
				card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
			});
			card.addEventListener('mouseleave', () => {
				card.style.transition = '';
				card.style.transform = '';
			});
		});

		// Bar chart animation
		const dashCard = document.getElementById('dashCard');
		if (dashCard) {
			const barsObs = new IntersectionObserver(
				(entries) => {
					entries.forEach((e) => {
						if (e.isIntersecting) {
							dashCard.classList.add('bars-active');
							barsObs.unobserve(dashCard);
						}
					});
				},
				{ threshold: 0.3 }
			);
			barsObs.observe(dashCard);
		}
	});
</script>

<section id="features">
	<div class="section-label reveal">Features</div>
	<h2 class="section-title reveal">Everything you need to run your own cloud.</h2>

	<div class="bento">
		<div class="bento-card span-8 reveal reveal-d1">
			<div class="b-icon">⬡</div>
			<h3>Docker Native</h3>
			<p>Deploy, manage, and monitor containers from a clean UI. Full lifecycle — create, start, stop, logs, stats. No compose files.</p>
		</div>

		<div class="bento-card span-4 accent-card reveal reveal-d2">
			<div class="b-icon">✓</div>
			<h3>Secure by Default</h3>
			<p>Auto SSL, reverse proxy, auth built in. Your data never leaves your hardware.</p>
		</div>

		<div class="bento-card span-4 reveal reveal-d1">
			<div class="b-icon">◆</div>
			<h3>App Store</h3>
			<p>One click to install, auto-configured.</p>
			<div class="app-bubbles">
				<div class="app-b" title="Jellyfin">📺</div>
				<div class="app-b" title="Nextcloud">☁️</div>
				<div class="app-b" title="Vaultwarden">🔐</div>
				<div class="app-b" title="Immich">📷</div>
				<div class="app-b" title="Home Assistant">🏠</div>
				<div class="app-b" title="Gitea">🐱</div>
			</div>
			<p class="app-list">Jellyfin · Nextcloud · Vaultwarden · Immich · Home Assistant · Gitea & more</p>
		</div>

		<div class="bento-card span-4 dark-card reveal reveal-d2" id="dashCard">
			<div class="b-icon">◎</div>
			<h3>One Desktop</h3>
			<p>Everything at a glance.</p>
			<div class="mini-bars">
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
				<div class="mini-bar"></div>
			</div>
		</div>

		<div class="bento-card span-4 reveal reveal-d3">
			<div class="b-icon">⬢</div>
			<h3>Any Hardware</h3>
			<p>If it runs Linux, it works.</p>
			<div class="hw-chips">
				<span class="hw-chip">RPi 4</span>
				<span class="hw-chip">x86_64</span>
				<span class="hw-chip">ARM64</span>
				<span class="hw-chip">VPS</span>
			</div>
		</div>

		<div class="bento-card span-5 reveal reveal-d1">
			<div class="b-icon">✦</div>
			<h3>Your Data, Your Rules</h3>
			<p>No cloud dependency. No subscriptions. No one sees your data but you. Full digital sovereignty.</p>
		</div>

		<div class="bento-card span-7 accent-card reveal reveal-d2">
			<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
				<span style="font-size:32px;">🇪🇺</span>
				<h3 style="margin:0;">Made in Europe</h3>
			</div>
			<p>Built in Slovakia. GDPR-first design. NIS2 compliance readiness for European businesses.</p>
		</div>
	</div>
</section>

<style>
	section {
		padding: 120px 48px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-label {
		font-size: 12px;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--accent-dark);
		margin-bottom: 16px;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.section-label::before {
		content: '◆ ';
		color: var(--accent);
	}

	.section-title {
		font-family: var(--sans);
		font-weight: 800;
		font-size: clamp(32px, 4vw, 52px);
		line-height: 1.05;
		letter-spacing: -0.04em;
		max-width: 700px;
	}

	.bento {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 16px;
		margin-top: 64px;
	}

	.bento-card {
		background: #fff;
		border: 2px solid var(--border);
		border-radius: 20px;
		padding: 40px 32px;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.bento-card:hover {
		transform: translateY(-6px);
		border-color: var(--accent);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
	}

	.bento-card.span-8 { grid-column: span 8; }
	.bento-card.span-7 { grid-column: span 7; }
	.bento-card.span-6 { grid-column: span 6; }
	.bento-card.span-5 { grid-column: span 5; }
	.bento-card.span-4 { grid-column: span 4; }

	.bento-card.accent-card {
		background: var(--accent);
		border-color: var(--accent);
		color: #000;
	}

	.bento-card.dark-card {
		background: var(--bg-dark);
		border-color: var(--bg-dark);
		color: #e4e4e7;
	}

	.b-icon {
		width: 52px;
		height: 52px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		margin-bottom: 24px;
		background: rgba(0, 0, 0, 0.04);
		transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.bento-card:hover .b-icon { transform: scale(1.15) rotate(-5deg); }
	.accent-card .b-icon { background: rgba(0, 0, 0, 0.08); }
	.dark-card .b-icon { background: rgba(255, 255, 255, 0.06); }

	.bento-card h3 {
		font-size: 22px;
		font-weight: 800;
		margin-bottom: 8px;
		letter-spacing: -0.03em;
	}

	.bento-card p {
		font-size: 14px;
		color: var(--fg-muted);
		line-height: 1.7;
		font-weight: 400;
	}

	.accent-card p { color: rgba(0, 0, 0, 0.6); }
	.dark-card p { color: rgba(255, 255, 255, 0.5); }

	.app-list {
		font-size: 11px !important;
		color: var(--fg-dim) !important;
		margin-top: 10px;
		font-family: var(--mono);
	}

	/* Mini bars */
	.mini-bars {
		display: flex;
		gap: 4px;
		align-items: flex-end;
		height: 64px;
		margin-top: 20px;
	}

	.mini-bar {
		flex: 1;
		border-radius: 3px 3px 0 0;
		background: var(--accent);
		opacity: 0.6;
		height: 8% !important;
		transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(#dashCard.bars-active) .mini-bar:nth-child(1) { height: 40% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(2) { height: 65% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(3) { height: 50% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(4) { height: 85% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(5) { height: 45% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(6) { height: 95% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(7) { height: 55% !important; }
	:global(#dashCard.bars-active) .mini-bar:nth-child(8) { height: 70% !important; }

	/* Hardware chips */
	.hw-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 16px;
	}

	.hw-chip {
		font-size: 12px;
		font-family: var(--mono);
		font-weight: 600;
		padding: 6px 14px;
		border: 2px solid var(--border);
		border-radius: 100px;
		color: var(--fg-muted);
		transition: all 0.2s;
	}

	.hw-chip:hover {
		border-color: var(--accent);
		color: var(--fg);
		background: rgba(45, 212, 168, 0.06);
	}

	/* App bubbles */
	.app-bubbles {
		display: flex;
		gap: 10px;
		margin-top: 20px;
	}

	.app-b {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		background: rgba(0, 0, 0, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		border: 2px solid transparent;
	}

	.app-b:hover {
		transform: translateY(-6px) scale(1.08);
		border-color: var(--accent);
		background: rgba(45, 212, 168, 0.08);
	}

	@media (max-width: 900px) {
		section { padding: 80px 20px; }
		.bento { grid-template-columns: 1fr; }
		.bento-card.span-8,
		.bento-card.span-7,
		.bento-card.span-6,
		.bento-card.span-5,
		.bento-card.span-4 { grid-column: span 1; }
	}
</style>
