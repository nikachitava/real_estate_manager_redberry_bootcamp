import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className="container mx-auto py-9 ">
			<Image src="/images/logo.svg" width={150} height={24} alt="logo" />
		</div>
	);
};

export default Navbar;
