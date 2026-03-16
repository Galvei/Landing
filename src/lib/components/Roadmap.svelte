<section id="roadmap">
	<div class="section-label reveal">Roadmap</div>
	<h2 class="section-title reveal">From first deploy to full platform.</h2>

	<div class="roadmap-grid">
		<div class="rm-card active reveal reveal-d1">
			<div class="rm-phase">Now</div>
			<h3>Foundation</h3>
			<p>Docker integration, auth, first deploy.</p>
			<div class="rm-tags">
				<span class="rm-tag">Backend</span>
				<span class="rm-tag">Docker</span>
				<span class="rm-tag">Auth</span>
			</div>
		</div>

		<div class="rm-card reveal reveal-d2">
			<div class="rm-phase">Next</div>
			<h3>App Store</h3>
			<p>One-click deploys, file manager, monitoring.</p>
			<div class="rm-tags">
				<span class="rm-tag">Apps</span>
				<span class="rm-tag">Files</span>
				<span class="rm-tag">Stats</span>
			</div>
		</div>

		<div class="rm-card reveal reveal-d3">
			<div class="rm-phase">Then</div>
			<h3>v1.0</h3>
			<p>Reverse proxy, SSL, permissions.</p>
			<div class="rm-tags">
				<span class="rm-tag">Proxy</span>
				<span class="rm-tag">SSL</span>
				<span class="rm-tag">v1.0</span>
			</div>
		</div>

		<div class="rm-card reveal reveal-d4">
			<div class="rm-phase">Future</div>
			<h3>Scale</h3>
			<p>Multi-user, API, plugins.</p>
			<div class="rm-tags">
				<span class="rm-tag">Teams</span>
				<span class="rm-tag">API</span>
				<span class="rm-tag">Plugins</span>
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

	.roadmap-grid {
		margin-top: 64px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
	}

	.rm-card {
		background: #fff;
		border: 2px solid var(--border);
		border-radius: 20px;
		padding: 32px 24px;
		transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
		position: relative;
	}

	.rm-card:hover {
		transform: translateY(-4px);
		border-color: var(--accent);
	}

	.rm-card.active {
		background: var(--accent);
		border-color: var(--accent);
		color: #000;
	}

	.rm-phase {
		font-size: 11px;
		font-family: var(--mono);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--fg-dim);
		margin-bottom: 12px;
	}

	.rm-card.active .rm-phase {
		color: rgba(0, 0, 0, 0.4);
	}

	.rm-card h3 {
		font-size: 22px;
		font-weight: 800;
		letter-spacing: -0.03em;
		margin-bottom: 8px;
	}

	.rm-card p {
		font-size: 13px;
		color: var(--fg-muted);
		line-height: 1.6;
	}

	.rm-card.active p {
		color: rgba(0, 0, 0, 0.5);
	}

	.rm-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 16px;
	}

	.rm-tag {
		font-size: 11px;
		font-family: var(--mono);
		font-weight: 600;
		padding: 4px 10px;
		border: 1.5px solid var(--border);
		border-radius: 6px;
		color: var(--fg-dim);
	}

	.rm-card.active .rm-tag {
		border-color: rgba(0, 0, 0, 0.15);
		color: rgba(0, 0, 0, 0.6);
	}

	@media (max-width: 900px) {
		section { padding: 80px 20px; }
		.roadmap-grid { grid-template-columns: 1fr 1fr; }
	}

	@media (max-width: 600px) {
		.roadmap-grid { grid-template-columns: 1fr; }
	}
</style>
