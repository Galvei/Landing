<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import ProblemSolution from '$lib/components/ProblemSolution.svelte';
	import ComparisonTable from '$lib/components/ComparisonTable.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// Scroll reveal
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add('visible');
				});
			},
			{ threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
		);
		document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

		// Big wordmark letters
		const bwEl = document.getElementById('bigWordmark');
		if (bwEl) {
			'GALVEI'.split('').forEach((ch) => {
				const span = document.createElement('span');
				span.className = 'bw-letter';
				span.textContent = ch;
				bwEl.appendChild(span);
			});
		}

		return () => obs.disconnect();
	});
</script>

<svelte:head>
	<title>Galvei — Self-hosting, simplified</title>
	<meta name="description" content="Galvei turns any Linux machine into a personal cloud. Deploy apps, manage everything from a dashboard, no terminal needed." />
	<meta property="og:title" content="Galvei — Self-hosting, simplified" />
	<meta property="og:description" content="One install, one dashboard, everything just works. Your personal cloud, running on your own hardware." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Galvei — Self-hosting, simplified" />
	<meta name="twitter:description" content="Deploy apps on your own hardware. No terminal needed." />
</svelte:head>

<Navbar />
<Hero />
<SocialProof />

<!-- Terminal Section -->
<div class="terminal-section">
	<div class="terminal-inner reveal">
		<div class="terminal-label">One command to start</div>
		<h2 class="terminal-heading">From zero to self-hosted<br>in five minutes</h2>
		<div class="terminal-box">
			<div class="terminal-bar">
				<div class="tdot"></div>
				<div class="tdot"></div>
				<div class="tdot"></div>
				<span class="terminal-bar-title">~ / galvei</span>
			</div>
			<div class="terminal-body">
				<div class="tl"><span class="tp">❯ </span><span class="tc">curl </span><span class="tf">-fsSL </span><span class="tu">https://get.galvei.com</span><span class="tpipe"> | </span><span class="tc">sh</span></div>
				<div class="tl"><span class="tok">✓ </span><span class="tm">Installing Galvei v0.1.0...</span></div>
				<div class="tl"><span class="tok">✓ </span><span class="tm">Dashboard → </span><span class="tu">https://galvei.local:9090</span></div>
				<div class="tl"><span class="tp">❯ </span><span class="tcursor"></span></div>
			</div>
		</div>
	</div>
</div>

<!-- Stats Strip -->
<div class="stats-strip">
	<div class="stat reveal reveal-d1">
		<div class="stat-number">1</div>
		<div class="stat-label">Curl to deploy</div>
	</div>
	<div class="stat reveal reveal-d2">
		<div class="stat-number">5m</div>
		<div class="stat-label">Setup time</div>
	</div>
	<div class="stat reveal reveal-d3">
		<div class="stat-number">2GB</div>
		<div class="stat-label">Min. RAM</div>
	</div>
	<div class="stat reveal reveal-d4">
		<div class="stat-number">100+</div>
		<div class="stat-label">Apps available</div>
	</div>
</div>

<ProblemSolution />
<ComparisonTable />
<Features />
<HowItWorks />

<!-- Big Interactive Wordmark -->
<div class="big-wordmark reveal" id="bigWordmark"></div>

<Roadmap />
<FAQ />

<!-- CTA / Waitlist -->
<div class="cta-section" id="waitlist">
	<div class="cta-blob" aria-hidden="true"></div>
	<div class="section-label" style="justify-content:center;">Early Access</div>
	<h2 class="cta-title">Start self-hosting in five minutes</h2>
	<p class="cta-desc">Join the waitlist. Be first in line.</p>
	<div class="cta-email">
		<input type="email" placeholder="you@email.com" aria-label="Email address" />
		<button class="btn-big">Join Waitlist</button>
	</div>
	<p class="cta-fine">No spam · Unsubscribe anytime</p>
</div>

<Footer />

