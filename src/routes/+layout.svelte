<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@300;400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:global(:root) {
		--bg: #fafaf8;
		--bg-dark: #0a0a0c;
		--bg-card: #ffffff;
		--fg: #0a0a0c;
		--fg-muted: #5a5a65;
		--fg-dim: #9a9aa5;
		--accent: #2dd4a8;
		--accent-bright: #34eabc;
		--accent-dark: #1a9e7a;
		--border: rgba(0, 0, 0, 0.08);
		--border-dark: rgba(255, 255, 255, 0.08);
		--serif: 'Instrument Serif', Georgia, serif;
		--sans: 'Geist', -apple-system, system-ui, sans-serif;
		--mono: 'Geist Mono', 'SF Mono', monospace;
	}

	:global(*, *::before, *::after) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background: var(--bg);
		color: var(--fg);
		font-family: var(--sans);
		font-size: 16px;
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
		overflow-x: hidden;
	}

	/* Grain overlay */
	:global(body::after) {
		content: '';
		position: fixed;
		inset: 0;
		z-index: 9999;
		pointer-events: none;
		opacity: 0.02;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		background-size: 256px 256px;
	}

	:global(::selection) {
		background: var(--accent);
		color: #000;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}

	/* Scroll reveal */
	:global(.reveal) {
		opacity: 0;
		transform: translateY(40px);
		transition:
			opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
			transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
	}
	:global(.reveal.visible) {
		opacity: 1;
		transform: translateY(0);
	}
	:global(.reveal-d1) { transition-delay: 0.06s; }
	:global(.reveal-d2) { transition-delay: 0.12s; }
	:global(.reveal-d3) { transition-delay: 0.18s; }
	:global(.reveal-d4) { transition-delay: 0.24s; }

	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			animation-duration: 0.01ms !important;
			transition-duration: 0.01ms !important;
		}
	}
</style>
