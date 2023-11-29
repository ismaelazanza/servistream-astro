/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		

		extend: {
			fontFamily: {
				'girol': ['Girol', 'sans-serif']
			  },

			  animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			  },
			  
			  keyframes: {
				'infinite-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			  },

			  colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'principal': '#22b573',
				'principalDegra': '#159159',
				'oscuro': '#0e141b',
			  },

		},
	},
	plugins: [],
}
