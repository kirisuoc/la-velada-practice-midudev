import animations from '@midudev/tailwind-animations'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#333',
				'secondary': '#ddd',
				'twitch': 'var(--color-twitch)'
			}
		},
	},
	darkMode: 'class',
	plugins: [animations, function ({ addVariant }) {
		addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
	}],
}