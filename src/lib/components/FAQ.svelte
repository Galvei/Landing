<script lang="ts">
	let openIndex = $state(-1);

	const faqs = [
		{
			q: 'What is self-hosting?',
			a: 'Running apps on your own hardware instead of relying on cloud services. Full control over your data.'
		},
		{
			q: 'What hardware do I need?',
			a: 'Any Linux machine with 2GB+ RAM. Raspberry Pi, old laptop, or a cheap VPS.'
		},
		{
			q: 'Do I need to know Docker?',
			a: 'No. Galvei handles everything. If you can use a browser, you can use Galvei.'
		},
		{
			q: 'What apps can I run?',
			a: 'Anything that runs in Docker — Jellyfin, Nextcloud, Vaultwarden, Immich, Home Assistant, Gitea, Plausible, and hundreds more. If it has a Docker image, Galvei can run it.'
		},
		{
			q: 'How is this different from CasaOS / Umbrel?',
			a: 'CasaOS and Umbrel are great starters but lack built-in networking, reverse proxy, and security. Galvei bundles containers, SSL, auth, monitoring, file management, and backups into one desktop — no need to bolt on Nginx Proxy Manager, Portainer, and Uptime Kuma separately. Plus, Galvei offers NIS2 compliance features for European businesses.'
		},
		{
			q: 'Is Galvei free?',
			a: 'Community Edition is free forever for personal use, running 2–3 versions behind. Pro adds priority updates, advanced features, and support with semi-annual or annual plans. Business plans include multi-user, SSO, and compliance features.'
		},
		{
			q: 'When will it be ready?',
			a: 'Building in the open. Join the waitlist or Discord for early access.'
		}
	];

	function toggle(i: number) {
		openIndex = openIndex === i ? -1 : i;
	}
</script>

<section id="faq">
	<div class="section-label reveal">FAQ</div>
	<h2 class="section-title reveal">Questions?</h2>

	<div class="faq-list reveal">
		{#each faqs as faq, i}
			<div class="faq-item" class:open={openIndex === i}>
				<button class="faq-q" onclick={() => toggle(i)}>
					{faq.q}
				</button>
				<div class="faq-a">
					<p>{faq.a}</p>
				</div>
			</div>
		{/each}
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

	.faq-list {
		margin-top: 64px;
		max-width: 740px;
		margin-left: auto;
		margin-right: auto;
	}

	.faq-item {
		border-top: 2px solid var(--border);
	}

	.faq-q {
		width: 100%;
		background: none;
		border: none;
		color: var(--fg);
		font-family: var(--sans);
		font-size: 17px;
		font-weight: 600;
		text-align: left;
		padding: 24px 52px 24px 0;
		cursor: pointer;
		position: relative;
		letter-spacing: -0.02em;
		transition: color 0.2s;
	}

	.faq-q:hover {
		color: var(--accent-dark);
	}

	.faq-q::after {
		content: '+';
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 28px;
		height: 28px;
		border: 2px solid var(--border);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		font-family: var(--mono);
		font-weight: 400;
		color: var(--fg-dim);
		transition: all 0.3s;
		line-height: 28px;
		text-align: center;
	}

	.faq-item.open .faq-q::after {
		background: var(--accent);
		border-color: var(--accent);
		color: #000;
		transform: translateY(-50%) rotate(45deg);
	}

	.faq-a {
		max-height: 0;
		overflow: hidden;
		transition:
			max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
			padding 0.5s;
	}

	.faq-item.open .faq-a {
		max-height: 200px;
		padding-bottom: 24px;
	}

	.faq-a p {
		font-size: 15px;
		color: var(--fg-muted);
		line-height: 1.75;
	}

	@media (max-width: 900px) {
		section { padding: 80px 20px; }
		.faq-q { font-size: 15px; padding-right: 44px; }
	}
</style>
