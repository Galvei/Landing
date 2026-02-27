<script lang="ts">
	import { onMount } from 'svelte';

	const FULL_TEXT = 'Currently in development...';
	let displayedText = $state('');
	let showCursor = $state(true);
	let submitted = $state(false);
	let email = $state('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (email) {
			submitted = true;
		}
	}

	onMount(() => {
		let i = 0;
		const typeInterval = setInterval(() => {
			if (i <= FULL_TEXT.length) {
				displayedText = FULL_TEXT.slice(0, i);
				i++;
			} else {
				clearInterval(typeInterval);
				setTimeout(() => { showCursor = false; }, 3000);
			}
		}, 35);

		const blinkInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		return () => {
			clearInterval(typeInterval);
			clearInterval(blinkInterval);
		};
	});
</script>

<section class="hero-section" id="top">
	<div class="hero">
		<div class="deco-line"></div>

		<h1 class="title">
			Your server. Your apps.<br />
			<span class="accent">No terminal required.</span>
		</h1>

		<p class="subtitle">
			{displayedText}<span class="type-cursor" class:blink={showCursor}>_</span>
		</p>

		<p class="description">
			Galvei turns any Linux machine into a personal cloud. Deploy apps, manage everything from a dashboard, no command line needed.
		</p>

		<div class="hero-waitlist">
			{#if submitted}
				<div class="waitlist-success">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
						<path d="M20 6L9 17l-5-5"/>
					</svg>
					<span>You're on the list! We'll be in touch.</span>
				</div>
			{:else}
				<p class="hero-waitlist-label">Get notified when we launch</p>
				<form class="waitlist-form" onsubmit={handleSubmit}>
					<input
						type="email"
						class="waitlist-input"
						placeholder="you@email.com"
						required
						bind:value={email}
					/>
					<button type="submit" class="waitlist-btn">Get Early Access</button>
				</form>
				<p class="waitlist-note">No spam. Unsubscribe anytime.</p>
			{/if}
		</div>

		<div class="cta-group">
			<a href="https://discord.gg/galvei" class="btn btn-discord" target="_blank" rel="noopener">
				<svg class="discord-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
					<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
				</svg>
				<span class="btn-text">Join Discord</span>
			</a>
			<a href="#support" class="btn btn-donate">
				<svg class="donate-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
					<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
				</svg>
				<span class="btn-text">Support</span>
			</a>
		</div>

		<div class="status-bar">
			<span class="status-dot"></span>
			<span class="status-text">In development</span>
		</div>

		<a href="#social-proof" class="scroll-hint" aria-label="Scroll down">
			<svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
				<path d="M12 5v14M5 12l7 7 7-7" />
			</svg>
		</a>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding-top: 60px;
	}

	.hero {
		text-align: center;
		padding: 4rem 2rem;
		max-width: 720px;
		background: none;
	}

	.deco-line {
		width: 40px;
		height: 2px;
		margin: 0 auto 2rem;
		background: #c4724e;
		border-radius: 1px;
		opacity: 0.6;
	}

	.title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(2.2rem, 5vw, 3.5rem);
		font-weight: 400;
		letter-spacing: 0.01em;
		margin: 0 0 1rem;
		line-height: 1.2;
		color: rgba(232, 224, 212, 0.9);
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.accent {
		color: #c4724e;
	}

	@keyframes fade-up {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.subtitle {
		font-family: 'Inter', sans-serif;
		font-size: clamp(0.85rem, 2vw, 1.1rem);
		font-weight: 400;
		color: rgba(232, 224, 212, 0.7);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin: 0 0 2rem;
		min-height: 1.8em;
	}

	.type-cursor {
		color: #c4724e;
		opacity: 0;
	}

	.type-cursor.blink {
		animation: cursor-blink 1.06s step-end infinite;
	}

	@keyframes cursor-blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.description {
		font-family: 'Inter', sans-serif;
		font-size: clamp(0.9rem, 1.5vw, 1.05rem);
		font-weight: 300;
		color: rgba(232, 224, 212, 0.55);
		line-height: 1.9;
		max-width: 520px;
		margin: 0 auto 2.5rem;
		letter-spacing: 0.01em;
	}

	.hero-waitlist {
		margin-bottom: 2.5rem;
		padding: 1.8rem 2rem;
		border: 1px solid rgba(196, 114, 78, 0.2);
		border-radius: 12px;
		background: rgba(196, 114, 78, 0.04);
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
	}

	.hero-waitlist-label {
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
		font-weight: 400;
		letter-spacing: 0.03em;
		color: rgba(232, 224, 212, 0.85);
		margin: 0 0 1rem;
	}

	.waitlist-form {
		display: flex;
		gap: 0.6rem;
		max-width: 420px;
		margin: 0 auto;
	}

	@media (max-width: 480px) {
		.waitlist-form { flex-direction: column; }
	}

	.waitlist-input {
		flex: 1;
		padding: 0.85rem 1.1rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.88rem;
		background: rgba(232, 224, 212, 0.06);
		border: 1px solid rgba(232, 224, 212, 0.12);
		border-radius: 8px;
		color: #e8e0d4;
		outline: none;
		transition: all 0.3s ease;
	}

	.waitlist-input::placeholder {
		color: rgba(232, 224, 212, 0.3);
	}

	.waitlist-input:focus {
		border-color: rgba(196, 114, 78, 0.5);
		background: rgba(232, 224, 212, 0.08);
		box-shadow: 0 0 12px rgba(196, 114, 78, 0.08);
	}

	.waitlist-btn {
		padding: 0.85rem 1.6rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: #c4724e;
		color: #1a1712;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.waitlist-btn:hover {
		background: #d4845e;
		box-shadow: 0 0 16px rgba(196, 114, 78, 0.2);
	}

	.waitlist-note {
		font-size: 0.65rem;
		color: rgba(232, 224, 212, 0.2);
		margin: 1rem 0 0;
	}

	.waitlist-success {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		color: #7a8a6e;
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		font-weight: 400;
		padding: 0.5rem 0;
	}

	.cta-group {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
	}

	.btn {
		position: relative;
		display: inline-block;
		padding: 0.75rem 2rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.3s ease;
		overflow: hidden;
	}

	.btn-discord {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		background: #5865F2;
		color: #fff;
		font-weight: 500;
		border-radius: 8px;
		padding: 0.85rem 2.2rem;
		font-size: 0.9rem;
	}

	.btn-discord:hover {
		background: #4752C4;
		box-shadow: 0 4px 20px rgba(88, 101, 242, 0.25);
		transform: translateY(-2px);
	}

	.discord-icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	.btn-donate {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		background: rgba(196, 114, 78, 0.12);
		border: 1px solid rgba(196, 114, 78, 0.3);
		color: #c4724e;
		font-weight: 500;
		border-radius: 8px;
		padding: 0.85rem 2.2rem;
		font-size: 0.9rem;
	}

	.btn-donate:hover {
		background: rgba(196, 114, 78, 0.2);
		border-color: rgba(196, 114, 78, 0.5);
		color: #d4845e;
		box-shadow: 0 4px 20px rgba(196, 114, 78, 0.12);
		transform: translateY(-2px);
	}

	.donate-icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
	}

	.status-bar {
		margin-top: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
	}

	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #7a8a6e;
		animation: dot-pulse 2s ease-in-out infinite;
	}

	@keyframes dot-pulse {
		0%, 100% { box-shadow: 0 0 4px #7a8a6e; opacity: 0.8; }
		50% { box-shadow: 0 0 8px #7a8a6e; opacity: 1; }
	}

	.status-text {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: rgba(232, 224, 212, 0.35);
	}

	.scroll-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		margin-top: 2.5rem;
		text-decoration: none;
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
		transition: all 0.3s ease;
	}

	.scroll-arrow {
		color: #c4724e;
		width: 24px;
		height: 24px;
		animation: bounce 2s ease-in-out infinite;
		opacity: 0.5;
	}

	.scroll-hint:hover .scroll-arrow {
		color: #d4845e;
		opacity: 0.8;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(8px); }
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.title { color: #2c2418; }
		.accent { color: #993d1c; }
		.subtitle { color: rgba(44, 36, 24, 0.85); }
		.description { color: rgba(44, 36, 24, 0.75); }
		.type-cursor { color: #993d1c; }
		.deco-line { background: #993d1c; }

		.btn-donate {
			background: rgba(176, 90, 56, 0.1);
			border-color: rgba(176, 90, 56, 0.3);
			color: #8a3a1c;
		}
		.btn-donate:hover {
			background: rgba(176, 90, 56, 0.18);
			border-color: rgba(176, 90, 56, 0.45);
			color: #6a2a10;
			box-shadow: 0 4px 20px rgba(176, 90, 56, 0.12);
		}

		.status-dot { background: #4a6038; box-shadow: 0 0 4px #4a6038; }
		.status-text { color: rgba(44, 36, 24, 0.6); }

		.scroll-arrow { color: #8a3a1c; }
		.scroll-hint:hover .scroll-arrow { color: #6a2a10; }

		.hero-waitlist {
			background: rgba(44, 36, 24, 0.03);
			border-color: rgba(44, 36, 24, 0.12);
		}
		.hero-waitlist-label { color: #2c2418; }
		.waitlist-input {
			background: #fff;
			border-color: rgba(44, 36, 24, 0.18);
			color: #2c2418;
		}
		.waitlist-input::placeholder { color: rgba(44, 36, 24, 0.4); }
		.waitlist-input:focus {
			border-color: #993d1c;
			box-shadow: 0 0 10px rgba(176, 90, 56, 0.12);
		}
		.waitlist-btn { background: #993d1c; color: #fff; }
		.waitlist-btn:hover {
			background: #7a3015;
			box-shadow: 0 0 12px rgba(176, 90, 56, 0.2);
		}
		.waitlist-note { color: rgba(44, 36, 24, 0.5); }
		.waitlist-success { color: #4a6038; }
	}
</style>
