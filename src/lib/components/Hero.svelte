<script lang="ts">
	import DemoPreview from './DemoPreview.svelte';
</script>

<section class="hero">
	<div class="hero-shapes" aria-hidden="true">
		<div class="hero-shape"></div>
		<div class="hero-shape"></div>
		<div class="hero-shape"></div>
		<div class="hero-shape"></div>
		<div class="hero-shape"></div>
	</div>

	<div class="hero-wordmark">GALVEI<span class="accent-dot">.</span></div>
	<h1 class="hero-subtitle">The simplest way to self-host<br>your apps</h1>
	<p class="hero-desc">
		A dead simple desktop that turns any Linux machine into a managed cloud.
		<span class="highlight">No terminal required.</span>
	</p>
	<div class="hero-actions">
		<a href="#waitlist" class="btn-big">Get Early Access</a>
		<a href="https://discord.gg/8xFqs4fqUq" class="btn-outline">Join Discord</a>
	</div>
	<p class="hero-note">No credit card required. Free for personal use.</p>

	<div class="mockup-wrap">
		<DemoPreview />
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 160px 32px 80px;
		position: relative;
		overflow: hidden;
	}

	.hero-shapes {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
	}

	.hero-shape {
		position: absolute;
		border: 2px solid rgba(45, 212, 168, 0.15);
		border-radius: 4px;
		animation: shapeDrift linear infinite;
	}

	.hero-shape:nth-child(1) { width: 60px; height: 60px; top: 15%; left: 8%; animation-duration: 20s; border-radius: 50%; }
	.hero-shape:nth-child(2) { width: 40px; height: 40px; top: 25%; right: 12%; animation-duration: 25s; animation-delay: -5s; }
	.hero-shape:nth-child(3) { width: 80px; height: 80px; bottom: 20%; left: 18%; animation-duration: 30s; animation-delay: -10s; border-radius: 50%; }
	.hero-shape:nth-child(4) { width: 30px; height: 30px; top: 45%; right: 22%; animation-duration: 22s; animation-delay: -8s; transform: rotate(45deg); }
	.hero-shape:nth-child(5) { width: 50px; height: 50px; bottom: 30%; right: 10%; animation-duration: 28s; animation-delay: -15s; }

	@keyframes shapeDrift {
		0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
		25% { opacity: 0.6; }
		50% { transform: translateY(-40px) rotate(180deg); opacity: 0.3; }
		75% { opacity: 0.6; }
		100% { transform: translateY(0) rotate(360deg); opacity: 0.3; }
	}

	.hero-wordmark {
		font-family: var(--sans);
		font-weight: 900;
		font-size: clamp(80px, 14vw, 200px);
		letter-spacing: -0.07em;
		text-transform: uppercase;
		line-height: 0.85;
		color: var(--fg);
		margin-bottom: 48px;
		animation: fadeUp 0.6s ease both;
	}

	.accent-dot {
		color: var(--accent);
	}

	.hero-subtitle {
		font-family: var(--serif);
		font-size: clamp(28px, 3.5vw, 48px);
		font-weight: 400;
		line-height: 1.15;
		letter-spacing: -0.03em;
		max-width: 700px;
		margin-bottom: 24px;
		animation: fadeUp 0.7s ease 0.1s both;
	}

	.hero-desc {
		font-size: 17px;
		color: var(--fg-muted);
		max-width: 500px;
		line-height: 1.7;
		font-weight: 400;
		margin-bottom: 40px;
		animation: fadeUp 0.7s ease 0.2s both;
	}

	.highlight {
		font-family: var(--mono);
		background: var(--accent);
		color: #000;
		padding: 2px 8px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 600;
	}

	.hero-actions {
		display: flex;
		gap: 12px;
		animation: fadeUp 0.7s ease 0.3s both;
	}

	.btn-big {
		display: inline-flex;
		align-items: center;
		padding: 16px 40px;
		background: var(--fg);
		color: var(--bg);
		border-radius: 10px;
		font-size: 15px;
		font-weight: 700;
		font-family: var(--sans);
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.btn-big:hover {
		background: var(--accent-dark);
		color: #fff;
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		padding: 16px 40px;
		background: transparent;
		color: var(--fg);
		border-radius: 10px;
		font-size: 15px;
		font-weight: 600;
		font-family: var(--sans);
		border: 2px solid var(--border);
		cursor: pointer;
		transition: all 0.25s;
	}

	.btn-outline:hover {
		border-color: var(--fg);
		transform: translateY(-2px);
	}

	.hero-note {
		margin-top: 16px;
		font-size: 13px;
		color: var(--fg-dim);
		font-family: var(--mono);
		animation: fadeUp 0.7s ease 0.35s both;
	}

	.mockup-wrap {
		margin-top: 64px;
		width: 100%;
		max-width: 860px;
		animation: fadeUp 0.9s ease 0.5s both;
		perspective: 1000px;
	}

	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@media (max-width: 900px) {
		.hero { padding: 120px 20px 60px; }
		.hero-shapes { display: none; }
		.hero-actions {
			flex-direction: column;
			width: 100%;
			max-width: 340px;
		}
		.btn-big, .btn-outline {
			width: 100%;
			justify-content: center;
		}
		.mockup-wrap {
			margin-top: 40px;
			perspective: none;
		}
	}
</style>
