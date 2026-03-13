<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
</script>

<section class="how-it-works" id="how-it-works" use:scrollReveal={{ threshold: 0.2, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above>
	<h2 class="section-title">Up and running in three steps</h2>
	<p class="section-sub">From zero to self-hosted in under five minutes.</p>

	<div class="steps">
		<div class="step" style="transition-delay: 0s">
			<div class="step-number">1</div>
			<div class="step-content">
				<h3 class="step-name">Get a machine</h3>
				<p class="step-desc">Any Linux box. A Raspberry Pi, an old laptop, a $5/month VPS.</p>
				<div class="step-visual step-visual--server">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="40" height="40">
						<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
						<rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
						<line x1="6" y1="6" x2="6.01" y2="6"/>
						<line x1="6" y1="18" x2="6.01" y2="18"/>
					</svg>
				</div>
			</div>
		</div>

		<div class="step-connector">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
				<path d="M5 12h14M12 5l7 7-7 7"/>
			</svg>
		</div>

		<div class="step" style="transition-delay: 0.15s">
			<div class="step-number">2</div>
			<div class="step-content">
				<h3 class="step-name">Run one command</h3>
				<div class="step-code">
					<code>curl -fsSL https://get.galvei.com | sh</code>
				</div>
			</div>
		</div>

		<div class="step-connector">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
				<path d="M5 12h14M12 5l7 7-7 7"/>
			</svg>
		</div>

		<div class="step" style="transition-delay: 0.3s">
			<div class="step-number">3</div>
			<div class="step-content">
				<h3 class="step-name">Install apps from the dashboard</h3>
				<p class="step-desc">Pick what you need. Galvei handles DNS, SSL, networking, everything.</p>
				<div class="step-visual step-visual--dashboard">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="40" height="40">
						<rect x="3" y="3" width="7" height="7"/>
						<rect x="14" y="3" width="7" height="7"/>
						<rect x="14" y="14" width="7" height="7"/>
						<rect x="3" y="14" width="7" height="7"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		position: relative;
		z-index: 3;
		max-width: 900px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}

	.section-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 900;
		text-align: center;
		color: #F0EAD6;
		margin: 0 0 0.6rem;
		letter-spacing: -0.01em;
		clip-path: inset(0 100% 0 0);
		transition: clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .section-title {
		clip-path: inset(0 0 0 0);
	}

	.section-sub {
		font-family: 'Inter', sans-serif;
		text-align: center;
		font-size: 0.85rem;
		color: rgba(232, 224, 212, 0.35);
		letter-spacing: 0.03em;
		margin: 0 0 3.5rem;
		opacity: 0;
		transform: translateY(8px);
		filter: blur(4px);
		transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s, filter 0.5s ease 0.15s;
	}

	.visible .section-sub {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
	}

	.steps {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 1.5rem;
	}

	.step {
		flex: 1;
		max-width: 260px;
		text-align: center;
		opacity: 0;
		transform: translateY(24px) scale(0.94);
		filter: blur(6px);
		transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
	}

	.visible .step {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: blur(0);
	}

	.step-connector {
		opacity: 0;
		transition: opacity 0.5s ease 0.4s;
	}

	.visible .step-connector {
		opacity: 1;
	}

	.step-number {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 3rem;
		font-weight: 900;
		color: #FFD600;
		margin-bottom: 1rem;
		line-height: 1;
	}

	.step-content {
		background: transparent;
		border: 2px solid rgba(240, 234, 214, 0.25);
		border-radius: 0;
		padding: 1.5rem 1.2rem;
		transition: border-color 0.3s ease, box-shadow 0.3s ease;
	}

	.step-content:hover {
		border-color: #FF6B35;
		box-shadow: 4px 4px 0 #FF6B35;
	}

	.step-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.05rem;
		font-weight: 700;
		color: #F0EAD6;
		margin: 0 0 0.6rem;
	}

	.step-desc {
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		color: rgba(232, 224, 212, 0.45);
		line-height: 1.7;
		margin: 0;
	}

	.step-code {
		background: #0d0d09;
		border: 2px solid #FF6B35;
		border-radius: 0;
		padding: 0.8rem 1rem;
		margin-top: 0.5rem;
	}

	.step-code code {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.7rem;
		color: #FF6B35;
		word-break: break-all;
	}

	.step-visual {
		margin-top: 1rem;
		color: rgba(196, 114, 78, 0.4);
		display: flex;
		justify-content: center;
	}

	.step-connector {
		display: flex;
		align-items: center;
		color: #FF6B35;
		padding-top: 3.5rem;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.steps {
			flex-direction: column;
			align-items: center;
		}

		.step {
			max-width: 100%;
			width: 100%;
		}

		.step-connector {
			padding-top: 0;
		}

		.step-connector svg {
			transform: rotate(90deg);
		}
	}

	.above .section-title { clip-path: inset(0 0 0 100%); }
	.above .section-sub { opacity: 0; transform: translateY(-8px); filter: blur(4px); }
	.above .step { opacity: 0; transform: translateY(-24px) scale(0.94); filter: blur(6px); }
	.above .step-connector { opacity: 0; }

	@media (prefers-reduced-motion: reduce) {
		.section-title { clip-path: none; transition: none; }
		.section-sub, .step, .step-connector { opacity: 1; transform: none; filter: none; transition: none; }
	}

</style>
