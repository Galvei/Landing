<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap"
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
		background: #1a1712;
		color: #e8e0d4;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		overflow-x: hidden;
		min-height: 100vh;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	:global(::selection) {
		background: rgba(196, 114, 78, 0.3);
		color: #fff;
	}

	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}

	@media (prefers-color-scheme: light) {
		:global(html, body) {
			background: #f5f0e8;
			color: #2c2418;
		}

		:global(::selection) {
			background: rgba(176, 90, 56, 0.25);
			color: #2c2418;
		}
	}
</style>
