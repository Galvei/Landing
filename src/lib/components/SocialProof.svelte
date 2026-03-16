<!-- Trust Bar -->
<div class="trust-bar">
	<div class="trust-item">
		<span class="trust-icon">⚡</span>
		Powered by Docker
	</div>
	<div class="trust-item">
		<span class="trust-icon">🔒</span>
		Secure by Default
	</div>
	<div class="trust-item">
		<span class="trust-icon">🇪🇺</span>
		Made in Europe
	</div>
	<div class="trust-item">
		<span class="trust-icon">♾️</span>
		Free Personal Use
	</div>
</div>

<!-- Marquee -->
<div class="marquee-wrap" aria-hidden="true">
	<div class="marquee-track">
		<span>Powered by Docker</span>
		<span>Secure by Default</span>
		<span>Made in Europe</span>
		<span>One curl to deploy</span>
		<span>No vendor lock-in</span>
		<span>Free Community Edition</span>
		<span>Community driven</span>
		<span>NIS2 ready</span>
		<span>Powered by Docker</span>
		<span>Secure by Default</span>
		<span>Made in Europe</span>
		<span>One curl to deploy</span>
		<span>No vendor lock-in</span>
		<span>Free Community Edition</span>
		<span>Community driven</span>
		<span>NIS2 ready</span>
	</div>
</div>

<style>
	/* Trust Bar */
	.trust-bar {
		padding: 32px 48px;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: center;
		gap: 56px;
		flex-wrap: wrap;
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		font-weight: 600;
		color: var(--fg-muted);
	}

	.trust-icon {
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: var(--accent);
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 800;
	}

	/* Marquee */
	.marquee-wrap {
		padding: 24px 0;
		border-top: 2px solid var(--border);
		border-bottom: 2px solid var(--border);
		overflow: hidden;
		position: relative;
	}

	.marquee-wrap::before,
	.marquee-wrap::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 120px;
		z-index: 2;
		pointer-events: none;
	}

	.marquee-wrap::before {
		left: 0;
		background: linear-gradient(90deg, var(--bg), transparent);
	}

	.marquee-wrap::after {
		right: 0;
		background: linear-gradient(-90deg, var(--bg), transparent);
	}

	.marquee-track {
		display: flex;
		gap: 48px;
		animation: marquee 30s linear infinite;
		width: max-content;
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	.marquee-track span {
		font-size: 14px;
		font-family: var(--mono);
		font-weight: 600;
		color: var(--fg-dim);
		white-space: nowrap;
		display: flex;
		align-items: center;
		gap: 12px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		transition: color 0.2s;
	}

	.marquee-track span:hover {
		color: var(--fg);
	}

	.marquee-track span::before {
		content: '◆';
		color: var(--accent);
		font-size: 10px;
	}

	@keyframes marquee {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	@media (max-width: 900px) {
		.trust-bar {
			gap: 24px;
			padding: 24px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
		}
	}
</style>
