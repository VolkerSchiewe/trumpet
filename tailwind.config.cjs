/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				theme: {
					blue: '#00a0e6',
					green: '#00cd00',
					magenta: '#e60087',
					yellow: '#ff9500'
				}
			}
		}
	},
	plugins: []
};
