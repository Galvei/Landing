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
		transform: translateY(24px);
		transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .final-inner {
		opacity: 1;
		transform: translateY(0);
	}

	.final-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		color: #F0EAD6;
		margin: 0 0 0.6rem;
		letter-spacing: -0.02em;
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
		background: #FF6B35;
		color: #111008;
		border-radius: 0;
		border: 2px solid #FF6B35;
		box-shadow: 5px 5px 0 #FFD600;
		transition: box-shadow 0.2s ease, transform 0.2s ease;
	}

	.final-btn:hover {
		box-shadow: 2px 2px 0 #FFD600;
		transform: translate(3px, 3px);
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
		color: #FF6B35;
	}

	.above .final-inner { opacity: 0; transform: translateY(-24px); }
</style>
