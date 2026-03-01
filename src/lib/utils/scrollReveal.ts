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
			} else {
				onchange(false, entry.boundingClientRect.top < 0);
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
