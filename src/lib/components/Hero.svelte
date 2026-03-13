<script lang="ts">
	import { onMount } from 'svelte';

	let submitted = $state(false);
	let email = $state('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (email) submitted = true;
	}
</script>

<section class="hero-section" id="top">
	<div class="hero">
		<div class="hero-badge">
			<span class="badge-dot"></span>
			Early Access — Join the Waitlist
		</div>

		<h1 class="title">
			Your server.<br />Your apps.<br />
			<span class="accent">No terminal required.</span>
		</h1>

		<p class="description">
			Galvei turns any Linux machine into a personal cloud. Deploy apps, manage containers, set up SSL — all from a clean dashboard. No command line needed.
		</p>

		{#if submitted}
			<div class="hero-success">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20">
					<path d="M20 6L9 17l-5-5"/>
				</svg>
				You're on the list. We'll be in touch.
			</div>
		{:else}
			<form class="hero-form" onsubmit={handleSubmit}>
				<input
					type="email"
					class="hero-input"
					placeholder="your@email.com"
					required
					bind:value={email}
				/>
				<button type="submit" class="hero-btn">Get Early Access</button>
			</form>
			<p class="hero-note">No spam. Unsubscribe anytime.</p>
		{/if}

		<div class="hero-links">
			<a href="https://discord.gg/galvei" class="hero-link" target="_blank" rel="noopener">
				<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
					<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
				</svg>
				Join Discord
			</a>
			<span class="hero-link-divider">·</span>
			<a href="#roadmap" class="hero-link">View Roadmap</a>
			<span class="hero-link-divider">·</span>
			<a href="#faq" class="hero-link">FAQ</a>
		</div>
	</div>
</section>

<style>
	.hero-section {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding-top: 60px;
	}

	.hero {
		text-align: center;
		padding: 5rem 2rem 4rem;
		max-width: 780px;
		width: 100%;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #FF6B35;
		border: 2px solid #FF6B35;
		padding: 0.35rem 0.9rem;
		margin-bottom: 2.5rem;
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
	}

	.badge-dot {
		width: 6px;
		height: 6px;
		background: #FF6B35;
		flex-shrink: 0;
		animation: pulse-dot 2s ease-in-out infinite;
	}

	@keyframes pulse-dot {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.3; }
	}

	.title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(3rem, 7vw, 5.5rem);
		font-weight: 900;
		letter-spacing: -0.03em;
		margin: 0 0 1.5rem;
		line-height: 1.05;
		color: #F0EAD6;
		animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
	}

	.accent {
		color: #FF6B35;
		text-decoration: underline wavy #FFD600;
		text-underline-offset: 6px;
	}

	.description {
		font-family: 'Inter', sans-serif;
		font-size: clamp(1rem, 1.8vw, 1.2rem);
		font-weight: 400;
		color: rgba(240, 234, 214, 0.6);
		line-height: 1.75;
		max-width: 560px;
		margin: 0 auto 3rem;
		animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
	}

	.hero-form {
		display: flex;
		gap: 0;
		max-width: 480px;
		margin: 0 auto;
		animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
	}

	.hero-input {
		flex: 1;
		padding: 0.95rem 1.2rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		background: #1a1712;
		border: 2px solid rgba(240, 234, 214, 0.5);
		border-right: none;
		color: #F0EAD6;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.hero-input::placeholder {
		color: rgba(240, 234, 214, 0.25);
	}

	.hero-input:focus {
		border-color: #FF6B35;
	}

	.hero-btn {
		padding: 0.95rem 1.8rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: #FF6B35;
		color: #111008;
		border: 2px solid #FF6B35;
		cursor: pointer;
		transition: background 0.2s ease;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.hero-btn:hover {
		background: #ff8255;
	}

	.hero-note {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		color: rgba(240, 234, 214, 0.25);
		margin: 0.8rem 0 0;
		animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
	}

	.hero-success {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		color: #FF6B35;
		border: 2px solid #FF6B35;
		padding: 0.85rem 1.5rem;
		animation: fade-up 0.5s ease both;
	}

	.hero-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 3rem;
		animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
	}

	.hero-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.78rem;
		font-weight: 500;
		color: rgba(240, 234, 214, 0.4);
		text-decoration: none;
		letter-spacing: 0.02em;
		transition: color 0.2s ease;
	}

	.hero-link:hover {
		color: #F0EAD6;
	}

	.hero-link-divider {
		color: rgba(240, 234, 214, 0.2);
		font-size: 0.8rem;
	}

	@keyframes fade-up {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@media (max-width: 560px) {
		.hero-form { flex-direction: column; }
		.hero-input { border-right: 2px solid rgba(240, 234, 214, 0.5); }
		.hero-input:focus { border-color: #FF6B35; }
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-badge, .title, .description, .hero-form, .hero-note, .hero-links {
			animation: none;
		}
	}
</style>
