<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
</script>

<section class="social-proof" id="social-proof" use:scrollReveal={{ threshold: 0.3, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above>
	<div class="proof-inner">
		<span class="proof-item">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
				<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
			</svg>
			Built in the open
		</span>
		<span class="proof-divider"></span>
		<span class="proof-item">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
				<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
			</svg>
			Powered by Docker
		</span>
		<span class="proof-divider"></span>
		<span class="proof-item">
			<svg class="eu-icon" viewBox="0 0 810 540" width="16" height="11">
				<rect width="810" height="540" fill="#003399"/>
				<g fill="#FFCC00" transform="translate(405,270)">
					{#each Array(12) as _, i}
						<g transform="rotate({i * 30})">
							<polygon points="0,-160 5.9,-147.6 18.5,-147.6 8.3,-139.1 12.4,-126.8 0,-134 -12.4,-126.8 -8.3,-139.1 -18.5,-147.6 -5.9,-147.6" />
						</g>
					{/each}
				</g>
			</svg>
			Made in Europe
		</span>
		<span class="proof-divider"></span>
		<span class="proof-item">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
				<circle cx="9" cy="7" r="4"/>
				<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
				<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
			</svg>
			Growing community on Discord
		</span>
	</div>
</section>

<style>
	.social-proof {
		position: relative;
		z-index: 3;
		padding: 2.5rem 2rem;
		background: rgba(196, 114, 78, 0.03);
		border-top: 1px solid rgba(196, 114, 78, 0.06);
		border-bottom: 1px solid rgba(196, 114, 78, 0.06);
		opacity: 0;
		transform: translateY(12px) scale(0.98);
		filter: blur(4px);
		transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
	}

	.social-proof.visible {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: blur(0);
	}

	.social-proof.above {
		opacity: 0;
		transform: translateY(-12px) scale(0.98);
		filter: blur(4px);
	}

	.proof-inner {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.proof-item {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		font-weight: 400;
		color: rgba(232, 224, 212, 0.5);
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	.proof-item svg {
		opacity: 0.6;
		color: #c4724e;
		flex-shrink: 0;
	}

	.eu-icon {
		border-radius: 2px;
	}

	.proof-divider {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: rgba(232, 224, 212, 0.2);
		flex-shrink: 0;
	}

	@media (max-width: 640px) {
		.proof-inner {
			gap: 1rem;
		}
		.proof-divider {
			display: none;
		}
		.proof-item {
			font-size: 0.75rem;
		}
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.social-proof {
			background: rgba(176, 90, 56, 0.03);
			border-color: rgba(176, 90, 56, 0.08);
		}
		.proof-item { color: rgba(44, 36, 24, 0.6); }
		.proof-item svg { color: #993d1c; }
		.proof-divider { background: rgba(44, 36, 24, 0.2); }
	}
</style>
