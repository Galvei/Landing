<script lang="ts">
	import { scrollReveal } from '$lib/utils/scrollReveal';
	let visible = $state(false);
	let above = $state(false);
	let submitted = $state(false);
	let email = $state('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (email) {
			submitted = true;
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
					bind:value={email}
				/>
				<button type="submit" class="waitlist-btn">Get Early Access</button>
			</form>
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
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		background: rgba(196, 114, 78, 0.04);
		border-top: 1px solid rgba(196, 114, 78, 0.06);
		border-bottom: 1px solid rgba(196, 114, 78, 0.06);
		scroll-margin-top: 10vh;
	}

	.waitlist-inner {
		max-width: 560px;
		margin: 0 auto;
		text-align: center;
		opacity: 0;
		transform: translateY(20px) scale(0.94);
		filter: blur(8px);
		transition: opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
	}

	.visible .waitlist-inner {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: blur(0);
	}

	.waitlist-title {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 400;
		color: #c4724e;
		margin: 0 0 0.8rem;
		letter-spacing: 0.02em;
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
		gap: 0.6rem;
		max-width: 420px;
		margin: 0 auto 2rem;
	}

	@media (max-width: 480px) {
		.waitlist-form { flex-direction: column; }
	}

	.waitlist-input {
		flex: 1;
		padding: 0.9rem 1.2rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
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
		padding: 0.9rem 1.8rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.88rem;
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
		box-shadow: 0 0 16px rgba(196, 114, 78, 0.25), 0 0 50px rgba(196, 114, 78, 0.1);
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
		color: #c4724e;
		flex-shrink: 0;
	}

	.waitlist-privacy {
		font-family: 'Inter', sans-serif;
		font-size: 0.65rem;
		color: rgba(232, 224, 212, 0.25);
		margin: 0;
	}

	.above .waitlist-inner { opacity: 0; transform: translateY(-20px) scale(0.94); filter: blur(8px); }
	.above .waitlist-title { clip-path: inset(0 0 0 100%); }

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.waitlist {
			background: rgba(176, 90, 56, 0.04);
			border-color: rgba(176, 90, 56, 0.08);
		}
		.waitlist-title { color: #993d1c; }
		.waitlist-subtitle { color: rgba(44, 36, 24, 0.65); }
		.waitlist-input {
			background: #fff;
			border-color: rgba(44, 36, 24, 0.15);
			color: #2c2418;
		}
		.waitlist-input::placeholder { color: rgba(44, 36, 24, 0.4); }
		.waitlist-input:focus {
			border-color: #993d1c;
			box-shadow: 0 0 10px rgba(176, 90, 56, 0.1);
		}
		.waitlist-btn { background: #993d1c; color: #fff; }
		.waitlist-btn:hover { background: #7a3015; }
		.waitlist-success { color: #4a6038; }
		.waitlist-benefits li { color: rgba(44, 36, 24, 0.7); }
		.waitlist-benefits svg { color: #993d1c; }
		.waitlist-privacy { color: rgba(44, 36, 24, 0.45); }
	}
</style>
