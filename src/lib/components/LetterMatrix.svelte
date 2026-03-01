<script lang="ts">
	import { onMount } from 'svelte';

	// --- Configuration -----------------------------------------------------------
	const CELL_SIZE = 33;
	const FONT_SIZE = 16;
	const FONT = `${FONT_SIZE}px 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', monospace`;
	const CURSOR_RADIUS = 180;
	const PARALLAX_STRENGTH = 14;
	const BASE_ALPHA_DARK = 0.06;
	const BASE_ALPHA_LIGHT = 0.04;
	const HIGHLIGHT_ALPHA = 0.7;

	const ACTIVE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

	// Cycle speed for characters inside the cursor circle
	const CYCLE_FAST_MIN = 60;
	const CYCLE_FAST_MAX = 250;

	// --- Types -------------------------------------------------------------------
	interface Letter {
		restChar: string; // static binary char shown outside cursor
		activeChar: string; // cycling char shown inside cursor
		baseX: number;
		baseY: number;
		hue: number;
		nextCycleAt: number;
		wasInside: boolean; // was inside cursor last frame
	}

	// --- State -------------------------------------------------------------------
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let letters: Letter[] = [];
	let width = 0;
	let height = 0;
	let dpr = 1;
	let mouseX = -9999;
	let mouseY = -9999;
	let animId: number;
	let scrollY = 0;
	let isLight = false;

	// Smooth mouse tracking (lerp)
	let smoothX = -9999;
	let smoothY = -9999;
	const LERP_FACTOR = 0.15;

	// Scroll-based dimming
	const FADE_HEIGHT = 100; // px of gradual transition
	const DIM_ALPHA = 1.0; // fully opaque  matrix invisible under content

	// Edge dimming — soft vignette at top/bottom so matrix doesn't clash with nav/footer
	const TOP_FADE = 90; // px from top
	const TOP_DIM = 0.75; // opacity at very top
	const BOTTOM_FADE = 140; // px from bottom
	const BOTTOM_DIM = 0.6; // opacity at very bottom

	// Center dead zone — elliptical area where characters are not drawn (hero text area)
	const DEAD_ZONE_RX = 0.42; // horizontal radius as fraction of viewport width
	const DEAD_ZONE_RY = 0.38; // vertical radius as fraction of viewport height
	const DEAD_ZONE_FEATHER = 0.15; // smooth transition zone (fraction of radius)

	// --- Helpers -----------------------------------------------------------------

	function randomBinary(): string {
		return Math.random() < 0.5 ? '0' : '1';
	}

	function randomActiveChar(): string {
		return ACTIVE_CHARS[Math.floor(Math.random() * ACTIVE_CHARS.length)];
	}

	function generateLetters() {
		const cols = Math.ceil(width / CELL_SIZE) + 1;
		const rows = Math.ceil(height / CELL_SIZE) + 1;
		const result: Letter[] = [];

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				result.push({
					restChar: randomBinary(),
					activeChar: randomActiveChar(),
					baseX: col * CELL_SIZE + CELL_SIZE / 2,
					baseY: row * CELL_SIZE + CELL_SIZE / 2,
					hue: 18 + Math.random() * 25,
					nextCycleAt: 0,
					wasInside: false,
				});
			}
		}

		letters = result;
	}

	function handleResize() {
		dpr = window.devicePixelRatio || 1;
		width = window.innerWidth;
		height = window.innerHeight;

		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		generateLetters();
	}

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function handleMouseLeave() {
		mouseX = -9999;
		mouseY = -9999;
	}

	function handleScroll() {
		scrollY = window.scrollY;
	}

	// --- Render loop -------------------------------------------------------------

	function render() {
		const now = performance.now();

		// Smooth cursor interpolation
		smoothX += (mouseX - smoothX) * LERP_FACTOR;
		smoothY += (mouseY - smoothY) * LERP_FACTOR;

		ctx.clearRect(0, 0, width, height);

		// --- Theme-aware values ---
		const baseAlpha = isLight ? BASE_ALPHA_LIGHT : BASE_ALPHA_DARK;
		const bgR = isLight ? 245 : 26;
		const bgG = isLight ? 240 : 23;
		const bgB = isLight ? 232 : 18;

		// --- Cursor glow halo ---
		if (smoothX > -5000) {
			const glowRadius = CURSOR_RADIUS * 1.4;
			const glow = ctx.createRadialGradient(smoothX, smoothY, 0, smoothX, smoothY, glowRadius);
			if (isLight) {
				glow.addColorStop(0, 'rgba(176, 90, 56, 0.08)');
				glow.addColorStop(0.4, 'rgba(176, 90, 56, 0.03)');
			} else {
				glow.addColorStop(0, 'rgba(196, 114, 78, 0.06)');
				glow.addColorStop(0.4, 'rgba(196, 114, 78, 0.02)');
			}
			glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
			ctx.fillStyle = glow;
			ctx.fillRect(smoothX - glowRadius, smoothY - glowRadius, glowRadius * 2, glowRadius * 2);
		}

		ctx.font = FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		const radiusSq = CURSOR_RADIUS * CURSOR_RADIUS;

		// Dead zone ellipse (center of viewport) — only when hero is visible
		const cx = width * 0.5;
		const cy = height * 0.5;
		const rx = width * DEAD_ZONE_RX;
		const ry = height * DEAD_ZONE_RY;

		for (let i = 0; i < letters.length; i++) {
			const l = letters[i];

			const dx = l.baseX - smoothX;
			const dy = l.baseY - smoothY;
			const distSq = dx * dx + dy * dy;
			const isInside = distSq < radiusSq;

			let charToDraw: string;
			let alpha: number;
			let drawX = l.baseX;
			let drawY = l.baseY;
			let saturation: number;
			let lightness: number;

			if (isInside) {
				const dist = Math.sqrt(distSq);
				const t = dist / CURSOR_RADIUS;
				const intensity = 1 - t * t;

				// Cycle active character rapidly
				if (now >= l.nextCycleAt) {
					l.activeChar = randomActiveChar();
					l.hue = 18 + Math.random() * 25;
					// Closer to center = faster cycling
					const speed = 1 - t;
					l.nextCycleAt = now + CYCLE_FAST_MAX - speed * (CYCLE_FAST_MAX - CYCLE_FAST_MIN);
				}

				charToDraw = l.activeChar;
				alpha = baseAlpha + (HIGHLIGHT_ALPHA - baseAlpha) * intensity;
				if (isLight) {
					saturation = 40 + 25 * intensity;
					lightness = 30 + 20 * intensity;
				} else {
					saturation = 35 + 30 * intensity;
					lightness = 35 + 25 * intensity;
				}

				// Parallax push
				if (dist > 1) {
					const pushStrength = PARALLAX_STRENGTH * intensity;
					drawX += (dx / dist) * pushStrength;
					drawY += (dy / dist) * pushStrength;
				}

				l.wasInside = true;
			} else {
				// Outside cursor: show static binary
				// If it just left the circle, assign a fresh binary char
				if (l.wasInside) {
					l.restChar = randomBinary();
					l.wasInside = false;
				}

				charToDraw = l.restChar;
				alpha = baseAlpha;
				if (isLight) {
					saturation = 25;
					lightness = 40;
				} else {
					saturation = 20;
					lightness = 30;
				}
			}

			// Dead zone: fade out characters near center ellipse (hero text area)
			// Only apply when hero is in view (scrollY near 0)
			if (scrollY < height) {
				const heroVisibility = 1 - scrollY / height; // 1 at top, 0 when scrolled past
				const ex = (drawX - cx) / rx;
				const ey = (drawY - cy) / ry;
				const ellipseDist = ex * ex + ey * ey; // <1 = inside, >1 = outside
				if (ellipseDist < 1 + DEAD_ZONE_FEATHER) {
					const fade = Math.max(0, Math.min(1,
						(ellipseDist - 1) / DEAD_ZONE_FEATHER
					));
					alpha *= fade + (1 - fade) * (1 - heroVisibility);
				}
			}

			if (alpha < 0.005) continue; // skip invisible chars

			ctx.fillStyle = `hsla(${l.hue}, ${saturation}%, ${lightness}%, ${alpha})`;
			ctx.fillText(charToDraw, drawX, drawY);
		}

		// --- Edge dimming: soft fade at top and bottom of viewport ---
		const topGrad = ctx.createLinearGradient(0, 0, 0, TOP_FADE);
		topGrad.addColorStop(0, `rgba(${bgR}, ${bgG}, ${bgB}, ${TOP_DIM})`);
		topGrad.addColorStop(1, `rgba(${bgR}, ${bgG}, ${bgB}, 0)`);
		ctx.fillStyle = topGrad;
		ctx.fillRect(0, 0, width, TOP_FADE);

		const bottomGrad = ctx.createLinearGradient(0, height - BOTTOM_FADE, 0, height);
		bottomGrad.addColorStop(0, `rgba(${bgR}, ${bgG}, ${bgB}, 0)`);
		bottomGrad.addColorStop(1, `rgba(${bgR}, ${bgG}, ${bgB}, ${BOTTOM_DIM})`);
		ctx.fillStyle = bottomGrad;
		ctx.fillRect(0, height - BOTTOM_FADE, width, BOTTOM_FADE);

		// --- Scroll-based dimming: fade matrix under content ---
		if (scrollY > 0) {
			// Content starts at ~100vh from page top; in viewport coords that's (height - scrollY)
			const contentStart = Math.max(0, height - scrollY);
			const fadeTop = Math.max(0, contentStart - FADE_HEIGHT);
			const fadeBottom = Math.min(height, contentStart + FADE_HEIGHT);

			if (fadeTop < height) {
				// Gradient fade zone
				const grad = ctx.createLinearGradient(0, fadeTop, 0, fadeBottom);
				grad.addColorStop(0, `rgba(${bgR}, ${bgG}, ${bgB}, 0)`);
				grad.addColorStop(1, `rgba(${bgR}, ${bgG}, ${bgB}, ${DIM_ALPHA})`);
				ctx.fillStyle = grad;
				ctx.fillRect(0, fadeTop, width, fadeBottom - fadeTop);

				// Solid dim below the fade
				if (fadeBottom < height) {
					ctx.fillStyle = `rgba(${bgR}, ${bgG}, ${bgB}, ${DIM_ALPHA})`;
					ctx.fillRect(0, fadeBottom, width, height - fadeBottom);
				}
			}
		}

		animId = requestAnimationFrame(render);
	}

	// --- Lifecycle ---------------------------------------------------------------

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		handleResize();

		// Detect color scheme
		const mq = window.matchMedia('(prefers-color-scheme: light)');
		isLight = mq.matches;
		const handleScheme = (e: MediaQueryListEvent) => { isLight = e.matches; };
		mq.addEventListener('change', handleScheme);

		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('scroll', handleScroll, { passive: true });
		document.addEventListener('mouseleave', handleMouseLeave);

		animId = requestAnimationFrame(render);

		return () => {
			cancelAnimationFrame(animId);
			mq.removeEventListener('change', handleScheme);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mouseleave', handleMouseLeave);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="letter-matrix"
	aria-hidden="true"
></canvas>

<style>
	.letter-matrix {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		display: block;
	}
</style>
