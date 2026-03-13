<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import ProblemSolution from '$lib/components/ProblemSolution.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Waitlist from '$lib/components/Waitlist.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FinalCTA from '$lib/components/FinalCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<div class="page">
	<Navbar />
	<Hero />
	<SocialProof />
	<ProblemSolution />
	<div class="section-alt">
		<Features />
	</div>
	<HowItWorks />
	<Roadmap />
	<Waitlist />
	<FAQ />
	<FinalCTA />
	<Footer />
</div>

<style>
	.page {
		position: relative;
	}

	.section-alt {
		background: #1a1712;
		border-top: 2px solid rgba(240, 234, 214, 0.12);
		border-bottom: 2px solid rgba(240, 234, 214, 0.12);
	}
</style>
