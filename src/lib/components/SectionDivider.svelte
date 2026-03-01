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
		width: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(196, 114, 78, 0.2), transparent);
		transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .divider-line {
		width: 60px;
	}

	.divider-dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: rgba(196, 114, 78, 0.3);
		flex-shrink: 0;
		opacity: 0;
		transform: scale(0);
		transition: opacity 0.6s ease 0.3s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
	}

	.visible .divider-dot {
		opacity: 1;
		transform: scale(1);
	}

	.above .divider-line { width: 0; }
	.above .divider-dot { opacity: 0; transform: scale(0); }

	@media (prefers-color-scheme: light) {
		.divider-line { background: linear-gradient(90deg, transparent, rgba(176, 90, 56, 0.2), transparent); }
		.divider-dot { background: rgba(176, 90, 56, 0.3); }
	}

	@media (prefers-reduced-motion: reduce) {
		.divider-line { width: 60px; transition: none; }
		.divider-dot { opacity: 1; transform: scale(1); transition: none; }
	}
</style>
