<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	let el: HTMLElement;

	const problems = [
		{ title: 'Setup is painful', desc: "You shouldn't need a CS degree to install Nextcloud." },
		{ title: 'Terminal fatigue', desc: 'SSH, Docker Compose, YAML configs, port forwarding. Every time.' },
		{ title: 'Security anxiety', desc: 'Did I set up the firewall right? Is my reverse proxy leaking?' },
		{ title: 'Maintenance burden', desc: 'Updates break things. Backups are manual. Monitoring is DIY.' },
		{ title: 'Scattered tools', desc: "Portainer, Nginx Proxy Manager, Uptime Kuma. None of them talk to each other." },
	];

	const solutions = [
		{ title: 'One-click install', desc: 'Run one command. Galvei sets up everything.' },
		{ title: 'No terminal needed', desc: 'A clean GUI for everything you\'d normally do in the terminal.' },
		{ title: 'Secure by default', desc: 'Auto SSL, built-in reverse proxy, authentication out of the box.' },
		{ title: 'Managed updates', desc: 'Update apps from the dashboard. Automatic backups before changes.' },
		{ title: 'All-in-one dashboard', desc: 'Containers, networking, monitoring, files. One screen.' },
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section class="problem-solution" id="problem-solution" bind:this={el} class:visible>
	<h2 class="section-title">Self-hosting is powerful.<br/>Setting it up shouldn't be.</h2>

	<div class="ps-grid">
		<div class="ps-column ps-problems">
			<span class="ps-label ps-label--problem">The problem</span>
			{#each problems as item, i}
				<div class="ps-card ps-card--problem" style="transition-delay: {i * 0.08}s">
					<span class="ps-card-icon ps-card-icon--problem">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
							<circle cx="12" cy="12" r="10"/>
							<line x1="15" y1="9" x2="9" y2="15"/>
							<line x1="9" y1="9" x2="15" y2="15"/>
						</svg>
					</span>
					<div>
						<h4 class="ps-card-title">{item.title}</h4>
						<p class="ps-card-desc">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="ps-divider">
			<div class="ps-arrow">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</div>
		</div>

		<div class="ps-column ps-solutions">
			<span class="ps-label ps-label--solution">Galvei handles it</span>
			{#each solutions as item, i}
				<div class="ps-card ps-card--solution" style="transition-delay: {(i * 0.08) + 0.2}s">
					<span class="ps-card-icon ps-card-icon--solution">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
							<path d="M20 6L9 17l-5-5"/>
						</svg>
					</span>
					<div>
						<h4 class="ps-card-title">{item.title}</h4>
						<p class="ps-card-desc">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.problem-solution {
		position: relative;
		z-index: 3;
		max-width: 960px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}

	.section-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(1.5rem, 3.5vw, 2.2rem);
		font-weight: 400;
		text-align: center;
		color: rgba(232, 224, 212, 0.9);
		margin: 0 0 3.5rem;
		line-height: 1.3;
		letter-spacing: 0.01em;
	}

	.ps-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		align-items: start;
	}

	.ps-column {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.ps-label {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.ps-label--problem {
		color: rgba(232, 224, 212, 0.35);
	}

	.ps-label--solution {
		color: #c4724e;
	}

	.ps-divider {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 2.5rem;
	}

	.ps-arrow {
		color: rgba(196, 114, 78, 0.3);
	}

	.ps-card {
		display: flex;
		align-items: flex-start;
		gap: 0.8rem;
		padding: 1rem 1.2rem;
		border-radius: 10px;
		border: 1px solid transparent;
		transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .ps-card {
		opacity: 1;
		transform: translateY(0);
	}

	.problem-solution:not(.visible) .ps-card {
		opacity: 0;
		transform: translateY(15px);
	}

	.ps-card--problem {
		background: rgba(232, 224, 212, 0.02);
		border-color: rgba(232, 224, 212, 0.04);
	}

	.ps-card--problem:hover {
		background: rgba(232, 224, 212, 0.04);
		border-color: rgba(232, 224, 212, 0.08);
	}

	.ps-card--solution {
		background: rgba(196, 114, 78, 0.04);
		border-color: rgba(196, 114, 78, 0.08);
	}

	.ps-card--solution:hover {
		background: rgba(196, 114, 78, 0.08);
		border-color: rgba(196, 114, 78, 0.15);
		transform: translateX(4px);
	}

	.ps-card-icon {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.ps-card-icon--problem {
		color: rgba(232, 224, 212, 0.3);
	}

	.ps-card-icon--solution {
		color: #c4724e;
	}

	.ps-card-title {
		font-family: 'Inter', sans-serif;
		font-size: 0.88rem;
		font-weight: 500;
		color: rgba(232, 224, 212, 0.85);
		margin: 0 0 0.25rem;
	}

	.ps-card-desc {
		font-family: 'Inter', sans-serif;
		font-size: 0.78rem;
		color: rgba(232, 224, 212, 0.45);
		line-height: 1.6;
		margin: 0;
	}

	@media (max-width: 768px) {
		.ps-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.ps-divider {
			padding: 0.5rem 0;
		}

		.ps-arrow svg {
			transform: rotate(90deg);
		}
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.section-title { color: #2c2418; }
		.ps-label--problem { color: rgba(44, 36, 24, 0.5); }
		.ps-label--solution { color: #993d1c; }
		.ps-arrow { color: rgba(176, 90, 56, 0.35); }

		.ps-card--problem {
			background: rgba(44, 36, 24, 0.02);
			border-color: rgba(44, 36, 24, 0.06);
		}
		.ps-card--problem:hover {
			background: rgba(44, 36, 24, 0.04);
			border-color: rgba(44, 36, 24, 0.1);
		}

		.ps-card--solution {
			background: rgba(176, 90, 56, 0.04);
			border-color: rgba(176, 90, 56, 0.1);
		}
		.ps-card--solution:hover {
			background: rgba(176, 90, 56, 0.08);
			border-color: rgba(176, 90, 56, 0.18);
		}

		.ps-card-icon--problem { color: rgba(44, 36, 24, 0.35); }
		.ps-card-icon--solution { color: #993d1c; }
		.ps-card-title { color: #2c2418; }
		.ps-card-desc { color: rgba(44, 36, 24, 0.65); }
	}
</style>
