import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="container mx-auto py-9 ">
			<Link href="/">
				<Image
					src="/images/logo.svg"
					width={150}
					height={24}
					alt="logo"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
