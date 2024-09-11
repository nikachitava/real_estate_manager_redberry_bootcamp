import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/custom/Navbar";

const firaGo = localFont({
	src: [
		{
			path: "./fonts/FiraGO-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/FiraGO-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/FiraGO-Bold.woff",
			weight: "700",
			style: "normal",
		},
	],
});

export const metadata: Metadata = {
	title: "Real Estate Manager",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${firaGo.className} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
