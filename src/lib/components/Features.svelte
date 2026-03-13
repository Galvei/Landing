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
		max-width: 1000px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}

	.section-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 900;
		letter-spacing: -0.01em;
		text-align: center;
		color: #F0EAD6;
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
		color: rgba(240, 234, 214, 0.5);
		letter-spacing: 0.03em;
		margin: 0 0 3.5rem;
		opacity: 0;
		transform: translateY(8px);
		transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
	}

	.visible .section-sub {
		opacity: 1;
		transform: translateY(0);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		border: 2px solid rgba(240, 234, 214, 0.2);
	}

	@media (max-width: 700px) {
		.features-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 420px) {
		.features-grid { grid-template-columns: 1fr; }
	}

	.feature-card {
		background: #111008;
		border: none;
		border-right: 1px solid rgba(240, 234, 214, 0.15);
		border-bottom: 1px solid rgba(240, 234, 214, 0.15);
		padding: 2rem 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
			background 0.25s ease, box-shadow 0.25s ease;
	}

	.visible .feature-card {
		opacity: 1;
		transform: translateY(0);
	}

	.feature-card:hover,
	.visible .feature-card:hover {
		background: rgba(255, 107, 53, 0.06);
		box-shadow: inset 0 0 0 2px #FF6B35;
	}

	.feature-icon {
		color: #FF6B35;
		margin-bottom: 1rem;
		opacity: 1;
	}

	.feature-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
		color: #F0EAD6;
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
	.above .section-sub { opacity: 0; transform: translateY(-8px); }
	.above .feature-card { opacity: 0; transform: translateY(-24px) scale(0.92); }

	@media (prefers-reduced-motion: reduce) {
		.section-title { clip-path: none; transition: none; }
		.section-sub, .feature-card { opacity: 1; transform: none; transition: border-color 0.3s ease; }
	}
</style>
