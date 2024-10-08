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
            boxShadow: {
				'custom': '5px 5px 4px 0px #00000014',
			},
			colors: {
				darktext: "#021526",
				lighttext: "#2D3648",
				greytext: "#021526B2",
				orange: "#F93B1D",
				colorerror: "#F93B1D",
				colorsuccess: "#45A849",
				secondarygrey: "#808A93"
			},
		},
	},
	plugins: [],
};
export default config;
