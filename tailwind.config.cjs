/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				theme: {
					blue: '#449fe0',
					green: '#5dc93b',
					magenta: {
						DEFAULT: '#d23085',
						50: '#ffe5f4'
					},
					yellow: '#f19938',
					purple: '#270937'
				}
			}
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular']
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
