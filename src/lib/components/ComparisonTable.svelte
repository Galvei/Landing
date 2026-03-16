<section class="reveal">
	<div class="section-label">How We Compare</div>
	<h2 class="section-title">Not just another dashboard. A full desktop experience.</h2>
	<p class="section-desc">Galvei replaces the patchwork of tools you're stitching together today.</p>

	<div class="compare-table">
		<div class="compare-row header">
			<div class="compare-cell">Feature</div>
			<div class="compare-cell">CasaOS</div>
			<div class="compare-cell">Umbrel</div>
			<div class="compare-cell galvei-col">Galvei</div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">Desktop-like UI</div>
			<div class="compare-cell"><span class="compare-partial">Basic</span></div>
			<div class="compare-cell"><span class="compare-partial">Basic</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓ Full desktop</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">App Store</div>
			<div class="compare-cell"><span class="compare-check">✓</span></div>
			<div class="compare-cell"><span class="compare-check">✓</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">Built-in reverse proxy</div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">Auto SSL</div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">File manager</div>
			<div class="compare-cell"><span class="compare-check">✓</span></div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">System monitoring</div>
			<div class="compare-cell"><span class="compare-partial">Basic</span></div>
			<div class="compare-cell"><span class="compare-partial">Basic</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓ Full</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">Backup &amp; restore</div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell"><span class="compare-partial">Manual</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓ Auto</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">Multi-user / RBAC</div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓ Pro</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">NIS2 / GDPR compliance</div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓</span></div>
		</div>
		<div class="compare-row">
			<div class="compare-cell feature-name">Plugin system</div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell"><span class="compare-cross">✗</span></div>
			<div class="compare-cell galvei-col"><span class="compare-check">✓ Wasm</span></div>
		</div>
	</div>
	<p class="compare-note">* Pro features available with paid plans. Community Edition includes core functionality.</p>
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

	.section-desc {
		font-size: 17px;
		color: var(--fg-muted);
		max-width: 560px;
		margin-top: 16px;
		line-height: 1.7;
		font-weight: 400;
	}

	.compare-table {
		margin-top: 64px;
		border: 2px solid var(--border);
		border-radius: 20px;
		overflow: hidden;
		background: #fff;
	}

	.compare-row {
		display: grid;
		grid-template-columns: 1.8fr 1fr 1fr 1fr;
		border-bottom: 1px solid var(--border);
	}

	.compare-row:last-child { border-bottom: none; }

	.compare-row.header {
		background: var(--fg);
		color: var(--bg);
	}

	.compare-cell {
		padding: 18px 24px;
		font-size: 14px;
		display: flex;
		align-items: center;
		border-right: 1px solid var(--border);
	}

	.compare-cell:last-child { border-right: none; }

	.compare-row.header .compare-cell {
		font-weight: 700;
		font-size: 14px;
		letter-spacing: -0.02em;
		border-right-color: rgba(255, 255, 255, 0.1);
		padding: 16px 24px;
	}

	.compare-row.header .compare-cell.galvei-col {
		background: var(--accent);
		color: #000;
		font-weight: 800;
	}

	.compare-cell.feature-name {
		font-weight: 600;
		font-size: 14px;
		color: var(--fg);
		letter-spacing: -0.01em;
	}

	.compare-cell.galvei-col {
		background: rgba(45, 212, 168, 0.04);
	}

	.compare-check {
		color: var(--accent-dark);
		font-weight: 700;
		font-size: 16px;
	}

	.compare-cross {
		color: var(--fg-dim);
		font-size: 16px;
	}

	.compare-partial {
		color: var(--fg-dim);
		font-size: 12px;
		font-family: var(--mono);
	}

	.compare-row:hover:not(.header) {
		background: rgba(0, 0, 0, 0.01);
	}

	.compare-note {
		font-size: 13px;
		color: var(--fg-dim);
		margin-top: 20px;
		font-family: var(--mono);
	}

	@media (max-width: 900px) {
		section { padding: 80px 20px; }
		.compare-row { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
		.compare-cell { padding: 12px 10px; font-size: 12px; }
	}
</style>
