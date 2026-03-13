<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
</script>

<div class="divider" use:scrollReveal={{ threshold: 0.5, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above aria-hidden="true">
	<span class="divider-line"></span>
	<span class="divider-dot"></span>
	<span class="divider-line"></span>
</div>

<style>
	.divider {
		position: relative;
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 1rem 2rem;
	}

	.divider-line {
		flex: 1;
		height: 2px;
		background: rgba(240, 234, 214, 0.3);
		max-width: 120px;
	}

	.divider-dot {
		width: 4px;
		height: 4px;
		border-radius: 0;
		background: rgba(240, 234, 214, 0.3);
		flex-shrink: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.divider-line { width: 60px; transition: none; }
		.divider-dot { opacity: 1; transform: scale(1); transition: none; }
	}
</style>
