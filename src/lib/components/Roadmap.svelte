<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
	let el: HTMLElement;

	onMount(() => {
		let ticking = false;
		function updateTimeline() {
			const rect = el.getBoundingClientRect();
			const vh = window.innerHeight;
			const scrolledInto = Math.max(0, vh * 0.5 - rect.top);
			const progress = Math.min(1, scrolledInto / (el.offsetHeight * 0.75));
			el.style.setProperty('--timeline-progress', progress.toFixed(3));
			ticking = false;
		}
		function onScroll() {
			if (!ticking) { requestAnimationFrame(updateTimeline); ticking = true; }
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		updateTimeline();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<section class="roadmap" id="roadmap" bind:this={el} use:scrollReveal={{ threshold: 0.1, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above>
	<h2 class="section-title">Roadmap</h2>
	<p class="section-sub">From first deploy to full platform</p>
	<div class="timeline">
		<div class="phase phase--active">
			<div class="phase-dot">
				<span class="dot-ping"></span>
			</div>
			<div class="phase-card">
				<span class="phase-badge phase-badge--current">We are here</span>
				<div class="phase-top">
					<span class="phase-number">00</span>
					<span class="phase-time">Month 0-1</span>
				</div>
				<h3 class="phase-name">Startup</h3>
				<p class="phase-desc">Idea validation, tech stack decisions, landing page, community setup.</p>
				<div class="tags">
					<span class="tag">Research</span>
					<span class="tag">Tech Stack</span>
					<span class="tag">Landing Page</span>
					<span class="tag">Discord</span>
					<span class="tag">Roadmap</span>
				</div>
				<div class="phase-progress">
					<div class="phase-progress-bar"></div>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot">
			</div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">01</span>
					<span class="phase-time">Month 1-2</span>
				</div>
				<h3 class="phase-name">Foundation</h3>
				<p class="phase-desc">Project skeleton, Docker integration, first container deploy.</p>
				<div class="tags">
					<span class="tag">Go Backend</span>
					<span class="tag">Svelte Frontend</span>
					<span class="tag">Docker API</span>
					<span class="tag">SQLite</span>
					<span class="tag">REST API Scaffold</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">02</span>
					<span class="phase-time">Month 2-3</span>
				</div>
				<h3 class="phase-name">Core Dashboard</h3>
				<p class="phase-desc">System overview, container management UI, basic auth.</p>
				<div class="tags">
					<span class="tag">Dashboard</span>
					<span class="tag">Container Lifecycle</span>
					<span class="tag">Logs Viewer</span>
					<span class="tag">Login & Auth</span>
					<span class="tag">System Stats</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">03</span>
					<span class="phase-time">Month 3-4</span>
				</div>
				<h3 class="phase-name">App Store & Files</h3>
				<p class="phase-desc">One-click app installs, built-in file manager, system monitoring.</p>
				<div class="tags">
					<span class="tag">App Store</span>
					<span class="tag">One-Click Deploy</span>
					<span class="tag">File Manager</span>
					<span class="tag">CPU / RAM / Disk</span>
					<span class="tag">Network Monitor</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">04</span>
					<span class="phase-time">Month 5-6</span>
				</div>
				<h3 class="phase-name">Networking & Security</h3>
				<p class="phase-desc">Reverse proxy, auto SSL, permissions, first public release.</p>
				<div class="tags">
					<span class="tag">Reverse Proxy</span>
					<span class="tag">SSL Certs</span>
					<span class="tag">Permissions</span>
					<span class="tag">Firewall Rules</span>
					<span class="tag">v1.0 Release</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">05</span>
					<span class="phase-time">Month 6-8</span>
				</div>
				<h3 class="phase-name">Multi-User & Backups</h3>
				<p class="phase-desc">Team access, scheduled backups, resource quotas.</p>
				<div class="tags">
					<span class="tag">Multi-User RBAC</span>
					<span class="tag">Backup & Restore</span>
					<span class="tag">Scheduled Jobs</span>
					<span class="tag">Resource Quotas</span>
					<span class="tag">Alerts</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">06</span>
					<span class="phase-time">Month 8-10</span>
				</div>
				<h3 class="phase-name">API & Mobile</h3>
				<p class="phase-desc">Public REST API, mobile-responsive UI, third-party integrations.</p>
				<div class="tags">
					<span class="tag">Public API</span>
					<span class="tag">API Docs</span>
					<span class="tag">Mobile UI</span>
					<span class="tag">Webhooks</span>
					<span class="tag">Integrations</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">07</span>
					<span class="phase-time">Month 10-14</span>
				</div>
				<h3 class="phase-name">Enterprise & Compliance</h3>
				<p class="phase-desc">Multi-tenancy, fleet management, audit logs, SSO.</p>
				<div class="tags">
					<span class="tag">Multi-Tenancy</span>
					<span class="tag">Fleet Management</span>
					<span class="tag">Audit Logs</span>
					<span class="tag">Compliance</span>
					<span class="tag">SSO / LDAP</span>
					<span class="tag">Disaster Recovery</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">08</span>
					<span class="phase-time">Month 14-18</span>
				</div>
				<h3 class="phase-name">Analytics & Optimization</h3>
				<p class="phase-desc">Advanced monitoring, performance insights, smart resource allocation.</p>
				<div class="tags">
					<span class="tag">Advanced Analytics</span>
					<span class="tag">Performance Insights</span>
					<span class="tag">Auto-Scaling</span>
					<span class="tag">Cost Tracking</span>
					<span class="tag">Health Checks</span>
				</div>
			</div>
		</div>

		<div class="phase">
			<div class="phase-dot"></div>
			<div class="phase-card">
				<div class="phase-top">
					<span class="phase-number">09</span>
					<span class="phase-time">Month 18+</span>
				</div>
				<h3 class="phase-name">Platform Ecosystem</h3>
				<p class="phase-desc">Plugins, marketplace, Kubernetes, edge. The full vision.</p>
				<div class="tags">
					<span class="tag">Plugin System</span>
					<span class="tag">Marketplace</span>
					<span class="tag">Kubernetes</span>
					<span class="tag">Edge Computing</span>
					<span class="tag">AI Optimization</span>
					<span class="tag">White-Label</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.roadmap {
		position: relative;
		z-index: 3;
		max-width: 620px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}

	.section-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 900;
		letter-spacing: -0.01em;
		text-align: center;
		color: #F0EAD6;
		margin: 0 0 0.6rem;
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

	.timeline {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0;
		padding-left: 32px;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 7px;
		top: 8px;
		bottom: 8px;
		width: 4px;
		background: linear-gradient(180deg, #FF6B35 0%, rgba(255, 107, 53, 0.4) 30%, rgba(255, 107, 53, 0.1) 70%, rgba(255, 107, 53, 0.02) 100%);
		transform-origin: top;
		transform: scaleY(var(--timeline-progress, 0));
	}

	.phase {
		position: relative;
		padding-bottom: 2.5rem;
		opacity: 0;
		transform: translateX(-20px);
		filter: blur(4px);
		transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
	}

	.visible .phase {
		opacity: 1;
		transform: translateX(0);
		filter: blur(0);
	}

	/* Stagger each phase */
	.visible .phase:nth-child(1) { transition-delay: 0s; }
	.visible .phase:nth-child(2) { transition-delay: 0.06s; }
	.visible .phase:nth-child(3) { transition-delay: 0.12s; }
	.visible .phase:nth-child(4) { transition-delay: 0.18s; }
	.visible .phase:nth-child(5) { transition-delay: 0.24s; }
	.visible .phase:nth-child(6) { transition-delay: 0.3s; }
	.visible .phase:nth-child(7) { transition-delay: 0.36s; }
	.visible .phase:nth-child(8) { transition-delay: 0.42s; }
	.visible .phase:nth-child(9) { transition-delay: 0.48s; }
	.visible .phase:nth-child(10) { transition-delay: 0.54s; }

	.phase:last-child { padding-bottom: 0; }

	.phase-dot {
		position: absolute;
		left: -32px;
		top: 8px;
		width: 14px;
		height: 14px;
		border-radius: 0;
		background: #111008;
		border: 2px solid rgba(240, 234, 214, 0.25);
		transition: all 0.3s ease;
		z-index: 1;
	}

	.phase--active .phase-dot {
		border-color: #FF6B35;
		background: #FF6B35;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dot-ping {
		position: absolute;
		width: 14px;
		height: 14px;
		border-radius: 0;
		background: #FF6B35;
		animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
	}

	@keyframes ping {
		0% { transform: scale(1); opacity: 0.8; }
		75%, 100% { transform: scale(2.5); opacity: 0; }
	}

	.phase-badge {
		display: inline-block;
		font-family: 'Inter', sans-serif;
		font-size: 0.55rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 0.25rem 0.6rem;
		border-radius: 4px;
		margin-bottom: 0.6rem;
	}

	.phase-badge--current {
		background: #FF6B35;
		color: #111008;
		border: none;
	}

.phase-progress {
		margin-top: 1rem;
		height: 3px;
		background: rgba(232, 224, 212, 0.06);
		border-radius: 3px;
		overflow: hidden;
	}

	.phase-progress-bar {
		height: 100%;
		width: 15%;
		background: linear-gradient(90deg, #c4724e, #d4845e);
		border-radius: 3px;
		animation: progress-shimmer 3s ease-in-out infinite;
	}

	@keyframes progress-shimmer {
		0% { opacity: 0.7; }
		50% { opacity: 1; }
		100% { opacity: 0.7; }
	}

	.phase:hover .phase-dot {
		border-color: #FF6B35;
	}

	.phase-card {
		background: transparent;
		border: 2px solid rgba(240, 234, 214, 0.2);
		border-radius: 0;
		padding: 1.5rem;
		transition: border-color 0.3s ease, box-shadow 0.3s ease;
	}

	.phase:hover .phase-card {
		border-color: #FF6B35;
		box-shadow: 4px 4px 0 #FF6B35;
	}

	.phase--active .phase-card {
		border-color: #FF6B35;
		box-shadow: 4px 4px 0 #FFD600;
	}

	.phase-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.phase-number {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.1em;
		color: #c4724e;
	}

	.phase-time {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		color: rgba(232, 224, 212, 0.25);
		letter-spacing: 0.06em;
	}

	.phase-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.2rem;
		font-weight: 700;
		color: #F0EAD6;
		margin: 0 0 0.5rem;
	}

	.phase-desc {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		color: rgba(232, 224, 212, 0.45);
		line-height: 1.7;
		margin: 0 0 1.2rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 0.8rem;
	}

	.tag {
		font-family: 'Inter', sans-serif;
		padding: 0.3rem 0.65rem;
		font-size: 0.62rem;
		letter-spacing: 0.04em;
		border-radius: 0;
		background: transparent;
		color: rgba(240, 234, 214, 0.55);
		border: 1px solid rgba(240, 234, 214, 0.3);
		transition: all 0.25s ease;
	}

	.phase:hover .tag {
		color: rgba(240, 234, 214, 0.8);
	}

	.phase--active .tag {
		border-color: rgba(255, 107, 53, 0.4);
		color: rgba(240, 234, 214, 0.8);
	}

	.above .section-title { clip-path: inset(0 0 0 100%); }
	.above .section-sub { opacity: 0; transform: translateY(-8px); filter: blur(4px); }
	.above .phase { opacity: 0; transform: translateX(20px); filter: blur(4px); }

	@media (prefers-reduced-motion: reduce) {
		.section-title { clip-path: none; transition: none; }
		.section-sub, .phase { opacity: 1; transform: none; filter: none; transition: none; }
		.timeline::before { transform: scaleY(1); }
	}

</style>
