/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: process.env.NODE_ENV ? 'jit' : undefined,
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	important: true,
	theme: {
		screens: {
			xs: '400px',
			sm: '500px',
			md: '700px',
			lg: '900px',
			xl: '1100px',
			'2xl': '1300px',
			'3xl': '1500px',
			'4xl': '1700px',
			'5xl': '1900px',
			'6xl': '2100px'
		},
		extend: {
			colors: {
				primary: '#1e2022',
				secondary: '#181a1b',
				//
				'primary-dark': '#e4e4e7',
				'secondary-dark': '#d4d4d8',
				//
				'primary-bg': '#f3f4f6',
				'secondary-bg': '',
				//
				'primary-bg-dark': '#1e2022',
				'secondary-bg-dark': '#181a1b'
			}
		}
	},

	plugins: [require('prettier-plugin-tailwindcss')]
}
