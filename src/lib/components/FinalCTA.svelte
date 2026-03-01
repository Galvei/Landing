<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
</script>

<section class="final-cta" use:scrollReveal={{ threshold: 0.05, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above>
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
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		text-align: center;
	}

	.final-inner {
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		opacity: 0;
		transform: translateY(24px) scale(0.9);
		filter: blur(8px);
		transition: opacity 1s ease, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
	}

	.visible .final-inner {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: blur(0);
	}

	.final-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 400;
		color: #c4724e;
		margin: 0 0 0.6rem;
		letter-spacing: 0.01em;
		clip-path: inset(0 100% 0 0);
		transition: clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
	}

	.visible .final-title {
		clip-path: inset(0 0 0 0);
	}

	.final-sub {
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		color: rgba(232, 224, 212, 0.45);
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
		box-shadow: 0 0 20px rgba(196, 114, 78, 0.3), 0 0 60px rgba(196, 114, 78, 0.12);
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

	.above .final-inner { opacity: 0; transform: translateY(-24px) scale(0.9); filter: blur(8px); }
	.above .final-title { clip-path: inset(0 0 0 100%); }

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
