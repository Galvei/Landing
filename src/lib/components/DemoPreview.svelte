<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	let el: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.2 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section class="demo-preview" id="demo" bind:this={el} class:visible>
	<h2 class="section-title">See it in action</h2>
	<p class="section-sub">Your personal cloud dashboard. Clean, fast, and no terminal in sight.</p>

	<div class="preview-frame">
		<div class="preview-chrome">
			<div class="chrome-dots">
				<span class="dot dot-red"></span>
				<span class="dot dot-yellow"></span>
				<span class="dot dot-green"></span>
			</div>
			<div class="chrome-url">
				<span class="url-lock">
					<svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
						<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
					</svg>
				</span>
				<span class="url-text">your-server.galvei.local</span>
			</div>
		</div>

		<div class="preview-body">
			<!-- Wireframe mockup of dashboard -->
			<div class="mock-sidebar">
				<div class="mock-logo"></div>
				<div class="mock-nav-item mock-nav-active"></div>
				<div class="mock-nav-item"></div>
				<div class="mock-nav-item"></div>
				<div class="mock-nav-item"></div>
				<div class="mock-nav-item"></div>
			</div>
			<div class="mock-main">
				<div class="mock-header"></div>
				<div class="mock-stats">
					<div class="mock-stat-card">
						<div class="mock-stat-label"></div>
						<div class="mock-stat-value"></div>
						<div class="mock-stat-bar"><div class="mock-stat-fill" style="width: 45%"></div></div>
					</div>
					<div class="mock-stat-card">
						<div class="mock-stat-label"></div>
						<div class="mock-stat-value"></div>
						<div class="mock-stat-bar"><div class="mock-stat-fill" style="width: 62%"></div></div>
					</div>
					<div class="mock-stat-card">
						<div class="mock-stat-label"></div>
						<div class="mock-stat-value"></div>
						<div class="mock-stat-bar"><div class="mock-stat-fill" style="width: 28%"></div></div>
					</div>
				</div>
				<div class="mock-containers">
					<div class="mock-container-row">
						<div class="mock-container-dot mock-dot-running"></div>
						<div class="mock-container-name"></div>
						<div class="mock-container-tag"></div>
					</div>
					<div class="mock-container-row">
						<div class="mock-container-dot mock-dot-running"></div>
						<div class="mock-container-name"></div>
						<div class="mock-container-tag"></div>
					</div>
					<div class="mock-container-row">
						<div class="mock-container-dot mock-dot-running"></div>
						<div class="mock-container-name"></div>
						<div class="mock-container-tag"></div>
					</div>
				</div>
			</div>
		</div>

		<p class="preview-caption">Dashboard preview coming soon. Join the waitlist to get first access.</p>
	</div>
</section>

