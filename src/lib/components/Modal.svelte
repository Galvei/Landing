<script lang="ts">
	let { open = $bindable(false), title, children } = $props();

	function close() { open = false; }
	function onKeydown(e: KeyboardEvent) { if (e.key === 'Escape') close(); }
	function onBackdrop(e: MouseEvent) { if (e.target === e.currentTarget) close(); }
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div class="backdrop" onclick={onBackdrop}>
		<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
			<div class="modal-header">
				<span class="modal-title" id="modal-title">{title}</span>
				<button class="close-btn" onclick={close} aria-label="Close">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
						<path d="M18 6L6 18M6 6l12 12"/>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				{@render children()}
			</div>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		z-index: 1000;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		animation: fadeIn 0.2s ease;
	}

	@media (min-width: 600px) {
		.backdrop { align-items: center; padding: 24px; }
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.modal {
		background: var(--bg-dark);
		border: 1px solid rgba(255, 255, 255, 0.07);
		width: 100%;
		max-width: 560px;
		max-height: 88dvh;
		display: flex;
		flex-direction: column;
		border-radius: 16px 16px 0 0;
		animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		overflow: hidden;
	}

	@media (min-width: 600px) {
		.modal {
			border-radius: 16px;
			animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		}
	}

	@keyframes slideUp {
		from { transform: translateY(100%); opacity: 0; }
		to { transform: translateY(0); opacity: 1; }
	}

	@keyframes scaleIn {
		from { opacity: 0; transform: translateY(8px) scale(0.97); }
		to { opacity: 1; transform: translateY(0) scale(1); }
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 18px 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		flex-shrink: 0;
	}

	.modal-title {
		font-family: var(--sans);
		font-size: 14px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		letter-spacing: -0.01em;
	}

	.close-btn {
		background: none;
		border: none;
		color: rgba(255, 255, 255, 0.3);
		cursor: pointer;
		padding: 6px;
		display: flex;
		align-items: center;
		border-radius: 6px;
		transition: color 0.15s, background 0.15s;
		flex-shrink: 0;
		margin: -6px;
	}

	.close-btn:hover {
		color: rgba(255, 255, 255, 0.8);
		background: rgba(255, 255, 255, 0.06);
	}

	.modal-body {
		padding: 24px 20px;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		font-family: var(--sans);
		font-size: 14px;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.45);
	}
</style>
