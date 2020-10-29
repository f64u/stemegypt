const anchorate = require('anchorate').anchorate;

exports.onRouteUpdate = () => {
	anchorate({
		scroller: function(element) {
			if (!element) return false;
			element.scrollIntoView({ behavior: 'smooth' });
			return true;
		}
	});
};

exports.onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (!(`IntersectionObserver` in window)) {
		require(`intersection-observer`);
		console.log(`# IntersectionObserver is polyfilled!`);
	}
};
