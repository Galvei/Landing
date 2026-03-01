<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);

	const features = [
		{
			name: 'Docker Native',
			desc: 'Deploy, manage, and monitor containers from a clean UI. No terminal needed.',
			icon: 'container',
		},
		{
			name: 'One Dashboard',
			desc: 'CPU, RAM, disk, network, running services. Everything on one screen.',
			icon: 'grid',
		},
		{
			name: 'App Store',
			desc: 'Jellyfin, Nextcloud, Vaultwarden. One click to install, auto-configured.',
			icon: 'apps',
		},
		{
			name: 'Secure by Default',
			desc: 'Auto SSL, reverse proxy, auth built in. Your data stays on your hardware.',
			icon: 'shield',
		},
		{
			name: 'Any Hardware',
			desc: 'Raspberry Pi, old laptop, VPS, dedicated server. If it runs Linux and has 2GB RAM, it works.',
			icon: 'server',
		},
		{
			name: 'Your Data, Your Rules',
			desc: 'No cloud dependency. No subscriptions. No one sees your data but you.',
			icon: 'key',
		},
	];

</script>

<section class="features-section" id="features" use:scrollReveal={{ threshold: 0.15, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above>
	<h2 class="section-title">What you get</h2>
	<p class="section-sub">Everything you need to run your own cloud.</p>
	<div class="features-grid">
		{#each features as feature, i}
			<div class="feature-card" style="transition-delay: {i * 0.08}s">
				<div class="feature-icon">
					{#if feature.icon === 'container'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
							<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
							<polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
							<line x1="12" y1="22.08" x2="12" y2="12"/>
						</svg>
					{:else if feature.icon === 'grid'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
							<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
							<rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
						</svg>
					{:else if feature.icon === 'apps'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
							<circle cx="12" cy="12" r="10"/>
							<line x1="2" y1="12" x2="22" y2="12"/>
							<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
						</svg>
					{:else if feature.icon === 'shield'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						</svg>
					{:else if feature.icon === 'server'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
							<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
							<rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
							<line x1="6" y1="6" x2="6.01" y2="6"/>
							<line x1="6" y1="18" x2="6.01" y2="18"/>
						</svg>
					{:else if feature.icon === 'key'}
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28">
							<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
						</svg>
					{/if}
				</div>
				<h3 class="feature-name">{feature.name}</h3>
				<p class="feature-desc">{feature.desc}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.features-section {
		position: relative;
		z-index: 3;
		max-width: 900px;
		margin: 0 auto;
		padding: 8rem 2rem;
	}

	.section-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 400;
		letter-spacing: 0.02em;
		text-align: center;
		color: rgba(232, 224, 212, 0.9);
		margin: 0 0 0.6rem;
		clip-path: inset(0 100% 0 0);
		transition: clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .section-title {
		clip-path: inset(0 0 0 0);
	}

	.section-sub {
		font-family: 'Inter', sans-serif;
		text-align: center;
		font-size: 0.85rem;
		color: rgba(232, 224, 212, 0.35);
		letter-spacing: 0.03em;
		margin: 0 0 3.5rem;
		opacity: 0;
		transform: translateY(8px);
		filter: blur(4px);
		transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s, filter 0.5s ease 0.15s;
	}

	.visible .section-sub {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.2rem;
	}

	@media (max-width: 560px) {
		.features-grid { grid-template-columns: 1fr; }
	}

	.feature-card {
		background: rgba(232, 224, 212, 0.02);
		border: 1px solid rgba(232, 224, 212, 0.06);
		border-radius: 12px;
		padding: 2rem 1.5rem;
		opacity: 0;
		transform: translateY(24px) scale(0.92);
		filter: blur(6px);
		transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
			filter 0.6s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
	}

	.visible .feature-card {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: blur(0);
	}

	.feature-card:hover,
	.visible .feature-card:hover {
		background: rgba(196, 114, 78, 0.04);
		border-color: rgba(196, 114, 78, 0.15);
		transform: translateY(-2px) scale(1);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
		filter: blur(0);
	}

	.feature-icon {
		color: #c4724e;
		margin-bottom: 1rem;
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}

	.feature-card:hover .feature-icon { opacity: 1; }

	.feature-name {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1.1rem;
		font-weight: 400;
		color: rgba(232, 224, 212, 0.9);
		margin: 0 0 0.5rem;
	}

	.feature-desc {
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		color: rgba(232, 224, 212, 0.45);
		line-height: 1.7;
		margin: 0;
	}

	.above .section-title { clip-path: inset(0 0 0 100%); }
	.above .section-sub { opacity: 0; transform: translateY(-8px); filter: blur(4px); }
	.above .feature-card { opacity: 0; transform: translateY(-24px) scale(0.92); filter: blur(6px); }

	@media (prefers-reduced-motion: reduce) {
		.section-title { clip-path: none; transition: none; }
		.section-sub, .feature-card { opacity: 1; transform: none; filter: none; transition: background 0.3s ease, border-color 0.3s ease; }
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.section-title { color: #2c2418; }
		.section-sub { color: rgba(44, 36, 24, 0.65); }

		.feature-card { background: rgba(44, 36, 24, 0.03); border-color: rgba(44, 36, 24, 0.1); }
		.feature-card:hover { background: rgba(176, 90, 56, 0.05); border-color: rgba(176, 90, 56, 0.18); }
		.feature-icon { color: #993d1c; }
		.feature-name { color: #2c2418; }
		.feature-desc { color: rgba(44, 36, 24, 0.7); }
	}
</style>