<style>
	.demo-preview {
		position: relative;
		z-index: 3;
		max-width: 900px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}

	.section-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 400;
		text-align: center;
		color: rgba(232, 224, 212, 0.9);
		margin: 0 0 0.6rem;
		letter-spacing: 0.02em;
	}

	.section-sub {
		font-family: 'Inter', sans-serif;
		text-align: center;
		font-size: 0.85rem;
		color: rgba(232, 224, 212, 0.35);
		letter-spacing: 0.03em;
		margin: 0 0 3rem;
	}

	.preview-frame {
		border: 1px solid rgba(232, 224, 212, 0.08);
		border-radius: 12px;
		overflow: hidden;
		background: rgba(26, 23, 18, 0.5);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		opacity: 0;
		transform: translateY(20px) scale(0.98);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .preview-frame {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	.preview-chrome {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.8rem 1rem;
		background: rgba(232, 224, 212, 0.04);
		border-bottom: 1px solid rgba(232, 224, 212, 0.06);
	}

	.chrome-dots {
		display: flex;
		gap: 6px;
		flex-shrink: 0;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.dot-red { background: rgba(232, 224, 212, 0.15); }
	.dot-yellow { background: rgba(232, 224, 212, 0.15); }
	.dot-green { background: rgba(232, 224, 212, 0.15); }

	.chrome-url {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		background: rgba(232, 224, 212, 0.04);
		border-radius: 6px;
		padding: 0.35rem 0.8rem;
	}

	.url-lock {
		color: rgba(122, 138, 110, 0.6);
		display: flex;
	}

	.url-text {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		color: rgba(232, 224, 212, 0.35);
	}

	.preview-body {
		display: flex;
		min-height: 300px;
	}

	/* Sidebar wireframe */
	.mock-sidebar {
		width: 60px;
		padding: 1rem 0.5rem;
		border-right: 1px solid rgba(232, 224, 212, 0.04);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
	}

	.mock-logo {
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: rgba(196, 114, 78, 0.2);
		margin-bottom: 0.5rem;
	}

	.mock-nav-item {
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: rgba(232, 224, 212, 0.04);
	}

	.mock-nav-active {
		background: rgba(196, 114, 78, 0.12);
		border: 1px solid rgba(196, 114, 78, 0.2);
	}

	/* Main content wireframe */
	.mock-main {
		flex: 1;
		padding: 1.2rem;
	}

	.mock-header {
		height: 12px;
		width: 140px;
		background: rgba(232, 224, 212, 0.08);
		border-radius: 4px;
		margin-bottom: 1.2rem;
	}

	.mock-stats {
		display: flex;
		gap: 0.8rem;
		margin-bottom: 1.2rem;
	}

	.mock-stat-card {
		flex: 1;
		padding: 0.8rem;
		background: rgba(232, 224, 212, 0.02);
		border: 1px solid rgba(232, 224, 212, 0.04);
		border-radius: 8px;
	}

	.mock-stat-label {
		height: 6px;
		width: 40px;
		background: rgba(232, 224, 212, 0.06);
		border-radius: 2px;
		margin-bottom: 0.5rem;
	}

	.mock-stat-value {
		height: 10px;
		width: 50px;
		background: rgba(232, 224, 212, 0.1);
		border-radius: 3px;
		margin-bottom: 0.5rem;
	}

	.mock-stat-bar {
		height: 4px;
		background: rgba(232, 224, 212, 0.04);
		border-radius: 2px;
		overflow: hidden;
	}

	.mock-stat-fill {
		height: 100%;
		background: rgba(196, 114, 78, 0.4);
		border-radius: 2px;
	}

	.mock-containers {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.mock-container-row {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.6rem 0.8rem;
		background: rgba(232, 224, 212, 0.02);
		border-radius: 6px;
	}

	.mock-container-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.mock-dot-running {
		background: #7a8a6e;
		box-shadow: 0 0 4px rgba(122, 138, 110, 0.4);
	}

	.mock-container-name {
		height: 8px;
		width: 80px;
		background: rgba(232, 224, 212, 0.08);
		border-radius: 3px;
	}

	.mock-container-tag {
		height: 6px;
		width: 40px;
		background: rgba(232, 224, 212, 0.04);
		border-radius: 2px;
		margin-left: auto;
	}

	.preview-caption {
		font-family: 'Inter', sans-serif;
		font-size: 0.75rem;
		color: rgba(232, 224, 212, 0.3);
		text-align: center;
		padding: 1rem;
		border-top: 1px solid rgba(232, 224, 212, 0.04);
		margin: 0;
		font-style: italic;
	}

	@media (max-width: 640px) {
		.mock-sidebar { display: none; }
		.mock-stats { flex-direction: column; }
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.section-title { color: #2c2418; }
		.section-sub { color: rgba(44, 36, 24, 0.65); }
		.preview-frame {
			background: rgba(245, 240, 232, 0.8);
			border-color: rgba(44, 36, 24, 0.1);
			box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
		}
		.preview-chrome {
			background: rgba(44, 36, 24, 0.03);
			border-bottom-color: rgba(44, 36, 24, 0.06);
		}
		.dot-red, .dot-yellow, .dot-green { background: rgba(44, 36, 24, 0.12); }
		.chrome-url { background: rgba(44, 36, 24, 0.04); }
		.url-text { color: rgba(44, 36, 24, 0.4); }
		.mock-sidebar { border-right-color: rgba(44, 36, 24, 0.06); }
		.mock-logo { background: rgba(176, 90, 56, 0.15); }
		.mock-nav-item { background: rgba(44, 36, 24, 0.04); }
		.mock-nav-active { background: rgba(176, 90, 56, 0.1); border-color: rgba(176, 90, 56, 0.15); }
		.mock-header { background: rgba(44, 36, 24, 0.08); }
		.mock-stat-card { background: rgba(44, 36, 24, 0.02); border-color: rgba(44, 36, 24, 0.06); }
		.mock-stat-label { background: rgba(44, 36, 24, 0.08); }
		.mock-stat-value { background: rgba(44, 36, 24, 0.1); }
		.mock-stat-bar { background: rgba(44, 36, 24, 0.04); }
		.mock-stat-fill { background: rgba(176, 90, 56, 0.35); }
		.mock-container-row { background: rgba(44, 36, 24, 0.02); }
		.mock-container-name { background: rgba(44, 36, 24, 0.08); }
		.mock-container-tag { background: rgba(44, 36, 24, 0.06); }
		.preview-caption {
			color: rgba(44, 36, 24, 0.45);
			border-top-color: rgba(44, 36, 24, 0.06);
		}
	}
</style>
