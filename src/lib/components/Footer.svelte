<script lang="ts">
	import Modal from './Modal.svelte';
	let privacyOpen = $state(false);
	let termsOpen = $state(false);
	let bslOpen = $state(false);
</script>

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
				<a href="https://discord.gg/8xFqs4fqUq">Discord</a>
			</div>
			<div class="footer-col">
				<h4>Legal</h4>
				<button class="link-btn" onclick={() => privacyOpen = true}>Privacy</button>
				<button class="link-btn" onclick={() => termsOpen = true}>Terms</button>
				<button class="link-btn" onclick={() => bslOpen = true}>BSL 1.1</button>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<span>Made in Europe by Galvei</span>
		<span>© 2026 Galvei</span>
	</div>
</footer>

<Modal bind:open={privacyOpen} title="Privacy Policy">
	{#snippet children()}
		<p class="note">Full policy coming before launch.</p>
		<p>Here's what we do with your data right now:</p>
		<div class="items">
			<div class="item">
				<span class="label">What we collect</span>
				<span>Your email address when you join the waitlist. Nothing else.</span>
			</div>
			<div class="item">
				<span class="label">Why</span>
				<span>To notify you about early access and product updates.</span>
			</div>
			<div class="item">
				<span class="label">Who sees it</span>
				<span>Nobody. We don't sell or share your data with third parties.</span>
			</div>
			<div class="item">
				<span class="label">Storage</span>
				<span>Stored securely on Supabase infrastructure in the EU.</span>
			</div>
			<div class="item">
				<span class="label">Unsubscribe</span>
				<span>Reply to any email and we'll remove you immediately.</span>
			</div>
		</div>
	{/snippet}
</Modal>

<Modal bind:open={termsOpen} title="Terms of Service">
	{#snippet children()}
		<p class="note">Full terms coming before launch.</p>
		<p>By joining the waitlist you agree to:</p>
		<div class="items">
			<div class="item">
				<span class="label">Emails</span>
				<span>Receive occasional updates about Galvei development and early access.</span>
			</div>
			<div class="item">
				<span class="label">Liability</span>
				<span>Galvei is pre-launch software. No warranties or guarantees apply at this stage.</span>
			</div>
		</div>
	{/snippet}
</Modal>

<Modal bind:open={bslOpen} title="Business Source License 1.1">
	{#snippet children()}
		<p class="notice">The final license has not been decided yet. BSL 1.1 is a placeholder — the licensing model may change before launch.</p>
		<p>Currently listed under <strong class="hl">BSL 1.1</strong> — source-available with a time-delayed open-source conversion.</p>
		<div class="items" style="margin-top: 20px;">
			<div class="item">
				<span class="label">You can</span>
				<span>View, fork, and modify the source for personal and non-production use.</span>
			</div>
			<div class="item">
				<span class="label">You cannot</span>
				<span>Run Galvei in production, offer it as a hosted service, or use it commercially without a separate agreement.</span>
			</div>
			<div class="item">
				<span class="label">Change date</span>
				<span>Four years after each release, the code converts automatically to Apache 2.0.</span>
			</div>
		</div>
		<div class="bsl-block">
			<p><span class="dim">Licensor:</span> Galvei</p>
			<p><span class="dim">Licensed Work:</span> Galvei</p>
			<p><span class="dim">Change License:</span> Apache License 2.0</p>
			<p><span class="dim">Change Date:</span> Four years from each version's first public release</p>
		</div>
	{/snippet}
</Modal>

<style>
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

	.footer-col a,
	.link-btn {
		display: block;
		font-size: 14px;
		color: var(--fg-muted);
		margin-bottom: 10px;
		transition: color 0.2s;
		font-weight: 400;
	}

	.link-btn {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		font-family: inherit;
		text-align: left;
	}

	.footer-col a:hover,
	.link-btn:hover { color: var(--fg); }

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: var(--fg-dim);
		padding-top: 32px;
		border-top: 2px solid var(--border);
	}

	@media (max-width: 900px) {
		footer { padding: 48px 20px; }
		.footer-top { flex-direction: column; gap: 40px; }
		.footer-cols { flex-direction: column; gap: 32px; }
		.footer-bottom { flex-direction: column; gap: 8px; }
	}

	/* Modal content */
	:global(.modal-body .notice) {
		display: flex;
		gap: 10px;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		padding: 12px 14px;
		font-size: 13px;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 20px;
	}

	:global(.modal-body .notice::before) {
		content: '!';
		font-family: var(--mono);
		font-size: 11px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.3);
		background: rgba(255, 255, 255, 0.08);
		border-radius: 50%;
		width: 18px;
		height: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}

	:global(.modal-body .note) {
		display: inline-block;
		font-family: var(--mono);
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--accent);
		margin-bottom: 16px;
	}

	:global(.modal-body p) { margin-bottom: 16px; }
	:global(.modal-body p:last-child) { margin-bottom: 0; }

	:global(.modal-body strong) { color: rgba(255,255,255,0.75); font-weight: 600; }
	:global(.modal-body .hl) { color: var(--accent); }

	:global(.modal-body .items) {
		display: flex;
		flex-direction: column;
		gap: 1px;
		border: 1px solid rgba(255,255,255,0.06);
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 20px;
	}

	:global(.modal-body .item) {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 12px;
		padding: 12px 14px;
		background: rgba(255,255,255,0.02);
		font-size: 13px;
		line-height: 1.6;
	}

	:global(.modal-body .item + .item) {
		border-top: 1px solid rgba(255,255,255,0.05);
	}

	:global(.modal-body .label) {
		font-family: var(--mono);
		font-size: 11px;
		color: rgba(255,255,255,0.3);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding-top: 2px;
	}

	:global(.modal-body .bsl-block) {
		background: rgba(255,255,255,0.02);
		border: 1px solid rgba(255,255,255,0.06);
		border-radius: 10px;
		padding: 14px;
		font-family: var(--mono);
		font-size: 12px;
		line-height: 2;
		color: rgba(255,255,255,0.35);
	}

	:global(.modal-body .bsl-block p) { margin: 0; }
	:global(.modal-body .dim) { color: rgba(255,255,255,0.2); }
</style>
