<div class="mockup">
	<!-- Top bar -->
	<div class="gv-topbar">
		<div class="gv-topbar-left">
			<span class="gv-logo">⬡ GALVEI</span>
			<span class="gv-topbar-page">Overview</span>
		</div>
		<div class="gv-topbar-right">
			<span class="gv-chip">DESKTOP</span>
			<span class="gv-status green">● 3 nodes</span>
			<span class="gv-status amber">⚡ 1 alert</span>
			<span class="gv-topbar-dim">⌘ Space</span>
			<span class="gv-topbar-dim">⌃</span>
			<span class="gv-avatar">J</span>
			<span class="gv-topbar-dim">13:24</span>
		</div>
	</div>

	<div class="gv-desktop">
		<!-- Left dock -->
		<div class="gv-dock">
			<div class="gv-dock-icon active" title="Files">📁</div>
			<div class="gv-dock-icon" title="Settings">⚙️</div>
			<div class="gv-dock-icon" title="Containers">📦</div>
			<div class="gv-dock-icon" title="Terminal">🖥️</div>
			<div class="gv-dock-icon" title="Monitoring">📊</div>
		</div>

		<!-- Desktop icons -->
		<div class="gv-icons">
			<div class="gv-icon"><div class="gv-icon-img">📄</div><small>Documents</small></div>
			<div class="gv-icon"><div class="gv-icon-img">📥</div><small>Downloads</small></div>
			<div class="gv-icon"><div class="gv-icon-img">💾</div><small>Backups</small></div>
			<div class="gv-icon"><div class="gv-icon-img">📝</div><small>README.md</small></div>
			<div class="gv-icon"><div class="gv-icon-img">🐳</div><small>compose.yml</small></div>
			<div class="gv-icon"><div class="gv-icon-img">⚡</div><small>backup.sh</small></div>
		</div>

		<!-- Overview window -->
		<div class="gv-window">
			<div class="gv-win-bar">
				<div class="gv-win-dots">
					<span class="r"></span><span class="y"></span><span class="g"></span>
				</div>
				<div class="gv-win-title">Overview</div>
				<div class="gv-win-spacer"></div>
			</div>
			<div class="gv-win-toolbar">
				<span class="gv-btn-outline">↻ Refresh</span>
				<span class="gv-btn-green">+ Deploy</span>
				<span class="gv-filter">▼ Filter...</span>
			</div>
			<div class="gv-stats-row">
				<div class="gv-stat-box">
					<div class="gv-stat-lbl">Uptime</div>
					<div class="gv-stat-big green">99.8%</div>
					<div class="gv-stat-sub green">↑ +0.1%</div>
				</div>
				<div class="gv-stat-box">
					<div class="gv-stat-lbl">Services</div>
					<div class="gv-stat-big">12/13</div>
					<div class="gv-stat-sub amber">⚠ bazarr</div>
				</div>
				<div class="gv-stat-box">
					<div class="gv-stat-lbl">RAM</div>
					<div class="gv-stat-big">6.4 GB</div>
					<div class="gv-stat-sub dim">of 16 GB</div>
				</div>
				<div class="gv-stat-box">
					<div class="gv-stat-lbl">NIS2</div>
					<div class="gv-stat-big green">78%</div>
					<div class="gv-stat-sub green">↑ 3 fixed</div>
				</div>
			</div>
			<div class="gv-table">
				<div class="gv-trow gv-thead">
					<span>NAME</span><span>STATUS</span><span>CPU</span><span>RAM</span><span>UPTIME</span>
				</div>
				<div class="gv-trow">
					<span><i class="dot green"></i>Jellyfin</span>
					<span class="tag green">Running</span>
					<span>4%</span><span>820MB</span><span>14d 6h</span>
				</div>
				<div class="gv-trow">
					<span><i class="dot green"></i>Nextcloud</span>
					<span class="tag green">Running</span>
					<span>11%</span><span>1.1GB</span><span>14d 6h</span>
				</div>
				<div class="gv-trow">
					<span><i class="dot green"></i>Vaultwarden</span>
					<span class="tag green">Running</span>
					<span>0.4%</span><span>88MB</span><span>30d</span>
				</div>
				<div class="gv-trow">
					<span><i class="dot green"></i>Sonarr</span>
					<span class="tag green">Running</span>
					<span>2%</span><span>180MB</span><span>14d 6h</span>
				</div>
				<div class="gv-trow">
					<span><i class="dot amber"></i>Bazarr</span>
					<span class="tag amber">Degraded</span>
					<span>2%</span><span>210MB</span><span>2h 14m</span>
				</div>
			</div>
		</div>

		<!-- Right widgets -->
		<div class="gv-widgets">
			<div class="gv-widget">
				<div class="gv-widget-lbl">UPTIME</div>
				<div class="gv-widget-val green">99.8%</div>
				<div class="gv-widget-sub green">↑ +0.1%</div>
			</div>
			<div class="gv-widget">
				<div class="gv-widget-lbl">NIS2</div>
				<div class="gv-widget-val green">78%</div>
				<div class="gv-widget-sub green">↑ 3 resolved</div>
			</div>
			<div class="gv-widget">
				<div class="gv-widget-lbl">RAM</div>
				<div class="gv-widget-val cyan">40%</div>
				<div class="gv-widget-sub dim">6.4 / 16 GB</div>
			</div>
		</div>
	</div>

	<div class="mockup-label">Early concept — UI in development</div>