<style>
	/* Terminal Section */
	.terminal-section {
		background: var(--bg-dark);
		color: #e4e4e7;
		padding: 100px 48px;
		display: flex;
		justify-content: center;
	}

	.terminal-inner {
		max-width: 700px;
		width: 100%;
	}

	.terminal-label {
		font-family: var(--mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--accent);
		margin-bottom: 24px;
		font-weight: 600;
	}

	.terminal-heading {
		font-family: var(--serif);
		font-size: clamp(32px, 4vw, 48px);
		font-weight: 400;
		line-height: 1.1;
		letter-spacing: -0.03em;
		margin-bottom: 40px;
	}

	.terminal-box {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		overflow: hidden;
	}

	.terminal-bar {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 14px 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(255, 255, 255, 0.02);
	}

	.tdot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}
	.tdot:nth-child(1) { background: #ff5f57; }
	.tdot:nth-child(2) { background: #febc2e; }
	.tdot:nth-child(3) { background: #28c840; }

	.terminal-bar-title {
		flex: 1;
		text-align: center;
		font-family: var(--mono);
		font-size: 12px;
		color: rgba(255, 255, 255, 0.3);
		margin-right: 36px;
	}

	.terminal-body {
		padding: 28px;
		font-family: var(--mono);
		font-size: 14px;
		line-height: 2.2;
	}

	.tp { color: var(--accent); }
	.tc { color: #e4e4e7; }
	.tf { color: #a78bfa; }
	.tu { color: #7ac8e0; }
	.tpipe { color: rgba(255, 255, 255, 0.3); }
	.tok { color: var(--accent-bright); }
	.tm { color: rgba(255, 255, 255, 0.4); }

	.tcursor {
		display: inline-block;
		width: 9px;
		height: 18px;
		background: var(--accent);
		animation: blink 1s step-end infinite;
		vertical-align: text-bottom;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.tl {
		opacity: 0;
		animation: typeLine 0.3s ease forwards;
	}
	.tl:nth-child(1) { animation-delay: 0.6s; }
	.tl:nth-child(2) { animation-delay: 1.8s; }
	.tl:nth-child(3) { animation-delay: 2.8s; }
	.tl:nth-child(4) { animation-delay: 3.6s; }

	@keyframes typeLine {
		from { opacity: 0; transform: translateY(4px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Stats Strip */
	.stats-strip {
		background: var(--accent);
		padding: 80px 48px;
		display: flex;
		justify-content: center;
		gap: 80px;
		flex-wrap: wrap;
	}

	.stat {
		text-align: center;
	}

	.stat-number {
		font-family: var(--sans);
		font-weight: 900;
		font-size: clamp(56px, 8vw, 96px);
		letter-spacing: -0.06em;
		color: #000;
		line-height: 1;
	}

	.stat-label {
		font-family: var(--mono);
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(0, 0, 0, 0.6);
		margin-top: 8px;
		font-weight: 600;
	}

	/* Big Wordmark */
	:global(.big-wordmark) {
		padding: 80px 48px;
		text-align: center;
		border-top: 1px solid var(--border);
		overflow: hidden;
	}

	:global(.bw-letter) {
		display: inline-block;
		font-family: var(--sans);
		font-weight: 900;
		font-size: clamp(60px, 12vw, 180px);
		letter-spacing: -0.07em;
		text-transform: uppercase;
		line-height: 0.85;
		-webkit-text-stroke: 2px var(--fg);
		color: transparent;
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
		cursor: default;
	}

	:global(.bw-letter:hover) {
		color: var(--accent);
		-webkit-text-stroke: 2px var(--accent);
		transform: translateY(-14px) scale(1.06);
	}

	/* CTA Section */
	.cta-section {
		background: var(--bg-dark);
		color: #e4e4e7;
		text-align: center;
		padding: 120px 48px;
		position: relative;
		overflow: hidden;
	}

	.cta-blob {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 500px;
		height: 500px;
		transform: translate(-50%, -50%);
		background: var(--accent);
		opacity: 0.06;
		border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%;
		animation: blobMorph 12s ease-in-out infinite;
		pointer-events: none;
		filter: blur(60px);
	}

	@keyframes blobMorph {
		0% { border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; transform: translate(-50%,-50%) rotate(0deg) scale(1); }
		33% { border-radius: 55% 45% 40% 60% / 45% 55% 45% 55%; transform: translate(-50%,-50%) rotate(120deg) scale(1.1); }
		66% { border-radius: 45% 55% 60% 40% / 60% 45% 55% 45%; transform: translate(-50%,-50%) rotate(240deg) scale(0.95); }
		100% { border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; transform: translate(-50%,-50%) rotate(360deg) scale(1); }
	}

	.section-label {
		font-size: 12px;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--accent);
		margin-bottom: 16px;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.cta-title {
		font-family: var(--sans);
		font-weight: 800;
		font-size: clamp(32px, 4vw, 52px);
		line-height: 1.05;
		letter-spacing: -0.04em;
		color: #e4e4e7;
		max-width: 600px;
		margin: 0 auto 20px;
	}

	.cta-desc {
		font-size: 17px;
		color: rgba(255, 255, 255, 0.5);
		max-width: 400px;
		margin: 0 auto 48px;
		line-height: 1.7;
	}

	.cta-email {
		display: flex;
		gap: 10px;
		max-width: 480px;
		margin: 0 auto;
	}

	.cta-email input {
		flex: 1;
		padding: 16px 24px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		color: #fff;
		font-family: var(--sans);
		font-size: 15px;
		outline: none;
		transition: all 0.3s;
	}

	.cta-email input::placeholder { color: rgba(255, 255, 255, 0.3); }

	.cta-email input:focus {
		border-color: var(--accent);
		box-shadow: 0 0 0 3px rgba(45, 212, 168, 0.15);
	}

	.btn-big {
		display: inline-flex;
		align-items: center;
		padding: 16px 40px;
		background: var(--accent);
		color: #000;
		border-radius: 10px;
		font-size: 15px;
		font-weight: 700;
		font-family: var(--sans);
		border: none;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.btn-big:hover {
		background: var(--accent-bright);
		box-shadow: 0 8px 30px rgba(45, 212, 168, 0.3);
		transform: translateY(-2px);
	}

	.cta-fine {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.3);
		margin-top: 16px;
		font-family: var(--mono);
	}

	@media (max-width: 900px) {
		.terminal-section { padding: 60px 20px; }
		.stats-strip { gap: 40px; padding: 60px 24px; }
		.stat-number { font-size: 52px; }
		.cta-section { padding: 80px 20px; }
		.cta-email { flex-direction: column; }
		:global(.big-wordmark) { padding: 60px 20px; }
	}
</style>
