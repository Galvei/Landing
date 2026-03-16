<script lang="ts">
	import avatarImg from '$lib/assets/anime-style-character-space.jpg';
</script>

<!-- Made By Section -->
<div class="made-by reveal">
	<div class="made-by-avatar">
		<img src={avatarImg} alt="Jessie" />
	</div>
	<div class="made-by-content">
		<div class="made-by-label">Built by</div>
		<h2 class="made-by-name">
			<a href="https://jessimka.com">Jessie</a>
			<span class="pronouns">she/her</span>
		</h2>
		<p class="made-by-bio">20-year-old developer from Slovakia. Building the self-hosting tool I always wanted to exist.</p>
		<div class="made-by-stack">
			<span>C#</span><span>ASP.NET</span><span>Svelte</span><span>Python</span>
			<span>Linux</span><span>PostgreSQL</span><span>SQLite</span><span>macOS</span>
		</div>
		<div class="made-by-links">
			<a href="https://jessimka.com" class="made-by-link">Website</a>
			<a href="https://github.com/galvei" class="made-by-link">GitHub</a>
			<a href="https://discord.gg/galvei" class="made-by-link">Discord</a>
		</div>
	</div>
</div>

<!-- Footer -->
<footer>
	<div class="footer-top">
		<div>
			<div class="footer-brand">Galvei</div>
			<div class="footer-tagline">Self-hosting, simplified.</div>
		</div>
		<div class="footer-cols">
			<div class="footer-col">
				<h4>Product</h4>
				<a href="#features">Features</a>
				<a href="#how-it-works">How it Works</a>
				<a href="#roadmap">Roadmap</a>
				<a href="#faq">FAQ</a>
			</div>
			<div class="footer-col">
				<h4>Community</h4>
				<a href="https://discord.gg/galvei">Discord</a>
				<a href="https://github.com/galvei">GitHub</a>
			</div>
			<div class="footer-col">
				<h4>Legal</h4>
				<a href="#">Privacy</a>
				<a href="#">Terms</a>
				<a href="#">BSL 1.1</a>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<span>Made in Europe by <a href="https://jessimka.com">Jessie</a></span>
		<span>© 2026 Galvei</span>
	</div>
</footer>

<style>
	/* Made By */
	.made-by {
		padding: 100px 48px;
		border-top: 2px solid var(--border);
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 64px;
	}

	.made-by-avatar {
		width: 120px;
		height: 120px;
		border-radius: 24px;
		overflow: hidden;
		flex-shrink: 0;
		border: 3px solid var(--border);
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.made-by-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.made-by-avatar:hover {
		transform: rotate(-5deg) scale(1.05);
	}

	.made-by-label {
		font-family: var(--mono);
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--accent-dark);
		font-weight: 600;
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.made-by-label::before {
		content: '◆ ';
		color: var(--accent);
	}

	.made-by-name {
		font-family: var(--serif);
		font-size: clamp(28px, 3.5vw, 42px);
		font-weight: 400;
		letter-spacing: -0.03em;
		line-height: 1.15;
		margin-bottom: 12px;
	}

	.made-by-name a {
		color: var(--fg);
		transition: color 0.2s;
	}

	.made-by-name a:hover {
		color: var(--accent-dark);
	}

	.pronouns {
		font-family: var(--mono);
		font-size: 14px;
		color: var(--fg-dim);
		font-style: normal;
		vertical-align: middle;
		margin-left: 8px;
	}

	.made-by-bio {
		font-size: 16px;
		color: var(--fg-muted);
		line-height: 1.7;
		max-width: 520px;
		margin-bottom: 20px;
	}

	.made-by-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 20px;
	}

	.made-by-stack span {
		font-size: 12px;
		font-family: var(--mono);
		font-weight: 600;
		padding: 5px 14px;
		border: 2px solid var(--border);
		border-radius: 100px;
		color: var(--fg-muted);
		transition: all 0.25s;
		cursor: default;
	}

	.made-by-stack span:hover {
		border-color: var(--accent);
		color: var(--accent-dark);
		background: rgba(45, 212, 168, 0.05);
		transform: translateY(-2px);
	}

	.made-by-links {
		display: flex;
		gap: 12px;
	}

	.made-by-link {
		font-size: 13px;
		font-family: var(--mono);
		font-weight: 600;
		padding: 8px 20px;
		border: 2px solid var(--border);
		border-radius: 10px;
		color: var(--fg-muted);
		transition: all 0.25s;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.made-by-link:hover {
		border-color: var(--accent);
		color: var(--fg);
		background: rgba(45, 212, 168, 0.04);
		transform: translateY(-2px);
	}

	/* Footer */
	footer {
		padding: 64px 48px;
		border-top: 2px solid var(--border);
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-top {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 64px;
	}

	.footer-brand {
		font-weight: 900;
		font-size: 18px;
		letter-spacing: -0.06em;
		text-transform: uppercase;
	}

	.footer-tagline {
		font-size: 13px;
		color: var(--fg-dim);
		margin-top: 4px;
	}

	.footer-cols {
		display: flex;
		gap: 72px;
	}

	.footer-col h4 {
		font-size: 11px;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--fg-dim);
		margin-bottom: 16px;
		font-weight: 700;
	}

	.footer-col a {
		display: block;
		font-size: 14px;
		color: var(--fg-muted);
		margin-bottom: 10px;
		transition: color 0.2s;
		font-weight: 400;
	}

	.footer-col a:hover {
		color: var(--fg);
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: var(--fg-dim);
		padding-top: 32px;
		border-top: 2px solid var(--border);
	}

	.footer-bottom a {
		transition: color 0.2s;
	}

	.footer-bottom a:hover {
		color: var(--fg-muted);
	}

	@media (max-width: 900px) {
		.made-by {
			flex-direction: column;
			gap: 32px;
			text-align: center;
			padding: 60px 20px;
		}
		.made-by-bio { margin-left: auto; margin-right: auto; }
		.made-by-links { justify-content: center; }
		.made-by-stack { justify-content: center; }

		footer { padding: 48px 20px; }
		.footer-top { flex-direction: column; gap: 40px; }
		.footer-cols { flex-direction: column; gap: 32px; }
		.footer-bottom { flex-direction: column; gap: 8px; }
	}
</style>
