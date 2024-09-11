import React from "react";
import Filter from "./components/custom/Filter";
import EstatesSection from "./sections/EstatesSection";

const page = () => {
	return (
		<main>
			<Filter />
			<EstatesSection />
		</main>
	);
};

export default page;
