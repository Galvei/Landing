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
			<div class="b-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
			</div>
			<h3>Docker Native</h3>
			<p>Deploy, manage, and monitor containers from a clean UI. Full lifecycle — create, start, stop, logs, stats. No compose files.</p>
		</div>

		<div class="bento-card span-4 accent-card reveal reveal-d2">
			<div class="b-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
			</div>
			<h3>Secure by Default</h3>
			<p>Auto SSL, reverse proxy, auth built in. Your data never leaves your hardware.</p>
		</div>

		<div class="bento-card span-4 reveal reveal-d1">
			<div class="b-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
			</div>
			<h3>App Store</h3>
			<p>One click to install, auto-configured.</p>
			<div class="app-bubbles">
				<div class="app-b" title="Jellyfin">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
				</div>
				<div class="app-b" title="Nextcloud">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
				</div>
				<div class="app-b" title="Vaultwarden">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
				</div>
				<div class="app-b" title="Immich">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
				</div>
				<div class="app-b" title="Home Assistant">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
				</div>
				<div class="app-b" title="Gitea">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
				</div>
			</div>
			<p class="app-list">Jellyfin · Nextcloud · Vaultwarden · Immich · Home Assistant · Gitea & more</p>
		</div>

		<div class="bento-card span-4 dark-card reveal reveal-d2" id="dashCard">
			<div class="b-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
			</div>
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
			<div class="b-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8"/><line x1="4" y1="9" x2="2" y2="9"/><line x1="4" y1="15" x2="2" y2="15"/><line x1="22" y1="9" x2="20" y2="9"/><line x1="22" y1="15" x2="20" y2="15"/><line x1="9" y1="4" x2="9" y2="2"/><line x1="15" y1="4" x2="15" y2="2"/><line x1="9" y1="22" x2="9" y2="20"/><line x1="15" y1="22" x2="15" y2="20"/></svg>
			</div>
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
			<div class="b-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
			</div>
			<h3>Your Data, Your Rules</h3>
			<p>No cloud dependency. No subscriptions. No one sees your data but you. Full digital sovereignty.</p>
		</div>

		<div class="bento-card span-7 accent-card reveal reveal-d2">
			<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 356.18" style="width:48px;height:33px;border-radius:4px;flex-shrink:0;"><path fill="#039" fill-rule="nonzero" d="M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z"/><path fill="#FC0" d="M237.179 53.246h14.378L256 39.572l4.443 13.674h14.378l-11.633 8.451 4.444 13.673L256 66.919l-11.632 8.451 4.444-13.673-11.633-8.451zm0 237.458h14.378L256 277.03l4.443 13.674h14.378l-11.633 8.451 4.444 13.673L256 304.377l-11.632 8.451 4.444-13.673-11.633-8.451zM118.45 171.975h14.378l4.443-13.674 4.443 13.674h14.378l-11.633 8.451 4.443 13.673-11.631-8.451-11.632 8.451 4.444-13.673-11.633-8.451zm59.363-102.796h14.377l4.443-13.674 4.443 13.674h14.378l-11.632 8.451 4.443 13.674-11.632-8.451-11.632 8.451 4.443-13.674-11.631-8.451zm-43.429 43.429h14.378l4.442-13.673 4.444 13.673h14.377l-11.632 8.451 4.443 13.674-11.632-8.451-11.631 8.451 4.443-13.674-11.632-8.451zm-.032 118.737h14.377l4.443-13.674 4.443 13.674h14.377l-11.631 8.451 4.443 13.674-11.632-8.451-11.632 8.451 4.443-13.674-11.631-8.451zm43.471 43.46h14.378l4.443-13.674 4.443 13.674h14.378l-11.632 8.451 4.443 13.674-11.632-8.451-11.631 8.451 4.443-13.674-11.633-8.451zm178.085-102.83h14.378l4.443-13.674 4.443 13.674h14.378l-11.633 8.451 4.444 13.673-11.632-8.451-11.631 8.451 4.443-13.673-11.633-8.451zM296.546 69.179h14.378l4.443-13.674 4.443 13.674h14.377l-11.631 8.451 4.443 13.674-11.632-8.451-11.632 8.451 4.443-13.674-11.632-8.451zm43.429 43.429h14.377l4.444-13.673 4.442 13.673h14.378l-11.632 8.451 4.443 13.674-11.631-8.451-11.632 8.451 4.443-13.674-11.632-8.451zm.033 118.737h14.377l4.443-13.674 4.443 13.674h14.377l-11.631 8.451 4.443 13.674-11.632-8.451-11.632 8.451 4.443-13.674-11.631-8.451zm-43.473 43.46h14.378l4.443-13.674 4.443 13.674h14.378l-11.633 8.451 4.443 13.674-11.631-8.451-11.632 8.451 4.443-13.674-11.632-8.451z"/></svg>
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

	.b-icon svg { display: block; }

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
		color: var(--fg-muted);
	}

	.app-b svg { display: block; }

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
