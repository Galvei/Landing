<section class="reveal">
	<div class="section-label">The Problem</div>
	<h2 class="section-title">Self-hosting is powerful. Setting it up shouldn't be.</h2>

	<div class="contrast-grid">
		<div class="contrast-col problem reveal reveal-d1">
			<h3>✗ Without Galvei</h3>
			<div class="c-item">
				<div class="c-item-title">Setup is painful</div>
				<p>You shouldn't need a CS degree to install Nextcloud.</p>
			</div>
			<div class="c-item">
				<div class="c-item-title">Terminal fatigue</div>
				<p>SSH, Docker Compose, YAML, port forwarding. Every time.</p>
			</div>
			<div class="c-item">
				<div class="c-item-title">Security anxiety</div>
				<p>Is my firewall right? Is my reverse proxy leaking?</p>
			</div>
			<div class="c-item">
				<div class="c-item-title">Maintenance burden</div>
				<p>Updates break things. Backups are manual. Monitoring? DIY.</p>
			</div>
		</div>

		<div class="contrast-col solution reveal reveal-d2">
			<h3>✓ With Galvei</h3>
			<div class="c-item">
				<div class="c-item-title">One-click install</div>
				<p>Run one command. Galvei sets up everything.</p>
			</div>
			<div class="c-item">
				<div class="c-item-title">No terminal needed</div>
				<p>A clean GUI for everything you'd do in the terminal.</p>
			</div>
			<div class="c-item">
				<div class="c-item-title">Secure by default</div>
				<p>Auto SSL, reverse proxy, auth out of the box.</p>
			</div>
			<div class="c-item">
				<div class="c-item-title">Managed updates</div>
				<p>Update from the desktop. Auto backups before changes.</p>
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

	.contrast-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin-top: 64px;
	}

	.contrast-col {
		padding: 48px;
		border-radius: 20px;
		border: 2px solid var(--border);
		position: relative;
		overflow: hidden;
		transition: border-color 0.3s;
	}

	.contrast-col:hover {
		border-color: rgba(0, 0, 0, 0.15);
	}

	.contrast-col.problem {
		background: #fff;
	}

	.contrast-col.solution {
		background: var(--accent);
		border-color: var(--accent);
		color: #000;
	}

	.contrast-col.solution:hover {
		border-color: var(--accent-dark);
	}

	.contrast-col h3 {
		font-family: var(--mono);
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		margin-bottom: 32px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.contrast-col.problem h3 { color: var(--fg-dim); }
	.contrast-col.solution h3 { color: rgba(0, 0, 0, 0.5); }

	.c-item {
		padding: 16px 0;
		border-top: 1px solid;
	}

	.contrast-col.problem .c-item { border-color: var(--border); }
	.contrast-col.solution .c-item { border-color: rgba(0, 0, 0, 0.1); }

	.c-item:last-child { padding-bottom: 0; }

	.c-item-title {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 2px;
		letter-spacing: -0.02em;
	}

	.c-item p {
		font-size: 14px;
		line-height: 1.6;
		font-weight: 400;
	}

	.contrast-col.problem .c-item p { color: var(--fg-muted); }
	.contrast-col.solution .c-item p { color: rgba(0, 0, 0, 0.6); }

	@media (max-width: 900px) {
		section { padding: 80px 20px; }
		.contrast-grid { grid-template-columns: 1fr; }
		.contrast-col { padding: 32px 24px; }
	}
</style>
