<script lang="ts">
	import { onMount } from 'svelte';
	let visible = $state(false);
	let openIndex = $state(-1);
	let el: HTMLElement;

	function toggle(i: number) {
		openIndex = openIndex === i ? -1 : i;
	}

	const items = [
		{
			q: 'What is self-hosting?',
			a: 'Running applications on your own hardware instead of paying for cloud services. You own the server, you own the data. Galvei makes this as easy as installing an app on your phone.',
		},
		{
			q: 'What hardware do I need?',
			a: 'Any Linux machine with at least 2GB of RAM. A Raspberry Pi 4, an old laptop, a cheap VPS. Anything works.',
		},
		{
			q: 'Do I need to know Docker or Linux?',
			a: 'No. Galvei handles all the technical setup. If you can fill out a form, you can deploy an app.',
		},
		{
			q: 'Is my data safe?',
			a: 'Your data never leaves your hardware. Galvei runs entirely on your machine. No cloud accounts, no third-party storage, no tracking.',
		},
		{
			q: 'What apps can I run?',
			a: 'Anything that runs in Docker. Galvei ships with a curated app store (Nextcloud, Jellyfin, Vaultwarden, and more), but you can deploy any Docker image.',
		},
		{
			q: 'How is this different from Portainer / CasaOS / Umbrel?',
			a: 'Galvei is an all-in-one platform, not just a container manager. It handles DNS, SSL, reverse proxy, monitoring, backups, and app deployment from a single dashboard. No extra tools needed.',
		},
		{
			q: 'Is Galvei free?',
			a: 'Galvei is source-available under BSL 1.1. Personal use will always be free. Commercial licensing details will come later.',
		},
		{
			q: 'When will Galvei be ready?',
			a: "We're in active development (Phase 00). Join the waitlist to get notified when early access opens.",
		},
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.1 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section class="faq" id="faq" bind:this={el} class:visible>
	<h2 class="section-title">Questions?</h2>
	<p class="section-sub">Everything you need to know about Galvei and self-hosting.</p>

	<div class="faq-list">
		{#each items as item, i}
			<div class="faq-item" class:open={openIndex === i} style="transition-delay: {i * 0.05}s">
				<button
					class="faq-question"
					onclick={() => toggle(i)}
					aria-expanded={openIndex === i}
				>
					<span class="faq-q-text">{item.q}</span>
					<span class="faq-chevron">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
							<path d="M6 9l6 6 6-6"/>
						</svg>
					</span>
				</button>
				{#if openIndex === i}
					<div class="faq-answer">
						<p>{item.a}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.faq {
		position: relative;
		z-index: 3;
		max-width: 720px;
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
		margin: 0 0 3.5rem;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
	}

	.faq-item {
		border-bottom: 1px solid rgba(232, 224, 212, 0.06);
		opacity: 0;
		transform: translateY(10px);
		transition: opacity 0.5s ease, transform 0.5s ease;
	}

	.visible .faq-item {
		opacity: 1;
		transform: translateY(0);
	}

	.faq-question {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.2rem 0;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.faq-q-text {
		font-family: 'Inter', sans-serif;
		font-size: 0.92rem;
		font-weight: 500;
		color: rgba(232, 224, 212, 0.85);
		letter-spacing: 0.01em;
	}

	.faq-chevron {
		color: rgba(232, 224, 212, 0.3);
		transition: transform 0.25s ease;
		flex-shrink: 0;
		display: flex;
	}

	.faq-item.open .faq-chevron {
		transform: rotate(180deg);
		color: #c4724e;
	}

	.faq-answer {
		overflow: hidden;
		animation: slide-down 0.25s ease;
	}

	@keyframes slide-down {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 200px;
		}
	}

	.faq-answer p {
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		color: rgba(232, 224, 212, 0.5);
		line-height: 1.7;
		margin: 0;
		padding: 0 0 1.2rem;
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.section-title { color: #2c2418; }
		.section-sub { color: rgba(44, 36, 24, 0.65); }
		.faq-item { border-bottom-color: rgba(44, 36, 24, 0.08); }
		.faq-q-text { color: #2c2418; }
		.faq-chevron { color: rgba(44, 36, 24, 0.3); }
		.faq-item.open .faq-chevron { color: #993d1c; }
		.faq-answer p { color: rgba(44, 36, 24, 0.65); }
	}
</style>
