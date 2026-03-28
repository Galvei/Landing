<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
	let submitted = $state(false);
	let loading = $state(false);
	let errorMsg = $state('');
	let email = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email) return;
		loading = true;
		errorMsg = '';
		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});
			const data = await res.json();
			if (data.success) {
				submitted = true;
			} else {
				errorMsg = data.error ?? 'Something went wrong. Try again.';
			}
		} catch {
			errorMsg = 'Network error. Try again.';
		} finally {
			loading = false;
		}
	}
</script>

<section class="waitlist" id="waitlist" use:scrollReveal={{ threshold: 0.2, onchange: (v, a) => { visible = v; above = a; } }} class:visible class:above>
	<div class="waitlist-inner">
		<h2 class="waitlist-title">Be the first to try Galvei</h2>
		<p class="waitlist-subtitle">Join the waitlist for early access, development updates, and a voice in shaping the product.</p>

		{#if submitted}
			<div class="waitlist-success">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28">
					<path d="M20 6L9 17l-5-5"/>
				</svg>
				<span>You're on the list! We'll be in touch.</span>
			</div>
		{:else}
			<form class="waitlist-form" onsubmit={handleSubmit}>
				<input
					type="email"
					class="waitlist-input"
					placeholder="you@email.com"
					required
					disabled={loading}
					bind:value={email}
				/>
				<button type="submit" class="waitlist-btn" disabled={loading}>
					{loading ? '...' : 'Get Early Access'}
				</button>
			</form>
			{#if errorMsg}
				<p class="waitlist-error">{errorMsg}</p>
			{/if}
		{/if}

		<ul class="waitlist-benefits">
			<li>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
					<path d="M20 6L9 17l-5-5"/>
				</svg>
				Early access before public launch
			</li>
			<li>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
					<path d="M20 6L9 17l-5-5"/>
				</svg>
				Direct input on features and priorities
			</li>
			<li>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
					<path d="M20 6L9 17l-5-5"/>
				</svg>
				Development updates (no spam, ever)
			</li>
			<li>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
					<path d="M20 6L9 17l-5-5"/>
				</svg>
				Free tier guaranteed for early supporters
			</li>
		</ul>

		<p class="waitlist-privacy">No spam. Unsubscribe anytime. Your email stays with us.</p>
	</div>
</section>

<style>
	.waitlist {
		position: relative;
		z-index: 3;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 2rem;
		background: #1a1712;
		border-top: 2px solid rgba(240, 234, 214, 0.2);
		border-bottom: 2px solid rgba(240, 234, 214, 0.2);
		scroll-margin-top: 10vh;
	}

	.waitlist-inner {
		max-width: 560px;
		margin: 0 auto;
		text-align: center;
		opacity: 0;
		transform: translateY(20px) scale(0.94);
		transition: opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.visible .waitlist-inner {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	.waitlist-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 900;
		color: #FF6B35;
		margin: 0 0 0.8rem;
		letter-spacing: -0.01em;
		clip-path: inset(0 100% 0 0);
		transition: clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
	}

	.visible .waitlist-title {
		clip-path: inset(0 0 0 0);
	}

	.waitlist-subtitle {
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
		color: rgba(232, 224, 212, 0.45);
		line-height: 1.7;
		margin: 0 0 3rem;
	}

	.waitlist-form {
		display: flex;
		gap: 0;
		max-width: 460px;
		margin: 0 auto 2rem;
	}

	@media (max-width: 480px) {
		.waitlist-form { flex-direction: column; }
		.waitlist-input { border-right: 2px solid rgba(240, 234, 214, 0.5); }
		.waitlist-input:focus { border-color: #FF6B35; }
	}

	.waitlist-input {
		flex: 1;
		padding: 0.9rem 1.2rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
		background: #111008;
		border: 2px solid rgba(240, 234, 214, 0.5);
		border-right: none;
		border-radius: 0;
		color: #F0EAD6;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.waitlist-input::placeholder {
		color: rgba(240, 234, 214, 0.25);
	}

	.waitlist-input:focus {
		border-color: #FF6B35;
	}

	.waitlist-btn {
		padding: 0.9rem 1.8rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.88rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: #FF6B35;
		color: #111008;
		border: 2px solid #FF6B35;
		border-radius: 0;
		box-shadow: 4px 4px 0 #FFD600;
		cursor: pointer;
		transition: box-shadow 0.2s ease, transform 0.2s ease;
		white-space: nowrap;
	}

	.waitlist-btn:hover {
		box-shadow: 1px 1px 0 #FFD600;
		transform: translate(3px, 3px);
	}

	.waitlist-success {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		color: #7a8a6e;
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 2rem;
		padding: 1rem 0;
	}

	.waitlist-benefits {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		text-align: left;
		max-width: 320px;
		margin-left: auto;
		margin-right: auto;
	}

	.waitlist-benefits li {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		color: rgba(232, 224, 212, 0.6);
	}

	.waitlist-benefits svg {
		color: #FFD600;
		flex-shrink: 0;
	}

	.waitlist-error {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		color: #ff4444;
		margin: -1rem 0 1rem;
	}

	.waitlist-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.waitlist-privacy {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		color: rgba(232, 224, 212, 0.25);
		margin: 0;
	}

	.above .waitlist-inner { opacity: 0; transform: translateY(-20px) scale(0.94); }
	.above .waitlist-title { clip-path: inset(0 0 0 100%); }

</style>
