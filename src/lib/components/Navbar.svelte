<script lang="ts">
	let menuOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function handleNavClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (target.tagName === 'A') {
			closeMenu();
		}
	}

	import { onMount } from 'svelte';
	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="navbar" class:scrolled aria-label="Main navigation">
	<div class="navbar-inner">
		<a href="#top" class="navbar-logo">Galvei</a>

		<div class="navbar-center" class:open={menuOpen} onclick={handleNavClick}>
			<a href="#features" class="nav-link">Features</a>
			<a href="#how-it-works" class="nav-link">How It Works</a>
			<a href="#roadmap" class="nav-link">Roadmap</a>
			<a href="#faq" class="nav-link">FAQ</a>
		</div>

		<div class="navbar-right">
			<span class="status-badge">
				<span class="status-dot"></span>
				In Development
			</span>
			<a href="#waitlist" class="nav-cta">Join Waitlist</a>
		</div>

		<button
			class="hamburger"
			class:open={menuOpen}
			onclick={() => menuOpen = !menuOpen}
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 0 2rem;
		background: rgba(26, 23, 18, 0.35);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		transition: all 0.3s ease;
	}

	.navbar.scrolled {
		background: rgba(26, 23, 18, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(196, 114, 78, 0.06);
	}

	.navbar-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
	}

	.navbar-logo {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1.3rem;
		color: #c4724e;
		text-decoration: none;
		letter-spacing: 0.02em;
		flex-shrink: 0;
	}

	.navbar-center {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-link {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		font-weight: 400;
		color: rgba(232, 224, 212, 0.55);
		text-decoration: none;
		letter-spacing: 0.03em;
		transition: color 0.25s ease;
	}

	.nav-link:hover {
		color: rgba(232, 224, 212, 0.9);
	}

	.navbar-right {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		flex-shrink: 0;
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.6rem;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(232, 224, 212, 0.35);
	}

	.status-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #7a8a6e;
		animation: dot-pulse 2s ease-in-out infinite;
	}

	@keyframes dot-pulse {
		0%, 100% { box-shadow: 0 0 3px #7a8a6e; opacity: 0.8; }
		50% { box-shadow: 0 0 6px #7a8a6e; opacity: 1; }
	}

	.nav-cta {
		font-family: 'Inter', sans-serif;
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
		padding: 0.5rem 1.2rem;
		background: #c4724e;
		color: #1a1712;
		border-radius: 6px;
		transition: all 0.25s ease;
	}

	.nav-cta:hover {
		background: #d4845e;
		box-shadow: 0 0 12px rgba(196, 114, 78, 0.2);
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		padding: 4px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.hamburger span {
		display: block;
		width: 22px;
		height: 1.5px;
		background: rgba(232, 224, 212, 0.6);
		border-radius: 1px;
		transition: all 0.3s ease;
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg) translate(4.5px, 4.5px);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	.hamburger.open span:nth-child(3) {
		transform: rotate(-45deg) translate(4.5px, -4.5px);
	}

	@media (max-width: 768px) {
		.navbar-center {
			position: fixed;
			top: 60px;
			left: 0;
			right: 0;
			flex-direction: column;
			background: rgba(26, 23, 18, 0.95);
			backdrop-filter: blur(12px);
			-webkit-backdrop-filter: blur(12px);
			padding: 1.5rem 2rem;
			gap: 1.2rem;
			border-bottom: 1px solid rgba(196, 114, 78, 0.06);
			transform: translateY(-100%);
			opacity: 0;
			pointer-events: none;
			transition: all 0.3s ease;
		}

		.navbar-center.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		}

		.nav-link {
			font-size: 0.9rem;
		}

		.status-badge {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.nav-cta {
			display: none;
		}
	}

	/* --- Light mode --- */
	@media (prefers-color-scheme: light) {
		.navbar {
			background: rgba(245, 240, 232, 0.35);
		}
		.navbar.scrolled {
			background: rgba(245, 240, 232, 0.85);
			border-bottom-color: rgba(176, 90, 56, 0.08);
		}

		.navbar-logo { color: #993d1c; }
		.nav-link { color: rgba(44, 36, 24, 0.55); }
		.nav-link:hover { color: #2c2418; }
		.status-badge { color: rgba(44, 36, 24, 0.5); }
		.status-dot { background: #4a6038; }
		.nav-cta { background: #993d1c; color: #fff; }
		.nav-cta:hover { background: #b05a38; }
		.hamburger span { background: rgba(44, 36, 24, 0.6); }

		@media (max-width: 768px) {
			.navbar-center {
				background: rgba(245, 240, 232, 0.95);
				border-bottom-color: rgba(176, 90, 56, 0.08);
			}
		}
	}
</style>
