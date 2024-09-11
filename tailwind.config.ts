import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "10.125rem",
				},
                
			},
            
			screens: {
				"2xl": "1920px",
			},
            
			colors: {
				darktext: "#021526",
				lighttext: "#2D3648",
				greytext: "#021526B2",
				orange: "#F93B1D",
			},
		},
	},
	plugins: [],
};
export default config;
