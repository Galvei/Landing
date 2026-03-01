<div class="ambient" aria-hidden="true">
	<div class="orb orb-1"></div>
	<div class="orb orb-2"></div>
	<div class="orb orb-3"></div>
</div>

<style>
	.ambient {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.035;
		animation: drift 25s ease-in-out infinite alternate;
	}

	.orb-1 {
		width: 600px;
		height: 600px;
		background: #c4724e;
		top: -10%;
		right: -5%;
		animation-duration: 30s;
	}

	.orb-2 {
		width: 500px;
		height: 500px;
		background: #c4724e;
		bottom: 10%;
		left: -8%;
		animation-duration: 22s;
		animation-delay: -8s;
	}

	.orb-3 {
		width: 400px;
		height: 400px;
		background: #7a8a6e;
		top: 40%;
		right: 15%;
		opacity: 0.02;
		animation-duration: 28s;
		animation-delay: -15s;
	}

	@keyframes drift {
		0% { transform: translate(0, 0) scale(1); }
		33% { transform: translate(30px, -20px) scale(1.05); }
		66% { transform: translate(-20px, 15px) scale(0.95); }
		100% { transform: translate(10px, -10px) scale(1.02); }
	}

	@media (prefers-color-scheme: light) {
		.orb-1 { background: #993d1c; opacity: 0.04; }
		.orb-2 { background: #b05a38; opacity: 0.035; }
		.orb-3 { background: #4a6038; opacity: 0.025; }
	}

	@media (prefers-reduced-motion: reduce) {
		.orb { animation: none; }
	}
</style>
