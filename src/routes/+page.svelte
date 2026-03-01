<script lang="ts">
	import { onMount } from 'svelte';
	import LetterMatrix from '$lib/components/LetterMatrix.svelte';
	import PaperGrain from '$lib/components/PaperGrain.svelte';
	import AmbientGlow from '$lib/components/AmbientGlow.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import SectionDivider from '$lib/components/SectionDivider.svelte';
	import ProblemSolution from '$lib/components/ProblemSolution.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import DemoPreview from '$lib/components/DemoPreview.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Waitlist from '$lib/components/Waitlist.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FinalCTA from '$lib/components/FinalCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let pageEl: HTMLElement;

	onMount(() => {
		let ticking = false;

		function updateParallax() {
			const y = window.scrollY;
			pageEl.style.setProperty('--scroll-y', String(y));
			ticking = false;
		}

		function onScroll() {
			if (!ticking) {
				requestAnimationFrame(updateParallax);
				ticking = true;
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		updateParallax();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<title>Galvei — Self-hosting, simplified</title>
	<meta name="description" content="Galvei turns any Linux machine into a personal cloud. Deploy apps, manage everything from a dashboard, no terminal needed." />
	<meta property="og:title" content="Galvei — Self-hosting, simplified" />
	<meta property="og:description" content="One install, one dashboard, everything just works. Your personal cloud, running on your own hardware." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Galvei — Self-hosting, simplified" />
	<meta name="twitter:description" content="Deploy apps on your own hardware. No terminal needed." />
</svelte:head>

<div class="page" bind:this={pageEl}>
	<LetterMatrix />
	<PaperGrain />
	<AmbientGlow />
	<Navbar />
	<Hero />
	<SocialProof />
	<SectionDivider />
	<ProblemSolution />
	<SectionDivider />
	<Features />
	<SectionDivider />
	<HowItWorks />
	<DemoPreview />
	<SectionDivider />
	<Roadmap />
	<Waitlist />
	<SectionDivider />
	<FAQ />
	<FinalCTA />
	<Footer />
</div>

<style>
	.page {
		--scroll-y: 0;
	}
</style>
