type RevealOptions = {
	threshold?: number;
	onchange: (visible: boolean, above: boolean) => void;
};

export function scrollReveal(node: HTMLElement, options: RevealOptions) {
	const { threshold = 0.15, onchange } = options;
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				onchange(true, false);
			} else if (entry.boundingClientRect.top < 0) {
				// Element is above viewport — keep it visible, no reverse animation
				onchange(true, false);
			} else {
				onchange(false, false);
			}
		},
		{ threshold }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
		}
	};
}
