<script lang="ts">
	let menuOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMenu() {
		menuOpen = false;
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

		<div class="navbar-center" class:open={menuOpen}>
			<a href="#features" class="nav-link" onclick={closeMenu}>Features</a>
			<a href="#how-it-works" class="nav-link" onclick={closeMenu}>How It Works</a>
			<a href="#roadmap" class="nav-link" onclick={closeMenu}>Roadmap</a>
			<a href="#faq" class="nav-link" onclick={closeMenu}>FAQ</a>
		</div>

		<div class="navbar-right">
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
		background: #111008;
		border-bottom: 2px solid rgba(240, 234, 214, 0.75);
		transition: border-color 0.3s ease;
	}

	.navbar.scrolled {
		border-bottom-color: rgba(240, 234, 214, 0.75);
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
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.5rem;
		font-weight: 900;
		color: #F0EAD6;
		text-decoration: none;
		letter-spacing: 0.01em;
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
		font-weight: 500;
		color: rgba(240, 234, 214, 0.55);
		text-decoration: none;
		letter-spacing: 0.03em;
		transition: color 0.25s ease;
	}

	.nav-link:hover {
		color: #F0EAD6;
		text-decoration: underline;
	}

	.navbar-right {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		flex-shrink: 0;
	}

	.nav-cta {
		font-family: 'Inter', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
		padding: 0.5rem 1.2rem;
		background: #FF6B35;
		color: #111008;
		border-radius: 0;
		border: 2px solid #FF6B35;
		box-shadow: 3px 3px 0 #FFD600;
		transition: box-shadow 0.2s ease, transform 0.2s ease;
	}

	.nav-cta:hover {
		box-shadow: 1px 1px 0 #FFD600;
		transform: translate(2px, 2px);
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
		height: 3px;
		background: rgba(240, 234, 214, 0.8);
		transition: all 0.3s ease;
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg) translate(5.5px, 5.5px);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	.hamburger.open span:nth-child(3) {
		transform: rotate(-45deg) translate(5.5px, -5.5px);
	}

	@media (max-width: 768px) {
		.navbar-center {
			position: fixed;
			top: 60px;
			left: 0;
			right: 0;
			flex-direction: column;
			background: #111008;
			padding: 1.5rem 2rem;
			gap: 1.2rem;
			border-bottom: 2px solid rgba(240, 234, 214, 0.75);
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

		.hamburger {
			display: flex;
		}

		.nav-cta {
			display: none;
		}
	}
</style>
