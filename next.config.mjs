/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.real-estate-manager.redberryinternship.ge",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
