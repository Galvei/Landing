<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		background: #111008;
		background-image: radial-gradient(rgba(240, 234, 214, 0.04) 1px, transparent 1px);
		background-size: 32px 32px;
		color: #F0EAD6;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		overflow-x: hidden;
		min-height: 100vh;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	/* Reduced motion: disable all animations */
	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			animation-duration: 0.01ms !important;
			transition-duration: 0.01ms !important;
		}
	}

	:global(::selection) {
		background: #FF6B35;
		color: #111008;
	}

	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