</div>

<style>
	.mockup {
		background: #12121a;
		border-radius: 16px;
		border: 2px solid rgba(255, 255, 255, 0.06);
		overflow: hidden;
		box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25);
		transform: rotateX(2deg);
		transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.mockup:hover {
		transform: rotateX(0deg) translateY(-4px);
		box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
	}

	.gv-topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 14px;
		background: rgba(255, 255, 255, 0.03);
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}

	.gv-topbar-left, .gv-topbar-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.gv-logo {
		font-family: var(--mono);
		font-size: 11px;
		font-weight: 700;
		color: var(--accent);
	}

	.gv-topbar-page {
		font-family: var(--mono);
		font-size: 11px;
		color: rgba(255, 255, 255, 0.5);
	}

	.gv-chip {
		font-size: 9px;
		font-family: var(--mono);
		font-weight: 700;
		padding: 2px 8px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 4px;
		color: rgba(255, 255, 255, 0.4);
		letter-spacing: 0.06em;
	}

	.gv-status {
		font-size: 10px;
		font-family: var(--mono);
	}
	.gv-status.green { color: var(--accent); }
	.gv-status.amber { color: #fbbf24; }

	.gv-topbar-dim {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.2);
		font-family: var(--mono);
	}

	.gv-avatar {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--accent);
		color: #000;
		font-size: 10px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gv-desktop {
		display: flex;
		min-height: 310px;
	}

	.gv-dock {
		width: 42px;
		background: rgba(255, 255, 255, 0.02);
		border-right: 1px solid rgba(255, 255, 255, 0.05);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px 0;
		gap: 4px;
		flex-shrink: 0;
	}

	.gv-dock-icon {
		width: 30px;
		height: 30px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		cursor: default;
		transition: background 0.2s;
	}
	.gv-dock-icon:hover { background: rgba(255, 255, 255, 0.06); }
	.gv-dock-icon.active { background: rgba(45, 212, 168, 0.1); }

	.gv-icons {
		width: 100px;
		padding: 14px 8px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		flex-shrink: 0;
	}

	.gv-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		padding: 8px 4px;
		border-radius: 8px;
		cursor: default;
		transition: background 0.2s;
	}
	.gv-icon:hover { background: rgba(255, 255, 255, 0.04); }
	.gv-icon-img { font-size: 24px; }
	.gv-icon small {
		font-size: 9px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.45);
		text-align: center;
		line-height: 1.2;
	}

	.gv-window {
		flex: 1;
		margin: 14px 10px 14px 0;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		overflow: hidden;
	}

	.gv-win-bar {
		display: flex;
		align-items: center;
		padding: 8px 12px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		gap: 10px;
	}

	.gv-win-dots {
		display: flex;
		gap: 5px;
	}
	.gv-win-dots span {
		width: 9px;
		height: 9px;
		border-radius: 50%;
	}
	.gv-win-dots .r { background: #ff5f57; }
	.gv-win-dots .y { background: #febc2e; }
	.gv-win-dots .g { background: #28c840; }

	.gv-win-title {
		font-size: 11px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.5);
	}
	.gv-win-spacer { flex: 1; }

	.gv-win-toolbar {
		display: flex;
		gap: 8px;
		padding: 8px 12px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
		align-items: center;
	}

	.gv-btn-outline {
		font-size: 10px;
		font-family: var(--mono);
		padding: 3px 10px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 5px;
		color: rgba(255, 255, 255, 0.4);
	}

	.gv-btn-green {
		font-size: 10px;
		font-family: var(--mono);
		padding: 3px 10px;
		border: 1px solid rgba(45, 212, 168, 0.3);
		border-radius: 5px;
		color: var(--accent);
		background: rgba(45, 212, 168, 0.06);
	}

	.gv-filter {
		margin-left: auto;
		font-size: 10px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.25);
	}

	.gv-stats-row {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 6px;
		padding: 8px 12px;
	}

	.gv-stat-box {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		padding: 8px 10px;
	}

	.gv-stat-lbl {
		font-size: 9px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.3);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.gv-stat-big {
		font-size: 18px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.8);
		margin: 2px 0;
		letter-spacing: -0.03em;
	}
	.gv-stat-big.green { color: var(--accent); }
	.gv-stat-sub {
		font-size: 9px;
		font-family: var(--mono);
	}
	.gv-stat-sub.green { color: var(--accent); }
	.gv-stat-sub.amber { color: #fbbf24; }
	.gv-stat-sub.dim { color: rgba(255, 255, 255, 0.25); }

	.gv-table {
		padding: 0 12px 10px;
	}

	.gv-trow {
		display: grid;
		grid-template-columns: 1.6fr 0.9fr 0.6fr 0.7fr 0.8fr;
		gap: 4px;
		padding: 6px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.03);
		font-size: 11px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.45);
		align-items: center;
	}

	.gv-thead {
		font-size: 9px;
		color: rgba(255, 255, 255, 0.25);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		padding-bottom: 6px;
	}

	.dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		margin-right: 6px;
	}
	.dot.green { background: var(--accent); box-shadow: 0 0 5px rgba(45, 212, 168, 0.4); }
	.dot.amber { background: #fbbf24; box-shadow: 0 0 5px rgba(251, 191, 36, 0.4); }

	.tag {
		font-size: 9px;
		padding: 2px 8px;
		border-radius: 4px;
		font-weight: 600;
		display: inline-block;
	}
	.tag.green { background: rgba(45, 212, 168, 0.12); color: var(--accent); }
	.tag.amber { background: rgba(251, 191, 36, 0.12); color: #fbbf24; }

	.gv-widgets {
		width: 110px;
		padding: 14px 10px 14px 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex-shrink: 0;
	}

	.gv-widget {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 10px;
		padding: 10px;
	}

	.gv-widget-lbl {
		font-size: 9px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.3);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.gv-widget-val {
		font-size: 22px;
		font-weight: 700;
		letter-spacing: -0.03em;
		margin: 2px 0;
	}
	.gv-widget-val.green { color: var(--accent); }
	.gv-widget-val.cyan { color: #7ac8e0; }
	.gv-widget-sub {
		font-size: 9px;
		font-family: var(--mono);
	}
	.gv-widget-sub.green { color: var(--accent); }
	.gv-widget-sub.dim { color: rgba(255, 255, 255, 0.25); }

	.mockup-label {
		text-align: center;
		font-size: 11px;
		font-family: var(--mono);
		color: rgba(255, 255, 255, 0.2);
		padding: 10px;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
	}

	@media (max-width: 900px) {
		.gv-widgets { display: none; }
		.gv-icons { width: 80px; }
		.gv-stats-row { grid-template-columns: repeat(2, 1fr); }
	}

	@media (max-width: 600px) {
		.gv-dock { display: none; }
		.gv-icons { display: none; }
		.gv-topbar-right { display: none; }
		.gv-desktop { min-height: 240px; }
	}
</style>
