<script lang="ts">
	let copied = $state(false);

	function copyCommand() {
		navigator.clipboard.writeText('curl -fsSL https://get.galvei.com | sh');
		copied = true;
		setTimeout(() => (copied = false), 1500);
	}
</script>

<section id="how-it-works">
	<div class="section-label reveal">How it Works</div>
	<h2 class="section-title reveal">Three steps. Five minutes.</h2>

	<div class="steps">
		<div class="step reveal reveal-d1">
			<div class="step-num">01</div>
			<div>
				<h3>Get a machine</h3>
				<p>Any Linux box. A Raspberry Pi, an old laptop, a €5/month VPS.</p>
			</div>
		</div>

		<div class="step reveal reveal-d2">
			<div class="step-num">02</div>
			<div>
				<h3>Run one command</h3>
				<p>That's it. Galvei handles the rest.</p>
				<button class="cmd-block" onclick={copyCommand}>
					curl -fsSL https://get.galvei.com | sh
					<span class="copy-tag">{copied ? 'Copied!' : 'Copy'}</span>
				</button>
			</div>
		</div>

		<div class="step reveal reveal-d3">
			<div class="step-num">03</div>
			<div>
				<h3>Install apps from the desktop</h3>
				<p>Pick what you need. Galvei handles DNS, SSL, networking — everything.</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: 120px 48px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-label {
		font-size: 12px;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--accent-dark);
		margin-bottom: 16px;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.section-label::before {
		content: '◆ ';
		color: var(--accent);
	}

	.section-title {
		font-family: var(--sans);
		font-weight: 800;
		font-size: clamp(32px, 4vw, 52px);
		line-height: 1.05;
		letter-spacing: -0.04em;
		max-width: 700px;
	}

	.steps {
		margin-top: 64px;
	}

	.step {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 48px;
		padding: 56px 0;
		border-top: 2px solid var(--border);
		align-items: start;
	}

	.step-num {
		font-family: var(--sans);
		font-weight: 900;
		font-size: 80px;
		line-height: 0.8;
		letter-spacing: -0.06em;
		color: var(--accent);
	}

	.step h3 {
		font-size: 24px;
		font-weight: 800;
		margin-bottom: 8px;
		letter-spacing: -0.03em;
	}

	.step p {
		font-size: 16px;
		color: var(--fg-muted);
		line-height: 1.65;
	}

	.cmd-block {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		margin-top: 18px;
		padding: 16px 28px;
		background: var(--bg-dark);
		border: none;
		border-radius: 12px;
		font-family: var(--mono);
		font-size: 14px;
		color: var(--accent);
		cursor: pointer;
		transition: all 0.3s;
	}

	.cmd-block:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}

	.copy-tag {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.3);
		padding: 3px 10px;
		background: rgba(255, 255, 255, 0.06);
		border-radius: 6px;
		transition: all 0.2s;
	}

	.cmd-block:hover .copy-tag {
		background: rgba(45, 212, 168, 0.15);
		color: var(--accent);
	}

	@media (max-width: 900px) {
		section { padding: 80px 20px; }
		.step {
			grid-template-columns: 72px 1fr;
			gap: 24px;
		}
		.step-num { font-size: 52px; }
	}
</style>
