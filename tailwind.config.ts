import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily :{
			'display': ['inter-var', 'sans-serif'],
			'body': ['Roboto', 'sans-serif']
		},
		extend: {
			colors: {
				'font-bg': '#FFFFFF',
				'font-grey': '#050505',
				'font-black': '#121212',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
			animation: {
				cursor: 'cursor .6s linear infinite alternate',
				type: 'type 1.8s ease-out .8s 1 normal both',
				'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
			},
		}
	},
	plugins: [],
};
export default config;
