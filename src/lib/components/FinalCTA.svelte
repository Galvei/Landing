<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	let el: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.3 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section class="final-cta" bind:this={el} class:visible>
	<div class="final-inner">
		<h2 class="final-title">Your cloud. Your rules.</h2>
		<p class="final-sub">Join the waitlist and be first in line.</p>
		<a href="#waitlist" class="final-btn">Get Early Access</a>
		<p class="final-alt">Or <a href="https://discord.gg/galvei" class="final-link" target="_blank" rel="noopener">join the conversation on Discord</a></p>
	</div>
</section>

<style>
	.final-cta {
		position: relative;
		z-index: 3;
		padding: 6rem 2rem;
		text-align: center;
	}

	.final-inner {
		max-width: 600px;
		margin: 0 auto;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .final-inner {
		opacity: 1;
		transform: translateY(0);
	}

	.final-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 400;
		color: #c4724e;
		margin: 0 0 0.6rem;
		letter-spacing: 0.01em;
	}

	.final-sub {
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		color: rgba(232, 224, 212, 0.5);
		margin: 0 0 2rem;
	}

	.final-btn {
		display: inline-block;
		padding: 1rem 2.5rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		text-decoration: none;
		background: #c4724e;
		color: #1a1712;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.final-btn:hover {
		background: #d4845e;
		box-shadow: 0 0 20px rgba(196, 114, 78, 0.25);
		transform: translateY(-2px);
	}

	.final-alt {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		color: rgba(232, 224, 212, 0.35);
		margin: 1.5rem 0 0;
	}

	.final-link {
		color: rgba(232, 224, 212, 0.55);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color 0.25s ease;
	}

	.final-link:hover {
		color: #c4724e;
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.final-title { color: #993d1c; }
		.final-sub { color: rgba(44, 36, 24, 0.6); }
		.final-btn { background: #993d1c; color: #fff; }
		.final-btn:hover { background: #b05a38; }
		.final-alt { color: rgba(44, 36, 24, 0.5); }
		.final-link { color: rgba(44, 36, 24, 0.65); }
		.final-link:hover { color: #993d1c; }
	}
</style>
