<script lang="ts">
	import { onMount } from 'svelte';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	onMount(() => {
		// close mobile menu on resize
		const onResize = () => { if (window.innerWidth > 900) menuOpen = false; };
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});
</script>

<nav aria-label="Main navigation">
	<a href="#top" class="nav-logo">Galvei</a>

	<ul class="nav-links" class:open={menuOpen}>
		<li><a href="#features" onclick={closeMenu}>Features</a></li>
		<li><a href="#how-it-works" onclick={closeMenu}>How it works</a></li>
		<li><a href="#roadmap" onclick={closeMenu}>Roadmap</a></li>
		<li><a href="#faq" onclick={closeMenu}>FAQ</a></li>
	</ul>

	<a href="#waitlist" class="nav-cta">Join Waitlist</a>

	<button
		class="hamburger"
		class:open={menuOpen}
		onclick={() => (menuOpen = !menuOpen)}
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 16px 48px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		backdrop-filter: blur(20px) saturate(1.3);
		-webkit-backdrop-filter: blur(20px) saturate(1.3);
		background: rgba(250, 250, 248, 0.85);
		border-bottom: 1px solid var(--border);
	}

	.nav-logo {
		font-family: var(--sans);
		font-weight: 900;
		font-size: 20px;
		letter-spacing: -0.06em;
		text-transform: uppercase;
		color: var(--fg);
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: 32px;
		list-style: none;
	}

	.nav-links a {
		font-size: 14px;
		color: var(--fg-muted);
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--fg);
	}

	.nav-cta {
		font-size: 13px;
		font-weight: 700;
		padding: 10px 28px;
		background: var(--fg);
		color: var(--bg);
		border-radius: 8px;
		transition: all 0.25s;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.nav-cta:hover {
		background: var(--accent-dark);
		color: #fff;
		transform: translateY(-1px);
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
		height: 2px;
		background: var(--fg);
		transition: all 0.3s ease;
	}

	.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
	.hamburger.open span:nth-child(2) { opacity: 0; }
	.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

	@media (max-width: 900px) {
		nav {
			padding: 12px 20px;
		}

		.nav-links {
			position: fixed;
			top: 53px;
			left: 0;
			right: 0;
			flex-direction: column;
			background: rgba(250, 250, 248, 0.97);
			backdrop-filter: blur(20px);
			padding: 24px 20px;
			gap: 16px;
			border-bottom: 1px solid var(--border);
			transform: translateY(-110%);
			opacity: 0;
			pointer-events: none;
			transition: all 0.3s ease;
		}

		.nav-links.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		}

		.hamburger {
			display: flex;
		}

		.nav-cta {
			display: none;
		}
	}
</style>
